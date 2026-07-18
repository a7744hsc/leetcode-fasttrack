const APP_ID = "leetcode-fasttrack";
const STORAGE_KEY = `${APP_ID}:progress:v1`;
const PREFERENCE_KEY = `${APP_ID}:preferences:v1`;

const translations = {
  zh: {
    documentTitle: "学习进度 · LeetCode FastTrack",
    brandSubtitle: "最小完备题单",
    savedLocally: "本机保存",
    sessionOnly: "仅当前页面",
    roadmap: "学习路线",
    phases: "阶段",
    pageTitle: "学习进度",
    loadingSummary: "正在加载题单…",
    continueLearning: "继续学习",
    allComplete: "已全部完成",
    overallProgress: "总体进度",
    completedProblems: "完成题目",
    masteredPatterns: "掌握模式",
    completedToday: "今日完成",
    searchPlaceholder: "搜索模式或题目",
    all: "全部",
    todo: "待完成",
    mastered: "已掌握",
    import: "导入",
    export: "导出",
    reset: "重置",
    allPhases: "全部阶段",
    patternList: "模式题单",
    noResults: "没有匹配的模式",
    clearFilters: "清除筛选",
    resetTitle: "重置全部进度？",
    resetMessage: "所有已完成记录将从当前浏览器中删除。",
    cancel: "取消",
    confirmReset: "确认重置",
    globalLink: "国际",
    skipToList: "跳到题单",
    phaseNavLabel: "学习阶段",
    progressPanelLabel: "总体学习进度",
    filterLabel: "题单筛选",
    statusLabel: "完成状态",
    importTitle: "导入进度",
    exportTitle: "导出进度",
    resetButtonTitle: "重置进度",
    retry: "重新加载",
    loadError: "题单加载失败",
    summary: ({ completed, total, mastered, patterns }) =>
      `已完成 ${completed} / ${total} 道题，掌握 ${mastered} / ${patterns} 个模式`,
    resultsCount: (count) => `${count} 个模式`,
    phaseProgressLabel: ({ title, completed, total }) => `${title}，完成 ${completed} / ${total}`,
    problemCheckboxLabel: ({ slot, number, title }) => `标记 ${slot} 题 ${number}. ${title} 的完成状态`,
    problemLinkLabel: ({ site, number, title }) => `在${site}打开 ${number}. ${title}`,
    importSuccess: (count) => `已导入 ${count} 条完成记录`,
    importInvalid: "无法识别这个进度文件",
    exportSuccess: "进度文件已导出",
    resetSuccess: "学习进度已重置",
    storageUnavailable: "浏览器阻止了本地保存，进度仅在当前页面有效",
  },
  en: {
    documentTitle: "Study Progress · LeetCode FastTrack",
    brandSubtitle: "Minimal complete list",
    savedLocally: "Saved locally",
    sessionOnly: "Session only",
    roadmap: "Roadmap",
    phases: "Phases",
    pageTitle: "Study progress",
    loadingSummary: "Loading the problem list…",
    continueLearning: "Continue",
    allComplete: "All complete",
    overallProgress: "Overall progress",
    completedProblems: "Problems complete",
    masteredPatterns: "Patterns mastered",
    completedToday: "Completed today",
    searchPlaceholder: "Search patterns or problems",
    all: "All",
    todo: "To do",
    mastered: "Mastered",
    import: "Import",
    export: "Export",
    reset: "Reset",
    allPhases: "All phases",
    patternList: "Pattern list",
    noResults: "No matching patterns",
    clearFilters: "Clear filters",
    resetTitle: "Reset all progress?",
    resetMessage: "All completion records will be removed from this browser.",
    cancel: "Cancel",
    confirmReset: "Reset progress",
    globalLink: "Global",
    skipToList: "Skip to problem list",
    phaseNavLabel: "Learning phases",
    progressPanelLabel: "Overall study progress",
    filterLabel: "Problem-list filters",
    statusLabel: "Completion status",
    importTitle: "Import progress",
    exportTitle: "Export progress",
    resetButtonTitle: "Reset progress",
    retry: "Reload",
    loadError: "Unable to load the problem list",
    summary: ({ completed, total, mastered, patterns }) =>
      `${completed} of ${total} problems complete · ${mastered} of ${patterns} patterns mastered`,
    resultsCount: (count) => `${count} ${count === 1 ? "pattern" : "patterns"}`,
    phaseProgressLabel: ({ title, completed, total }) => `${title}, ${completed} of ${total} complete`,
    problemCheckboxLabel: ({ slot, number, title }) =>
      `Mark problem ${slot}, ${number}. ${title}, as complete or incomplete`,
    problemLinkLabel: ({ site, number, title }) => `Open ${number}. ${title} on ${site}`,
    importSuccess: (count) => `Imported ${count} completion ${count === 1 ? "record" : "records"}`,
    importInvalid: "This progress file could not be recognized",
    exportSuccess: "Progress file exported",
    resetSuccess: "Study progress reset",
    storageUnavailable: "Local storage is blocked; progress will last only for this page session",
  },
};

