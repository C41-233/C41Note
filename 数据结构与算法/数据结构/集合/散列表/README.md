# 散列表

## 一、散列函数

良好的散列函数应当将每个元素独立均匀地散列到槽位中。

### 哈希函数

散列函数一般处理整数，因此元素通常会先进行一次哈希作为散列函数从而变为整数。

哈希函数应当保证，值相等的元素应当总是产生相等的哈希值。

### 除法散列

hash(k) = k mod m

m一般选择素数。

### 乘法散列

hash(k) = ⌊m(kA mod 1)⌋，其中 0<A<1，mod 1表示取小数部分。

m一般选择2的幂次数。

## 二、全域散列

为了防止哈希攻击，人为制造大量的数据产生散列冲突造成性能影响，散列函数的选取应当是随机的从一个函数集合中选取。

若散列函数集合满足，当散列函数个数为n，每个散列函数都将输入关键字映射到{0, 1, ..., m-1}中，且针对每一对不同的关键字k,l，满足h(k)=h(l)的散列函数个数至多为n/m，则称这样的散列函数集合为全域散列。

设p是一个足够大的素数，使得每一个可能的关键字k都满足0<=k<=p-1，令a∈{0, 1, ..., p-1}，b∈{1, 2, ... , p-1}。设散列槽位数为m，则散列函数定义为hash<sub>a,b</sub>(k) = ((ak + b) mod p) mod m。a的个数有p个，b的个数有p-1个，散列函数个数共有p(p-1)个，由所有这些散列函数构成的集合是全域散列。

## 三、实现

### 1. 拉链法（链接法）

对同一个散列值的不同元素，存储在一个链表中。

给定一个能存放n个元素的、具有m个槽位的散列表T，T的负载因子α=n/m，即每个槽位的平均存储元素数。

当散列函数均匀时，时间复杂度为O(α+1)。当槽数与元素数成正比时，即n=O(m)时，时间复杂度为O(1)。

### 2. 开放寻址法

全部元素都存放在散列表的槽位中，每个槽位要么是一个元素，要么是NULL。

设散列表共m个槽位，则对输入元素k应该设置的槽位进行m次探测。每次探测按照hash(k, i)计算槽位，其中i=0, 1, ... m-1。插入时，每次探测遇到NULL时，就将元素插入到该位置；查找元素的过程类似。删除元素时用特殊的标志，在探测查找元素时不能在该位置停止。

```
//插入元素value，并返回插入的槽位
HashInsert(T, value){
    i = 0
    do{
        j = hash(value, i)
        if(T[j] == NULL){
            T[j] = value
            return j
        }
        i++
    } while(i < m)
    return -1
}
```

```
//查找元素value，返回对应的槽位
HashFind(T, value){
    i = 0
    do{
        j = hash(value, i)
        if(T[j] == value){
            return j
        }
        i++
    } while(T[j] != NULL and i < m)
    return -1
}
```

##### 线性探查

给定一个辅助散列函数h(k)，线性探查的散列函数为 hash(k, i) = (h(k) + i) mod m。

根据公式，会按照h(k)，h(k)+1，h(k)+2，...，m-1，0，1，...，h(k)-1的顺序探查。

##### 二次探查
给定一个辅助散列函数h(k)，二次探查的散列函数为 hash(k, i) = (h(k) + c<sub>1</sub>i + c<sub>2</sub>i<sup>2</sup>) mod m，其中c<sub>1</sub>>0，c<sub>2</sub>>0。

根据公式，初始探查位置为h(k)，随后每次加上一个二次偏移量。

##### 双重散列

给定两个辅助散列函数h<sub>1</sub>(k)和h<sub>2</sub>(k)，双重散列的散列函数为 hash(k, i) = (h<sub>1</sub>(k) + ih<sub>2</sub>(k)) mod m。

h<sub>2</sub>(k)必须保证与槽位数m互质。可以采用以下方式：
- m为2的幂，h<sub>2</sub>(k)产生奇数
- m为素数


