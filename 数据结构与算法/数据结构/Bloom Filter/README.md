# Bloom Filter（布隆过滤器）

Bloom filter是由Howard Bloom在1970年提出的二进制向量数据结构，它具有很好的空间和时间效率，被用来检测一个元素是不是集合中的一个成员。如果检测结果为是，该元素不一定在集合中（但有较高概率）；但如果检测结果为否，该元素一定不在集合中。Bloom Filter只需要哈希表1/8到1/4的空间。

## 算法步骤

- 初始化：设元素集合内有n个元素，用m位数组保存信息，初始时每一位都置0。

- add：用k个**相互独立**的哈希函数，分别将n个元素映射到m位中，并将该位置为1。即对元素x，第i个哈希函数映射的位置j=hash<sub>i</sub>(x)，将第j位设为1，其中1≤i≤k，1≤j≤m。

- contains：判断元素y是否属于集合时，对y分别使用k个哈希函数，得到k个位置。如果其对应的k个位置都是1，则y可能在集合中。若某一个位不是1，则y一定不在集合中。

- 不允许remove元素。

## 算法分析

add和contains的时间复杂度都为O(k)。

一个元素被误判为存在的概率为![](https://latex.codecogs.com/gif.latex?p={(1-e^{-\frac{nk}{m}})}^k)。当m增大或n减小时，误判率减小。

给定m和n，当满足![](https://latex.codecogs.com/gif.latex?k=\0.7\frac{m}{n})时，误判率最低，此时误判率为![](https://latex.codecogs.com/gif.latex?p=2^{-ln2\frac{m}{n}})。

