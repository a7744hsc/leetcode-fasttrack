**简体中文** | [English](README_EN.md) | [在线学习进度](https://a7744hsc.github.io/leetcode-fasttrack/)

# LeetCode 主流算法最小完备题单

## 题单来源

本题单参考[灵茶山艾府《如何科学刷题？》](https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/)，使用 GPT 5.6 Sol 结合现有题单生成，并在主流算法题单的基础上进行筛选和精简。

- 题单主线以经中国站和国际站元数据验证、两站均可免费练习的简单和中等题为主，仅保留少量高度经典且模板化的官方困难题。

## 目标用户

- 时间有限，希望在面试、笔试或竞赛前集中突击算法，但面对篇幅较长的参考题单时难以选择练习题的学习者。
- 已有一定算法基础，希望以常见解题模式为主线进行快速复习和突击的学习者。

> 本题单按面试、笔试和力扣竞赛中**独立解题模式**的流行度排序。每个知识点或模式选择两题：**A 为模板/标准题，B 为稍难综合题**。

## 使用说明

- 个人建议先阅读每个专题的“考察与技巧”，再尝试解题；以理解解题模式为目标。有些解题思路很巧妙，不必过分死磕，卡住时可以及时参考题解。完成后总结模板和适用条件。
- [在线学习进度](https://a7744hsc.github.io/leetcode-fasttrack/)会将完成状态保存在当前浏览器中，并支持导入、导出以便迁移到其他设备。

欢迎贡献缺失的模式和勘误。

---

# 第一阶段：最高频基础算法

## 1. 哈希表

> **考察与技巧：** 用哈希表把“反复查找”降为均摊 $O(1)$。适用于频繁判断某个对象是否出现、统计出现次数、查找满足某种关系的对象，或按共同特征分组的问题。

- [ ] A：1. 两数之和（[中国站](https://leetcode.cn/problems/two-sum/)｜[国际站](https://leetcode.com/problems/two-sum/)）——枚举右、哈希维护左
- [ ] B：49. 字母异位词分组（[中国站](https://leetcode.cn/problems/group-anagrams/)｜[国际站](https://leetcode.com/problems/group-anagrams/)）——设计哈希键

## 2. 排序与自定义比较

> **考察与技巧：** 排序可以消除原顺序的干扰，使相关元素相邻，或让后续处理具有单调性；若默认大小关系不能表达目标，则按题意定义比较规则。适用于原顺序不重要，并且需要分组去重、处理区间、比较相邻元素、使用双指针或贪心，或按组合结果决定元素先后顺序的问题。

- [ ] A：56. 合并区间（[中国站](https://leetcode.cn/problems/merge-intervals/)｜[国际站](https://leetcode.com/problems/merge-intervals/)）
- [ ] B：179. 最大数（[中国站](https://leetcode.cn/problems/largest-number/)｜[国际站](https://leetcode.com/problems/largest-number/)）——自定义排序规则

## 3. 一次遍历与前缀最值

> **考察与技巧：** 枚举当前位置作为右端点，同时维护左侧已遍历元素的最优值，把枚举所有数对的 $O(n^2)$ 降为 $O(n)$；通常先计算答案，再更新最优值，以保证左端点位于当前点之前。适用于答案由一对满足 $i<j$ 的位置组成，且目标可以拆成“左侧贡献＋右侧贡献”的问题。

- [ ] A：121. 买卖股票的最佳时机（[中国站](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)｜[国际站](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)）
- [ ] B：1014. 最佳观光组合（[中国站](https://leetcode.cn/problems/best-sightseeing-pair/)｜[国际站](https://leetcode.com/problems/best-sightseeing-pair/)）

核心思维是“枚举右，维护左”。

## 4. 相向双指针

> **考察与技巧：** 在序列两端放置指针，根据当前结果与目标的关系移动其中一端，每次排除一批不可能的候选。适用于有序数组中的数对匹配、固定部分元素后继续查找组合，以及具有单调排除性质的问题。

- [ ] A：167. 两数之和 II（[中国站](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)｜[国际站](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)）
- [ ] B：15. 三数之和（[中国站](https://leetcode.cn/problems/3sum/)｜[国际站](https://leetcode.com/problems/3sum/)）

## 5. 同向双指针与原地修改

> **考察与技巧：** 用一个指针扫描未处理元素，另一个指针维护已处理区间的边界，通过覆盖或交换原地更新数组。适用于删除、筛选、去重、移动或分区元素，并要求 $O(1)$ 额外空间的问题。

- [ ] A：283. 移动零（[中国站](https://leetcode.cn/problems/move-zeroes/)｜[国际站](https://leetcode.com/problems/move-zeroes/)）
- [ ] B：75. 颜色分类（[中国站](https://leetcode.cn/problems/sort-colors/)｜[国际站](https://leetcode.com/problems/sort-colors/)）——三指针

## 6. 定长滑动窗口

> **考察与技巧：** 维护长度固定为 `k` 的连续窗口，新元素进入时同步移除旧元素，并增量更新窗口统计量，使每个元素只进出一次。适用于固定长度子数组或子串的求和、计数、频率匹配和最值问题。

- [ ] A：1456. 定长子串中元音的最大数目（[中国站](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)｜[国际站](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)）
- [ ] B：438. 找到字符串中所有字母异位词（[中国站](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)｜[国际站](https://leetcode.com/problems/find-all-anagrams-in-a-string/)）

## 7. 不定长滑动窗口

> **考察与技巧：** 右指针负责扩展窗口，窗口不合法时移动左指针直至恢复合法，并同步维护窗口内的计数或状态。适用于合法性随窗口扩张单调变化、目标是求最长或最大连续区间的问题。

- [ ] A：3. 无重复字符的最长子串（[中国站](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)｜[国际站](https://leetcode.com/problems/longest-substring-without-repeating-characters/)）
- [ ] B：904. 水果成篮（[中国站](https://leetcode.cn/problems/fruit-into-baskets/)｜[国际站](https://leetcode.com/problems/fruit-into-baskets/)）

掌握“右指针扩展、左指针恢复合法性”。

## 8. 求最短的滑动窗口

> **考察与技巧：** 右指针先把窗口扩展到满足条件，再在保持合法的前提下尽量收缩左边界，并在收缩过程中更新答案。适用于窗口条件具有单调性、目标是寻找最短满足区间或最小代价连续区间的问题。

- [ ] A：209. 长度最小的子数组（[中国站](https://leetcode.cn/problems/minimum-size-subarray-sum/)｜[国际站](https://leetcode.com/problems/minimum-size-subarray-sum/)）
- [ ] B：1234. 替换子串得到平衡字符串（[中国站](https://leetcode.cn/problems/replace-the-substring-for-balanced-string/)｜[国际站](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)）

## 9. 一维前缀和

> **考察与技巧：** 预处理从起点到各位置的累计信息，使区间结果可由两个前缀相减；不能相减的运算则可分别维护前缀和后缀再组合。适用于静态数组中的多次区间查询，或需要计算每个位置左右两侧聚合结果的问题。

- [ ] A：303. 区域和检索（[中国站](https://leetcode.cn/problems/range-sum-query-immutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-immutable/)）
- [ ] B：238. 除自身以外数组的乘积（[中国站](https://leetcode.cn/problems/product-of-array-except-self/)｜[国际站](https://leetcode.com/problems/product-of-array-except-self/)）——前后缀分解

## 10. 前缀和＋哈希表

> **考察与技巧：** 把连续区间条件改写为两个前缀状态之间的关系，再用哈希表记录历史前缀状态的出现次数或最早位置。适用于统计或寻找满足指定和、数量平衡等条件的连续子数组。

- [ ] A：525. 连续数组（[中国站](https://leetcode.cn/problems/contiguous-array/)｜[国际站](https://leetcode.com/problems/contiguous-array/)）
- [ ] B：560. 和为 K 的子数组（[中国站](https://leetcode.cn/problems/subarray-sum-equals-k/)｜[国际站](https://leetcode.com/problems/subarray-sum-equals-k/)）

将“子数组条件”转换为“两段前缀的关系”。

## 11. 二维前缀和

> **考察与技巧：** 预处理每个左上角前缀矩形的累计值，再用容斥公式通过四个前缀值计算任意子矩形。适用于静态矩阵中的多次矩形求和、计数或其他可加减的区域查询。

- [ ] A：304. 二维区域和检索（[中国站](https://leetcode.cn/problems/range-sum-query-2d-immutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-2d-immutable/)）
- [ ] B：1314. 矩阵区域和（[中国站](https://leetcode.cn/problems/matrix-block-sum/)｜[国际站](https://leetcode.com/problems/matrix-block-sum/)）

## 12. 一维差分数组

> **考察与技巧：** 区间修改时只在起点和终点后一位记录变化，完成全部操作后再通过一次前缀累加还原每个位置。适用于大量离线区间加减、覆盖次数统计或最终状态计算的问题。

- [ ] A：1109. 航班预订统计（[中国站](https://leetcode.cn/problems/corporate-flight-bookings/)｜[国际站](https://leetcode.com/problems/corporate-flight-bookings/)）
- [ ] B：1094. 拼车（[中国站](https://leetcode.cn/problems/car-pooling/)｜[国际站](https://leetcode.com/problems/car-pooling/)）

重点掌握：区间起点加值、终点后一位减值、最后求前缀和还原数组。

## 13. 区间排序与区间合并

> **考察与技巧：** 先按区间起点排序，再线性扫描并维护当前合并区间的最远终点，相交时扩展、不相交时开始新区间。适用于区间合并、插入、覆盖范围统计以及需要先消除重叠的问题。

- [ ] A：56. 合并区间（[中国站](https://leetcode.cn/problems/merge-intervals/)｜[国际站](https://leetcode.com/problems/merge-intervals/)）
- [ ] B：57. 插入区间（[中国站](https://leetcode.cn/problems/insert-interval/)｜[国际站](https://leetcode.com/problems/insert-interval/)）

## 14. 普通二分查找

> **考察与技巧：** 在单调序列或单调判定区间中反复舍弃不可能包含答案的一半，并始终维持统一的开闭区间不变量。适用于精确查找、上下界定位，以及寻找第一个或最后一个满足条件的位置。

- [ ] A：704. 二分查找（[中国站](https://leetcode.cn/problems/binary-search/)｜[国际站](https://leetcode.com/problems/binary-search/)）
- [ ] B：34. 在排序数组中查找第一个和最后一个位置（[中国站](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)｜[国际站](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)）

建议固定使用一种二分模板，例如左闭右开或红蓝染色法。

## 15. 二分答案

> **考察与技巧：** 在答案的候选范围上二分，并用 `check(mid)` 判断候选值是否可行，利用可行性的单调性寻找边界。适用于求最小可行值或最大可行值的速度、容量、距离、阈值和资源分配问题。

- [ ] A：875. 爱吃香蕉的珂珂（[中国站](https://leetcode.cn/problems/koko-eating-bananas/)｜[国际站](https://leetcode.com/problems/koko-eating-bananas/)）
- [ ] B：1011. 在 D 天内送达包裹的能力（[中国站](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/)｜[国际站](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)）

固定思考：答案是否单调、`check(mid)` 表示什么、求第一个合法值还是最后一个合法值。

---

# 第二阶段：常用数据结构

## 16. 栈与括号匹配

> **考察与技巧：** 栈按后进先出的顺序保存尚未完成的上下文，遇到闭合标记或当前阶段结束时回到最近状态。适用于括号匹配、嵌套结构解析、表达式处理，以及需要撤销最近操作的问题。

- [ ] A：20. 有效的括号（[中国站](https://leetcode.cn/problems/valid-parentheses/)｜[国际站](https://leetcode.com/problems/valid-parentheses/)）
- [ ] B：394. 字符串解码（[中国站](https://leetcode.cn/problems/decode-string/)｜[国际站](https://leetcode.com/problems/decode-string/)）

## 17. 单调栈

> **考察与技巧：** 用栈保存答案尚未确定的元素并维持栈内值单调，当前元素破坏单调性时弹栈并结算对应关系或边界。适用于寻找左右第一个更大或更小元素、下一个满足条件的位置，以及由最近边界决定的连续范围问题。

- [ ] A：739. 每日温度（[中国站](https://leetcode.cn/problems/daily-temperatures/)｜[国际站](https://leetcode.com/problems/daily-temperatures/)）
- [ ] B：901. 股票价格跨度（[中国站](https://leetcode.cn/problems/online-stock-span/)｜[国际站](https://leetcode.com/problems/online-stock-span/)）

分别代表“找右侧第一个更大元素”和“在线维护左侧连续范围”。

## 18. 单调队列

> **考察与技巧：** 双端队列只保存仍可能成为窗口最值的下标，入队时从队尾淘汰更差候选，窗口移动时从队首删除过期候选。适用于滑动窗口最大值或最小值，以及窗口合法性依赖动态极值的问题。

- [ ] A：239. 滑动窗口最大值（[中国站](https://leetcode.cn/problems/sliding-window-maximum/)｜[国际站](https://leetcode.com/problems/sliding-window-maximum/)）
- [ ] B：1438. 绝对差不超过限制的最长连续子数组（[中国站](https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)｜[国际站](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)）

第 239 题虽然标为困难，但它是单调队列最标准的模板题。

## 19. 堆与 Top K

> **考察与技巧：** 用大小为 `K` 的堆保留当前最优候选，并通过堆顶持续淘汰其中最差的元素，将排序全部元素的代价降为 $O(n\log K)$。适用于第 `K` 大或第 `K` 小、前 `K` 个高频项，以及只关心部分排名结果的问题。

- [ ] A：215. 数组中的第 K 个最大元素（[中国站](https://leetcode.cn/problems/kth-largest-element-in-an-array/)｜[国际站](https://leetcode.com/problems/kth-largest-element-in-an-array/)）
- [ ] B：347. 前 K 个高频元素（[中国站](https://leetcode.cn/problems/top-k-frequent-elements/)｜[国际站](https://leetcode.com/problems/top-k-frequent-elements/)）

## 20. 多路归并堆

> **考察与技巧：** 把每个有序序列的当前候选放入堆，每次取出全局最优项后，只补入其来源序列的下一项，使堆大小受序列数量限制。适用于合并多个有序序列、从多路候选中按序取值，以及生成前 `K` 个最小或最大组合的问题。

- [ ] A：373. 查找和最小的 K 对数字（[中国站](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/)｜[国际站](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)）
- [ ] B：23. 合并 K 个升序链表（[中国站](https://leetcode.cn/problems/merge-k-sorted-lists/)｜[国际站](https://leetcode.com/problems/merge-k-sorted-lists/)）

## 21. 链表反转

> **考察与技巧：** 遍历链表时先保存原后继，再将当前节点指向前驱；局部反转还需保留区间两侧的连接点并在完成后重新接回。适用于整条链表或指定区间的反转，以及以分段反转为基础的链表重排问题。

- [ ] A：206. 反转链表（[中国站](https://leetcode.cn/problems/reverse-linked-list/)｜[国际站](https://leetcode.com/problems/reverse-linked-list/)）
- [ ] B：92. 反转链表 II（[中国站](https://leetcode.cn/problems/reverse-linked-list-ii/)｜[国际站](https://leetcode.com/problems/reverse-linked-list-ii/)）

## 22. 链表快慢指针

> **考察与技巧：** 让两个指针以不同速度前进，利用它们的位置差或周期性判断链表结构；循环条件决定偶数长度时落在左中点还是右中点。适用于寻找链表中点、检测环及定位环入口的问题。

- [ ] A：876. 链表的中间结点（[中国站](https://leetcode.cn/problems/middle-of-the-linked-list/)｜[国际站](https://leetcode.com/problems/middle-of-the-linked-list/)）
- [ ] B：142. 环形链表 II（[中国站](https://leetcode.cn/problems/linked-list-cycle-ii/)｜[国际站](https://leetcode.com/problems/linked-list-cycle-ii/)）

## 23. 哈希表＋链表

> **考察与技巧：** 哈希表负责按键或对象快速定位，链表负责维护连接关系或动态顺序，任何修改都必须同步更新两种结构。适用于既要常数时间查找，又要维护节点顺序、访问先后或对象对应关系的问题。

- [ ] A：138. 随机链表的复制（[中国站](https://leetcode.cn/problems/copy-list-with-random-pointer/)｜[国际站](https://leetcode.com/problems/copy-list-with-random-pointer/)）——原节点映射到复制节点
- [ ] B：146. LRU 缓存（[中国站](https://leetcode.cn/problems/lru-cache/)｜[国际站](https://leetcode.com/problems/lru-cache/)）——哈希表＋双向链表

## 24. 字典树 Trie

> **考察与技巧：** Trie 按字符逐层建树，让具有相同前缀的字符串共享路径，并用结束标记区分完整字符串与普通前缀。适用于大量字符串的插入、精确查找、前缀查询，以及按字符分支进行通配搜索的问题。

- [ ] A：208. 实现 Trie（[中国站](https://leetcode.cn/problems/implement-trie-prefix-tree/)｜[国际站](https://leetcode.com/problems/implement-trie-prefix-tree/)）
- [ ] B：211. 添加与搜索单词（[中国站](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)｜[国际站](https://leetcode.com/problems/design-add-and-search-words-data-structure/)）

## 25. 并查集

> **考察与技巧：** 用代表元标识每个集合，通过路径压缩加速查找，并按大小或秩合并不同集合，使操作接近常数时间。适用于动态连通性判断、等价关系分组、集合合并和无向图成环检测的问题。

- [ ] A：684. 冗余连接（[中国站](https://leetcode.cn/problems/redundant-connection/)｜[国际站](https://leetcode.com/problems/redundant-connection/)）
- [ ] B：721. 账户合并（[中国站](https://leetcode.cn/problems/accounts-merge/)｜[国际站](https://leetcode.com/problems/accounts-merge/)）

掌握路径压缩和按大小/按秩合并。

## 26. 树状数组

> **考察与技巧：** 树状数组利用 `lowbit` 分层维护前缀信息，使单点更新和前缀查询都能在 $O(\log n)$ 内完成，区间结果再由两个前缀相减得到。适用于动态数组中的频繁单点修改、区间求和、频率统计和排名查询。

- [ ] A：307. 区域和检索 - 数组可修改（[中国站](https://leetcode.cn/problems/range-sum-query-mutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-mutable/)）
- [ ] B：1409. 查询带键的排列（[中国站](https://leetcode.cn/problems/queries-on-a-permutation-with-key/)｜[国际站](https://leetcode.com/problems/queries-on-a-permutation-with-key/)）

第 307 题建议分别使用树状数组和线段树实现一次。

## 27. 线段树

> **考察与技巧：** 线段树递归划分区间，并在每个节点保存可由左右子区间合并的信息，从而在 $O(\log n)$ 内完成单点修改和区间查询。适用于动态序列中的频繁修改，以及区间和、最值、计数等满足结合性的聚合查询。

- [ ] A：307. 区域和检索 - 数组可修改（[中国站](https://leetcode.cn/problems/range-sum-query-mutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-mutable/)）
- [ ] B：3187. 数组中的峰值（[中国站](https://leetcode.cn/problems/peaks-in-array/)｜[国际站](https://leetcode.com/problems/peaks-in-array/)）

主线只要求掌握建树、单点修改和区间查询；懒更新放到最后。

## 28. 数据结构设计

> **考察与技巧：** 从各项操作的目标复杂度反推所需结构，再明确辅助信息与主数据之间的不变量，并在每次修改时同步维护。适用于单一结构无法同时满足查找、插入、删除、取最值或随机访问等复杂度要求的设计题。

- [ ] A：155. 最小栈（[中国站](https://leetcode.cn/problems/min-stack/)｜[国际站](https://leetcode.com/problems/min-stack/)）
- [ ] B：380. O(1) 插入、删除和获取随机元素（[中国站](https://leetcode.cn/problems/insert-delete-getrandom-o1/)｜[国际站](https://leetcode.com/problems/insert-delete-getrandom-o1/)）

---

# 第三阶段：树、搜索和回溯

## 29. 二叉树基础 DFS

> **考察与技巧：** 先定义 DFS 对当前子树返回什么，或沿根到当前节点维护什么状态，并在离开节点时恢复会影响其他分支的信息。适用于统计树的高度、节点或路径，判断子树性质，以及处理路径累计条件的问题。

- [ ] A：104. 二叉树的最大深度（[中国站](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)｜[国际站](https://leetcode.com/problems/maximum-depth-of-binary-tree/)）
- [ ] B：437. 路径总和 III（[中国站](https://leetcode.cn/problems/path-sum-iii/)｜[国际站](https://leetcode.com/problems/path-sum-iii/)）——树上 DFS＋前缀和

## 30. 二叉树后序遍历

> **考察与技巧：** 先取得左右子树的结果，再在当前节点合并；需要同时区分可向父节点延伸的返回值与在当前节点形成的完整答案。适用于答案依赖子树信息的高度、直径、路径最值和子树聚合问题。

- [ ] A：543. 二叉树的直径（[中国站](https://leetcode.cn/problems/diameter-of-binary-tree/)｜[国际站](https://leetcode.com/problems/diameter-of-binary-tree/)）
- [ ] B：124. 二叉树中的最大路径和（[中国站](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)｜[国际站](https://leetcode.com/problems/binary-tree-maximum-path-sum/)）

第 124 题是经典困难题，基础不足时可暂时跳过。

## 31. 二叉树 BFS

> **考察与技巧：** 用队列逐层访问节点，并在每层开始时固定当前队列长度，使本层节点与新加入的下一层节点保持分离。适用于层序遍历、最小深度、逐层统计以及提取每层边界节点的问题。

- [ ] A：102. 二叉树的层序遍历（[中国站](https://leetcode.cn/problems/binary-tree-level-order-traversal/)｜[国际站](https://leetcode.com/problems/binary-tree-level-order-traversal/)）
- [ ] B：199. 二叉树的右视图（[中国站](https://leetcode.cn/problems/binary-tree-right-side-view/)｜[国际站](https://leetcode.com/problems/binary-tree-right-side-view/)）

## 32. 二叉搜索树

> **考察与技巧：** 利用左子树小于当前节点、右子树大于当前节点的有序性，通过中序遍历获得递增序列，或递归传递每个节点允许的值域。适用于二叉搜索树的查找、验证、排名、范围查询和第 `K` 小元素问题。

- [ ] A：98. 验证二叉搜索树（[中国站](https://leetcode.cn/problems/validate-binary-search-tree/)｜[国际站](https://leetcode.com/problems/validate-binary-search-tree/)）
- [ ] B：230. 二叉搜索树中第 K 小的元素（[中国站](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)｜[国际站](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)）

## 33. 最近公共祖先 LCA

> **考察与技巧：** 后序判断目标节点位于当前节点的哪一侧，目标首次分布在不同分支或当前节点本身就是目标时即可确定最近公共祖先；有序树还可直接按值域寻找分叉点。适用于树中两个节点的共同祖先、路径汇合点和层级关系查询。

- [ ] A：235. 二叉搜索树的最近公共祖先（[中国站](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)｜[国际站](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)）
- [ ] B：236. 二叉树的最近公共祖先（[中国站](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)｜[国际站](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)）

## 34. 网格 DFS 与连通块

> **考察与技巧：** 把格子视为图节点，进入格子时立即标记，再沿合法方向递归访问；当多个起点共享相同转移规则时，也可从终点边界反向搜索。适用于网格连通块计数、区域标记、可达性判断和边界扩散问题。

- [ ] A：200. 岛屿数量（[中国站](https://leetcode.cn/problems/number-of-islands/)｜[国际站](https://leetcode.com/problems/number-of-islands/)）
- [ ] B：417. 太平洋大西洋水流问题（[中国站](https://leetcode.cn/problems/pacific-atlantic-water-flow/)｜[国际站](https://leetcode.com/problems/pacific-atlantic-water-flow/)）

## 35. 网格 BFS 与多源 BFS

> **考察与技巧：** 将一个或多个源点以距离 0 同时入队，按层向外扩展，并在邻居入队时立即标记，第一次到达即得到无权图最短距离。适用于网格最短路、同时扩散、传播轮数和到最近源点距离的问题。

- [ ] A：994. 腐烂的橘子（[中国站](https://leetcode.cn/problems/rotting-oranges/)｜[国际站](https://leetcode.com/problems/rotting-oranges/)）
- [ ] B：1091. 二进制矩阵中的最短路径（[中国站](https://leetcode.cn/problems/shortest-path-in-binary-matrix/)｜[国际站](https://leetcode.com/problems/shortest-path-in-binary-matrix/)）

## 36. 图的 DFS/BFS

> **考察与技巧：** 用邻接表或邻接矩阵表示边，通过 `visited` 避免重复访问；图可能不连通时，要从每个未访问节点重新启动遍历。适用于图的可达性判断、连通分量统计、结构复制和遍历过程中收集信息的问题。

- [ ] A：547. 省份数量（[中国站](https://leetcode.cn/problems/number-of-provinces/)｜[国际站](https://leetcode.com/problems/number-of-provinces/)）
- [ ] B：133. 克隆图（[中国站](https://leetcode.cn/problems/clone-graph/)｜[国际站](https://leetcode.com/problems/clone-graph/)）

## 37. 拓扑排序

> **考察与技巧：** 将所有入度为 0 的节点加入队列，依次移除它们的出边，并继续处理新变为入度 0 的节点；最终未能处理全部节点说明存在环。适用于有向依赖关系的可行性判断、执行顺序生成和环检测问题。

- [ ] A：207. 课程表（[中国站](https://leetcode.cn/problems/course-schedule/)｜[国际站](https://leetcode.com/problems/course-schedule/)）
- [ ] B：210. 课程表 II（[中国站](https://leetcode.cn/problems/course-schedule-ii/)｜[国际站](https://leetcode.com/problems/course-schedule-ii/)）

## 38. 状态图 BFS

> **考察与技巧：** 把每种局面编码为图节点，把一次合法操作视为无权边，再用 BFS 按操作次数递增地搜索，并对已访问状态去重。适用于有限状态之间的最少操作、最短变换和最少步数问题。

- [ ] A：433. 最小基因变化（[中国站](https://leetcode.cn/problems/minimum-genetic-mutation/)｜[国际站](https://leetcode.com/problems/minimum-genetic-mutation/)）
- [ ] B：752. 打开转盘锁（[中国站](https://leetcode.cn/problems/open-the-lock/)｜[国际站](https://leetcode.com/problems/open-the-lock/)）

重点是把状态抽象成图节点。

## 39. 子集型回溯

> **考察与技巧：** 用 `path` 记录已选元素，用 `start` 限制后续候选，并按“选择、递归、撤销”遍历每个元素选或不选的决策树。适用于选择数量不固定、元素顺序不影响结果的子集枚举和组合搜索问题。

- [ ] A：78. 子集（[中国站](https://leetcode.cn/problems/subsets/)｜[国际站](https://leetcode.com/problems/subsets/)）
- [ ] B：39. 组合总和（[中国站](https://leetcode.cn/problems/combination-sum/)｜[国际站](https://leetcode.com/problems/combination-sum/)）

## 40. 组合型回溯

> **考察与技巧：** 按位置逐步构造固定数量或满足结构约束的选择，并根据剩余候选数、剩余容量和当前前缀合法性提前剪枝。适用于选取恰好 `K` 个元素、生成合法结构，以及带数量或局部约束的组合问题。

- [ ] A：77. 组合（[中国站](https://leetcode.cn/problems/combinations/)｜[国际站](https://leetcode.com/problems/combinations/)）
- [ ] B：22. 括号生成（[中国站](https://leetcode.cn/problems/generate-parentheses/)｜[国际站](https://leetcode.com/problems/generate-parentheses/)）

## 41. 排列型回溯与去重

> **考察与技巧：** 每个位置从尚未使用的元素中选择，并用 `used` 记录当前路径；存在重复值时先排序，再跳过同一层中值相同的分支。适用于元素顺序影响结果的全排列、顺序安排和一一分配问题。

- [ ] A：46. 全排列（[中国站](https://leetcode.cn/problems/permutations/)｜[国际站](https://leetcode.com/problems/permutations/)）
- [ ] B：47. 全排列 II（[中国站](https://leetcode.cn/problems/permutations-ii/)｜[国际站](https://leetcode.com/problems/permutations-ii/)）

---

# 第四阶段：动态规划

## 42. 一维 DP

> **考察与技巧：** 定义 `dp[i]` 表示处理到位置 `i` 的方案数、可达性或最优值，再由前面有限个状态转移；只依赖少量相邻状态时可压缩空间。适用于线性序列中当前决策仅依赖较短前缀或邻近位置的问题。

- [ ] A：70. 爬楼梯（[中国站](https://leetcode.cn/problems/climbing-stairs/)｜[国际站](https://leetcode.com/problems/climbing-stairs/)）
- [ ] B：198. 打家劫舍（[中国站](https://leetcode.cn/problems/house-robber/)｜[国际站](https://leetcode.com/problems/house-robber/)）

## 43. 最大子数组 DP

> **考察与技巧：** 维护必须以当前位置结尾的最优值，每次在延续上一段和从当前位置重新开始之间选择，并用所有结尾状态更新全局答案。适用于要求连续区间，且加入新元素时只需决定延续还是重启的最值问题，包括环形序列变体。

- [ ] A：53. 最大子数组和（[中国站](https://leetcode.cn/problems/maximum-subarray/)｜[国际站](https://leetcode.com/problems/maximum-subarray/)）
- [ ] B：918. 环形子数组的最大和（[中国站](https://leetcode.cn/problems/maximum-sum-circular-subarray/)｜[国际站](https://leetcode.com/problems/maximum-sum-circular-subarray/)）

## 44. 网格 DP

> **考察与技巧：** 用 `dp[row][col]` 表示到达当前格子的结果，按移动方向形成的依赖顺序，从已计算的相邻格子转移，并可按行压缩空间。适用于移动方向受限的网格路径计数、可达性判断和最小或最大代价问题。

- [ ] A：62. 不同路径（[中国站](https://leetcode.cn/problems/unique-paths/)｜[国际站](https://leetcode.com/problems/unique-paths/)）
- [ ] B：64. 最小路径和（[中国站](https://leetcode.cn/problems/minimum-path-sum/)｜[国际站](https://leetcode.com/problems/minimum-path-sum/)）

## 45. 0-1 背包

> **考察与技巧：** 每个物品最多选择一次，`dp[capacity]` 记录对应容量的可达性、方案数或最优值；压缩成一维后必须倒序枚举容量，避免重复使用当前物品。适用于元素不可重复选择的子集和、容量约束、方案计数和价值最优化问题。

- [ ] A：416. 分割等和子集（[中国站](https://leetcode.cn/problems/partition-equal-subset-sum/)｜[国际站](https://leetcode.com/problems/partition-equal-subset-sum/)）
- [ ] B：494. 目标和（[中国站](https://leetcode.cn/problems/target-sum/)｜[国际站](https://leetcode.com/problems/target-sum/)）

## 46. 完全背包

> **考察与技巧：** 同类物品可以重复选择，压缩成一维后正序枚举容量，使本轮状态能够继续使用当前物品；外层循环的选择决定统计组合还是排列。适用于可重复取用元素的最少数量、最大价值、可达性和方案计数问题。

- [ ] A：322. 零钱兑换（[中国站](https://leetcode.cn/problems/coin-change/)｜[国际站](https://leetcode.com/problems/coin-change/)）
- [ ] B：518. 零钱兑换 II（[中国站](https://leetcode.cn/problems/coin-change-ii/)｜[国际站](https://leetcode.com/problems/coin-change-ii/)）

需要理解求最小值、求方案数，以及组合和排列的遍历顺序区别。

## 47. 最长公共子序列 LCS

> **考察与技巧：** 定义 `dp[i][j]` 表示两个序列前缀之间的答案，根据末尾元素是否匹配，从同时缩短两侧或只缩短一侧的状态转移。适用于两个序列的公共子序列、序列对齐，以及插入、删除、替换代价问题。

- [ ] A：1143. 最长公共子序列（[中国站](https://leetcode.cn/problems/longest-common-subsequence/)｜[国际站](https://leetcode.com/problems/longest-common-subsequence/)）
- [ ] B：72. 编辑距离（[中国站](https://leetcode.cn/problems/edit-distance/)｜[国际站](https://leetcode.com/problems/edit-distance/)）

## 48. 最长递增子序列 LIS

> **考察与技巧：** 可用 `dp[i]` 表示以当前位置结尾的最优长度并枚举前驱，也可维护各长度对应的最小结尾，再用二分将复杂度降为 $O(n\log n)$。适用于保持原相对顺序的单调子序列，以及由前后单调部分组合答案的问题。

- [ ] A：300. 最长递增子序列（[中国站](https://leetcode.cn/problems/longest-increasing-subsequence/)｜[国际站](https://leetcode.com/problems/longest-increasing-subsequence/)）
- [ ] B：1671. 得到山形数组的最少删除次数（[中国站](https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/)｜[国际站](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)）

先写 $O(n^2)$ DP，再学习贪心加二分的 $O(n\log n)$ 解法。

## 49. 划分型 DP

> **考察与技巧：** 定义 `dp[i]` 表示前 `i` 个元素的结果，枚举最后一段的起点，将已解决的前缀与最后一段的合法性或贡献组合。适用于把字符串或数组切分为若干连续段，并求可行性、方案数或最优值的问题。

- [ ] A：139. 单词拆分（[中国站](https://leetcode.cn/problems/word-break/)｜[国际站](https://leetcode.com/problems/word-break/)）
- [ ] B：1043. 分隔数组以得到最大和（[中国站](https://leetcode.cn/problems/partition-array-for-maximum-sum/)｜[国际站](https://leetcode.com/problems/partition-array-for-maximum-sum/)）

## 50. 状态机 DP

> **考察与技巧：** 为过程中的互斥阶段分别定义状态，明确每种操作允许哪些状态转移，并按时间顺序用上一时刻的状态更新当前状态。适用于阶段切换受限、操作存在先后依赖、冷却期或次数限制的时序最优化问题。

- [ ] A：122. 买卖股票的最佳时机 II（[中国站](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)｜[国际站](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)）
- [ ] B：309. 买卖股票的最佳时机含冷冻期（[中国站](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)｜[国际站](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)）

## 51. 区间 DP

> **考察与技巧：** 定义 `dp[left][right]` 表示连续区间的结果，按区间长度从小到大计算，并通过处理两端或枚举分割点从更短区间转移。适用于答案由连续区间内部结构决定的回文、合并、划分和区间最优化问题。

- [ ] A：516. 最长回文子序列（[中国站](https://leetcode.cn/problems/longest-palindromic-subsequence/)｜[国际站](https://leetcode.com/problems/longest-palindromic-subsequence/)）
- [ ] B：1039. 多边形三角剖分的最低得分（[中国站](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/)｜[国际站](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)）

## 52. 树形 DP

> **考察与技巧：** 通过后序 DFS 让每个节点返回若干互斥状态，再依据当前节点的选择和父子兼容关系合并各子树结果。适用于树上选或不选、方向切换、资源分配和路径状态共同决定答案的问题。

- [ ] A：337. 打家劫舍 III（[中国站](https://leetcode.cn/problems/house-robber-iii/)｜[国际站](https://leetcode.com/problems/house-robber-iii/)）
- [ ] B：1372. 二叉树中的最长交错路径（[中国站](https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/)｜[国际站](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)）

## 53. 状态压缩 DP

> **考察与技巧：** 用整数 `mask` 的各二进制位表示元素是否已选，令 `dp[mask]` 记录该集合的可达性、方案数或最优值，再枚举加入或移除一个元素完成转移。适用于元素数量较小，且状态由已选子集决定的排列、分配、覆盖和集合划分问题。

- [ ] A：526. 优美的排列（[中国站](https://leetcode.cn/problems/beautiful-arrangement/)｜[国际站](https://leetcode.com/problems/beautiful-arrangement/)）
- [ ] B：698. 划分为 K 个相等的子集（[中国站](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/)｜[国际站](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)）

---

# 第五阶段：贪心、位运算与数学

## 54. 基础贪心

> **考察与技巧：** 每一步选择当前局部最优方案，并用交换论证或反证法证明该选择不会损害全局最优解。适用于排序后进行匹配、配对或资源分配，且当前选择能为后续保留不劣空间的问题。

- [ ] A：455. 分发饼干（[中国站](https://leetcode.cn/problems/assign-cookies/)｜[国际站](https://leetcode.com/problems/assign-cookies/)）
- [ ] B：881. 救生艇（[中国站](https://leetcode.cn/problems/boats-to-save-people/)｜[国际站](https://leetcode.com/problems/boats-to-save-people/)）

## 55. 区间贪心

> **考察与技巧：** 先按区间端点排序，再选择结束最早或延伸最远的候选，为后续决策保留尽可能大的可行空间。适用于选择最多不重叠区间、删除最少冲突区间或用最少点覆盖区间的问题。

- [ ] A：435. 无重叠区间（[中国站](https://leetcode.cn/problems/non-overlapping-intervals/)｜[国际站](https://leetcode.com/problems/non-overlapping-intervals/)）
- [ ] B：452. 用最少数量的箭引爆气球（[中国站](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)｜[国际站](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)）

## 56. 反悔贪心＋堆

> **考察与技巧：** 先暂时接受当前选择，超过限制时再用堆撤销代价最大或收益最小的历史选择，使保留方案重新合法。适用于按顺序处理任务或资源，目标是在容量、时间等约束下保留最多选择或最优收益的问题。

- [ ] A：1642. 可以到达的最远建筑（[中国站](https://leetcode.cn/problems/furthest-building-you-can-reach/)｜[国际站](https://leetcode.com/problems/furthest-building-you-can-reach/)）
- [ ] B：630. 课程表 III（[中国站](https://leetcode.cn/problems/course-schedule-iii/)｜[国际站](https://leetcode.com/problems/course-schedule-iii/)）

## 57. 贡献法

> **考察与技巧：** 把枚举答案对象改为枚举元素，计算每个元素在多少个对象中以某种角色出现，再累加其独立贡献。适用于所有子数组、子串、数对或组合的总和与计数能够按元素拆分的问题。

- [ ] A：1588. 所有奇数长度子数组的和（[中国站](https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/)｜[国际站](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)）
- [ ] B：2063. 所有子字符串中的元音（[中国站](https://leetcode.cn/problems/vowels-of-all-substrings/)｜[国际站](https://leetcode.com/problems/vowels-of-all-substrings/)）

关键是计算每个元素被多少个答案对象包含。

## 58. 基础位运算

> **考察与技巧：** 利用按位与、或、异或和移位直接操作二进制状态，其中异或可消去成对元素，`x & (x - 1)` 可移除最低位的 1。适用于奇偶性、位计数、成对抵消、状态标记和二进制集合操作问题。

- [ ] A：136. 只出现一次的数字（[中国站](https://leetcode.cn/problems/single-number/)｜[国际站](https://leetcode.com/problems/single-number/)）
- [ ] B：338. 比特位计数（[中国站](https://leetcode.cn/problems/counting-bits/)｜[国际站](https://leetcode.com/problems/counting-bits/)）

## 59. 异或与前缀异或

> **考察与技巧：** 利用 $a\oplus a=0$，通过两个前缀异或得到区间异或，再查询或统计历史前缀状态以处理区间条件。适用于静态区间异或查询，以及寻找或统计异或值满足指定关系的连续子数组。

- [ ] A：1310. 子数组异或查询（[中国站](https://leetcode.cn/problems/xor-queries-of-a-subarray/)｜[国际站](https://leetcode.com/problems/xor-queries-of-a-subarray/)）
- [ ] B：1442. 形成两个异或相等数组的三元组数目（[中国站](https://leetcode.cn/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)｜[国际站](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)）

## 60. 拆位与位贡献

> **考察与技巧：** 将整数按二进制位拆开独立处理，逐位统计 0、1 的数量或该位对答案的贡献，再合并各位结果。适用于数对间位差总和、按位与或异或约束，以及直接枚举数对代价过高的问题。

- [ ] A：477. 汉明距离总和（[中国站](https://leetcode.cn/problems/total-hamming-distance/)｜[国际站](https://leetcode.com/problems/total-hamming-distance/)）
- [ ] B：2275. 按位与结果大于零的最长组合（[中国站](https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero/)｜[国际站](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/)）

## 61. GCD、LCM 与因数

> **考察与技巧：** 用欧几里得算法求 GCD，并由 $\operatorname{lcm}(a,b)=a/\gcd(a,b)\times b$ 计算 LCM；涉及因数时只需枚举到平方根并成对处理。适用于整除关系、公共周期、重复单位、因数枚举和子数组 GCD 或 LCM 问题。

- [ ] A：1071. 字符串的最大公因子（[中国站](https://leetcode.cn/problems/greatest-common-divisor-of-strings/)｜[国际站](https://leetcode.com/problems/greatest-common-divisor-of-strings/)）
- [ ] B：2470. 最小公倍数为 K 的子数组数目（[中国站](https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k/)｜[国际站](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/)）

## 62. 质数判断与埃氏筛

> **考察与技巧：** 单次判断质数只需检查到 $\sqrt n$，批量处理则用筛法从小到大标记各质数的倍数，一次预处理整个范围。适用于质数计数、区间质数查询，以及需要反复判断多个整数是否为质数的问题。

- [ ] A：204. 计数质数（[中国站](https://leetcode.cn/problems/count-primes/)｜[国际站](https://leetcode.com/problems/count-primes/)）
- [ ] B：2523. 范围内最接近的两个质数（[中国站](https://leetcode.cn/problems/closest-prime-numbers-in-range/)｜[国际站](https://leetcode.com/problems/closest-prime-numbers-in-range/)）

## 63. 快速幂与模运算

> **考察与技巧：** 把指数按二进制拆分，通过反复平方和按位选择在 $O(\log n)$ 内计算幂，并在乘法过程中及时取模控制数值范围。适用于指数很大、结果要求取模，或答案包含指数增长和重复乘法的问题。

- [ ] A：50. Pow(x, n)（[中国站](https://leetcode.cn/problems/powx-n/)｜[国际站](https://leetcode.com/problems/powx-n/)）
- [ ] B：1922. 统计好数字的数目（[中国站](https://leetcode.cn/problems/count-good-numbers/)｜[国际站](https://leetcode.com/problems/count-good-numbers/)）

## 64. 摩尔投票

> **考察与技巧：** 将不同元素两两抵消以保留可能的高频候选；出现次数超过 $n/(k+1)$ 的元素最多有 `k` 个，因此可维护有限候选并在最后验证。适用于在线性时间、常数额外空间内寻找超过固定比例阈值的元素。

- [ ] A：169. 多数元素（[中国站](https://leetcode.cn/problems/majority-element/)｜[国际站](https://leetcode.com/problems/majority-element/)）
- [ ] B：229. 多数元素 II（[中国站](https://leetcode.cn/problems/majority-element-ii/)｜[国际站](https://leetcode.com/problems/majority-element-ii/)）

---

# 第六阶段：字符串算法

## 65. KMP

> **考察与技巧：** 用前缀函数记录模式串各前缀的最长相等真前后缀，失配时跳转模式串位置并复用已有匹配，使文本指针无需回退。适用于线性时间字符串匹配，以及分析字符串的边界、周期和重复结构的问题。

- [ ] A：28. 找出字符串中第一个匹配项的下标（[中国站](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)｜[国际站](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)）
- [ ] B：459. 重复的子字符串（[中国站](https://leetcode.cn/problems/repeated-substring-pattern/)｜[国际站](https://leetcode.com/problems/repeated-substring-pattern/)）

## 66. 回文中心扩展与 Manacher

> **考察与技巧：** 将每个字符或字符间隙作为中心向两侧扩展；Manacher 进一步利用已知回文区间的对称半径，将全部中心的处理降为线性时间。适用于统计回文子串、寻找最长回文子串和获取各中心最大回文半径的问题。

- [ ] A：5. 最长回文子串（[中国站](https://leetcode.cn/problems/longest-palindromic-substring/)｜[国际站](https://leetcode.com/problems/longest-palindromic-substring/)）
- [ ] B：647. 回文子串（[中国站](https://leetcode.cn/problems/palindromic-substrings/)｜[国际站](https://leetcode.com/problems/palindromic-substrings/)）

建议先用中心扩展完成，再将两题改写成 Manacher。

## 67. 滚动哈希

> **考察与技巧：** 将序列映射为多项式哈希，预处理前缀哈希和幂后可在 $O(1)$ 内取得任意子串哈希，并用双哈希或结果校验降低冲突风险。适用于大量子串比较、重复片段检测，以及结合二分查找长度的问题。

- [ ] A：187. 重复的 DNA 序列（[中国站](https://leetcode.cn/problems/repeated-dna-sequences/)｜[国际站](https://leetcode.com/problems/repeated-dna-sequences/)）
- [ ] B：718. 最长重复子数组（[中国站](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)｜[国际站](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)）

## 68. 子序列预处理

> **考察与技巧：** 单次子序列判断可用双指针顺序匹配；面对同一目标序列的多次查询，则预处理各字符位置或下一次出现位置，再二分或直接跳转。适用于固定长序列、反复判断多个短序列能否按相对顺序匹配的问题。

- [ ] A：392. 判断子序列（[中国站](https://leetcode.cn/problems/is-subsequence/)｜[国际站](https://leetcode.com/problems/is-subsequence/)）
- [ ] B：792. 匹配子序列的单词数（[中国站](https://leetcode.cn/problems/number-of-matching-subsequences/)｜[国际站](https://leetcode.com/problems/number-of-matching-subsequences/)）

---

# 第七阶段：图论专项

## 69. Dijkstra 最短路

> **考察与技巧：** 用最小堆取出当前距离最小的节点，并通过邻边不断松弛其他距离；边权非负时，已确定的最短距离不会被后续路径改善。适用于非负权图的单源最短路，以及路径代价随扩展单调不减的最优路径问题。

- [ ] A：743. 网络延迟时间（[中国站](https://leetcode.cn/problems/network-delay-time/)｜[国际站](https://leetcode.com/problems/network-delay-time/)）
- [ ] B：1631. 最小体力消耗路径（[中国站](https://leetcode.cn/problems/path-with-minimum-effort/)｜[国际站](https://leetcode.com/problems/path-with-minimum-effort/)）

## 70. Floyd 全源最短路

> **考察与技巧：** 依次允许每个节点作为中转点，用 `dist[i][k] + dist[k][j]` 更新任意点对距离，使可用中转点集合逐步扩大。适用于节点数较小、需要查询多组点对最短路或计算传递关系的问题。

- [ ] A：1334. 阈值距离内邻居最少的城市（[中国站](https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)｜[国际站](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)）
- [ ] B：2976. 转换字符串的最小成本 I（[中国站](https://leetcode.cn/problems/minimum-cost-to-convert-string-i/)｜[国际站](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)）

## 71. 最小生成树

> **考察与技巧：** Kruskal 按边权从小到大选择不会成环的边，Prim 则不断选择连接已选集合与外部节点的最小边，最终用 `n - 1` 条边连通所有节点。适用于无向图中以最小总成本连接全部节点，以及判断生成树边作用的问题。

- [ ] A：1584. 连接所有点的最小费用（[中国站](https://leetcode.cn/problems/min-cost-to-connect-all-points/)｜[国际站](https://leetcode.com/problems/min-cost-to-connect-all-points/)）
- [ ] B：1489. 最小生成树中的关键边和伪关键边（[中国站](https://leetcode.cn/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)｜[国际站](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)）

## 72. 二分图染色

> **考察与技巧：** 对每个连通分量用 DFS 或 BFS 交替染两种颜色，相邻节点出现同色冲突时说明图中存在奇环。适用于把对象分成两个互斥组、验证二分图，以及处理成对冲突关系的问题。

- [ ] A：785. 判断二分图（[中国站](https://leetcode.cn/problems/is-graph-bipartite/)｜[国际站](https://leetcode.com/problems/is-graph-bipartite/)）
- [ ] B：886. 可能的二分法（[中国站](https://leetcode.cn/problems/possible-bipartition/)｜[国际站](https://leetcode.com/problems/possible-bipartition/)）

## 73. 0-1 BFS

> **考察与技巧：** 边权仅为 0 或 1 时用双端队列进行松弛：权重 0 的转移放队首，权重 1 的转移放队尾，使节点近似按距离递增处理。适用于只区分免费操作与代价 1 操作的最短路和最少修改次数问题。

- [ ] A：1368. 使网格图至少有一条有效路径的最小代价（[中国站](https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)｜[国际站](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)）
- [ ] B：2290. 到达角落需要移除障碍物的最小数目（[中国站](https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/)｜[国际站](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)）

两题均为官方困难，但属于高度标准化的 0-1 BFS，可最后再做。

---

# 第八阶段：高频独立模式补全

本阶段补充前七阶段中没有单独成节、但具有独立解法不变量的高频模式。它们不是为了补齐某个榜单；如果一道未收录题与现有代表题同构，仍然不额外加入。

建议穿插学习：74～80 接在第一阶段后，81～84 接在第二阶段后，85～87 接在第三阶段后，88 接在第四阶段后，89 接在第五阶段后。

## 74. 哈希集合与序列起点

> **考察与技巧：** 用哈希集合在均摊 $O(1)$ 时间判断元素是否存在；扩展连续序列时只从不存在前驱的起点出发，避免重复扫描同一段。适用于忽略原顺序后的判重、存在性查询和连续整数段统计问题。

- [ ] A：217. 存在重复元素（[中国站](https://leetcode.cn/problems/contains-duplicate/)｜[国际站](https://leetcode.com/problems/contains-duplicate/)）——集合判重
- [ ] B：128. 最长连续序列（[中国站](https://leetcode.cn/problems/longest-consecutive-sequence/)｜[国际站](https://leetcode.com/problems/longest-consecutive-sequence/)）——只从序列起点扩展

## 75. 双指针面积与蓄水

> **考察与技巧：** 当左右边界共同决定当前容量时，较弱的一侧构成上限，因此优先移动该侧，并利用另一侧已足够强排除当前边界的其余组合。适用于答案由两端距离和较弱边界决定，且可单调排除一侧的面积、容量或累积量问题。

- [ ] A：11. 盛最多水的容器（[中国站](https://leetcode.cn/problems/container-with-most-water/)｜[国际站](https://leetcode.com/problems/container-with-most-water/)）
- [ ] B：42. 接雨水（[中国站](https://leetcode.cn/problems/trapping-rain-water/)｜[国际站](https://leetcode.com/problems/trapping-rain-water/)）

第 42 题虽为官方困难题，但双指针解法高度经典；重点是理解为什么只需移动较低边界。

## 76. 原地标记与下标映射

> **考察与技巧：** 当元素值域能映射到数组下标时，可把输入数组本身作为哈希表，通过取负、交换或归位记录某个值是否出现。适用于要求 $O(1)$ 额外空间寻找缺失值、重复值或第一个未出现正数的问题。

- [ ] A：448. 找到所有数组中消失的数字（[中国站](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)｜[国际站](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)）——符号标记
- [ ] B：41. 缺失的第一个正数（[中国站](https://leetcode.cn/problems/first-missing-positive/)｜[国际站](https://leetcode.com/problems/first-missing-positive/)）——原地哈希

## 77. 原地反转与排列后继

> **考察与技巧：** 将整体顺序变换拆成若干次区间反转；构造字典序后继时，则找到可增大的最右枢轴，交换后把后缀恢复为最小顺序。适用于常数空间的循环移位、分段重排和寻找相邻字典序排列的问题。

- [ ] A：189. 轮转数组（[中国站](https://leetcode.cn/problems/rotate-array/)｜[国际站](https://leetcode.com/problems/rotate-array/)）——三次反转
- [ ] B：31. 下一个排列（[中国站](https://leetcode.cn/problems/next-permutation/)｜[国际站](https://leetcode.com/problems/next-permutation/)）——字典序后继

## 78. 矩阵边界模拟与坐标变换

> **考察与技巧：** 分层遍历矩阵时维护上下左右边界并在每轮收缩；原地几何变换则将目标坐标映射拆成转置与行列反转。适用于矩阵的螺旋或分层遍历，以及要求常数额外空间的旋转、翻转问题。

- [ ] A：54. 螺旋矩阵（[中国站](https://leetcode.cn/problems/spiral-matrix/)｜[国际站](https://leetcode.com/problems/spiral-matrix/)）——收缩四条边界
- [ ] B：48. 旋转图像（[中国站](https://leetcode.cn/problems/rotate-image/)｜[国际站](https://leetcode.com/problems/rotate-image/)）——转置＋反转

## 79. 旋转有序数组二分

> **考察与技巧：** 旋转后的有序数组在每次二分时至少有一半仍保持有序，先识别有序区间，再根据目标值是否落在其范围内舍弃另一半。适用于在无重复旋转有序数组中以 $O(\log n)$ 查找目标或定位最小值。

- [ ] A：153. 寻找旋转排序数组中的最小值（[中国站](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)｜[国际站](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)）
- [ ] B：33. 搜索旋转排序数组（[中国站](https://leetcode.cn/problems/search-in-rotated-sorted-array/)｜[国际站](https://leetcode.com/problems/search-in-rotated-sorted-array/)）

## 80. 二维矩阵单调搜索

> **考察与技巧：** 全局按行衔接有序的矩阵可映射为一维数组二分；行列分别单调时从右上角或左下角出发，每次比较都能排除一整行或一整列。适用于具有整体有序或行列双重单调性的矩阵查找问题。

- [ ] A：74. 搜索二维矩阵（[中国站](https://leetcode.cn/problems/search-a-2d-matrix/)｜[国际站](https://leetcode.com/problems/search-a-2d-matrix/)）——一维化二分
- [ ] B：240. 搜索二维矩阵 II（[中国站](https://leetcode.cn/problems/search-a-2d-matrix-ii/)｜[国际站](https://leetcode.com/problems/search-a-2d-matrix-ii/)）——阶梯式搜索

## 81. 单调栈左右边界与贡献

> **考察与技巧：** 用单调栈寻找每个元素左右第一个更小或更大的位置，从而确定它作为区间极值时能够控制的最大范围；重复值需统一一侧严格、一侧非严格。适用于按边界计算最大矩形，以及统计各元素作为子数组最小值或最大值贡献的问题。

- [ ] A：84. 柱状图中最大的矩形（[中国站](https://leetcode.cn/problems/largest-rectangle-in-histogram/)｜[国际站](https://leetcode.com/problems/largest-rectangle-in-histogram/)）——弹栈时结算矩形
- [ ] B：907. 子数组的最小值之和（[中国站](https://leetcode.cn/problems/sum-of-subarray-minimums/)｜[国际站](https://leetcode.com/problems/sum-of-subarray-minimums/)）——边界计数与贡献法

第 84 题虽为官方困难题，但它是“左右第一个更小元素”最标准的边界模板。

## 82. 数据流中的堆与双堆

> **考察与技巧：** 固定大小的最小堆可保留数据流中最大的 `K` 个元素；双堆则分别维护较小和较大的一半，并保持两侧大小与顺序平衡。适用于数据持续到来、无法反复整体排序，但需要随时查询第 `K` 大或中位数的问题。

- [ ] A：703. 数据流中的第 K 大元素（[中国站](https://leetcode.cn/problems/kth-largest-element-in-a-stream/)｜[国际站](https://leetcode.com/problems/kth-largest-element-in-a-stream/)）——固定大小最小堆
- [ ] B：295. 数据流的中位数（[中国站](https://leetcode.cn/problems/find-median-from-data-stream/)｜[国际站](https://leetcode.com/problems/find-median-from-data-stream/)）——大根堆＋小根堆

## 83. 链表前后指针与相交

> **考察与技巧：** 让两个指针保持固定间距可定位相对尾部的位置；让指针分别走完两条链表再切换起点，则可抵消长度差并同步到公共节点。适用于寻找倒数节点、删除尾部相对位置，以及判断两条链表是否相交的问题。

- [ ] A：19. 删除链表的倒数第 N 个结点（[中国站](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)｜[国际站](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)）——固定指针间距
- [ ] B：160. 相交链表（[中国站](https://leetcode.cn/problems/intersection-of-two-linked-lists/)｜[国际站](https://leetcode.com/problems/intersection-of-two-linked-lists/)）——换头消除长度差

## 84. 链表合并与归并分治

> **考察与技巧：** 用虚拟头节点线性合并两个有序链表；对更长链表可用快慢指针切半，递归处理两侧后再归并。适用于有序链表合并，以及要求 $O(n\log n)$ 时间、较少额外空间的链表排序问题。

- [ ] A：21. 合并两个有序链表（[中国站](https://leetcode.cn/problems/merge-two-sorted-lists/)｜[国际站](https://leetcode.com/problems/merge-two-sorted-lists/)）
- [ ] B：148. 排序链表（[中国站](https://leetcode.cn/problems/sort-list/)｜[国际站](https://leetcode.com/problems/sort-list/)）

## 85. 根据遍历序列构造二叉树

> **考察与技巧：** 由前序或后序确定当前根节点，再用根在中序序列中的位置划分左右子树，并通过哈希表避免重复查找分割点。适用于节点值唯一、给出中序与另一种深度优先遍历序列的二叉树重建问题。

- [ ] A：105. 从前序与中序遍历序列构造二叉树（[中国站](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)｜[国际站](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)）
- [ ] B：106. 从中序与后序遍历序列构造二叉树（[中国站](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)｜[国际站](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)）

## 86. 网格回溯

> **考察与技巧：** 从候选起点进行 DFS，进入格子时标记已使用，离开时恢复现场，并根据剩余目标、长度或可达性提前剪枝。适用于路径不能重复使用格子，且需要匹配序列、收集资源或枚举可行路径的网格问题。

- [ ] A：79. 单词搜索（[中国站](https://leetcode.cn/problems/word-search/)｜[国际站](https://leetcode.com/problems/word-search/)）
- [ ] B：1219. 黄金矿工（[中国站](https://leetcode.cn/problems/path-with-maximum-gold/)｜[国际站](https://leetcode.com/problems/path-with-maximum-gold/)）

## 87. 字符串切分回溯

> **考察与技巧：** 从当前位置枚举下一段的结束位置，只在当前片段合法时继续递归，并根据剩余字符数、段数或目标约束剪枝。适用于把字符串切分成若干合法片段并枚举全部分割方案的问题。

- [ ] A：93. 复原 IP 地址（[中国站](https://leetcode.cn/problems/restore-ip-addresses/)｜[国际站](https://leetcode.com/problems/restore-ip-addresses/)）
- [ ] B：131. 分割回文串（[中国站](https://leetcode.cn/problems/palindrome-partitioning/)｜[国际站](https://leetcode.com/problems/palindrome-partitioning/)）

## 88. 乘积与正负状态 DP

> **考察与技巧：** 负数会交换最大与最小、正与负状态的作用，因此每个位置必须同时维护一对相反状态，再根据当前元素符号完成转移。适用于连续区间的乘积最值、乘积符号或其他会因负数发生优劣翻转的问题。

- [ ] A：152. 乘积最大子数组（[中国站](https://leetcode.cn/problems/maximum-product-subarray/)｜[国际站](https://leetcode.com/problems/maximum-product-subarray/)）——同时维护最大积和最小积
- [ ] B：1567. 乘积为正数的最长子数组长度（[中国站](https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/)｜[国际站](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)）——同时维护正积和负积长度

## 89. 可达范围贪心

> **考察与技巧：** 扫描当前位置时维护已知范围内能够到达的最远边界；求最少步数时再记录当前层边界，每越过一层才增加一步。适用于每个位置能向前覆盖一段区间，并要求判断终点可达性或最少扩展次数的问题。

- [ ] A：55. 跳跃游戏（[中国站](https://leetcode.cn/problems/jump-game/)｜[国际站](https://leetcode.com/problems/jump-game/)）——维护最远可达位置
- [ ] B：45. 跳跃游戏 II（[中国站](https://leetcode.cn/problems/jump-game-ii/)｜[国际站](https://leetcode.com/problems/jump-game-ii/)）——维护当前层与下一层边界

---

# 进阶补全区

以下算法在完整题单中存在，但流行度明显低于主线，更适合竞赛、算法岗或完成主线后的专项提高。

## 90. 二维差分

> **考察与技巧：** 对子矩形进行统一加减时，只在二维差分数组的四个边界角记录变化，完成全部操作后再沿两个维度求前缀和还原矩阵。适用于大量离线子矩形修改、覆盖次数统计和区域可行性判断问题。

- [ ] A：2536. 子矩阵元素加 1（[中国站](https://leetcode.cn/problems/increment-submatrices-by-one/)｜[国际站](https://leetcode.com/problems/increment-submatrices-by-one/)）
- [ ] B：2132. 用邮票贴满网格图（[中国站](https://leetcode.cn/problems/stamping-the-grid/)｜[国际站](https://leetcode.com/problems/stamping-the-grid/)）

## 91. 扫描线与离线查询

> **考察与技巧：** 将事件与询问按同一关键维度排序，移动统一指针逐步加入满足条件的对象，并用堆、树状数组等结构维护当前答案。适用于全部查询预先已知，且查询条件能随排序方向单调扩大的批量查询问题。

- [ ] A：2070. 每一个查询的最大美丽值（[中国站](https://leetcode.cn/problems/most-beautiful-item-for-each-query/)｜[国际站](https://leetcode.com/problems/most-beautiful-item-for-each-query/)）
- [ ] B：2503. 矩阵查询可获得的最大分数（[中国站](https://leetcode.cn/problems/maximum-number-of-points-from-grid-queries/)｜[国际站](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/)）

## 92. 折半枚举

> **考察与技巧：** 将集合分成两半，分别枚举 $2^{n/2}$ 个子集结果，再通过排序、哈希或二分组合两侧答案，以空间换取指数规模下降。适用于直接枚举 $2^n$ 过慢，但元素数量仍允许分别枚举两半的子集和、计数和最接近目标问题。

- [ ] A：494. 目标和（[中国站](https://leetcode.cn/problems/target-sum/)｜[国际站](https://leetcode.com/problems/target-sum/)）
- [ ] B：1755. 最接近目标值的子序列和（[中国站](https://leetcode.cn/problems/closest-subsequence-sum/)｜[国际站](https://leetcode.com/problems/closest-subsequence-sum/)）

## 93. 欧拉路径

> **考察与技巧：** 先根据有效节点的连通性和度数判断起点与可行性，再用 Hierholzer 算法不断消费未使用边，并在无边可走时逆序记录节点得到完整路径。适用于要求每条边恰好使用一次的路径构造、行程安排和边序列重排问题。

- [ ] A：332. 重新安排行程（[中国站](https://leetcode.cn/problems/reconstruct-itinerary/)｜[国际站](https://leetcode.com/problems/reconstruct-itinerary/)）
- [ ] B：2097. 合法重新排列数对（[中国站](https://leetcode.cn/problems/valid-arrangement-of-pairs/)｜[国际站](https://leetcode.com/problems/valid-arrangement-of-pairs/)）

## 94. Tarjan

> **考察与技巧：** DFS 中维护访问时间 `dfn` 与可经树边和返祖边到达的最早时间 `low`，根据二者关系识别无法绕开的连接结构。适用于寻找无向图的桥、割点，以及使用相应 Tarjan 变体求有向图强连通分量的问题。

- [ ] A：1192. 查找集群内的关键连接（[中国站](https://leetcode.cn/problems/critical-connections-in-a-network/)｜[国际站](https://leetcode.com/problems/critical-connections-in-a-network/)）
- [ ] B：1568. 使陆地分离的最少天数（[中国站](https://leetcode.cn/problems/minimum-number-of-days-to-disconnect-island/)｜[国际站](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)）

## 95. 数位 DP

> **考察与技巧：** 从高位到低位构造不超过上界的数字，状态通常包含当前位置、是否贴合上界、是否仍为前导零及题目要求的统计量，并记忆化不受上界限制的状态。适用于统计某个数值范围内满足数位组成、出现次数或相邻关系约束的整数。

- [ ] A：357. 统计各位数字都不同的数字个数（[中国站](https://leetcode.cn/problems/count-numbers-with-unique-digits/)｜[国际站](https://leetcode.com/problems/count-numbers-with-unique-digits/)）
- [ ] B：902. 最大为 N 的数字组合（[中国站](https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/)｜[国际站](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)）

## 96. 懒标记线段树

> **考察与技巧：** 区间更新完整覆盖节点时，直接更新节点聚合值并暂存懒标记；只有继续访问子节点时才下传标记，使修改和查询保持 $O(\log n)$。适用于同时存在频繁区间修改与区间求和、最值或覆盖次数查询的问题。

- [ ] A：729. 我的日程安排表 I（[中国站](https://leetcode.cn/problems/my-calendar-i/)｜[国际站](https://leetcode.com/problems/my-calendar-i/)）
- [ ] B：732. 我的日程安排表 III（[中国站](https://leetcode.cn/problems/my-calendar-iii/)｜[国际站](https://leetcode.com/problems/my-calendar-iii/)）

---

# 暂不建议加入主线的内容

- 网络流、最小割
- 强连通分量完整体系
- AC 自动机
- Z 函数
- 后缀数组、后缀自动机
- 线性基
- 伸展树
- 莫队算法
- 点分治、虚树、树上启发式合并
- 轮廓线 DP
- 概率与期望 DP
- 生成函数、FWT
- 高级计算几何

这些算法很难同时满足“代表性强、题目不古怪、难度不要太高”三个条件。对于普通校招、社招和主流面试，优先级远低于主线。