const elements = {
  phaseNav: document.querySelector("#phase-nav"),
  phaseCompletion: document.querySelector("#phase-completion"),
  progressSummary: document.querySelector("#progress-summary"),
  progressPercent: document.querySelector("#progress-percent"),
  progressTrack: document.querySelector("#overall-progress-track"),
  progressBar: document.querySelector("#overall-progress-bar"),
  completedProblems: document.querySelector("#completed-problems"),
  masteredPatterns: document.querySelector("#mastered-patterns"),
  completedToday: document.querySelector("#completed-today"),
  continueButton: document.querySelector("#continue-button"),
  searchInput: document.querySelector("#search-input"),
  resultsKicker: document.querySelector("#results-kicker"),
  resultsCount: document.querySelector("#results-count"),
  patternList: document.querySelector("#pattern-list"),
  loadingState: document.querySelector("#loading-state"),
  emptyState: document.querySelector("#empty-state"),
  emptyStateTitle: document.querySelector("#empty-state h3"),
  clearFiltersButton: document.querySelector("#clear-filters-button"),
  importButton: document.querySelector("#import-button"),
  exportButton: document.querySelector("#export-button"),
  resetButton: document.querySelector("#reset-button"),
  importFile: document.querySelector("#import-file"),
  resetDialog: document.querySelector("#reset-dialog"),
  confirmResetButton: document.querySelector("#confirm-reset-button"),
  toast: document.querySelector("#toast"),
  saveStatus: document.querySelector(".save-status span"),
  phaseTemplate: document.querySelector("#phase-button-template"),
  patternTemplate: document.querySelector("#pattern-template"),
  problemTemplate: document.querySelector("#problem-template"),
};

let data = null;
let knownProblemIds = new Set();
let progress = { version: 1, completed: {}, updatedAt: null };
let language = getInitialLanguage();
let activePhase = "all";
let statusFilter = "all";
let searchQuery = "";
let storageAvailable = true;
let loadFailed = false;
let toastTimer = null;

function translate(key, values) {
  const translation = translations[language][key];
  return typeof translation === "function" ? translation(values) : translation;
}

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    storageAvailable = false;
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    storageAvailable = false;
    return false;
  }
}

