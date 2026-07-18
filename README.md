# LeetCode 主流算法最小完备题单

> 参考：[灵茶山艾府《如何科学刷题？》](https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/)
>
> 本题单按面试、笔试和力扣竞赛中**独立解题模式**的流行度排序。每个知识点或模式选择两题：**A 为模板/标准题，B 为稍难综合题**。

## 使用说明

- 主线尽量只选简单和中等题。
- 每道题均提供中国站和国际站链接；经两站题目元数据验证，全部入选题在两站均为免费题（非会员/Premium）。
- 少量官方困难题只在其高度经典、模板化时保留。
- “普通/稍难”表示学习阶梯，不完全等同于力扣官方难度。
- 收录以状态表示、指针不变量和数据结构维护方式是否独立为判断标准，而不是按题目标签机械分类。
- 不以覆盖 HOT 100 或任何榜单为目标；已有代表题覆盖同一模式时，不因题号缺失重复收录。
- 同一道题如果有多种经典解法，可能出现在不同专题中。
- 建议先独立做 A，总结模板和适用条件，隔一天做 B，一周后重写 A。

---

# 第一阶段：最高频基础算法

## 1. 哈希表

> **考察与技巧：** 用哈希表把“反复查找”降为均摊 $O(1)$；枚举当前元素时，只维护已经遍历过的信息。

