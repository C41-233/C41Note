# Merkle树

Merkle树是一棵哈希树，满足：
1. 叶结点的值是对应数据块的HASH值。
2. 非叶结点的值是其所有子结点的值的组合HASH值。

![](1.png)

Merkle树还可用于数据块快速比对，当根结点的HASH值不一致时，从根结点出发，向下依次比较每个结点，可以找到不一致的数据块。复杂度为O(log(n))。