function getInitialLanguage() {
  try {
    const preferences = JSON.parse(localStorage.getItem(PREFERENCE_KEY) ?? "null");
    if (preferences?.language === "zh" || preferences?.language === "en") {
      return preferences.language;
    }
  } catch {
    // Fall back to the browser language when preferences are unavailable or invalid.
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function saveLanguagePreference() {
  writeStorage(PREFERENCE_KEY, JSON.stringify({ language }));
}

function normalizeCompleted(source) {
  if (Array.isArray(source)) {
    const timestamp = new Date().toISOString();
    return Object.fromEntries(source.map((problemId) => [problemId, timestamp]));
  }

  if (!source || typeof source !== "object") {
    return {};
  }

  return Object.fromEntries(
    Object.entries(source).map(([problemId, timestamp]) => [
      problemId,
      typeof timestamp === "string" && !Number.isNaN(Date.parse(timestamp))
        ? timestamp
        : new Date().toISOString(),
    ]),
  );
}

function loadProgress() {
  const serialized = readStorage(STORAGE_KEY);
  if (!serialized) {
    return { version: 1, completed: {}, updatedAt: null };
  }

  try {
    const stored = JSON.parse(serialized);
    return {
      version: 1,
      completed: normalizeCompleted(stored.completed),
      updatedAt: typeof stored.updatedAt === "string" ? stored.updatedAt : null,
    };
  } catch {
    return { version: 1, completed: {}, updatedAt: null };
  }
}

function sanitizeProgress() {
  progress.completed = Object.fromEntries(
    Object.entries(progress.completed).filter(([problemId]) => knownProblemIds.has(problemId)),
  );
}

function saveProgress() {
  progress.updatedAt = new Date().toISOString();
  const saved = writeStorage(STORAGE_KEY, JSON.stringify(progress));
  updateSaveStatus();
  if (!saved) {
    showToast(translate("storageUnavailable"));
  }
}

function updateSaveStatus() {
  elements.saveStatus.textContent = translate(storageAvailable ? "savedLocally" : "sessionOnly");
}

function applyTranslations() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = translate("documentTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (typeof translations[language][key] === "string") {
      element.textContent = translate(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  document.querySelector("#phase-nav").setAttribute("aria-label", translate("phaseNavLabel"));
  document.querySelector(".progress-panel").setAttribute("aria-label", translate("progressPanelLabel"));
  document.querySelector(".toolbar").setAttribute("aria-label", translate("filterLabel"));
  document.querySelector(".status-filter").setAttribute("aria-label", translate("statusLabel"));
  elements.importButton.title = translate("importTitle");
  elements.exportButton.title = translate("exportTitle");
  elements.resetButton.title = translate("resetButtonTitle");
  updateSaveStatus();

  if (!data) {
    elements.progressSummary.textContent = translate("loadingSummary");
  }
}

function renderIcons() {
  if (globalThis.lucide) {
    globalThis.lucide.createIcons({
      attrs: {
        "aria-hidden": "true",
      },
    });
  }
}

function appendFormattedText(container, text) {
  const fragments = text.split(/(`[^`]+`|\$[^$]+\$)/g);
  const content = document.createDocumentFragment();

  fragments.forEach((fragment) => {
    if (fragment.startsWith("`") && fragment.endsWith("`")) {
      const code = document.createElement("code");
      code.textContent = fragment.slice(1, -1);
      content.append(code);
    } else if (fragment.startsWith("$") && fragment.endsWith("$")) {
      const math = document.createElement("span");
      math.className = "inline-math";
      math.textContent = fragment.slice(1, -1);
      content.append(math);
    } else if (fragment) {
      content.append(document.createTextNode(fragment));
    }
  });

  container.replaceChildren(content);
}

function getProblemIds(patterns = data.patterns) {
  return patterns.flatMap((pattern) => pattern.problems.map((problem) => problem.id));
}

function getCompletedCount(problemIds = knownProblemIds) {
  return [...problemIds].filter((problemId) => progress.completed[problemId]).length;
}

function isPatternMastered(pattern) {
  return pattern.problems.every((problem) => progress.completed[problem.id]);
}

function isCompletedToday(timestamp) {
  if (!timestamp || Number.isNaN(Date.parse(timestamp))) {
    return false;
  }
  return new Date(timestamp).toDateString() === new Date().toDateString();
}

function getPhasePatterns(phaseId) {
  return data.patterns.filter((pattern) => pattern.phaseId === phaseId);
}

function renderStats() {
  const completed = getCompletedCount();
  const mastered = data.patterns.filter(isPatternMastered).length;
  const completedToday = Object.values(progress.completed).filter(isCompletedToday).length;
  const percent = Math.round((completed / data.totals.problems) * 100);
  const completedPhases = data.phases.filter((phase) =>
    getPhasePatterns(phase.id).every(isPatternMastered),
  ).length;

  elements.progressSummary.textContent = translate("summary", {
    completed,
    total: data.totals.problems,
    mastered,
    patterns: data.totals.patterns,
  });
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(completed));
  elements.completedProblems.textContent = `${completed} / ${data.totals.problems}`;
  elements.masteredPatterns.textContent = `${mastered} / ${data.totals.patterns}`;
  elements.completedToday.textContent = String(completedToday);
  elements.phaseCompletion.textContent = `${completedPhases} / ${data.totals.phases}`;
  elements.continueButton.disabled = completed === data.totals.problems;
  elements.continueButton.querySelector("span").textContent = translate(
    completed === data.totals.problems ? "allComplete" : "continueLearning",
  );
}

function createPhaseButton({ id, title, label, completed, total }) {
  const button = elements.phaseTemplate.content.firstElementChild.cloneNode(true);
  const phaseNumber = button.querySelector(".phase-number");
  const phaseTitle = button.querySelector(".phase-title");
  const phaseProgress = button.querySelector(".phase-progress");

  phaseNumber.textContent = label;
  phaseTitle.textContent = title;
  phaseProgress.textContent = `${completed}/${total}`;
  button.dataset.phase = id;
  button.setAttribute("aria-current", String(activePhase === id));
  button.setAttribute(
    "aria-label",
    translate("phaseProgressLabel", { title, completed, total }),
  );
  button.addEventListener("click", () => {
    activePhase = id;
    renderPhaseNav();
    renderPatterns();
    document.querySelector(".results").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  return button;
}

function renderPhaseNav() {
  const fragment = document.createDocumentFragment();
  fragment.append(
    createPhaseButton({
      id: "all",
      title: translate("allPhases"),
      label: "ALL",
      completed: getCompletedCount(),
      total: data.totals.problems,
    }),
  );

  data.phases.forEach((phase, index) => {
    const patterns = getPhasePatterns(phase.id);
    const problemIds = getProblemIds(patterns);
    fragment.append(
      createPhaseButton({
        id: phase.id,
        title: phase.title[language],
        label: phase.id === "advanced" ? "ADV" : `P${index + 1}`,
        completed: getCompletedCount(problemIds),
        total: problemIds.length,
      }),
    );
  });

  elements.phaseNav.replaceChildren(fragment);
}

function matchesSearch(pattern) {
  if (!searchQuery) {
    return true;
  }

  const searchableValues = [
    String(pattern.id),
    pattern.title.zh,
    pattern.title.en,
    pattern.description.zh,
    pattern.description.en,
    ...pattern.problems.flatMap((problem) => [
      String(problem.number),
      problem.title.zh,
      problem.title.en,
      problem.note.zh,
      problem.note.en,
    ]),
  ];

  return searchableValues.some((value) => value.toLocaleLowerCase().includes(searchQuery));
}

function getFilteredPatterns() {
  return data.patterns.filter((pattern) => {
    if (activePhase !== "all" && pattern.phaseId !== activePhase) {
      return false;
    }

    const mastered = isPatternMastered(pattern);
    if (statusFilter === "todo" && mastered) {
      return false;
    }
    if (statusFilter === "done" && !mastered) {
      return false;
    }

    return matchesSearch(pattern);
  });
}

function updateProblemCompletion(problemId, complete) {
  if (complete) {
    progress.completed[problemId] = new Date().toISOString();
  } else {
    delete progress.completed[problemId];
  }

  saveProgress();
  renderAll();
  requestAnimationFrame(() => {
    document.querySelector(`input[data-problem-id="${problemId}"]`)?.focus();
  });
}

function createProblemRow(problem) {
  const row = elements.problemTemplate.content.firstElementChild.cloneNode(true);
  const checkbox = row.querySelector("input");
  const checkboxLabel = row.querySelector(".problem-checkbox-label");
  const title = row.querySelector(".problem-title");
  const note = row.querySelector(".problem-note");
  const cnLink = row.querySelector(".cn-link");
  const globalLink = row.querySelector(".global-link");
  const localizedTitle = problem.title[language];
  const localizedNote = problem.note[language];
  const checkboxText = translate("problemCheckboxLabel", {
    slot: problem.slot,
    number: problem.number,
    title: localizedTitle,
  });

  row.classList.toggle("is-complete", Boolean(progress.completed[problem.id]));
  checkbox.checked = Boolean(progress.completed[problem.id]);
  checkbox.dataset.problemId = problem.id;
  checkbox.setAttribute("aria-label", checkboxText);
  checkboxLabel.textContent = checkboxText;
  checkbox.addEventListener("change", () => updateProblemCompletion(problem.id, checkbox.checked));
  row.querySelector(".problem-slot").textContent = problem.slot;
  title.textContent = `${problem.number}. ${localizedTitle}`;
  note.textContent = localizedNote;

  cnLink.href = problem.cnUrl;
  cnLink.setAttribute(
    "aria-label",
    translate("problemLinkLabel", {
      site: "LeetCode CN",
      number: problem.number,
      title: localizedTitle,
    }),
  );
  globalLink.href = problem.globalUrl;
  globalLink.querySelector("span").textContent = translate("globalLink");
  globalLink.setAttribute(
    "aria-label",
    translate("problemLinkLabel", {
      site: "LeetCode",
      number: problem.number,
      title: localizedTitle,
    }),
  );

  return row;
}

function createPatternCard(pattern) {
  const card = elements.patternTemplate.content.firstElementChild.cloneNode(true);
  const completed = pattern.problems.filter((problem) => progress.completed[problem.id]).length;
  const mastered = completed === pattern.problems.length;

  card.id = `pattern-${pattern.id}`;
  card.dataset.patternId = String(pattern.id);
  card.classList.toggle("is-mastered", mastered);
  card.querySelector(".pattern-index").textContent = String(pattern.id).padStart(2, "0");
  card.querySelector(".pattern-title").textContent = pattern.title[language];
  appendFormattedText(card.querySelector(".pattern-description"), pattern.description[language]);
  card.querySelector(".pattern-status").textContent = `${completed} / ${pattern.problems.length}`;

  const problemList = card.querySelector(".problem-list");
  pattern.problems.forEach((problem) => problemList.append(createProblemRow(problem)));

  return card;
}

function renderPatterns() {
  const patterns = getFilteredPatterns();
  const fragment = document.createDocumentFragment();
  patterns.forEach((pattern) => fragment.append(createPatternCard(pattern)));
  elements.patternList.replaceChildren(fragment);

  const activePhaseData = data.phases.find((phase) => phase.id === activePhase);
  elements.resultsKicker.textContent = activePhaseData
    ? activePhaseData.title[language]
    : translate("allPhases");
  elements.resultsCount.textContent = translate("resultsCount", patterns.length);
  elements.emptyState.hidden = patterns.length > 0;
  elements.patternList.hidden = patterns.length === 0;
  elements.emptyStateTitle.textContent = translate("noResults");
  elements.clearFiltersButton.textContent = translate("clearFilters");
  renderIcons();
}

function updateFilterControls() {
  document.querySelectorAll("[data-status]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.status === statusFilter));
  });
  elements.searchInput.value = searchQuery;
}

function renderAll() {
  if (!data) {
    return;
  }
  renderStats();
  renderPhaseNav();
  renderPatterns();
  updateFilterControls();
}

function findNextProblem() {
  const scopedPatterns =
    activePhase === "all" ? data.patterns : data.patterns.filter((pattern) => pattern.phaseId === activePhase);
  const scopedProblem = scopedPatterns
    .flatMap((pattern) => pattern.problems.map((problem) => ({ pattern, problem })))
    .find(({ problem }) => !progress.completed[problem.id]);

  if (scopedProblem) {
    return scopedProblem;
  }

  return data.patterns
    .flatMap((pattern) => pattern.problems.map((problem) => ({ pattern, problem })))
    .find(({ problem }) => !progress.completed[problem.id]);
}

function continueLearning() {
  const target = findNextProblem();
  if (!target) {
    return;
  }

  if (activePhase !== "all" && target.pattern.phaseId !== activePhase) {
    activePhase = target.pattern.phaseId;
  }
  statusFilter = "all";
  searchQuery = "";
  renderAll();

  requestAnimationFrame(() => {
    const card = document.querySelector(`#pattern-${target.pattern.id}`);
    const checkbox = document.querySelector(`input[data-problem-id="${target.problem.id}"]`);
    card?.classList.add("is-target");
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
    checkbox?.focus({ preventScroll: true });
    setTimeout(() => card?.classList.remove("is-target"), 1800);
  });
}

function clearFilters() {
  activePhase = "all";
  statusFilter = "all";
  searchQuery = "";
  renderAll();
}

function exportProgress() {
  const payload = {
    app: APP_ID,
    version: 1,
    exportedAt: new Date().toISOString(),
    completed: progress.completed,
  };
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `leetcode-fasttrack-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(translate("exportSuccess"));
}

async function importProgress(file) {
  try {
    const payload = JSON.parse(await file.text());
    const hasCompletedCollection =
      Array.isArray(payload?.completed) ||
      (payload?.completed !== null && typeof payload?.completed === "object");
    if (payload?.app !== APP_ID || payload?.version !== 1 || !hasCompletedCollection) {
      throw new Error("Invalid progress payload");
    }

    const imported = normalizeCompleted(payload.completed);
    const recognizedEntries = Object.entries(imported).filter(([problemId]) =>
      knownProblemIds.has(problemId),
    );
    if (Object.keys(imported).length > 0 && recognizedEntries.length === 0) {
      throw new Error("No recognized problem IDs");
    }

    progress.completed = {
      ...progress.completed,
      ...Object.fromEntries(recognizedEntries),
    };
    saveProgress();
    renderAll();
    showToast(translate("importSuccess", recognizedEntries.length));
  } catch {
    showToast(translate("importInvalid"));
  } finally {
    elements.importFile.value = "";
  }
}

function resetProgress() {
  progress.completed = {};
  saveProgress();
  renderAll();
  showToast(translate("resetSuccess"));
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = setTimeout(() => {
    elements.toast.hidden = true;
  }, 3200);
}

function showLoadError(error) {
  console.error(error);
  loadFailed = true;
  elements.loadingState.hidden = true;
  elements.patternList.hidden = true;
  elements.emptyState.hidden = false;
  elements.emptyStateTitle.textContent = translate("loadError");
  elements.clearFiltersButton.textContent = translate("retry");
  elements.resultsCount.textContent = "—";
  renderIcons();
}

function bindEvents() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      saveLanguagePreference();
      applyTranslations();
      renderAll();
    });
  });

  document.querySelectorAll("[data-status]").forEach((button) => {
    button.addEventListener("click", () => {
      statusFilter = button.dataset.status;
      updateFilterControls();
      renderPatterns();
    });
  });

  elements.searchInput.addEventListener("input", () => {
    searchQuery = elements.searchInput.value.trim().toLocaleLowerCase();
    renderPatterns();
  });
  elements.continueButton.addEventListener("click", continueLearning);
  elements.clearFiltersButton.addEventListener("click", () => {
    if (loadFailed) {
      location.reload();
    } else {
      clearFilters();
    }
  });
  elements.importButton.addEventListener("click", () => elements.importFile.click());
  elements.importFile.addEventListener("change", () => {
    const [file] = elements.importFile.files;
    if (file) {
      importProgress(file);
    }
  });
  elements.exportButton.addEventListener("click", exportProgress);
  elements.resetButton.addEventListener("click", () => elements.resetDialog.showModal());
  elements.confirmResetButton.addEventListener("click", resetProgress);

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY && data) {
      progress = loadProgress();
      sanitizeProgress();
      renderAll();
    }
  });
  window.addEventListener("load", renderIcons, { once: true });
}

async function initialize() {
  applyTranslations();
  bindEvents();
  renderIcons();

  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`Unable to load data.json: ${response.status}`);
    }

    data = await response.json();
    if (data?.totals?.patterns !== 96 || data?.totals?.problems !== 192) {
      throw new Error("Unexpected problem-list data");
    }

    knownProblemIds = new Set(getProblemIds());
    progress = loadProgress();
    sanitizeProgress();
    elements.loadingState.hidden = true;
    renderAll();
  } catch (error) {
    showLoadError(error);
  }
}

initialize();