- [ ] A：1. 两数之和（[中国站](https://leetcode.cn/problems/two-sum/)｜[国际站](https://leetcode.com/problems/two-sum/)）——枚举右、哈希维护左
- [ ] B：49. 字母异位词分组（[中国站](https://leetcode.cn/problems/group-anagrams/)｜[国际站](https://leetcode.com/problems/group-anagrams/)）——设计哈希键

## 2. 排序与自定义比较

> **考察与技巧：** 排序用于消除原顺序干扰、制造单调性；自定义比较时应判断两种拼接或排列顺序谁更优。

- [ ] A：56. 合并区间（[中国站](https://leetcode.cn/problems/merge-intervals/)｜[国际站](https://leetcode.com/problems/merge-intervals/)）
- [ ] B：179. 最大数（[中国站](https://leetcode.cn/problems/largest-number/)｜[国际站](https://leetcode.com/problems/largest-number/)）——自定义排序规则

## 3. 一次遍历与前缀最值

> **考察与技巧：** 枚举右端点并维护左侧最优值，将暴力枚举数对从 $O(n^2)$ 优化到 $O(n)$。

- [ ] A：121. 买卖股票的最佳时机（[中国站](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)｜[国际站](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)）
- [ ] B：1014. 最佳观光组合（[中国站](https://leetcode.cn/problems/best-sightseeing-pair/)｜[国际站](https://leetcode.com/problems/best-sightseeing-pair/)）

核心思维是“枚举右，维护左”。

## 4. 相向双指针

> **考察与技巧：** 在有序序列两端放置指针，根据当前结果与目标的大小关系排除一整批候选状态。

- [ ] A：167. 两数之和 II（[中国站](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)｜[国际站](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)）
- [ ] B：15. 三数之和（[中国站](https://leetcode.cn/problems/3sum/)｜[国际站](https://leetcode.com/problems/3sum/)）

## 5. 同向双指针与原地修改

> **考察与技巧：** 快指针负责扫描，慢指针维护已处理区间的边界，从而用 $O(1)$ 额外空间完成筛选或分区。

- [ ] A：283. 移动零（[中国站](https://leetcode.cn/problems/move-zeroes/)｜[国际站](https://leetcode.com/problems/move-zeroes/)）
- [ ] B：75. 颜色分类（[中国站](https://leetcode.cn/problems/sort-colors/)｜[国际站](https://leetcode.com/problems/sort-colors/)）——三指针

## 6. 定长滑动窗口

> **考察与技巧：** 维护固定长度窗口；右侧加入一个元素时同步移除左侧元素，使每个元素只进出窗口一次。

- [ ] A：1456. 定长子串中元音的最大数目（[中国站](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)｜[国际站](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)）
- [ ] B：438. 找到字符串中所有字母异位词（[中国站](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)｜[国际站](https://leetcode.com/problems/find-all-anagrams-in-a-string/)）

## 7. 不定长滑动窗口

> **考察与技巧：** 右指针扩展窗口，条件不合法时移动左指针；关键是证明窗口合法性具有单调性。

- [ ] A：3. 无重复字符的最长子串（[中国站](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)｜[国际站](https://leetcode.com/problems/longest-substring-without-repeating-characters/)）
- [ ] B：904. 水果成篮（[中国站](https://leetcode.cn/problems/fruit-into-baskets/)｜[国际站](https://leetcode.com/problems/fruit-into-baskets/)）

掌握“右指针扩展、左指针恢复合法性”。

## 8. 求最短的滑动窗口

> **考察与技巧：** 先扩展到满足条件，再尽量收缩左边界；每次合法时更新最短长度或最小代价。

- [ ] A：209. 长度最小的子数组（[中国站](https://leetcode.cn/problems/minimum-size-subarray-sum/)｜[国际站](https://leetcode.com/problems/minimum-size-subarray-sum/)）
- [ ] B：1234. 替换子串得到平衡字符串（[中国站](https://leetcode.cn/problems/replace-the-substring-for-balanced-string/)｜[国际站](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)）

## 9. 一维前缀和

> **考察与技巧：** 预处理累计信息，让任意区间查询由遍历变为两个前缀相减；注意统一左闭右开边界。

- [ ] A：303. 区域和检索（[中国站](https://leetcode.cn/problems/range-sum-query-immutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-immutable/)）
- [ ] B：238. 除自身以外数组的乘积（[中国站](https://leetcode.cn/problems/product-of-array-except-self/)｜[国际站](https://leetcode.com/problems/product-of-array-except-self/)）——前后缀分解

## 10. 前缀和＋哈希表

> **考察与技巧：** 将子数组条件改写为两个前缀值的关系，并用哈希表查询所需的历史前缀值。

- [ ] A：525. 连续数组（[中国站](https://leetcode.cn/problems/contiguous-array/)｜[国际站](https://leetcode.com/problems/contiguous-array/)）
- [ ] B：560. 和为 K 的子数组（[中国站](https://leetcode.cn/problems/subarray-sum-equals-k/)｜[国际站](https://leetcode.com/problems/subarray-sum-equals-k/)）

将“子数组条件”转换为“两段前缀的关系”。

## 11. 二维前缀和

> **考察与技巧：** 用容斥公式计算任意子矩形信息；画出四个前缀矩形可避免重复加减和下标错误。

- [ ] A：304. 二维区域和检索（[中国站](https://leetcode.cn/problems/range-sum-query-2d-immutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-2d-immutable/)）
- [ ] B：1314. 矩阵区域和（[中国站](https://leetcode.cn/problems/matrix-block-sum/)｜[国际站](https://leetcode.com/problems/matrix-block-sum/)）

## 12. 一维差分数组

> **考察与技巧：** 区间修改只记录起点和终点后一位的变化，最后通过一次前缀累加恢复每个位置的值。

- [ ] A：1109. 航班预订统计（[中国站](https://leetcode.cn/problems/corporate-flight-bookings/)｜[国际站](https://leetcode.com/problems/corporate-flight-bookings/)）
- [ ] B：1094. 拼车（[中国站](https://leetcode.cn/problems/car-pooling/)｜[国际站](https://leetcode.com/problems/car-pooling/)）

重点掌握：区间起点加值、终点后一位减值、最后求前缀和还原数组。

## 13. 区间排序与区间合并

> **考察与技巧：** 按左端点排序后线性扫描；当前区间能否合并只需比较其左端点与已合并区间的右端点。

- [ ] A：56. 合并区间（[中国站](https://leetcode.cn/problems/merge-intervals/)｜[国际站](https://leetcode.com/problems/merge-intervals/)）
- [ ] B：57. 插入区间（[中国站](https://leetcode.cn/problems/insert-interval/)｜[国际站](https://leetcode.com/problems/insert-interval/)）

## 14. 普通二分查找

> **考察与技巧：** 在单调序列中定位边界；明确循环不变量，并统一“第一个满足条件的位置”模板。

- [ ] A：704. 二分查找（[中国站](https://leetcode.cn/problems/binary-search/)｜[国际站](https://leetcode.com/problems/binary-search/)）
- [ ] B：34. 在排序数组中查找第一个和最后一个位置（[中国站](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)｜[国际站](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)）

建议固定使用一种二分模板，例如左闭右开或红蓝染色法。

## 15. 二分答案

> **考察与技巧：** 当答案具有可行性单调性时猜测 `mid`，编写 `check(mid)`，再寻找最小可行或最大可行答案。

- [ ] A：875. 爱吃香蕉的珂珂（[中国站](https://leetcode.cn/problems/koko-eating-bananas/)｜[国际站](https://leetcode.com/problems/koko-eating-bananas/)）
- [ ] B：1011. 在 D 天内送达包裹的能力（[中国站](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/)｜[国际站](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)）

固定思考：答案是否单调、`check(mid)` 表示什么、求第一个合法值还是最后一个合法值。

---

# 第二阶段：常用数据结构

## 16. 栈与括号匹配

> **考察与技巧：** 栈保存尚未匹配或尚未完成的状态；遇到闭合符号、运算结束标记时处理最近的开放状态。

- [ ] A：20. 有效的括号（[中国站](https://leetcode.cn/problems/valid-parentheses/)｜[国际站](https://leetcode.com/problems/valid-parentheses/)）
- [ ] B：394. 字符串解码（[中国站](https://leetcode.cn/problems/decode-string/)｜[国际站](https://leetcode.com/problems/decode-string/)）

## 17. 单调栈

> **考察与技巧：** 栈内下标对应的值保持单调，用弹栈过程确定某个元素左侧或右侧第一个更大/更小元素。

- [ ] A：739. 每日温度（[中国站](https://leetcode.cn/problems/daily-temperatures/)｜[国际站](https://leetcode.com/problems/daily-temperatures/)）
- [ ] B：901. 股票价格跨度（[中国站](https://leetcode.cn/problems/online-stock-span/)｜[国际站](https://leetcode.com/problems/online-stock-span/)）

分别代表“找右侧第一个更大元素”和“在线维护左侧连续范围”。

## 18. 单调队列

> **考察与技巧：** 双端队列保存仍可能成为最优值的候选下标，同时从队首删除过期元素、从队尾删除劣质候选。

- [ ] A：239. 滑动窗口最大值（[中国站](https://leetcode.cn/problems/sliding-window-maximum/)｜[国际站](https://leetcode.com/problems/sliding-window-maximum/)）
- [ ] B：1438. 绝对差不超过限制的最长连续子数组（[中国站](https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)｜[国际站](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)）

第 239 题虽然标为困难，但它是单调队列最标准的模板题。

## 19. 堆与 Top K

> **考察与技巧：** 用大小为 $K$ 的反向堆维护当前最优 $K$ 个元素，或利用堆快速取得动态集合的极值。

- [ ] A：215. 数组中的第 K 个最大元素（[中国站](https://leetcode.cn/problems/kth-largest-element-in-an-array/)｜[国际站](https://leetcode.com/problems/kth-largest-element-in-an-array/)）
- [ ] B：347. 前 K 个高频元素（[中国站](https://leetcode.cn/problems/top-k-frequent-elements/)｜[国际站](https://leetcode.com/problems/top-k-frequent-elements/)）

## 20. 多路归并堆

> **考察与技巧：** 每个有序序列只把当前最小候选放入堆；弹出后再加入同一序列的下一个元素。

- [ ] A：373. 查找和最小的 K 对数字（[中国站](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/)｜[国际站](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)）
- [ ] B：23. 合并 K 个升序链表（[中国站](https://leetcode.cn/problems/merge-k-sorted-lists/)｜[国际站](https://leetcode.com/problems/merge-k-sorted-lists/)）

## 21. 链表反转

> **考察与技巧：** 用 `prev`、`cur`、`next` 三个指针逐边改变方向；局部反转时先定位区间前驱和后继。

- [ ] A：206. 反转链表（[中国站](https://leetcode.cn/problems/reverse-linked-list/)｜[国际站](https://leetcode.com/problems/reverse-linked-list/)）
- [ ] B：92. 反转链表 II（[中国站](https://leetcode.cn/problems/reverse-linked-list-ii/)｜[国际站](https://leetcode.com/problems/reverse-linked-list-ii/)）

## 22. 链表快慢指针

> **考察与技巧：** 利用不同移动速度制造距离差，可寻找中点、倒数位置、环及环入口。

- [ ] A：876. 链表的中间结点（[中国站](https://leetcode.cn/problems/middle-of-the-linked-list/)｜[国际站](https://leetcode.com/problems/middle-of-the-linked-list/)）
- [ ] B：142. 环形链表 II（[中国站](https://leetcode.cn/problems/linked-list-cycle-ii/)｜[国际站](https://leetcode.com/problems/linked-list-cycle-ii/)）

## 23. 哈希表＋链表

> **考察与技巧：** 哈希表负责按节点身份或键快速定位，链表负责保存结构与顺序；复制和缓存问题都要维护两种结构间的一一对应关系。

- [ ] A：138. 随机链表的复制（[中国站](https://leetcode.cn/problems/copy-list-with-random-pointer/)｜[国际站](https://leetcode.com/problems/copy-list-with-random-pointer/)）——原节点映射到复制节点
- [ ] B：146. LRU 缓存（[中国站](https://leetcode.cn/problems/lru-cache/)｜[国际站](https://leetcode.com/problems/lru-cache/)）——哈希表＋双向链表

## 24. 字典树 Trie

> **考察与技巧：** 按字符逐层共享公共前缀，节点记录儿子和结束标记；适合大量字符串的前缀查询与匹配。

- [ ] A：208. 实现 Trie（[中国站](https://leetcode.cn/problems/implement-trie-prefix-tree/)｜[国际站](https://leetcode.com/problems/implement-trie-prefix-tree/)）
- [ ] B：211. 添加与搜索单词（[中国站](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)｜[国际站](https://leetcode.com/problems/design-add-and-search-words-data-structure/)）

## 25. 并查集

> **考察与技巧：** 用代表元维护动态连通分量；路径压缩配合按大小合并，使查询与合并接近常数时间。

- [ ] A：684. 冗余连接（[中国站](https://leetcode.cn/problems/redundant-connection/)｜[国际站](https://leetcode.com/problems/redundant-connection/)）
- [ ] B：721. 账户合并（[中国站](https://leetcode.cn/problems/accounts-merge/)｜[国际站](https://leetcode.com/problems/accounts-merge/)）

掌握路径压缩和按大小/按秩合并。

## 26. 树状数组

> **考察与技巧：** 利用 `lowbit` 维护前缀聚合信息，支持 $O(\log n)$ 单点修改与前缀/区间查询。

- [ ] A：307. 区域和检索 - 数组可修改（[中国站](https://leetcode.cn/problems/range-sum-query-mutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-mutable/)）
- [ ] B：1409. 查询带键的排列（[中国站](https://leetcode.cn/problems/queries-on-a-permutation-with-key/)｜[国际站](https://leetcode.com/problems/queries-on-a-permutation-with-key/)）

第 307 题建议分别使用树状数组和线段树实现一次。

## 27. 线段树

> **考察与技巧：** 每个节点维护一段区间的聚合值，递归合并左右儿子，支持 $O(\log n)$ 修改和查询。

- [ ] A：307. 区域和检索 - 数组可修改（[中国站](https://leetcode.cn/problems/range-sum-query-mutable/)｜[国际站](https://leetcode.com/problems/range-sum-query-mutable/)）
- [ ] B：3187. 数组中的峰值（[中国站](https://leetcode.cn/problems/peaks-in-array/)｜[国际站](https://leetcode.com/problems/peaks-in-array/)）

主线只要求掌握建树、单点修改和区间查询；懒更新放到最后。

## 28. 数据结构设计

> **考察与技巧：** 根据目标复杂度组合数组、哈希表、栈等结构，并同步维护数据与索引之间的不变量。

- [ ] A：155. 最小栈（[中国站](https://leetcode.cn/problems/min-stack/)｜[国际站](https://leetcode.com/problems/min-stack/)）
- [ ] B：380. O(1) 插入、删除和获取随机元素（[中国站](https://leetcode.cn/problems/insert-delete-getrandom-o1/)｜[国际站](https://leetcode.com/problems/insert-delete-getrandom-o1/)）

---

# 第三阶段：树、搜索和回溯

## 29. 二叉树基础 DFS

> **考察与技巧：** 明确递归函数的参数、返回值和终止条件；自顶向下传递路径状态，自底向上汇总子树信息。

- [ ] A：104. 二叉树的最大深度（[中国站](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)｜[国际站](https://leetcode.com/problems/maximum-depth-of-binary-tree/)）
- [ ] B：437. 路径总和 III（[中国站](https://leetcode.cn/problems/path-sum-iii/)｜[国际站](https://leetcode.com/problems/path-sum-iii/)）——树上 DFS＋前缀和

## 30. 二叉树后序遍历

> **考察与技巧：** 先取得左右子树结果，再计算当前节点答案；区分“递归返回值”和“全局最终答案”。

- [ ] A：543. 二叉树的直径（[中国站](https://leetcode.cn/problems/diameter-of-binary-tree/)｜[国际站](https://leetcode.com/problems/diameter-of-binary-tree/)）
- [ ] B：124. 二叉树中的最大路径和（[中国站](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)｜[国际站](https://leetcode.com/problems/binary-tree-maximum-path-sum/)）

第 124 题是经典困难题，基础不足时可暂时跳过。

## 31. 二叉树 BFS

> **考察与技巧：** 用队列逐层遍历，处理一层前先记录当前队列长度，以便计算层级信息或选取层首层尾节点。

- [ ] A：102. 二叉树的层序遍历（[中国站](https://leetcode.cn/problems/binary-tree-level-order-traversal/)｜[国际站](https://leetcode.com/problems/binary-tree-level-order-traversal/)）
- [ ] B：199. 二叉树的右视图（[中国站](https://leetcode.cn/problems/binary-tree-right-side-view/)｜[国际站](https://leetcode.com/problems/binary-tree-right-side-view/)）

## 32. 二叉搜索树

> **考察与技巧：** 利用左子树小、右子树大的有序性质；中序遍历得到递增序列，也可在递归中传递合法值域。

- [ ] A：98. 验证二叉搜索树（[中国站](https://leetcode.cn/problems/validate-binary-search-tree/)｜[国际站](https://leetcode.com/problems/validate-binary-search-tree/)）
- [ ] B：230. 二叉搜索树中第 K 小的元素（[中国站](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)｜[国际站](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)）

## 33. 最近公共祖先 LCA

> **考察与技巧：** 递归判断目标节点分布在哪些子树；若左右两侧都找到目标，当前节点就是最近公共祖先。

- [ ] A：235. 二叉搜索树的最近公共祖先（[中国站](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)｜[国际站](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)）
- [ ] B：236. 二叉树的最近公共祖先（[中国站](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)｜[国际站](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)）

## 34. 网格 DFS 与连通块

> **考察与技巧：** 从每个未访问格子出发搜索四邻域，用访问标记避免重复，并在一次搜索中统计整个连通块。

- [ ] A：200. 岛屿数量（[中国站](https://leetcode.cn/problems/number-of-islands/)｜[国际站](https://leetcode.com/problems/number-of-islands/)）
- [ ] B：417. 太平洋大西洋水流问题（[中国站](https://leetcode.cn/problems/pacific-atlantic-water-flow/)｜[国际站](https://leetcode.com/problems/pacific-atlantic-water-flow/)）

## 35. 网格 BFS 与多源 BFS

> **考察与技巧：** BFS 按距离递增访问节点；多源问题把所有起点同时入队，相当于建立一个虚拟超级源点。

- [ ] A：994. 腐烂的橘子（[中国站](https://leetcode.cn/problems/rotting-oranges/)｜[国际站](https://leetcode.com/problems/rotting-oranges/)）
- [ ] B：1091. 二进制矩阵中的最短路径（[中国站](https://leetcode.cn/problems/shortest-path-in-binary-matrix/)｜[国际站](https://leetcode.com/problems/shortest-path-in-binary-matrix/)）

## 36. 图的 DFS/BFS

> **考察与技巧：** 用邻接表表示图并维护访问状态；遍历所有未访问节点可覆盖非连通图的每个连通分量。

- [ ] A：547. 省份数量（[中国站](https://leetcode.cn/problems/number-of-provinces/)｜[国际站](https://leetcode.com/problems/number-of-provinces/)）
- [ ] B：133. 克隆图（[中国站](https://leetcode.cn/problems/clone-graph/)｜[国际站](https://leetcode.com/problems/clone-graph/)）

## 37. 拓扑排序

> **考察与技巧：** 统计入度，将入度为零的节点入队并逐步删除边；处理节点数不足说明有向图存在环。

- [ ] A：207. 课程表（[中国站](https://leetcode.cn/problems/course-schedule/)｜[国际站](https://leetcode.com/problems/course-schedule/)）
- [ ] B：210. 课程表 II（[中国站](https://leetcode.cn/problems/course-schedule-ii/)｜[国际站](https://leetcode.com/problems/course-schedule-ii/)）

## 38. 状态图 BFS

> **考察与技巧：** 把每种局面编码为图节点，把一次合法操作视为边，再用 BFS 求操作次数最少的路径。

- [ ] A：433. 最小基因变化（[中国站](https://leetcode.cn/problems/minimum-genetic-mutation/)｜[国际站](https://leetcode.com/problems/minimum-genetic-mutation/)）
- [ ] B：752. 打开转盘锁（[中国站](https://leetcode.cn/problems/open-the-lock/)｜[国际站](https://leetcode.com/problems/open-the-lock/)）

重点是把状态抽象成图节点。

## 39. 子集型回溯

> **考察与技巧：** 每个元素都有选与不选两种决策；用路径记录当前集合，并通过起始下标避免重复枚举。

- [ ] A：78. 子集（[中国站](https://leetcode.cn/problems/subsets/)｜[国际站](https://leetcode.com/problems/subsets/)）
- [ ] B：39. 组合总和（[中国站](https://leetcode.cn/problems/combination-sum/)｜[国际站](https://leetcode.com/problems/combination-sum/)）

## 40. 组合型回溯

> **考察与技巧：** 在子集搜索上加入选择数量或合法性约束；通过剩余元素数量计算剪枝边界。

- [ ] A：77. 组合（[中国站](https://leetcode.cn/problems/combinations/)｜[国际站](https://leetcode.com/problems/combinations/)）
- [ ] B：22. 括号生成（[中国站](https://leetcode.cn/problems/generate-parentheses/)｜[国际站](https://leetcode.com/problems/generate-parentheses/)）

## 41. 排列型回溯与去重

> **考察与技巧：** 每层枚举尚未使用的元素；有重复值时先排序，并跳过同层已经选择过的相同元素。

- [ ] A：46. 全排列（[中国站](https://leetcode.cn/problems/permutations/)｜[国际站](https://leetcode.com/problems/permutations/)）
- [ ] B：47. 全排列 II（[中国站](https://leetcode.cn/problems/permutations-ii/)｜[国际站](https://leetcode.com/problems/permutations-ii/)）

---

# 第四阶段：动态规划

## 42. 一维 DP

> **考察与技巧：** 定义 `dp[i]` 表示处理到位置 $i$ 的答案，从规模更小且无后效性的状态推导当前状态。

- [ ] A：70. 爬楼梯（[中国站](https://leetcode.cn/problems/climbing-stairs/)｜[国际站](https://leetcode.com/problems/climbing-stairs/)）
- [ ] B：198. 打家劫舍（[中国站](https://leetcode.cn/problems/house-robber/)｜[国际站](https://leetcode.com/problems/house-robber/)）

## 43. 最大子数组 DP

> **考察与技巧：** 定义以当前位置结尾的最优子数组，决定延续前一段还是从当前元素重新开始。

- [ ] A：53. 最大子数组和（[中国站](https://leetcode.cn/problems/maximum-subarray/)｜[国际站](https://leetcode.com/problems/maximum-subarray/)）
- [ ] B：918. 环形子数组的最大和（[中国站](https://leetcode.cn/problems/maximum-sum-circular-subarray/)｜[国际站](https://leetcode.com/problems/maximum-sum-circular-subarray/)）

## 44. 网格 DP

> **考察与技巧：** 按可达方向确定遍历顺序，当前格子的状态由上方、左方等前驱格子转移而来。

- [ ] A：62. 不同路径（[中国站](https://leetcode.cn/problems/unique-paths/)｜[国际站](https://leetcode.com/problems/unique-paths/)）
- [ ] B：64. 最小路径和（[中国站](https://leetcode.cn/problems/minimum-path-sum/)｜[国际站](https://leetcode.com/problems/minimum-path-sum/)）

## 45. 0-1 背包

> **考察与技巧：** 每件物品最多选择一次；空间压缩后容量必须倒序遍历，防止同一物品在本轮被重复使用。

- [ ] A：416. 分割等和子集（[中国站](https://leetcode.cn/problems/partition-equal-subset-sum/)｜[国际站](https://leetcode.com/problems/partition-equal-subset-sum/)）
- [ ] B：494. 目标和（[中国站](https://leetcode.cn/problems/target-sum/)｜[国际站](https://leetcode.com/problems/target-sum/)）

## 46. 完全背包

> **考察与技巧：** 每种物品可以重复选择，容量通常正序遍历；计数题还需区分组合数与排列数的循环顺序。

- [ ] A：322. 零钱兑换（[中国站](https://leetcode.cn/problems/coin-change/)｜[国际站](https://leetcode.com/problems/coin-change/)）
- [ ] B：518. 零钱兑换 II（[中国站](https://leetcode.cn/problems/coin-change-ii/)｜[国际站](https://leetcode.com/problems/coin-change-ii/)）

需要理解求最小值、求方案数，以及组合和排列的遍历顺序区别。

## 47. 最长公共子序列 LCS

> **考察与技巧：** `dp[i][j]` 表示两个前缀的答案；末尾字符相同时共同转移，不同时尝试舍弃一侧字符。

- [ ] A：1143. 最长公共子序列（[中国站](https://leetcode.cn/problems/longest-common-subsequence/)｜[国际站](https://leetcode.com/problems/longest-common-subsequence/)）
- [ ] B：72. 编辑距离（[中国站](https://leetcode.cn/problems/edit-distance/)｜[国际站](https://leetcode.com/problems/edit-distance/)）

## 48. 最长递增子序列 LIS

> **考察与技巧：** 基础 DP 枚举前驱；优化解维护各长度递增子序列的最小结尾，并用二分替换。

- [ ] A：300. 最长递增子序列（[中国站](https://leetcode.cn/problems/longest-increasing-subsequence/)｜[国际站](https://leetcode.com/problems/longest-increasing-subsequence/)）
- [ ] B：1671. 得到山形数组的最少删除次数（[中国站](https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/)｜[国际站](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)）

先写 $O(n^2)$ DP，再学习贪心加二分的 $O(n\log n)$ 解法。

## 49. 划分型 DP

> **考察与技巧：** 枚举最后一段的起点或长度，把整体最优解拆成“前缀答案＋最后一段贡献”。

- [ ] A：139. 单词拆分（[中国站](https://leetcode.cn/problems/word-break/)｜[国际站](https://leetcode.com/problems/word-break/)）
- [ ] B：1043. 分隔数组以得到最大和（[中国站](https://leetcode.cn/problems/partition-array-for-maximum-sum/)｜[国际站](https://leetcode.com/problems/partition-array-for-maximum-sum/)）

## 50. 状态机 DP

> **考察与技巧：** 将同一位置可能处于的不同阶段建成状态，根据允许的操作画出状态转移图后逐项转移。

- [ ] A：122. 买卖股票的最佳时机 II（[中国站](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)｜[国际站](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)）
- [ ] B：309. 买卖股票的最佳时机含冷冻期（[中国站](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)｜[国际站](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)）

## 51. 区间 DP

> **考察与技巧：** `dp[l][r]` 表示区间答案，按区间长度从短到长计算，并枚举端点决策或中间分割点。

- [ ] A：516. 最长回文子序列（[中国站](https://leetcode.cn/problems/longest-palindromic-subsequence/)｜[国际站](https://leetcode.com/problems/longest-palindromic-subsequence/)）
- [ ] B：1039. 多边形三角剖分的最低得分（[中国站](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/)｜[国际站](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)）

## 52. 树形 DP

> **考察与技巧：** 在树的后序遍历中为每个节点维护多个状态，再将各子树状态合并成当前节点状态。

- [ ] A：337. 打家劫舍 III（[中国站](https://leetcode.cn/problems/house-robber-iii/)｜[国际站](https://leetcode.com/problems/house-robber-iii/)）
- [ ] B：1372. 二叉树中的最长交错路径（[中国站](https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/)｜[国际站](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)）

## 53. 状态压缩 DP

> **考察与技巧：** 用二进制位表示小规模集合中的选取情况，枚举状态及其新增元素完成集合间转移。

- [ ] A：526. 优美的排列（[中国站](https://leetcode.cn/problems/beautiful-arrangement/)｜[国际站](https://leetcode.com/problems/beautiful-arrangement/)）
- [ ] B：698. 划分为 K 个相等的子集（[中国站](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/)｜[国际站](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)）

---

# 第五阶段：贪心、位运算与数学

## 54. 基础贪心

> **考察与技巧：** 每一步选择当前局部最优方案，并用交换论证或反证法说明该选择不会损害全局最优解。

- [ ] A：455. 分发饼干（[中国站](https://leetcode.cn/problems/assign-cookies/)｜[国际站](https://leetcode.com/problems/assign-cookies/)）
- [ ] B：881. 救生艇（[中国站](https://leetcode.cn/problems/boats-to-save-people/)｜[国际站](https://leetcode.com/problems/boats-to-save-people/)）

## 55. 区间贪心

> **考察与技巧：** 通常按右端点或左端点排序；选择结束最早的区间可为后续选择保留最大空间。

- [ ] A：435. 无重叠区间（[中国站](https://leetcode.cn/problems/non-overlapping-intervals/)｜[国际站](https://leetcode.com/problems/non-overlapping-intervals/)）
- [ ] B：452. 用最少数量的箭引爆气球（[中国站](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)｜[国际站](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)）

## 56. 反悔贪心＋堆

> **考察与技巧：** 先接受当前选择，出现冲突时用堆撤销代价最大或收益最小的历史选择，实现动态纠错。

- [ ] A：1642. 可以到达的最远建筑（[中国站](https://leetcode.cn/problems/furthest-building-you-can-reach/)｜[国际站](https://leetcode.com/problems/furthest-building-you-can-reach/)）
- [ ] B：630. 课程表 III（[中国站](https://leetcode.cn/problems/course-schedule-iii/)｜[国际站](https://leetcode.com/problems/course-schedule-iii/)）

## 57. 贡献法

> **考察与技巧：** 不逐个枚举答案对象，而是计算每个元素作为某种角色出现的次数，再累加其独立贡献。

- [ ] A：1588. 所有奇数长度子数组的和（[中国站](https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/)｜[国际站](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)）
- [ ] B：2063. 所有子字符串中的元音（[中国站](https://leetcode.cn/problems/vowels-of-all-substrings/)｜[国际站](https://leetcode.com/problems/vowels-of-all-substrings/)）

关键是计算每个元素被多少个答案对象包含。

## 58. 基础位运算

> **考察与技巧：** 掌握按位与、或、异或、取反和移位；重点理解异或自反性及 `x & (x-1)` 消除最低位 1。

- [ ] A：136. 只出现一次的数字（[中国站](https://leetcode.cn/problems/single-number/)｜[国际站](https://leetcode.com/problems/single-number/)）
- [ ] B：338. 比特位计数（[中国站](https://leetcode.cn/problems/counting-bits/)｜[国际站](https://leetcode.com/problems/counting-bits/)）

## 59. 异或与前缀异或

> **考察与技巧：** 利用 $a\oplus a=0$ 和区间异或等于两个前缀异或，把区间条件转化为前缀关系。

- [ ] A：1310. 子数组异或查询（[中国站](https://leetcode.cn/problems/xor-queries-of-a-subarray/)｜[国际站](https://leetcode.com/problems/xor-queries-of-a-subarray/)）
- [ ] B：1442. 形成两个异或相等数组的三元组数目（[中国站](https://leetcode.cn/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)｜[国际站](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)）

## 60. 拆位与位贡献

> **考察与技巧：** 各二进制位相互独立，逐位统计 0 和 1 的数量或贡献，避免直接枚举所有数对。

- [ ] A：477. 汉明距离总和（[中国站](https://leetcode.cn/problems/total-hamming-distance/)｜[国际站](https://leetcode.com/problems/total-hamming-distance/)）
- [ ] B：2275. 按位与结果大于零的最长组合（[中国站](https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero/)｜[国际站](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/)）

## 61. GCD、LCM 与因数

> **考察与技巧：** 使用欧几里得算法求 GCD，并由 $\operatorname{lcm}(a,b)=a/\gcd(a,b)\times b$ 安全计算 LCM。

- [ ] A：1071. 字符串的最大公因子（[中国站](https://leetcode.cn/problems/greatest-common-divisor-of-strings/)｜[国际站](https://leetcode.com/problems/greatest-common-divisor-of-strings/)）
- [ ] B：2470. 最小公倍数为 K 的子数组数目（[中国站](https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k/)｜[国际站](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/)）

## 62. 质数判断与埃氏筛

> **考察与技巧：** 单次判断只需检查到 $\sqrt n$；批量查询时用筛法一次预处理范围内全部质数。

- [ ] A：204. 计数质数（[中国站](https://leetcode.cn/problems/count-primes/)｜[国际站](https://leetcode.com/problems/count-primes/)）
- [ ] B：2523. 范围内最接近的两个质数（[中国站](https://leetcode.cn/problems/closest-prime-numbers-in-range/)｜[国际站](https://leetcode.com/problems/closest-prime-numbers-in-range/)）

## 63. 快速幂与模运算

> **考察与技巧：** 把指数按二进制拆分，通过不断平方在 $O(\log n)$ 内计算幂，并在每次乘法后及时取模。

- [ ] A：50. Pow(x, n)（[中国站](https://leetcode.cn/problems/powx-n/)｜[国际站](https://leetcode.com/problems/powx-n/)）
- [ ] B：1922. 统计好数字的数目（[中国站](https://leetcode.cn/problems/count-good-numbers/)｜[国际站](https://leetcode.com/problems/count-good-numbers/)）

## 64. 摩尔投票

> **考察与技巧：** 将不同元素两两抵消，剩余候选可能是多数元素；阈值低于一半时需维护多个候选并二次验证。

- [ ] A：169. 多数元素（[中国站](https://leetcode.cn/problems/majority-element/)｜[国际站](https://leetcode.com/problems/majority-element/)）
- [ ] B：229. 多数元素 II（[中国站](https://leetcode.cn/problems/majority-element-ii/)｜[国际站](https://leetcode.com/problems/majority-element-ii/)）

---

# 第六阶段：字符串算法

## 65. KMP

> **考察与技巧：** 用前缀函数记录模式串前缀与后缀的最长匹配，失配时复用已有结果而不回退文本指针。

- [ ] A：28. 找出字符串中第一个匹配项的下标（[中国站](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)｜[国际站](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)）
- [ ] B：459. 重复的子字符串（[中国站](https://leetcode.cn/problems/repeated-substring-pattern/)｜[国际站](https://leetcode.com/problems/repeated-substring-pattern/)）

## 66. 回文中心扩展与 Manacher

> **考察与技巧：** 回文由中心向两侧对称扩展；Manacher 复用已知回文区间，将全部中心的扩展降至线性复杂度。

- [ ] A：5. 最长回文子串（[中国站](https://leetcode.cn/problems/longest-palindromic-substring/)｜[国际站](https://leetcode.com/problems/longest-palindromic-substring/)）
- [ ] B：647. 回文子串（[中国站](https://leetcode.cn/problems/palindromic-substrings/)｜[国际站](https://leetcode.com/problems/palindromic-substrings/)）

建议先用中心扩展完成，再将两题改写成 Manacher。

## 67. 滚动哈希

> **考察与技巧：** 将字符串映射为多项式哈希，预处理前缀哈希和幂后即可 $O(1)$ 比较子串；注意降低冲突概率。

- [ ] A：187. 重复的 DNA 序列（[中国站](https://leetcode.cn/problems/repeated-dna-sequences/)｜[国际站](https://leetcode.com/problems/repeated-dna-sequences/)）
- [ ] B：718. 最长重复子数组（[中国站](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)｜[国际站](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)）

## 68. 子序列预处理

> **考察与技巧：** 单次判断使用双指针；多次查询时预处理字符位置列表或下一次出现位置，再用二分或跳转匹配。

- [ ] A：392. 判断子序列（[中国站](https://leetcode.cn/problems/is-subsequence/)｜[国际站](https://leetcode.com/problems/is-subsequence/)）
- [ ] B：792. 匹配子序列的单词数（[中国站](https://leetcode.cn/problems/number-of-matching-subsequences/)｜[国际站](https://leetcode.com/problems/number-of-matching-subsequences/)）

---

# 第七阶段：图论专项

## 69. Dijkstra 最短路

> **考察与技巧：** 适用于非负边权图，用最小堆每次确定当前距离最小的节点，并对邻边执行松弛。

- [ ] A：743. 网络延迟时间（[中国站](https://leetcode.cn/problems/network-delay-time/)｜[国际站](https://leetcode.com/problems/network-delay-time/)）
- [ ] B：1631. 最小体力消耗路径（[中国站](https://leetcode.cn/problems/path-with-minimum-effort/)｜[国际站](https://leetcode.com/problems/path-with-minimum-effort/)）

## 70. Floyd 全源最短路

> **考察与技巧：** 依次允许每个节点作为中转点，用 `dist[i][k] + dist[k][j]` 更新任意点对的最短距离。

- [ ] A：1334. 阈值距离内邻居最少的城市（[中国站](https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)｜[国际站](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)）
- [ ] B：2976. 转换字符串的最小成本 I（[中国站](https://leetcode.cn/problems/minimum-cost-to-convert-string-i/)｜[国际站](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)）

## 71. 最小生成树

> **考察与技巧：** Kruskal 按边权排序并用并查集避免成环；Prim 则不断选择连接当前集合的最小边。

- [ ] A：1584. 连接所有点的最小费用（[中国站](https://leetcode.cn/problems/min-cost-to-connect-all-points/)｜[国际站](https://leetcode.com/problems/min-cost-to-connect-all-points/)）
- [ ] B：1489. 最小生成树中的关键边和伪关键边（[中国站](https://leetcode.cn/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)｜[国际站](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)）

## 72. 二分图染色

> **考察与技巧：** 用两种颜色给相邻节点染不同颜色；遍历中发现同色边即非二分图，并注意处理非连通图。

- [ ] A：785. 判断二分图（[中国站](https://leetcode.cn/problems/is-graph-bipartite/)｜[国际站](https://leetcode.com/problems/is-graph-bipartite/)）
- [ ] B：886. 可能的二分法（[中国站](https://leetcode.cn/problems/possible-bipartition/)｜[国际站](https://leetcode.com/problems/possible-bipartition/)）

## 73. 0-1 BFS

> **考察与技巧：** 边权仅为 0 或 1 时使用双端队列：权重 0 的转移放队首，权重 1 的转移放队尾。

- [ ] A：1368. 使网格图至少有一条有效路径的最小代价（[中国站](https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)｜[国际站](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)）
- [ ] B：2290. 到达角落需要移除障碍物的最小数目（[中国站](https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/)｜[国际站](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)）

两题均为官方困难，但属于高度标准化的 0-1 BFS，可最后再做。

---

# 第八阶段：高频独立模式补全

本阶段补充前七阶段中没有单独成节、但具有独立解法不变量的高频模式。它们不是为了补齐某个榜单；如果一道未收录题与现有代表题同构，仍然不额外加入。

建议穿插学习：74～80 接在第一阶段后，81～84 接在第二阶段后，85～87 接在第三阶段后，88 接在第四阶段后，89 接在第五阶段后。

## 74. 哈希集合与序列起点

> **考察与技巧：** 哈希集合只维护元素是否存在；枚举连续序列时仅从没有前驱的元素出发，避免对同一段序列反复扫描。

- [ ] A：217. 存在重复元素（[中国站](https://leetcode.cn/problems/contains-duplicate/)｜[国际站](https://leetcode.com/problems/contains-duplicate/)）——集合判重
- [ ] B：128. 最长连续序列（[中国站](https://leetcode.cn/problems/longest-consecutive-sequence/)｜[国际站](https://leetcode.com/problems/longest-consecutive-sequence/)）——只从序列起点扩展

## 75. 双指针面积与蓄水

> **考察与技巧：** 左右边界共同决定当前容量；移动限制更小的一侧，利用另一侧已经足够高这一事实排除不可能更优的状态。

- [ ] A：11. 盛最多水的容器（[中国站](https://leetcode.cn/problems/container-with-most-water/)｜[国际站](https://leetcode.com/problems/container-with-most-water/)）
- [ ] B：42. 接雨水（[中国站](https://leetcode.cn/problems/trapping-rain-water/)｜[国际站](https://leetcode.com/problems/trapping-rain-water/)）

第 42 题虽为官方困难题，但双指针解法高度经典；重点是理解为什么只需移动较低边界。

## 76. 原地标记与下标映射

> **考察与技巧：** 当值域与数组下标对应时，可把输入数组本身当作哈希表，通过取负、交换或归位记录某个值是否出现。

- [ ] A：448. 找到所有数组中消失的数字（[中国站](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)｜[国际站](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)）——符号标记
- [ ] B：41. 缺失的第一个正数（[中国站](https://leetcode.cn/problems/first-missing-positive/)｜[国际站](https://leetcode.com/problems/first-missing-positive/)）——原地哈希

## 77. 原地反转与排列后继

> **考察与技巧：** 把整体变换拆成若干次区间反转；构造下一个排列时先找最长非递增后缀，再交换枢轴并反转后缀。

- [ ] A：189. 轮转数组（[中国站](https://leetcode.cn/problems/rotate-array/)｜[国际站](https://leetcode.com/problems/rotate-array/)）——三次反转
- [ ] B：31. 下一个排列（[中国站](https://leetcode.cn/problems/next-permutation/)｜[国际站](https://leetcode.com/problems/next-permutation/)）——字典序后继

## 78. 矩阵边界模拟与坐标变换

> **考察与技巧：** 遍历矩阵时明确维护上下左右边界；原地旋转则把几何变换拆成转置与行列反转，避免额外矩阵。

- [ ] A：54. 螺旋矩阵（[中国站](https://leetcode.cn/problems/spiral-matrix/)｜[国际站](https://leetcode.com/problems/spiral-matrix/)）——收缩四条边界
- [ ] B：48. 旋转图像（[中国站](https://leetcode.cn/problems/rotate-image/)｜[国际站](https://leetcode.com/problems/rotate-image/)）——转置＋反转

## 79. 旋转有序数组二分

> **考察与技巧：** 每次二分后至少有一半仍然有序；先判断哪一半有序，再判断目标是否落在其值域内。

- [ ] A：153. 寻找旋转排序数组中的最小值（[中国站](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)｜[国际站](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)）
- [ ] B：33. 搜索旋转排序数组（[中国站](https://leetcode.cn/problems/search-in-rotated-sorted-array/)｜[国际站](https://leetcode.com/problems/search-in-rotated-sorted-array/)）

## 80. 二维矩阵单调搜索

> **考察与技巧：** 全局有序矩阵可映射成一维下标二分；行列分别递增时从右上角或左下角出发，每步排除一整行或一整列。

- [ ] A：74. 搜索二维矩阵（[中国站](https://leetcode.cn/problems/search-a-2d-matrix/)｜[国际站](https://leetcode.com/problems/search-a-2d-matrix/)）——一维化二分
- [ ] B：240. 搜索二维矩阵 II（[中国站](https://leetcode.cn/problems/search-a-2d-matrix-ii/)｜[国际站](https://leetcode.com/problems/search-a-2d-matrix-ii/)）——阶梯式搜索

## 81. 单调栈左右边界与贡献

> **考察与技巧：** 为每个元素寻找左右第一个更小位置，从而确定它作为区间最小值或矩形高度时能够控制的最大范围。

- [ ] A：84. 柱状图中最大的矩形（[中国站](https://leetcode.cn/problems/largest-rectangle-in-histogram/)｜[国际站](https://leetcode.com/problems/largest-rectangle-in-histogram/)）——弹栈时结算矩形
- [ ] B：907. 子数组的最小值之和（[中国站](https://leetcode.cn/problems/sum-of-subarray-minimums/)｜[国际站](https://leetcode.com/problems/sum-of-subarray-minimums/)）——边界计数与贡献法

第 84 题虽为官方困难题，但它是“左右第一个更小元素”最标准的边界模板。

## 82. 数据流中的堆与双堆

> **考察与技巧：** 单堆维护数据流中的动态第 K 大；双堆分别保存较小和较大的一半，并通过平衡堆大小读取中位数。

- [ ] A：703. 数据流中的第 K 大元素（[中国站](https://leetcode.cn/problems/kth-largest-element-in-a-stream/)｜[国际站](https://leetcode.com/problems/kth-largest-element-in-a-stream/)）——固定大小最小堆
- [ ] B：295. 数据流的中位数（[中国站](https://leetcode.cn/problems/find-median-from-data-stream/)｜[国际站](https://leetcode.com/problems/find-median-from-data-stream/)）——大根堆＋小根堆

## 83. 链表前后指针与相交

> **考察与技巧：** 固定间距可定位倒数节点；让两个指针分别走完两条链表，可抵消长度差并判断共享节点。

- [ ] A：19. 删除链表的倒数第 N 个结点（[中国站](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)｜[国际站](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)）——固定指针间距
- [ ] B：160. 相交链表（[中国站](https://leetcode.cn/problems/intersection-of-two-linked-lists/)｜[国际站](https://leetcode.com/problems/intersection-of-two-linked-lists/)）——换头消除长度差

## 84. 链表合并与归并分治

> **考察与技巧：** 用虚拟头节点线性合并有序链表；链表归并排序先用快慢指针切半，再递归排序并合并。

- [ ] A：21. 合并两个有序链表（[中国站](https://leetcode.cn/problems/merge-two-sorted-lists/)｜[国际站](https://leetcode.com/problems/merge-two-sorted-lists/)）
- [ ] B：148. 排序链表（[中国站](https://leetcode.cn/problems/sort-list/)｜[国际站](https://leetcode.com/problems/sort-list/)）

## 85. 根据遍历序列构造二叉树

> **考察与技巧：** 前序或后序确定根节点，中序确定左右子树范围；用哈希表预处理值在中序序列中的位置，避免重复查找。

- [ ] A：105. 从前序与中序遍历序列构造二叉树（[中国站](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)｜[国际站](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)）
- [ ] B：106. 从中序与后序遍历序列构造二叉树（[中国站](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)｜[国际站](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)）

## 86. 网格回溯

> **考察与技巧：** 从候选起点 DFS，进入格子时标记已使用，退出时恢复现场；根据剩余目标和可达性提前剪枝。

- [ ] A：79. 单词搜索（[中国站](https://leetcode.cn/problems/word-search/)｜[国际站](https://leetcode.com/problems/word-search/)）
- [ ] B：1219. 黄金矿工（[中国站](https://leetcode.cn/problems/path-with-maximum-gold/)｜[国际站](https://leetcode.com/problems/path-with-maximum-gold/)）

## 87. 字符串切分回溯

> **考察与技巧：** 枚举下一段的结束位置，只在当前片段合法时继续递归；同时根据剩余字符数和段数剪枝。

- [ ] A：93. 复原 IP 地址（[中国站](https://leetcode.cn/problems/restore-ip-addresses/)｜[国际站](https://leetcode.com/problems/restore-ip-addresses/)）
- [ ] B：131. 分割回文串（[中国站](https://leetcode.cn/problems/palindrome-partitioning/)｜[国际站](https://leetcode.com/problems/palindrome-partitioning/)）

## 88. 乘积与正负状态 DP

> **考察与技巧：** 负数会交换最大值与最小值、正积与负积的角色，因此必须同时维护成对状态，不能只保留单个局部最优值。

- [ ] A：152. 乘积最大子数组（[中国站](https://leetcode.cn/problems/maximum-product-subarray/)｜[国际站](https://leetcode.com/problems/maximum-product-subarray/)）——同时维护最大积和最小积
- [ ] B：1567. 乘积为正数的最长子数组长度（[中国站](https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/)｜[国际站](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)）——同时维护正积和负积长度

## 89. 可达范围贪心

> **考察与技巧：** 扫描当前位置时维护当前最远可达边界；求最少跳数时再维护本层边界，相当于不显式建图的分层 BFS。

- [ ] A：55. 跳跃游戏（[中国站](https://leetcode.cn/problems/jump-game/)｜[国际站](https://leetcode.com/problems/jump-game/)）——维护最远可达位置
- [ ] B：45. 跳跃游戏 II（[中国站](https://leetcode.cn/problems/jump-game-ii/)｜[国际站](https://leetcode.com/problems/jump-game-ii/)）——维护当前层与下一层边界

---

# 进阶补全区

以下算法在完整题单中存在，但流行度明显低于主线，更适合竞赛、算法岗或完成主线后的专项提高。

## 90. 二维差分

> **考察与技巧：** 子矩形修改只更新四个角的差分标记，完成所有操作后连续做横向和纵向前缀和还原矩阵。

- [ ] A：2536. 子矩阵元素加 1（[中国站](https://leetcode.cn/problems/increment-submatrices-by-one/)｜[国际站](https://leetcode.com/problems/increment-submatrices-by-one/)）
- [ ] B：2132. 用邮票贴满网格图（[中国站](https://leetcode.cn/problems/stamping-the-grid/)｜[国际站](https://leetcode.com/problems/stamping-the-grid/)）

## 91. 扫描线与离线查询

> **考察与技巧：** 先按某个维度排序事件和询问，移动统一指针增量维护数据结构，从而避免每次查询重新扫描。

- [ ] A：2070. 每一个查询的最大美丽值（[中国站](https://leetcode.cn/problems/most-beautiful-item-for-each-query/)｜[国际站](https://leetcode.com/problems/most-beautiful-item-for-each-query/)）
- [ ] B：2503. 矩阵查询可获得的最大分数（[中国站](https://leetcode.cn/problems/maximum-number-of-points-from-grid-queries/)｜[国际站](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/)）

## 92. 折半枚举

> **考察与技巧：** 将集合分成两半，分别枚举所有子集结果，再通过排序、哈希或二分组合两侧答案。

- [ ] A：494. 目标和（[中国站](https://leetcode.cn/problems/target-sum/)｜[国际站](https://leetcode.com/problems/target-sum/)）
- [ ] B：1755. 最接近目标值的子序列和（[中国站](https://leetcode.cn/problems/closest-subsequence-sum/)｜[国际站](https://leetcode.com/problems/closest-subsequence-sum/)）

## 93. 欧拉路径

> **考察与技巧：** 关注节点入度与出度，并用 Hierholzer 算法不断删除已走边，回溯时逆序记录最终路径。

- [ ] A：332. 重新安排行程（[中国站](https://leetcode.cn/problems/reconstruct-itinerary/)｜[国际站](https://leetcode.com/problems/reconstruct-itinerary/)）
- [ ] B：2097. 合法重新排列数对（[中国站](https://leetcode.cn/problems/valid-arrangement-of-pairs/)｜[国际站](https://leetcode.com/problems/valid-arrangement-of-pairs/)）

## 94. Tarjan

> **考察与技巧：** DFS 中维护访问时间 `dfn` 与可回溯到的最早时间 `low`，据此识别桥、割点或强连通分量。

- [ ] A：1192. 查找集群内的关键连接（[中国站](https://leetcode.cn/problems/critical-connections-in-a-network/)｜[国际站](https://leetcode.com/problems/critical-connections-in-a-network/)）
- [ ] B：1568. 使陆地分离的最少天数（[中国站](https://leetcode.cn/problems/minimum-number-of-days-to-disconnect-island/)｜[国际站](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)）

## 95. 数位 DP

> **考察与技巧：** 从高位到低位构造数字，状态通常包含位置、限制上界、前导零及题目统计量，并使用记忆化搜索。

- [ ] A：357. 统计各位数字都不同的数字个数（[中国站](https://leetcode.cn/problems/count-numbers-with-unique-digits/)｜[国际站](https://leetcode.com/problems/count-numbers-with-unique-digits/)）
- [ ] B：902. 最大为 N 的数字组合（[中国站](https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/)｜[国际站](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)）

## 96. 懒标记线段树

> **考察与技巧：** 区间更新时把操作暂存在完整覆盖节点，访问子节点前再下传标记，以 $O(\log n)$ 完成修改和查询。

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

---

# 推荐刷题顺序

1. **第一阶段 1～15＋模式 74～80**：数组、哈希、双指针、矩阵、滑窗、前缀和、差分、二分。
2. **第二、三阶段 16～41＋模式 81～87**：数据结构、链表、树、搜索、回溯。
3. **第四阶段 42～53＋模式 88**：集中突破动态规划。
4. **第五阶段 54～64＋模式 89**：贪心、位运算、数学。
5. **第六、七阶段 65～73**：字符串与图论。
6. 最后按需求进入进阶补全区 90～96。

主线共 **89 个知识点、178 个题位**。少量题目因具有多种代表性出现两次，实际去重后为 **176 题**。
# leetcode-fasttrack
