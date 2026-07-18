import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "site", "data.json");
const checkOnly = process.argv.includes("--check");

const formats = {
  zh: {
    descriptionPrefix: "> **考察与技巧：** ",
    problemPattern:
      /^- \[ \] (?<slot>[AB])：(?<number>\d+)\. (?<title>.+?)（\[中国站\]\((?<cnUrl>https:\/\/[^)]+)\)｜\[国际站\]\((?<globalUrl>https:\/\/[^)]+)\)）(?:——(?<note>.*))?$/,
  },
  en: {
    descriptionPrefix: "> **Pattern & Use Cases:** ",
    problemPattern:
      /^- \[ \] (?<slot>[AB]): (?<number>\d+)\. (?<title>.+?) \(\[LeetCode CN\]\((?<cnUrl>https:\/\/[^)]+)\) \| \[LeetCode\]\((?<globalUrl>https:\/\/[^)]+)\)\)(?: — (?<note>.*))?$/,
  },
};

function parseReadme(source, language) {
  const format = formats[language];
  const lines = source.split(/\r?\n/);
  const phases = [];
  const patterns = [];
  let currentSection = "";
  let currentPhase = null;
  let currentPattern = null;

  for (const line of lines) {
    const sectionMatch = line.match(/^# ([^#].*)$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1];
      currentPhase = null;
      currentPattern = null;
      continue;
    }

    const patternMatch = line.match(/^## (\d+)\. (.+)$/);
    if (patternMatch) {
      if (!currentPhase) {
        currentPhase = {
          title: currentSection,
          patternIds: [],
        };
        phases.push(currentPhase);
      }

      currentPattern = {
        id: Number(patternMatch[1]),
        title: patternMatch[2],
        description: "",
        problems: [],
      };
      currentPhase.patternIds.push(currentPattern.id);
      patterns.push(currentPattern);
      continue;
    }

    if (!currentPattern) {
      continue;
    }

    if (line.startsWith(format.descriptionPrefix)) {
      currentPattern.description = line.slice(format.descriptionPrefix.length);
      continue;
    }

    const problemMatch = line.match(format.problemPattern);
    if (problemMatch?.groups) {
      currentPattern.problems.push({
        slot: problemMatch.groups.slot,
        number: Number(problemMatch.groups.number),
        title: problemMatch.groups.title,
        note: problemMatch.groups.note ?? "",
        cnUrl: problemMatch.groups.cnUrl,
        globalUrl: problemMatch.groups.globalUrl,
      });
    }
  }

  return { phases, patterns };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function validateParsedData(parsed, language) {
  assert(parsed.patterns.length === 96, `${language}: expected 96 patterns`);
  assert(parsed.phases.length === 9, `${language}: expected 9 phases`);

  parsed.patterns.forEach((pattern, index) => {
    const expectedId = index + 1;
    assert(pattern.id === expectedId, `${language}: expected pattern ${expectedId}`);
    assert(pattern.title, `${language}: pattern ${pattern.id} has no title`);
    assert(pattern.description, `${language}: pattern ${pattern.id} has no description`);
    assert(pattern.problems.length === 2, `${language}: pattern ${pattern.id} must have two problems`);
    assert(
      pattern.problems[0].slot === "A" && pattern.problems[1].slot === "B",
      `${language}: pattern ${pattern.id} must contain A then B`,
    );
  });
}

function mergeData(chinese, english) {
  const phaseIds = chinese.phases.map((_, index) =>
    index === chinese.phases.length - 1 ? "advanced" : `phase-${index + 1}`,
  );

  const phases = chinese.phases.map((phase, index) => {
    const englishPhase = english.phases[index];
    assert(
      phase.patternIds.join(",") === englishPhase.patternIds.join(","),
      `phase ${index + 1}: pattern assignments differ between languages`,
    );

    return {
      id: phaseIds[index],
      order: index + 1,
      title: {
        zh: phase.title,
        en: englishPhase.title,
      },
      patternIds: phase.patternIds,
    };
  });

  const phaseByPattern = new Map(
    phases.flatMap((phase) => phase.patternIds.map((patternId) => [patternId, phase.id])),
  );

  const patterns = chinese.patterns.map((pattern, index) => {
    const englishPattern = english.patterns[index];
    assert(pattern.id === englishPattern.id, `pattern ${pattern.id}: IDs differ between languages`);

    const problems = pattern.problems.map((problem, problemIndex) => {
      const englishProblem = englishPattern.problems[problemIndex];
      assert(problem.slot === englishProblem.slot, `pattern ${pattern.id}: slots differ`);
      assert(problem.number === englishProblem.number, `pattern ${pattern.id}: problem numbers differ`);
      assert(problem.cnUrl === englishProblem.cnUrl, `pattern ${pattern.id}: CN URLs differ`);
      assert(problem.globalUrl === englishProblem.globalUrl, `pattern ${pattern.id}: global URLs differ`);

      return {
        id: `${pattern.id}-${problem.slot.toLowerCase()}`,
        slot: problem.slot,
        number: problem.number,
        title: {
          zh: problem.title,
          en: englishProblem.title,
        },
        note: {
          zh: problem.note,
          en: englishProblem.note,
        },
        cnUrl: problem.cnUrl,
        globalUrl: problem.globalUrl,
      };
    });

    return {
      id: pattern.id,
      phaseId: phaseByPattern.get(pattern.id),
      title: {
        zh: pattern.title,
        en: englishPattern.title,
      },
      description: {
        zh: pattern.description,
        en: englishPattern.description,
      },
      problems,
    };
  });

  return {
    version: 1,
    totals: {
      phases: phases.length,
      patterns: patterns.length,
      problems: patterns.reduce((total, pattern) => total + pattern.problems.length, 0),
    },
    phases,
    patterns,
  };
}

const [chineseSource, englishSource] = await Promise.all([
  readFile(resolve(root, "README.md"), "utf8"),
  readFile(resolve(root, "README_EN.md"), "utf8"),
]);

const chinese = parseReadme(chineseSource, "zh");
const english = parseReadme(englishSource, "en");
validateParsedData(chinese, "zh");
validateParsedData(english, "en");

const data = mergeData(chinese, english);
const serialized = `${JSON.stringify(data, null, 2)}\n`;

if (checkOnly) {
  const existing = await readFile(outputPath, "utf8");
  assert(existing === serialized, "site/data.json is stale; run npm run build");
} else {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, serialized, "utf8");
}

console.log(
  `${checkOnly ? "Validated" : "Generated"} ${data.totals.patterns} patterns and ${data.totals.problems} problems across ${data.totals.phases} phases.`,
);