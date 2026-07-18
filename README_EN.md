[简体中文](README.md) | **English**

# Minimal Complete List of Mainstream LeetCode Algorithms

## Source

This list draws on [EndlessCheng's "How to Practice Problems Scientifically?"](https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/). It was generated with GPT 5.6 Sol in combination with existing problem lists, then curated and streamlined from a broader list of mainstream algorithms.

- The main track focuses on easy and medium problems whose metadata has been verified on both LeetCode CN and LeetCode and that are free to practice on both sites. Only a small number of canonical, template-oriented official hard problems are retained.

## Intended Audience

- Learners with limited time who want an intensive algorithm review before interviews, written tests, or contests, but find it difficult to choose exercises from longer reference lists.
- Learners who already have some algorithm fundamentals and want a fast review centered on common problem-solving patterns.

> This list is ordered by the popularity of **independent problem-solving patterns** in interviews, written tests, and LeetCode contests. Each topic or pattern includes two problems: **A is the template/standard problem, and B is a slightly harder integrative problem**.

## How to Use This List

- I recommend reading the "Pattern & Use Cases" section for each topic before attempting the problems, with the goal of understanding the underlying pattern. Some ideas are especially clever, so there is no need to remain stuck for too long; consult a solution when appropriate. Afterward, summarize the template and the conditions under which it applies.

Contributions of missing patterns and corrections are welcome.

---

# Phase One: Highest-Frequency Fundamentals

## 1. Hash Table

> **Pattern & Use Cases:** Use a hash table to reduce repeated lookups to amortized $O(1)$. Use it for frequently checking whether an object has appeared, counting occurrences, finding objects that satisfy a relationship, or grouping objects by shared characteristics.

- [ ] A: 1. Two Sum ([LeetCode CN](https://leetcode.cn/problems/two-sum/) | [LeetCode](https://leetcode.com/problems/two-sum/)) — enumerate the right element and maintain left elements in a hash table
- [ ] B: 49. Group Anagrams ([LeetCode CN](https://leetcode.cn/problems/group-anagrams/) | [LeetCode](https://leetcode.com/problems/group-anagrams/)) — design a hash key

## 2. Sorting and Custom Comparators

> **Pattern & Use Cases:** Sorting removes interference from the original order, brings related elements together, or gives subsequent processing a monotonic structure; when the default ordering does not express the goal, define a comparator from the problem statement. Use it when the original order is irrelevant and you need to group or deduplicate elements, process intervals, compare adjacent elements, apply two pointers or greedy methods, or order elements by their combined result.

- [ ] A: 56. Merge Intervals ([LeetCode CN](https://leetcode.cn/problems/merge-intervals/) | [LeetCode](https://leetcode.com/problems/merge-intervals/))
- [ ] B: 179. Largest Number ([LeetCode CN](https://leetcode.cn/problems/largest-number/) | [LeetCode](https://leetcode.com/problems/largest-number/)) — custom sorting rule

## 3. Single Pass and Prefix Extrema

> **Pattern & Use Cases:** Enumerate the current position as the right endpoint while maintaining the best value among elements already visited on the left, reducing the enumeration of all pairs from $O(n^2)$ to $O(n)$; usually compute the answer before updating the optimum so the left endpoint remains strictly before the current position. Use it when an answer consists of positions satisfying $i<j$ and the objective can be split into a left contribution plus a right contribution.

- [ ] A: 121. Best Time to Buy and Sell Stock ([LeetCode CN](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/))
- [ ] B: 1014. Best Sightseeing Pair ([LeetCode CN](https://leetcode.cn/problems/best-sightseeing-pair/) | [LeetCode](https://leetcode.com/problems/best-sightseeing-pair/))

The core idea is to enumerate the right side while maintaining the left side.

## 4. Opposing Two Pointers

> **Pattern & Use Cases:** Place pointers at both ends of a sequence and move one side according to the relationship between the current result and the target, eliminating a batch of impossible candidates at each step. Use it for pair matching in sorted arrays, searching for combinations after fixing some elements, and problems with a monotonic elimination property.

- [ ] A: 167. Two Sum II - Input Array Is Sorted ([LeetCode CN](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/) | [LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/))
- [ ] B: 15. 3Sum ([LeetCode CN](https://leetcode.cn/problems/3sum/) | [LeetCode](https://leetcode.com/problems/3sum/))

## 5. Same-Direction Two Pointers and In-Place Modification

> **Pattern & Use Cases:** Let one pointer scan unprocessed elements while another maintains the boundary of the processed region, updating the array in place through overwrites or swaps. Use it for deleting, filtering, deduplicating, moving, or partitioning elements when $O(1)$ extra space is required.

- [ ] A: 283. Move Zeroes ([LeetCode CN](https://leetcode.cn/problems/move-zeroes/) | [LeetCode](https://leetcode.com/problems/move-zeroes/))
- [ ] B: 75. Sort Colors ([LeetCode CN](https://leetcode.cn/problems/sort-colors/) | [LeetCode](https://leetcode.com/problems/sort-colors/)) — three pointers

## 6. Fixed-Size Sliding Window

> **Pattern & Use Cases:** Maintain a contiguous window of fixed length `k`; as a new element enters, remove the old element and update window statistics incrementally so each element enters and leaves only once. Use it for sums, counts, frequency matching, and extrema over fixed-length subarrays or substrings.

- [ ] A: 1456. Maximum Number of Vowels in a Substring of Given Length ([LeetCode CN](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) | [LeetCode](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/))
- [ ] B: 438. Find All Anagrams in a String ([LeetCode CN](https://leetcode.cn/problems/find-all-anagrams-in-a-string/) | [LeetCode](https://leetcode.com/problems/find-all-anagrams-in-a-string/))

## 7. Variable-Size Sliding Window

> **Pattern & Use Cases:** Let the right pointer expand the window; whenever the window becomes invalid, move the left pointer until validity is restored while maintaining counts or state inside the window. Use it when validity changes monotonically as the window expands and the goal is the longest or largest contiguous interval.

- [ ] A: 3. Longest Substring Without Repeating Characters ([LeetCode CN](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/))
- [ ] B: 904. Fruit Into Baskets ([LeetCode CN](https://leetcode.cn/problems/fruit-into-baskets/) | [LeetCode](https://leetcode.com/problems/fruit-into-baskets/))

Master the rhythm: expand with the right pointer and restore validity with the left pointer.

## 8. Sliding Window for the Shortest Interval

> **Pattern & Use Cases:** First expand the right pointer until the window satisfies the condition, then shrink the left boundary as much as possible while preserving validity and update the answer during contraction. Use it when the window condition is monotonic and the goal is the shortest satisfying interval or a minimum-cost contiguous interval.

- [ ] A: 209. Minimum Size Subarray Sum ([LeetCode CN](https://leetcode.cn/problems/minimum-size-subarray-sum/) | [LeetCode](https://leetcode.com/problems/minimum-size-subarray-sum/))
- [ ] B: 1234. Replace the Substring for Balanced String ([LeetCode CN](https://leetcode.cn/problems/replace-the-substring-for-balanced-string/) | [LeetCode](https://leetcode.com/problems/replace-the-substring-for-balanced-string/))

## 9. One-Dimensional Prefix Sums

> **Pattern & Use Cases:** Precompute cumulative information from the start through each position so an interval result is the difference of two prefixes; for operations that cannot be inverted, maintain and combine separate prefix and suffix aggregates. Use it for repeated range queries on static arrays or for computing aggregate results on both sides of every position.

- [ ] A: 303. Range Sum Query - Immutable ([LeetCode CN](https://leetcode.cn/problems/range-sum-query-immutable/) | [LeetCode](https://leetcode.com/problems/range-sum-query-immutable/))
- [ ] B: 238. Product of Array Except Self ([LeetCode CN](https://leetcode.cn/problems/product-of-array-except-self/) | [LeetCode](https://leetcode.com/problems/product-of-array-except-self/)) — prefix-suffix decomposition

## 10. Prefix Sums + Hash Table

> **Pattern & Use Cases:** Rewrite a contiguous-interval condition as a relationship between two prefix states, then use a hash table to record the frequency or earliest position of previous prefix states. Use it to count or find contiguous subarrays satisfying a target sum, balanced counts, or similar conditions.

- [ ] A: 525. Contiguous Array ([LeetCode CN](https://leetcode.cn/problems/contiguous-array/) | [LeetCode](https://leetcode.com/problems/contiguous-array/))
- [ ] B: 560. Subarray Sum Equals K ([LeetCode CN](https://leetcode.cn/problems/subarray-sum-equals-k/) | [LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/))

Turn a subarray condition into a relationship between two prefixes.

## 11. Two-Dimensional Prefix Sums

> **Pattern & Use Cases:** Precompute the aggregate for every top-left prefix rectangle, then use inclusion-exclusion to calculate any subrectangle from four prefix values. Use it for repeated rectangle sums, counts, or other additive range queries on a static matrix.

- [ ] A: 304. Range Sum Query 2D - Immutable ([LeetCode CN](https://leetcode.cn/problems/range-sum-query-2d-immutable/) | [LeetCode](https://leetcode.com/problems/range-sum-query-2d-immutable/))
- [ ] B: 1314. Matrix Block Sum ([LeetCode CN](https://leetcode.cn/problems/matrix-block-sum/) | [LeetCode](https://leetcode.com/problems/matrix-block-sum/))

## 12. One-Dimensional Difference Array

> **Pattern & Use Cases:** For a range update, record changes only at the start and immediately after the end, then recover every position with one prefix accumulation after all operations are complete. Use it for many offline range additions or subtractions, coverage counts, and final-state calculations.

- [ ] A: 1109. Corporate Flight Bookings ([LeetCode CN](https://leetcode.cn/problems/corporate-flight-bookings/) | [LeetCode](https://leetcode.com/problems/corporate-flight-bookings/))
- [ ] B: 1094. Car Pooling ([LeetCode CN](https://leetcode.cn/problems/car-pooling/) | [LeetCode](https://leetcode.com/problems/car-pooling/))

Focus on adding at the interval start, subtracting immediately after the interval end, and finally taking prefix sums to recover the array.

## 13. Interval Sorting and Merging

> **Pattern & Use Cases:** Sort intervals by their start, then scan linearly while maintaining the farthest end of the current merged interval; extend it on overlap and start a new interval otherwise. Use it for interval merging, insertion, covered-range statistics, and problems that first require overlaps to be removed.

- [ ] A: 56. Merge Intervals ([LeetCode CN](https://leetcode.cn/problems/merge-intervals/) | [LeetCode](https://leetcode.com/problems/merge-intervals/))
- [ ] B: 57. Insert Interval ([LeetCode CN](https://leetcode.cn/problems/insert-interval/) | [LeetCode](https://leetcode.com/problems/insert-interval/))

## 14. Standard Binary Search

> **Pattern & Use Cases:** Repeatedly discard the half that cannot contain the answer in a monotonic sequence or predicate range, while consistently maintaining one open/closed interval invariant. Use it for exact lookup, lower and upper bounds, and finding the first or last position that satisfies a condition.

- [ ] A: 704. Binary Search ([LeetCode CN](https://leetcode.cn/problems/binary-search/) | [LeetCode](https://leetcode.com/problems/binary-search/))
- [ ] B: 34. Find First and Last Position of Element in Sorted Array ([LeetCode CN](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) | [LeetCode](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/))

Choose one binary-search template and use it consistently, such as a left-closed, right-open interval or the red-blue coloring method.

## 15. Binary Search on the Answer

> **Pattern & Use Cases:** Binary-search the candidate answer range and use `check(mid)` to determine feasibility, exploiting the monotonicity of feasibility to locate a boundary. Use it for minimum-feasible or maximum-feasible speed, capacity, distance, threshold, and resource-allocation problems.

- [ ] A: 875. Koko Eating Bananas ([LeetCode CN](https://leetcode.cn/problems/koko-eating-bananas/) | [LeetCode](https://leetcode.com/problems/koko-eating-bananas/))
- [ ] B: 1011. Capacity To Ship Packages Within D Days ([LeetCode CN](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/) | [LeetCode](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/))

Always ask: Is the answer monotonic? What does `check(mid)` mean? Are you seeking the first feasible value or the last feasible value?

---

# Phase Two: Common Data Structures

## 16. Stack and Parenthesis Matching

> **Pattern & Use Cases:** A stack stores unfinished context in last-in, first-out order and returns to the most recent state when a closing marker appears or the current phase ends. Use it for parenthesis matching, nested-structure parsing, expression processing, and undoing the most recent operation.

- [ ] A: 20. Valid Parentheses ([LeetCode CN](https://leetcode.cn/problems/valid-parentheses/) | [LeetCode](https://leetcode.com/problems/valid-parentheses/))
- [ ] B: 394. Decode String ([LeetCode CN](https://leetcode.cn/problems/decode-string/) | [LeetCode](https://leetcode.com/problems/decode-string/))

## 17. Monotonic Stack

> **Pattern & Use Cases:** Keep elements whose answers are not yet determined in a monotonic stack; when the current element breaks monotonicity, pop elements and resolve their relationships or boundaries. Use it to find the first greater or smaller element on either side, the next qualifying position, and contiguous ranges determined by the nearest boundary.

- [ ] A: 739. Daily Temperatures ([LeetCode CN](https://leetcode.cn/problems/daily-temperatures/) | [LeetCode](https://leetcode.com/problems/daily-temperatures/))
- [ ] B: 901. Online Stock Span ([LeetCode CN](https://leetcode.cn/problems/online-stock-span/) | [LeetCode](https://leetcode.com/problems/online-stock-span/))

These represent finding the first greater element to the right and maintaining a contiguous range to the left online, respectively.

## 18. Monotonic Queue

> **Pattern & Use Cases:** A deque stores only indices that can still become the window optimum, discarding worse candidates from the back on insertion and expired candidates from the front as the window moves. Use it for sliding-window maxima or minima and for windows whose validity depends on dynamic extrema.

- [ ] A: 239. Sliding Window Maximum ([LeetCode CN](https://leetcode.cn/problems/sliding-window-maximum/) | [LeetCode](https://leetcode.com/problems/sliding-window-maximum/))
- [ ] B: 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit ([LeetCode CN](https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | [LeetCode](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/))

Although Problem 239 is officially rated hard, it is the standard monotonic-queue template problem.

## 19. Heap and Top K

> **Pattern & Use Cases:** Keep the current best candidates in a heap of size `K`, continually evicting the worst candidate at the top to reduce the cost of sorting all elements to $O(n\log K)$. Use it for the `K`th largest or the `K`th smallest element, the top `K` frequent items, and problems that require only part of the ranking.

- [ ] A: 215. Kth Largest Element in an Array ([LeetCode CN](https://leetcode.cn/problems/kth-largest-element-in-an-array/) | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/))
- [ ] B: 347. Top K Frequent Elements ([LeetCode CN](https://leetcode.cn/problems/top-k-frequent-elements/) | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/))

## 20. K-Way Merge Heap

> **Pattern & Use Cases:** Put the current candidate from each sorted sequence into a heap; after removing the global optimum, insert only the next item from its source sequence, keeping heap size bounded by the number of sequences. Use it to merge sorted sequences, consume values in order from multiple candidate streams, and generate the first `K` smallest or largest combinations.

- [ ] A: 373. Find K Pairs with Smallest Sums ([LeetCode CN](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/) | [LeetCode](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/))
- [ ] B: 23. Merge k Sorted Lists ([LeetCode CN](https://leetcode.cn/problems/merge-k-sorted-lists/) | [LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/))

## 21. Linked List Reversal

> **Pattern & Use Cases:** While traversing a linked list, save the original successor before redirecting the current node to its predecessor; for a local reversal, also retain both external connection points and reconnect them afterward. Use it to reverse an entire linked list or a specified interval and for list rearrangements built from segment reversals.

- [ ] A: 206. Reverse Linked List ([LeetCode CN](https://leetcode.cn/problems/reverse-linked-list/) | [LeetCode](https://leetcode.com/problems/reverse-linked-list/))
- [ ] B: 92. Reverse Linked List II ([LeetCode CN](https://leetcode.cn/problems/reverse-linked-list-ii/) | [LeetCode](https://leetcode.com/problems/reverse-linked-list-ii/))

## 22. Fast and Slow Pointers in Linked Lists

> **Pattern & Use Cases:** Advance two pointers at different speeds and use their positional difference or periodic behavior to infer linked-list structure; the loop condition determines whether an even-length list yields the left or right middle node. Use it to find a list's middle, detect a cycle, and locate the cycle entry.

- [ ] A: 876. Middle of the Linked List ([LeetCode CN](https://leetcode.cn/problems/middle-of-the-linked-list/) | [LeetCode](https://leetcode.com/problems/middle-of-the-linked-list/))
- [ ] B: 142. Linked List Cycle II ([LeetCode CN](https://leetcode.cn/problems/linked-list-cycle-ii/) | [LeetCode](https://leetcode.com/problems/linked-list-cycle-ii/))

## 23. Hash Table + Linked List

> **Pattern & Use Cases:** A hash table provides fast lookup by key or object, while a linked list maintains connections or dynamic order; every modification must update both structures consistently. Use it when constant-time lookup must coexist with node ordering, recency tracking, or object mappings.

- [ ] A: 138. Copy List with Random Pointer ([LeetCode CN](https://leetcode.cn/problems/copy-list-with-random-pointer/) | [LeetCode](https://leetcode.com/problems/copy-list-with-random-pointer/)) — map original nodes to copied nodes
- [ ] B: 146. LRU Cache ([LeetCode CN](https://leetcode.cn/problems/lru-cache/) | [LeetCode](https://leetcode.com/problems/lru-cache/)) — hash table + doubly linked list

## 24. Trie

> **Pattern & Use Cases:** A Trie builds a tree one character at a time so strings with the same prefix share a path, while terminal markers distinguish complete strings from ordinary prefixes. Use it for inserting many strings, exact lookup, prefix queries, and character-by-character wildcard searches.

- [ ] A: 208. Implement Trie (Prefix Tree) ([LeetCode CN](https://leetcode.cn/problems/implement-trie-prefix-tree/) | [LeetCode](https://leetcode.com/problems/implement-trie-prefix-tree/))
- [ ] B: 211. Design Add and Search Words Data Structure ([LeetCode CN](https://leetcode.cn/problems/design-add-and-search-words-data-structure/) | [LeetCode](https://leetcode.com/problems/design-add-and-search-words-data-structure/))

## 25. Disjoint Set Union

> **Pattern & Use Cases:** Identify each set by a representative, accelerate lookup with path compression, and merge different sets by size or rank so operations are nearly constant time. Use it for dynamic connectivity, grouping equivalence relations, merging sets, and detecting cycles in undirected graphs.

- [ ] A: 684. Redundant Connection ([LeetCode CN](https://leetcode.cn/problems/redundant-connection/) | [LeetCode](https://leetcode.com/problems/redundant-connection/))
- [ ] B: 721. Accounts Merge ([LeetCode CN](https://leetcode.cn/problems/accounts-merge/) | [LeetCode](https://leetcode.com/problems/accounts-merge/))

Master path compression and union by size/rank.

## 26. Fenwick Tree

> **Pattern & Use Cases:** A Fenwick tree uses `lowbit` to maintain prefix information hierarchically, supporting point updates and prefix queries in $O(\log n)$; obtain an interval result by subtracting two prefixes. Use it for frequent point updates, range sums, frequency statistics, and rank queries on dynamic arrays.

- [ ] A: 307. Range Sum Query - Mutable ([LeetCode CN](https://leetcode.cn/problems/range-sum-query-mutable/) | [LeetCode](https://leetcode.com/problems/range-sum-query-mutable/))
- [ ] B: 1409. Queries on a Permutation With Key ([LeetCode CN](https://leetcode.cn/problems/queries-on-a-permutation-with-key/) | [LeetCode](https://leetcode.com/problems/queries-on-a-permutation-with-key/))

For Problem 307, solve it once with a Fenwick tree and once with a segment tree.

## 27. Segment Tree

> **Pattern & Use Cases:** A segment tree recursively partitions an interval and stores information at each node that can be merged from its two child intervals, enabling point updates and range queries in $O(\log n)$. Use it for frequent updates to dynamic sequences and associative aggregate queries such as range sums, extrema, and counts.

- [ ] A: 307. Range Sum Query - Mutable ([LeetCode CN](https://leetcode.cn/problems/range-sum-query-mutable/) | [LeetCode](https://leetcode.com/problems/range-sum-query-mutable/))
- [ ] B: 3187. Peaks in Array ([LeetCode CN](https://leetcode.cn/problems/peaks-in-array/) | [LeetCode](https://leetcode.com/problems/peaks-in-array/))

For the main track, learn tree construction, point updates, and range queries; leave lazy propagation until the end.

## 28. Data Structure Design

> **Pattern & Use Cases:** Work backward from the target complexity of each operation to determine the required structures, define invariants between auxiliary information and primary data, and maintain them on every update. Use it for design problems where no single structure can simultaneously meet lookup, insertion, deletion, extremum, or random-access requirements.

- [ ] A: 155. Min Stack ([LeetCode CN](https://leetcode.cn/problems/min-stack/) | [LeetCode](https://leetcode.com/problems/min-stack/))
- [ ] B: 380. Insert Delete GetRandom O(1) ([LeetCode CN](https://leetcode.cn/problems/insert-delete-getrandom-o1/) | [LeetCode](https://leetcode.com/problems/insert-delete-getrandom-o1/))

---

# Phase Three: Trees, Search, and Backtracking

## 29. Basic Binary Tree DFS

> **Pattern & Use Cases:** First define what DFS returns for the current subtree or what state it carries from the root to the current node, and restore any state that could affect sibling branches when leaving a node. Use it to compute tree height, node or path statistics, test subtree properties, and handle cumulative path conditions.

- [ ] A: 104. Maximum Depth of Binary Tree ([LeetCode CN](https://leetcode.cn/problems/maximum-depth-of-binary-tree/) | [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/))
- [ ] B: 437. Path Sum III ([LeetCode CN](https://leetcode.cn/problems/path-sum-iii/) | [LeetCode](https://leetcode.com/problems/path-sum-iii/)) — tree DFS + prefix sums

## 30. Binary Tree Postorder Traversal

> **Pattern & Use Cases:** Obtain results from the left and right subtrees before combining them at the current node; distinguish the value that can extend to the parent from the complete answer formed at the current node. Use it for height, diameter, path extrema, and subtree aggregation problems whose answers depend on child-subtree information.

- [ ] A: 543. Diameter of Binary Tree ([LeetCode CN](https://leetcode.cn/problems/diameter-of-binary-tree/) | [LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/))
- [ ] B: 124. Binary Tree Maximum Path Sum ([LeetCode CN](https://leetcode.cn/problems/binary-tree-maximum-path-sum/) | [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/))

Problem 124 is a classic hard problem; skip it temporarily if your fundamentals are not yet solid.

## 31. Binary Tree BFS

> **Pattern & Use Cases:** Visit nodes level by level with a queue and fix the current queue length at the start of each level, keeping current-level nodes separate from newly added next-level nodes. Use it for level-order traversal, minimum depth, per-level statistics, and extracting boundary nodes from each level.

- [ ] A: 102. Binary Tree Level Order Traversal ([LeetCode CN](https://leetcode.cn/problems/binary-tree-level-order-traversal/) | [LeetCode](https://leetcode.com/problems/binary-tree-level-order-traversal/))
- [ ] B: 199. Binary Tree Right Side View ([LeetCode CN](https://leetcode.cn/problems/binary-tree-right-side-view/) | [LeetCode](https://leetcode.com/problems/binary-tree-right-side-view/))

## 32. Binary Search Tree

> **Pattern & Use Cases:** Exploit the ordering in which the left subtree is smaller than the current node and the right subtree is larger, using inorder traversal to obtain an increasing sequence or recursively passing each node's permitted value range. Use it for BST lookup, validation, ranking, range queries, and finding the `K`th smallest element.

- [ ] A: 98. Validate Binary Search Tree ([LeetCode CN](https://leetcode.cn/problems/validate-binary-search-tree/) | [LeetCode](https://leetcode.com/problems/validate-binary-search-tree/))
- [ ] B: 230. Kth Smallest Element in a BST ([LeetCode CN](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/) | [LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-bst/))

## 33. Lowest Common Ancestor (LCA)

> **Pattern & Use Cases:** Determine in postorder which side of the current node contains each target; the first node where the targets lie in different branches, or where the current node itself is a target, is their lowest common ancestor. In an ordered tree, locate the split point directly by value range. Use it for common-ancestor, path-convergence, and hierarchical-relation queries between two tree nodes.

- [ ] A: 235. Lowest Common Ancestor of a Binary Search Tree ([LeetCode CN](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/) | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/))
- [ ] B: 236. Lowest Common Ancestor of a Binary Tree ([LeetCode CN](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/) | [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/))

## 34. Grid DFS and Connected Components

> **Pattern & Use Cases:** Treat cells as graph nodes, mark a cell immediately upon entering it, and recursively visit valid directions; when multiple starts share the same transition rules, you can also search backward from destination boundaries. Use it for counting grid components, marking regions, testing reachability, and propagating from boundaries.

- [ ] A: 200. Number of Islands ([LeetCode CN](https://leetcode.cn/problems/number-of-islands/) | [LeetCode](https://leetcode.com/problems/number-of-islands/))
- [ ] B: 417. Pacific Atlantic Water Flow ([LeetCode CN](https://leetcode.cn/problems/pacific-atlantic-water-flow/) | [LeetCode](https://leetcode.com/problems/pacific-atlantic-water-flow/))

## 35. Grid BFS and Multi-Source BFS

> **Pattern & Use Cases:** Enqueue one or more sources simultaneously at distance 0, expand outward level by level, and mark neighbors when they are enqueued; the first arrival gives the shortest distance in an unweighted graph. Use it for shortest paths in grids, simultaneous spreading, propagation time, and distance to the nearest source.

- [ ] A: 994. Rotting Oranges ([LeetCode CN](https://leetcode.cn/problems/rotting-oranges/) | [LeetCode](https://leetcode.com/problems/rotting-oranges/))
- [ ] B: 1091. Shortest Path in Binary Matrix ([LeetCode CN](https://leetcode.cn/problems/shortest-path-in-binary-matrix/) | [LeetCode](https://leetcode.com/problems/shortest-path-in-binary-matrix/))

## 36. Graph DFS/BFS

> **Pattern & Use Cases:** Represent edges with an adjacency list or matrix and use `visited` to prevent repeated visits; if the graph may be disconnected, restart traversal from every unvisited node. Use it for graph reachability, connected-component counts, structural cloning, and collecting information during traversal.

- [ ] A: 547. Number of Provinces ([LeetCode CN](https://leetcode.cn/problems/number-of-provinces/) | [LeetCode](https://leetcode.com/problems/number-of-provinces/))
- [ ] B: 133. Clone Graph ([LeetCode CN](https://leetcode.cn/problems/clone-graph/) | [LeetCode](https://leetcode.com/problems/clone-graph/))

## 37. Topological Sort

> **Pattern & Use Cases:** Enqueue every node with indegree 0, remove their outgoing edges in turn, and continue with nodes whose indegree becomes 0; if not all nodes are processed, the graph contains a cycle. Use it to test feasibility in directed dependencies, produce execution orders, and detect cycles.

- [ ] A: 207. Course Schedule ([LeetCode CN](https://leetcode.cn/problems/course-schedule/) | [LeetCode](https://leetcode.com/problems/course-schedule/))
- [ ] B: 210. Course Schedule II ([LeetCode CN](https://leetcode.cn/problems/course-schedule-ii/) | [LeetCode](https://leetcode.com/problems/course-schedule-ii/))

## 38. State-Graph BFS

> **Pattern & Use Cases:** Encode each configuration as a graph node and each legal operation as an unweighted edge, then run BFS in increasing operation count while deduplicating visited states. Use it for minimum operations, shortest transformations, and minimum-step problems over finite states.

- [ ] A: 433. Minimum Genetic Mutation ([LeetCode CN](https://leetcode.cn/problems/minimum-genetic-mutation/) | [LeetCode](https://leetcode.com/problems/minimum-genetic-mutation/))
- [ ] B: 752. Open the Lock ([LeetCode CN](https://leetcode.cn/problems/open-the-lock/) | [LeetCode](https://leetcode.com/problems/open-the-lock/))

The key is to abstract each state as a graph node.

## 39. Subset Backtracking

> **Pattern & Use Cases:** Record chosen elements in `path`, restrict later candidates with `start`, and traverse the decision tree through choose, recurse, and undo operations. Use it for subset enumeration and combination searches where the number of selected elements varies and element order does not affect the result.

- [ ] A: 78. Subsets ([LeetCode CN](https://leetcode.cn/problems/subsets/) | [LeetCode](https://leetcode.com/problems/subsets/))
- [ ] B: 39. Combination Sum ([LeetCode CN](https://leetcode.cn/problems/combination-sum/) | [LeetCode](https://leetcode.com/problems/combination-sum/))

## 40. Combination Backtracking

> **Pattern & Use Cases:** Build a fixed-size or structurally constrained selection position by position, pruning early according to the remaining candidates, remaining capacity, and validity of the current prefix. Use it to choose exactly `K` elements, generate valid structures, and solve combinations with cardinality or local constraints.

- [ ] A: 77. Combinations ([LeetCode CN](https://leetcode.cn/problems/combinations/) | [LeetCode](https://leetcode.com/problems/combinations/))
- [ ] B: 22. Generate Parentheses ([LeetCode CN](https://leetcode.cn/problems/generate-parentheses/) | [LeetCode](https://leetcode.com/problems/generate-parentheses/))

## 41. Permutation Backtracking and Deduplication

> **Pattern & Use Cases:** At each position, choose from elements not yet used and track the current path with `used`; when duplicate values exist, sort first and skip equal-valued branches at the same level. Use it for full permutations, orderings, and one-to-one assignments where element order changes the result.

- [ ] A: 46. Permutations ([LeetCode CN](https://leetcode.cn/problems/permutations/) | [LeetCode](https://leetcode.com/problems/permutations/))
- [ ] B: 47. Permutations II ([LeetCode CN](https://leetcode.cn/problems/permutations-ii/) | [LeetCode](https://leetcode.com/problems/permutations-ii/))

---

# Phase Four: Dynamic Programming

## 42. One-Dimensional DP

> **Pattern & Use Cases:** Define `dp[i]` as the count, reachability, or optimum after processing position `i`, then transition from a finite set of earlier states; compress space when only a few neighboring states are needed. Use it for linear sequences where the current decision depends only on a short prefix or nearby positions.

- [ ] A: 70. Climbing Stairs ([LeetCode CN](https://leetcode.cn/problems/climbing-stairs/) | [LeetCode](https://leetcode.com/problems/climbing-stairs/))
- [ ] B: 198. House Robber ([LeetCode CN](https://leetcode.cn/problems/house-robber/) | [LeetCode](https://leetcode.com/problems/house-robber/))

## 43. Maximum Subarray DP

> **Pattern & Use Cases:** Maintain the best value that must end at the current position, choosing between extending the previous segment and restarting at the current position, then update the global answer from all ending states. Use it for extrema over contiguous intervals where adding a new element requires only a choice between continuation and restart, including circular-sequence variants.

- [ ] A: 53. Maximum Subarray ([LeetCode CN](https://leetcode.cn/problems/maximum-subarray/) | [LeetCode](https://leetcode.com/problems/maximum-subarray/))
- [ ] B: 918. Maximum Sum Circular Subarray ([LeetCode CN](https://leetcode.cn/problems/maximum-sum-circular-subarray/) | [LeetCode](https://leetcode.com/problems/maximum-sum-circular-subarray/))

## 44. Grid DP

> **Pattern & Use Cases:** Let `dp[row][col]` represent the result upon reaching the current cell, process cells in the dependency order induced by allowed moves, and transition from already computed neighbors; space can often be compressed by row. Use it for path counts, reachability, and minimum- or maximum-cost problems on grids with restricted movement directions.

- [ ] A: 62. Unique Paths ([LeetCode CN](https://leetcode.cn/problems/unique-paths/) | [LeetCode](https://leetcode.com/problems/unique-paths/))
- [ ] B: 64. Minimum Path Sum ([LeetCode CN](https://leetcode.cn/problems/minimum-path-sum/) | [LeetCode](https://leetcode.com/problems/minimum-path-sum/))

## 45. 0-1 Knapsack

> **Pattern & Use Cases:** Each item can be selected at most once, and `dp[capacity]` records reachability, count, or optimum for that capacity; after one-dimensional compression, iterate capacities backward to avoid reusing the current item. Use it for subset sums, capacity constraints, counting, and value optimization when elements cannot be selected repeatedly.

- [ ] A: 416. Partition Equal Subset Sum ([LeetCode CN](https://leetcode.cn/problems/partition-equal-subset-sum/) | [LeetCode](https://leetcode.com/problems/partition-equal-subset-sum/))
- [ ] B: 494. Target Sum ([LeetCode CN](https://leetcode.cn/problems/target-sum/) | [LeetCode](https://leetcode.com/problems/target-sum/))

## 46. Unbounded Knapsack

> **Pattern & Use Cases:** Items of the same type may be selected repeatedly; after one-dimensional compression, iterate capacities forward so the current round can reuse the current item, while outer-loop order determines whether combinations or permutations are counted. Use it for minimum counts, maximum value, reachability, and counting when elements are reusable.

- [ ] A: 322. Coin Change ([LeetCode CN](https://leetcode.cn/problems/coin-change/) | [LeetCode](https://leetcode.com/problems/coin-change/))
- [ ] B: 518. Coin Change II ([LeetCode CN](https://leetcode.cn/problems/coin-change-ii/) | [LeetCode](https://leetcode.com/problems/coin-change-ii/))

Understand the differences among minimizing a value, counting solutions, and the traversal orders for combinations versus permutations.

## 47. Longest Common Subsequence (LCS)

> **Pattern & Use Cases:** Define `dp[i][j]` as the answer for two sequence prefixes; depending on whether their final elements match, transition by shortening both sides or only one side. Use it for common subsequences, sequence alignment, and insertion, deletion, or replacement cost problems involving two sequences.

- [ ] A: 1143. Longest Common Subsequence ([LeetCode CN](https://leetcode.cn/problems/longest-common-subsequence/) | [LeetCode](https://leetcode.com/problems/longest-common-subsequence/))
- [ ] B: 72. Edit Distance ([LeetCode CN](https://leetcode.cn/problems/edit-distance/) | [LeetCode](https://leetcode.com/problems/edit-distance/))

## 48. Longest Increasing Subsequence (LIS)

> **Pattern & Use Cases:** Either let `dp[i]` be the best length ending at the current position and enumerate predecessors, or maintain the smallest ending value for each length and use binary search to reduce complexity to $O(n\log n)$. Use it for monotonic subsequences that preserve relative order and for answers composed from monotonic parts on both sides.

- [ ] A: 300. Longest Increasing Subsequence ([LeetCode CN](https://leetcode.cn/problems/longest-increasing-subsequence/) | [LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/))
- [ ] B: 1671. Minimum Number of Removals to Make Mountain Array ([LeetCode CN](https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/) | [LeetCode](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/))

Write the $O(n^2)$ DP first, then learn the $O(n\log n)$ greedy-plus-binary-search solution.

## 49. Partition DP

> **Pattern & Use Cases:** Define `dp[i]` as the result for the first `i` elements, enumerate the start of the final segment, and combine the solved prefix with the validity or contribution of that segment. Use it when splitting a string or array into contiguous segments and optimizing feasibility, count, or value.

- [ ] A: 139. Word Break ([LeetCode CN](https://leetcode.cn/problems/word-break/) | [LeetCode](https://leetcode.com/problems/word-break/))
- [ ] B: 1043. Partition Array for Maximum Sum ([LeetCode CN](https://leetcode.cn/problems/partition-array-for-maximum-sum/) | [LeetCode](https://leetcode.com/problems/partition-array-for-maximum-sum/))

## 50. State-Machine DP

> **Pattern & Use Cases:** Define separate states for mutually exclusive phases, specify which transitions each operation permits, and update the current state from the previous time step in chronological order. Use it for time-ordered optimization with constrained phase changes, operation dependencies, cooldowns, or transaction limits.

- [ ] A: 122. Best Time to Buy and Sell Stock II ([LeetCode CN](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/))
- [ ] B: 309. Best Time to Buy and Sell Stock with Cooldown ([LeetCode CN](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/))

## 51. Interval DP

> **Pattern & Use Cases:** Define `dp[left][right]` as the result for a contiguous interval, compute intervals from shorter to longer, and transition by processing endpoints or enumerating split points. Use it for palindrome, merging, partitioning, and interval-optimization problems determined by internal interval structure.

- [ ] A: 516. Longest Palindromic Subsequence ([LeetCode CN](https://leetcode.cn/problems/longest-palindromic-subsequence/) | [LeetCode](https://leetcode.com/problems/longest-palindromic-subsequence/))
- [ ] B: 1039. Minimum Score Triangulation of Polygon ([LeetCode CN](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/) | [LeetCode](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/))

## 52. Tree DP

> **Pattern & Use Cases:** Use postorder DFS so every node returns several mutually exclusive states, then merge child results according to the current node's choice and parent-child compatibility. Use it for tree problems whose answer depends on selecting or skipping nodes, direction changes, resource allocation, or path states.

- [ ] A: 337. House Robber III ([LeetCode CN](https://leetcode.cn/problems/house-robber-iii/) | [LeetCode](https://leetcode.com/problems/house-robber-iii/))
- [ ] B: 1372. Longest ZigZag Path in a Binary Tree ([LeetCode CN](https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/) | [LeetCode](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/))

## 53. Bitmask DP

> **Pattern & Use Cases:** Use the bits of an integer `mask` to represent whether each element has been selected, let `dp[mask]` record reachability, count, or optimum for that set, and transition by adding or removing one element. Use it for permutations, assignments, coverage, and set partitions when the number of elements is small and state depends on the selected subset.

- [ ] A: 526. Beautiful Arrangement ([LeetCode CN](https://leetcode.cn/problems/beautiful-arrangement/) | [LeetCode](https://leetcode.com/problems/beautiful-arrangement/))
- [ ] B: 698. Partition to K Equal Sum Subsets ([LeetCode CN](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/) | [LeetCode](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/))

---

# Phase Five: Greedy Algorithms, Bit Manipulation, and Mathematics

## 54. Basic Greedy

> **Pattern & Use Cases:** Make the locally optimal choice at each step and prove through an exchange argument or contradiction that it does not harm the global optimum. Use it for matching, pairing, or resource allocation after sorting when the current choice preserves at least as much room for later decisions.

- [ ] A: 455. Assign Cookies ([LeetCode CN](https://leetcode.cn/problems/assign-cookies/) | [LeetCode](https://leetcode.com/problems/assign-cookies/))
- [ ] B: 881. Boats to Save People ([LeetCode CN](https://leetcode.cn/problems/boats-to-save-people/) | [LeetCode](https://leetcode.com/problems/boats-to-save-people/))

## 55. Interval Greedy

> **Pattern & Use Cases:** Sort by interval endpoints, then choose the candidate that ends earliest or extends farthest to preserve as much feasible space as possible for later decisions. Use it to select the maximum number of non-overlapping intervals, remove the minimum number of conflicts, or cover intervals with the fewest points.

- [ ] A: 435. Non-overlapping Intervals ([LeetCode CN](https://leetcode.cn/problems/non-overlapping-intervals/) | [LeetCode](https://leetcode.com/problems/non-overlapping-intervals/))
- [ ] B: 452. Minimum Number of Arrows to Burst Balloons ([LeetCode CN](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/) | [LeetCode](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/))

## 56. Greedy with Rollback + Heap

> **Pattern & Use Cases:** Tentatively accept each current choice, then use a heap to undo the historical choice with the highest cost or lowest benefit whenever a constraint is exceeded, restoring feasibility. Use it when tasks or resources are processed in order and the goal is to retain the most choices or the best return under capacity, time, or similar constraints.

- [ ] A: 1642. Furthest Building You Can Reach ([LeetCode CN](https://leetcode.cn/problems/furthest-building-you-can-reach/) | [LeetCode](https://leetcode.com/problems/furthest-building-you-can-reach/))
- [ ] B: 630. Course Schedule III ([LeetCode CN](https://leetcode.cn/problems/course-schedule-iii/) | [LeetCode](https://leetcode.com/problems/course-schedule-iii/))

## 57. Contribution Method

> **Pattern & Use Cases:** Instead of enumerating answer objects, enumerate elements, determine how many objects include each element in a particular role, and sum its independent contribution. Use it when totals or counts across all subarrays, substrings, pairs, or combinations can be decomposed by element.

- [ ] A: 1588. Sum of All Odd Length Subarrays ([LeetCode CN](https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/) | [LeetCode](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/))
- [ ] B: 2063. Vowels of All Substrings ([LeetCode CN](https://leetcode.cn/problems/vowels-of-all-substrings/) | [LeetCode](https://leetcode.com/problems/vowels-of-all-substrings/))

The key is to calculate how many answer objects contain each element.

## 58. Basic Bit Manipulation

> **Pattern & Use Cases:** Use bitwise AND, OR, XOR, and shifts to operate directly on binary state; XOR cancels paired elements, and `x & (x - 1)` removes the lowest set bit. Use it for parity, bit counts, pair cancellation, state flags, and binary-set operations.

- [ ] A: 136. Single Number ([LeetCode CN](https://leetcode.cn/problems/single-number/) | [LeetCode](https://leetcode.com/problems/single-number/))
- [ ] B: 338. Counting Bits ([LeetCode CN](https://leetcode.cn/problems/counting-bits/) | [LeetCode](https://leetcode.com/problems/counting-bits/))

## 59. XOR and Prefix XOR

> **Pattern & Use Cases:** Use $a\oplus a=0$ to obtain an interval XOR from two prefix XOR values, then query or count historical prefix states to handle interval conditions. Use it for static range-XOR queries and for finding or counting contiguous subarrays whose XOR satisfies a specified relationship.

- [ ] A: 1310. XOR Queries of a Subarray ([LeetCode CN](https://leetcode.cn/problems/xor-queries-of-a-subarray/) | [LeetCode](https://leetcode.com/problems/xor-queries-of-a-subarray/))
- [ ] B: 1442. Count Triplets That Can Form Two Arrays of Equal XOR ([LeetCode CN](https://leetcode.cn/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/) | [LeetCode](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/))

## 60. Per-Bit Decomposition and Bit Contributions

> **Pattern & Use Cases:** Process each binary bit independently, count zeros and ones or calculate that bit's contribution to the answer, then combine the per-bit results. Use it for total bit differences across pairs, bitwise AND/OR/XOR constraints, and problems where direct pair enumeration is too expensive.

- [ ] A: 477. Total Hamming Distance ([LeetCode CN](https://leetcode.cn/problems/total-hamming-distance/) | [LeetCode](https://leetcode.com/problems/total-hamming-distance/))
- [ ] B: 2275. Largest Combination With Bitwise AND Greater Than Zero ([LeetCode CN](https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero/) | [LeetCode](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/))

## 61. GCD, LCM, and Factors

> **Pattern & Use Cases:** Compute GCD with Euclid's algorithm and LCM with $\operatorname{lcm}(a,b)=a/\gcd(a,b)\times b$; when factors are involved, enumerate only through the square root and process factor pairs together. Use it for divisibility, common periods, repeating units, factor enumeration, and subarray GCD or LCM problems.

- [ ] A: 1071. Greatest Common Divisor of Strings ([LeetCode CN](https://leetcode.cn/problems/greatest-common-divisor-of-strings/) | [LeetCode](https://leetcode.com/problems/greatest-common-divisor-of-strings/))
- [ ] B: 2470. Number of Subarrays With LCM Equal to K ([LeetCode CN](https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k/) | [LeetCode](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/))

## 62. Primality Testing and the Sieve of Eratosthenes

> **Pattern & Use Cases:** To test one number for primality, check divisors only through $\sqrt n$; for many numbers, preprocess the whole range with a sieve that marks multiples of each prime in increasing order. Use it for prime counts, range-prime queries, and repeated primality tests over many integers.

- [ ] A: 204. Count Primes ([LeetCode CN](https://leetcode.cn/problems/count-primes/) | [LeetCode](https://leetcode.com/problems/count-primes/))
- [ ] B: 2523. Closest Prime Numbers in Range ([LeetCode CN](https://leetcode.cn/problems/closest-prime-numbers-in-range/) | [LeetCode](https://leetcode.com/problems/closest-prime-numbers-in-range/))

## 63. Binary Exponentiation and Modular Arithmetic

> **Pattern & Use Cases:** Decompose the exponent into binary, using repeated squaring and conditional multiplication to compute a power in $O(\log n)$, and reduce modulo during multiplication to control numeric range. Use it when exponents are large, results require a modulus, or the answer involves exponential growth and repeated multiplication.

- [ ] A: 50. Pow(x, n) ([LeetCode CN](https://leetcode.cn/problems/powx-n/) | [LeetCode](https://leetcode.com/problems/powx-n/))
- [ ] B: 1922. Count Good Numbers ([LeetCode CN](https://leetcode.cn/problems/count-good-numbers/) | [LeetCode](https://leetcode.com/problems/count-good-numbers/))

## 64. Boyer-Moore Voting

> **Pattern & Use Cases:** Cancel different elements in pairs to retain possible high-frequency candidates; at most `k` elements can occur more than $n/(k+1)$ times, so maintain a bounded set of candidates and verify them at the end. Use it to find elements above a fixed frequency threshold in linear time and constant extra space.

- [ ] A: 169. Majority Element ([LeetCode CN](https://leetcode.cn/problems/majority-element/) | [LeetCode](https://leetcode.com/problems/majority-element/))
- [ ] B: 229. Majority Element II ([LeetCode CN](https://leetcode.cn/problems/majority-element-ii/) | [LeetCode](https://leetcode.com/problems/majority-element-ii/))

---

# Phase Six: String Algorithms

## 65. KMP

> **Pattern & Use Cases:** Use the prefix function to record the longest equal proper prefix and suffix for every pattern prefix; on a mismatch, jump within the pattern and reuse existing matches so the text pointer never retreats. Use it for linear-time string matching and for analyzing borders, periods, and repeated string structure.

- [ ] A: 28. Find the Index of the First Occurrence in a String ([LeetCode CN](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/) | [LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/))
- [ ] B: 459. Repeated Substring Pattern ([LeetCode CN](https://leetcode.cn/problems/repeated-substring-pattern/) | [LeetCode](https://leetcode.com/problems/repeated-substring-pattern/))

## 66. Center Expansion and Manacher's Algorithm

> **Pattern & Use Cases:** Expand outward around every character or gap between characters; Manacher's algorithm further reuses symmetric radii within known palindromic intervals to process all centers in linear time. Use it to count palindromic substrings, find the longest palindromic substring, and obtain the maximum palindrome radius at every center.

- [ ] A: 5. Longest Palindromic Substring ([LeetCode CN](https://leetcode.cn/problems/longest-palindromic-substring/) | [LeetCode](https://leetcode.com/problems/longest-palindromic-substring/))
- [ ] B: 647. Palindromic Substrings ([LeetCode CN](https://leetcode.cn/problems/palindromic-substrings/) | [LeetCode](https://leetcode.com/problems/palindromic-substrings/))

Solve both with center expansion first, then rewrite them using Manacher's algorithm.

## 67. Rolling Hash

> **Pattern & Use Cases:** Map a sequence to a polynomial hash; after precomputing prefix hashes and powers, obtain any substring hash in $O(1)$, using double hashing or result verification to reduce collision risk. Use it for many substring comparisons, duplicate-fragment detection, and problems that combine hashing with binary search on length.

- [ ] A: 187. Repeated DNA Sequences ([LeetCode CN](https://leetcode.cn/problems/repeated-dna-sequences/) | [LeetCode](https://leetcode.com/problems/repeated-dna-sequences/))
- [ ] B: 718. Maximum Length of Repeated Subarray ([LeetCode CN](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/) | [LeetCode](https://leetcode.com/problems/maximum-length-of-repeated-subarray/))

## 68. Subsequence Preprocessing

> **Pattern & Use Cases:** Test one subsequence with two pointers in order; for repeated queries against the same target sequence, preprocess each character's positions or its next occurrence and then use binary search or direct jumps. Use it when a fixed long sequence is queried repeatedly to determine whether many short sequences match in relative order.

- [ ] A: 392. Is Subsequence ([LeetCode CN](https://leetcode.cn/problems/is-subsequence/) | [LeetCode](https://leetcode.com/problems/is-subsequence/))
- [ ] B: 792. Number of Matching Subsequences ([LeetCode CN](https://leetcode.cn/problems/number-of-matching-subsequences/) | [LeetCode](https://leetcode.com/problems/number-of-matching-subsequences/))

---

# Phase Seven: Graph Theory

## 69. Dijkstra's Shortest Path

> **Pattern & Use Cases:** Use a min-heap to extract the node with the smallest current distance and continually relax other distances through adjacent edges; with nonnegative edge weights, a finalized shortest distance cannot be improved by later paths. Use it for single-source shortest paths in nonnegative-weight graphs and optimal-path problems whose cost never decreases as a path is extended.

- [ ] A: 743. Network Delay Time ([LeetCode CN](https://leetcode.cn/problems/network-delay-time/) | [LeetCode](https://leetcode.com/problems/network-delay-time/))
- [ ] B: 1631. Path With Minimum Effort ([LeetCode CN](https://leetcode.cn/problems/path-with-minimum-effort/) | [LeetCode](https://leetcode.com/problems/path-with-minimum-effort/))

## 70. Floyd-Warshall All-Pairs Shortest Paths

> **Pattern & Use Cases:** Allow each node in turn as an intermediate and update every pairwise distance with `dist[i][k] + dist[k][j]`, gradually expanding the set of permitted intermediate nodes. Use it when the graph is small and many pairwise shortest paths or transitive relationships must be queried.

- [ ] A: 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance ([LeetCode CN](https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | [LeetCode](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/))
- [ ] B: 2976. Minimum Cost to Convert String I ([LeetCode CN](https://leetcode.cn/problems/minimum-cost-to-convert-string-i/) | [LeetCode](https://leetcode.com/problems/minimum-cost-to-convert-string-i/))

## 71. Minimum Spanning Tree

> **Pattern & Use Cases:** Kruskal's algorithm selects edges in increasing weight without creating cycles, while Prim's algorithm repeatedly selects the minimum edge connecting the chosen set to an outside node; both connect all nodes with `n - 1` edges. Use it to connect every node in an undirected graph at minimum total cost and to analyze the role of edges in spanning trees.

- [ ] A: 1584. Min Cost to Connect All Points ([LeetCode CN](https://leetcode.cn/problems/min-cost-to-connect-all-points/) | [LeetCode](https://leetcode.com/problems/min-cost-to-connect-all-points/))
- [ ] B: 1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree ([LeetCode CN](https://leetcode.cn/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) | [LeetCode](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/))

## 72. Bipartite Graph Coloring

> **Pattern & Use Cases:** Color every connected component alternately with two colors using DFS or BFS; a same-color conflict between adjacent nodes indicates an odd cycle. Use it to divide objects into two mutually exclusive groups, validate bipartite graphs, and process pairwise conflict relationships.

- [ ] A: 785. Is Graph Bipartite? ([LeetCode CN](https://leetcode.cn/problems/is-graph-bipartite/) | [LeetCode](https://leetcode.com/problems/is-graph-bipartite/))
- [ ] B: 886. Possible Bipartition ([LeetCode CN](https://leetcode.cn/problems/possible-bipartition/) | [LeetCode](https://leetcode.com/problems/possible-bipartition/))

## 73. 0-1 BFS

> **Pattern & Use Cases:** When edge weights are only 0 or 1, relax with a deque: put weight-0 transitions at the front and weight-1 transitions at the back so nodes are processed approximately in increasing distance. Use it for shortest paths and minimum-modification problems that distinguish only free operations from operations costing 1.

- [ ] A: 1368. Minimum Cost to Make at Least One Valid Path in a Grid ([LeetCode CN](https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) | [LeetCode](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/))
- [ ] B: 2290. Minimum Obstacle Removal to Reach Corner ([LeetCode CN](https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/) | [LeetCode](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/))

Both are officially rated hard, but they are highly standardized 0-1 BFS problems and can be left until the end.

---

# Phase Eight: Completing High-Frequency Independent Patterns

This phase adds high-frequency patterns that were not given separate sections in the first seven phases but have their own independent solution invariants. They are not included merely to complete a ranking; if an omitted problem is isomorphic to an existing representative problem, it is still not added.

Recommended interleaving: study 74-80 after Phase One, 81-84 after Phase Two, 85-87 after Phase Three, 88 after Phase Four, and 89 after Phase Five.

## 74. Hash Sets and Sequence Starts

> **Pattern & Use Cases:** Use a hash set to test element existence in amortized $O(1)$; when extending consecutive sequences, start only from elements with no predecessor to avoid rescanning the same run. Use it for deduplication after ignoring original order, existence queries, and counting consecutive integer ranges.

- [ ] A: 217. Contains Duplicate ([LeetCode CN](https://leetcode.cn/problems/contains-duplicate/) | [LeetCode](https://leetcode.com/problems/contains-duplicate/)) — set-based deduplication
- [ ] B: 128. Longest Consecutive Sequence ([LeetCode CN](https://leetcode.cn/problems/longest-consecutive-sequence/) | [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)) — expand only from sequence starts

## 75. Two Pointers for Area and Trapped Water

> **Pattern & Use Cases:** When the two boundaries jointly determine current capacity, the weaker side is the upper limit, so move that side first and use the sufficiently strong opposite side to eliminate all other combinations involving the current boundary. Use it for area, capacity, or accumulation problems determined by endpoint distance and the weaker boundary, where one side can be eliminated monotonically.

- [ ] A: 11. Container With Most Water ([LeetCode CN](https://leetcode.cn/problems/container-with-most-water/) | [LeetCode](https://leetcode.com/problems/container-with-most-water/))
- [ ] B: 42. Trapping Rain Water ([LeetCode CN](https://leetcode.cn/problems/trapping-rain-water/) | [LeetCode](https://leetcode.com/problems/trapping-rain-water/))

Although Problem 42 is officially rated hard, its two-pointer solution is a well-known classic; focus on understanding why only the lower boundary needs to move.

## 76. In-Place Marking and Index Mapping

> **Pattern & Use Cases:** When the value range maps to array indices, use the input array itself as a hash table and record whether values appear through negation, swapping, or placement at their target indices. Use it to find missing values, duplicates, or the first absent positive integer with $O(1)$ extra space.

- [ ] A: 448. Find All Numbers Disappeared in an Array ([LeetCode CN](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/) | [LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)) — sign marking
- [ ] B: 41. First Missing Positive ([LeetCode CN](https://leetcode.cn/problems/first-missing-positive/) | [LeetCode](https://leetcode.com/problems/first-missing-positive/)) — in-place hashing

## 77. In-Place Reversal and Permutation Successor

> **Pattern & Use Cases:** Decompose a global order transformation into several interval reversals; to construct the lexicographic successor, find the rightmost pivot that can be increased, swap it, and restore the suffix to its minimum order. Use it for constant-space cyclic shifts, segmented rearrangements, and finding the adjacent lexicographic permutation.

- [ ] A: 189. Rotate Array ([LeetCode CN](https://leetcode.cn/problems/rotate-array/) | [LeetCode](https://leetcode.com/problems/rotate-array/)) — three reversals
- [ ] B: 31. Next Permutation ([LeetCode CN](https://leetcode.cn/problems/next-permutation/) | [LeetCode](https://leetcode.com/problems/next-permutation/)) — lexicographic successor

## 78. Matrix Boundary Simulation and Coordinate Transformations

> **Pattern & Use Cases:** For layer-by-layer matrix traversal, maintain and shrink the top, bottom, left, and right boundaries each round; for in-place geometric transformations, decompose the coordinate mapping into transposition and row or column reversals. Use it for spiral or layered matrix traversal and constant-extra-space rotation or reflection.

- [ ] A: 54. Spiral Matrix ([LeetCode CN](https://leetcode.cn/problems/spiral-matrix/) | [LeetCode](https://leetcode.com/problems/spiral-matrix/)) — shrink four boundaries
- [ ] B: 48. Rotate Image ([LeetCode CN](https://leetcode.cn/problems/rotate-image/) | [LeetCode](https://leetcode.com/problems/rotate-image/)) — transpose + reverse

## 79. Binary Search in Rotated Sorted Arrays

> **Pattern & Use Cases:** In a rotated sorted array, at least one half remains sorted after every split; identify that sorted interval first, then discard the other half according to whether the target lies within its range. Use it to find a target or locate the minimum in a rotated sorted array without duplicates in $O(\log n)$.

- [ ] A: 153. Find Minimum in Rotated Sorted Array ([LeetCode CN](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/) | [LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/))
- [ ] B: 33. Search in Rotated Sorted Array ([LeetCode CN](https://leetcode.cn/problems/search-in-rotated-sorted-array/) | [LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/))

## 80. Monotonic Search in 2D Matrices

> **Pattern & Use Cases:** A matrix whose rows connect in globally sorted order can be mapped to a one-dimensional array for binary search; when rows and columns are each monotonic, start at the top-right or bottom-left corner so every comparison eliminates an entire row or column. Use it for matrix search with global ordering or simultaneous row and column monotonicity.

- [ ] A: 74. Search a 2D Matrix ([LeetCode CN](https://leetcode.cn/problems/search-a-2d-matrix/) | [LeetCode](https://leetcode.com/problems/search-a-2d-matrix/)) — flattened binary search
- [ ] B: 240. Search a 2D Matrix II ([LeetCode CN](https://leetcode.cn/problems/search-a-2d-matrix-ii/) | [LeetCode](https://leetcode.com/problems/search-a-2d-matrix-ii/)) — staircase search

## 81. Monotonic-Stack Boundaries and Contributions

> **Pattern & Use Cases:** Use a monotonic stack to find the first smaller or greater position on both sides of each element, determining the maximum range it controls as an interval extremum; for duplicate values, consistently make one side strict and the other non-strict. Use it to calculate maximum rectangles from boundaries and to count each element's contribution as a subarray minimum or maximum.

- [ ] A: 84. Largest Rectangle in Histogram ([LeetCode CN](https://leetcode.cn/problems/largest-rectangle-in-histogram/) | [LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/)) — finalize a rectangle when popping
- [ ] B: 907. Sum of Subarray Minimums ([LeetCode CN](https://leetcode.cn/problems/sum-of-subarray-minimums/) | [LeetCode](https://leetcode.com/problems/sum-of-subarray-minimums/)) — boundary counting and contribution method

Although Problem 84 is officially rated hard, it is the standard boundary template for finding the first smaller element on both sides.

## 82. Heaps and Dual Heaps in Data Streams

> **Pattern & Use Cases:** A fixed-size min-heap retains the largest `K` elements seen in a stream; two heaps maintain the lower and upper halves while preserving balance in both size and ordering. Use it when data arrives continuously and cannot be fully resorted for every query, but the `K`th largest element or median must always be available.

- [ ] A: 703. Kth Largest Element in a Stream ([LeetCode CN](https://leetcode.cn/problems/kth-largest-element-in-a-stream/) | [LeetCode](https://leetcode.com/problems/kth-largest-element-in-a-stream/)) — fixed-size min-heap
- [ ] B: 295. Find Median from Data Stream ([LeetCode CN](https://leetcode.cn/problems/find-median-from-data-stream/) | [LeetCode](https://leetcode.com/problems/find-median-from-data-stream/)) — max-heap + min-heap

## 83. Lead-Trail Pointers and Intersections in Linked Lists

> **Pattern & Use Cases:** Keep a fixed gap between two pointers to locate a position relative to the tail; alternatively, let two pointers traverse both lists and switch starting points to cancel the length difference and synchronize at a shared node. Use it to find or delete nodes relative to the end and to determine whether two linked lists intersect.

- [ ] A: 19. Remove Nth Node From End of List ([LeetCode CN](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/) | [LeetCode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)) — fixed pointer gap
- [ ] B: 160. Intersection of Two Linked Lists ([LeetCode CN](https://leetcode.cn/problems/intersection-of-two-linked-lists/) | [LeetCode](https://leetcode.com/problems/intersection-of-two-linked-lists/)) — switch heads to cancel the length difference

## 84. Linked List Merging and Merge-Sort Divide and Conquer

> **Pattern & Use Cases:** Merge two sorted linked lists linearly with a dummy head; for a longer list, split it in half with fast and slow pointers, recursively process both sides, and merge them. Use it for merging sorted linked lists and sorting linked lists in $O(n\log n)$ time with little extra space.

- [ ] A: 21. Merge Two Sorted Lists ([LeetCode CN](https://leetcode.cn/problems/merge-two-sorted-lists/) | [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/))
- [ ] B: 148. Sort List ([LeetCode CN](https://leetcode.cn/problems/sort-list/) | [LeetCode](https://leetcode.com/problems/sort-list/))

## 85. Constructing Binary Trees from Traversals

> **Pattern & Use Cases:** Determine the current root from preorder or postorder, use its position in inorder to divide the left and right subtrees, and avoid repeated split-point searches with a hash table. Use it to reconstruct a binary tree with unique node values from inorder and one other depth-first traversal sequence.

- [ ] A: 105. Construct Binary Tree from Preorder and Inorder Traversal ([LeetCode CN](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/))
- [ ] B: 106. Construct Binary Tree from Inorder and Postorder Traversal ([LeetCode CN](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/))

## 86. Grid Backtracking

> **Pattern & Use Cases:** Start DFS from candidate cells, mark a cell as used when entering and restore it when leaving, and prune early according to the remaining target, path length, or reachability. Use it for grid problems where a path cannot reuse cells and must match a sequence, collect resources, or enumerate feasible paths.

- [ ] A: 79. Word Search ([LeetCode CN](https://leetcode.cn/problems/word-search/) | [LeetCode](https://leetcode.com/problems/word-search/))
- [ ] B: 1219. Path with Maximum Gold ([LeetCode CN](https://leetcode.cn/problems/path-with-maximum-gold/) | [LeetCode](https://leetcode.com/problems/path-with-maximum-gold/))

## 87. String-Partition Backtracking

> **Pattern & Use Cases:** Enumerate the endpoint of the next segment from the current position, recurse only when that segment is valid, and prune according to remaining characters, segment count, or target constraints. Use it to split strings into valid segments and enumerate every possible partition.

- [ ] A: 93. Restore IP Addresses ([LeetCode CN](https://leetcode.cn/problems/restore-ip-addresses/) | [LeetCode](https://leetcode.com/problems/restore-ip-addresses/))
- [ ] B: 131. Palindrome Partitioning ([LeetCode CN](https://leetcode.cn/problems/palindrome-partitioning/) | [LeetCode](https://leetcode.com/problems/palindrome-partitioning/))

## 88. Product and Sign-State DP

> **Pattern & Use Cases:** Negative numbers swap the roles of maximum and minimum, or positive and negative, so maintain a pair of opposing states at every position and transition according to the current element's sign. Use it for extrema or signs of products over contiguous intervals and other problems where negative values reverse the ordering of states.

- [ ] A: 152. Maximum Product Subarray ([LeetCode CN](https://leetcode.cn/problems/maximum-product-subarray/) | [LeetCode](https://leetcode.com/problems/maximum-product-subarray/)) — maintain both maximum and minimum products
- [ ] B: 1567. Maximum Length of Subarray With Positive Product ([LeetCode CN](https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/) | [LeetCode](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)) — maintain lengths for both positive and negative products

## 89. Greedy Reachable Range

> **Pattern & Use Cases:** While scanning the current position, maintain the farthest reachable boundary within the known range; for a minimum-step objective, also track the current layer boundary and add a step only when crossing to the next layer. Use it when each position covers a forward interval and the task asks whether the endpoint is reachable or how many expansions are required.

- [ ] A: 55. Jump Game ([LeetCode CN](https://leetcode.cn/problems/jump-game/) | [LeetCode](https://leetcode.com/problems/jump-game/)) — maintain the farthest reachable position
- [ ] B: 45. Jump Game II ([LeetCode CN](https://leetcode.cn/problems/jump-game-ii/) | [LeetCode](https://leetcode.com/problems/jump-game-ii/)) — maintain current- and next-layer boundaries

---

# Advanced Completion Section

The following algorithms appear in the complete list but are significantly less popular than the main track. They are better suited to competitive programming, algorithm-focused roles, or focused study after completing the main track.

## 90. Two-Dimensional Difference Array

> **Pattern & Use Cases:** For uniform additions or subtractions over a submatrix, record changes only at the four boundary corners of a two-dimensional difference array, then recover the matrix with prefix sums along both dimensions after all operations. Use it for many offline submatrix updates, coverage counts, and regional feasibility checks.

- [ ] A: 2536. Increment Submatrices by One ([LeetCode CN](https://leetcode.cn/problems/increment-submatrices-by-one/) | [LeetCode](https://leetcode.com/problems/increment-submatrices-by-one/))
- [ ] B: 2132. Stamping the Grid ([LeetCode CN](https://leetcode.cn/problems/stamping-the-grid/) | [LeetCode](https://leetcode.com/problems/stamping-the-grid/))

## 91. Sweep Line and Offline Queries

> **Pattern & Use Cases:** Sort events and queries by the same key dimension, move one shared pointer to add qualifying objects incrementally, and maintain the current answer with a heap, Fenwick tree, or similar structure. Use it for batches of queries known in advance whose conditions expand monotonically in the sorting direction.

- [ ] A: 2070. Most Beautiful Item for Each Query ([LeetCode CN](https://leetcode.cn/problems/most-beautiful-item-for-each-query/) | [LeetCode](https://leetcode.com/problems/most-beautiful-item-for-each-query/))
- [ ] B: 2503. Maximum Number of Points From Grid Queries ([LeetCode CN](https://leetcode.cn/problems/maximum-number-of-points-from-grid-queries/) | [LeetCode](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/))

## 92. Meet in the Middle

> **Pattern & Use Cases:** Split a set in half, enumerate $2^{n/2}$ subset results on each side, and combine them with sorting, hashing, or binary search, trading space for a smaller exponential scale. Use it when enumerating $2^n$ states directly is too slow but the element count still permits separate enumeration of both halves for subset sums, counts, or closest-to-target objectives.

- [ ] A: 494. Target Sum ([LeetCode CN](https://leetcode.cn/problems/target-sum/) | [LeetCode](https://leetcode.com/problems/target-sum/))
- [ ] B: 1755. Closest Subsequence Sum ([LeetCode CN](https://leetcode.cn/problems/closest-subsequence-sum/) | [LeetCode](https://leetcode.com/problems/closest-subsequence-sum/))

## 93. Eulerian Path

> **Pattern & Use Cases:** First determine the start and feasibility from connectivity and vertex degrees, then use Hierholzer's algorithm to consume unused edges and record vertices in reverse when no edge remains. Use it to construct paths that use every edge exactly once, arrange itineraries, and reorder edge sequences.

- [ ] A: 332. Reconstruct Itinerary ([LeetCode CN](https://leetcode.cn/problems/reconstruct-itinerary/) | [LeetCode](https://leetcode.com/problems/reconstruct-itinerary/))
- [ ] B: 2097. Valid Arrangement of Pairs ([LeetCode CN](https://leetcode.cn/problems/valid-arrangement-of-pairs/) | [LeetCode](https://leetcode.com/problems/valid-arrangement-of-pairs/))

## 94. Tarjan's Algorithm

> **Pattern & Use Cases:** During DFS, maintain discovery time `dfn` and the earliest time `low` reachable through tree and back edges, then identify unavoidable connection structures from their relationship. Use it to find bridges and articulation points in undirected graphs and, with the corresponding Tarjan variant, strongly connected components in directed graphs.

- [ ] A: 1192. Critical Connections in a Network ([LeetCode CN](https://leetcode.cn/problems/critical-connections-in-a-network/) | [LeetCode](https://leetcode.com/problems/critical-connections-in-a-network/))
- [ ] B: 1568. Minimum Number of Days to Disconnect Island ([LeetCode CN](https://leetcode.cn/problems/minimum-number-of-days-to-disconnect-island/) | [LeetCode](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/))

## 95. Digit DP

> **Pattern & Use Cases:** Construct numbers from the most significant digit downward without exceeding an upper bound; the state usually includes the current position, whether the prefix is tight to the bound, whether it still consists of leading zeros, and problem-specific statistics, while states no longer constrained by the bound are memoized. Use it to count integers in a range that satisfy constraints on digit composition, occurrence counts, or adjacent relationships.

- [ ] A: 357. Count Numbers with Unique Digits ([LeetCode CN](https://leetcode.cn/problems/count-numbers-with-unique-digits/) | [LeetCode](https://leetcode.com/problems/count-numbers-with-unique-digits/))
- [ ] B: 902. Numbers At Most N Given Digit Set ([LeetCode CN](https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/) | [LeetCode](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/))

## 96. Lazy-Propagation Segment Tree

> **Pattern & Use Cases:** When a range update fully covers a node, update its aggregate directly and store a lazy tag; push the tag to children only when they must be visited, keeping updates and queries at $O(\log n)$. Use it when frequent range updates coexist with range-sum, extremum, or coverage-count queries.

- [ ] A: 729. My Calendar I ([LeetCode CN](https://leetcode.cn/problems/my-calendar-i/) | [LeetCode](https://leetcode.com/problems/my-calendar-i/))
- [ ] B: 732. My Calendar III ([LeetCode CN](https://leetcode.cn/problems/my-calendar-iii/) | [LeetCode](https://leetcode.com/problems/my-calendar-iii/))

---

# Topics Not Currently Recommended for the Main Track

- Network flow and minimum cut
- The full theory of strongly connected components
- Aho-Corasick automaton
- Z-function
- Suffix arrays and suffix automata
- Linear basis
- Splay trees
- Mo's algorithm
- Centroid decomposition, virtual trees, and DSU on tree
- Profile DP
- Probability and expectation DP
- Generating functions and FWT
- Advanced computational geometry

These algorithms rarely satisfy all three requirements at once: strong representativeness, non-obscure problems, and moderate difficulty. For typical campus recruiting, experienced-hire recruiting, and mainstream interviews, they have much lower priority than the main track.