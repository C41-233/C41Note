# 目标模

##### 问题
给定一个整数数组，求其元素之和对k的模等于x的连续子数组数量。

##### 算法

令p(i)为下标为i的元素的前缀和，则`(p(b) - p(a)) % k = x`，等价于`(p(b) - x) % k = p(a)`。

算法同目标和。