# 快速排序

快速排序，又称划分交换排序。

## 算法描述

快速排序基于分治思想。在n个数的数组中，取定一个数作为基准，把小于等于它的数分划到它的左侧，把大于它的数分划到它的右侧，分划时原先元素的相对顺序可以保持不变，左右两侧可以为空。随后递归地对左右两侧进行划分。

## 划分
基准可以有多种选取方式，快速排序的性能取决于划分是否平衡，因为不同的划分写法会影响比较和移动的次数。

#### 1. 取第一个数为基准（不稳定实现）
1. 令i=start，j=end，其中array[i]是基准元素
2. 从右向左寻找，令j=第一个小于等于基准的元素位置
3. array[i] = array[j]
4. 从左向右寻找，令i=第一个大于基准的元素位置
5. array[j] = array[i]
6. 重复步骤2，直到i>=j
7. 最后，i处于基准位置，令array[i] = 基准元素

该实现在元素已经有序的情况下，排序的时间复杂度为O(n<sup>2</sup>)

##### 示例

基准为46

<table>
    <tr><td><strong>46</strong> 13 55 42 94 05 17 70 82 <strong>100</strong></td><td>初始</td></tr>
    <tr><td><strong>46</strong> 13 55 42 94 05 <strong>17</strong> 70 82 100</td><td>向左寻找</td></tr>
    <tr><td><strong>17</strong> 13 55 42 94 05 <strong>17</strong> 70 82 100</td><td>替换</td></tr>
    <tr><td>17 13 <strong>55</strong> 42 94 05 <strong>17</strong> 70 82 100</td><td>向右寻找</td></tr>
    <tr><td>17 13 <strong>55</strong> 42 94 05 <strong>55</strong> 70 82 100</td><td>替换</td></tr>
    <tr><td>17 13 <strong>55</strong> 42 94 <strong>05</strong> 55 70 82 100</td><td>向左寻找</td></tr>
    <tr><td>17 13 <strong>05</strong> 42 94 <strong>05</strong> 55 70 82 100</td><td>替换</td></tr>
    <tr><td>17 13 05 42 <strong>94</strong> <strong>05</strong> 55 70 82 100</td><td>向右寻找</td></tr>
    <tr><td>17 13 05 42 <strong>94</strong> <strong>94</strong> 55 70 82 100</td><td>替换</td></tr>
    <tr><td>17 13 05 42 <strong>46</strong> <strong>94</strong> 55 70 82 100</td><td>基准</td></tr>
</table>

#### 2. Lomuto partition scheme

取最后一个数为基准，不稳定实现。

不断把右侧小于等于基准的元素交换到左侧来。

1. 令i=start, j=start，array[end]为基准。
2. j不断递进到end-1，每当array[j]小于等于基准时：
    1. 交换array[i]与array[j]。（交换时，i指向左侧第一个大于基准的元素，j指向右侧第一个小于等于基准的元素）
    2. 递进i。
3. 最后，i指向第一个大于基准的元素，交换array[i]和array[end]

该实现在元素已经有序的情况下，排序的时间复杂度为O(n<sup>2</sup>)

##### 示例

基准为50

<table>
    <tr><td><strong>46</strong> 13 55 42 94 05 17 70 82 50</td><td>初始</td></tr>
    <tr><td>46 <strong>13</strong> 55 42 94 05 17 70 82 50</td><td>递进</td></tr>
    <tr><td>46 13 <strong>55</strong> 42 94 05 17 70 82 50</td><td>递进</td></tr>
    <tr><td>46 13 <strong>55</strong> <strong>42</strong> 94 05 17 70 82 50</td><td>递进</td></tr>
    <tr><td>46 13 <strong>42</strong> <strong>55</strong> 94 05 17 70 82 50</td><td>交换</td></tr>
    <tr><td>46 13 <strong>42</strong> 55 <strong>94</strong> 05 17 70 82 50</td><td>递进</td></tr>
    <tr><td>46 13 <strong>42</strong> 55 94 <strong>05</strong> 17 70 82 50</td><td>递进</td></tr>
    <tr><td>46 13 42 <strong>05</strong> 94 <strong>55</strong> 17 70 82 50</td><td>交换</td></tr>
    <tr><td>46 13 42 <strong>05</strong> 94 55 <strong>17</strong> 70 82 50</td><td>递进</td></tr>
    <tr><td>46 13 42 05 <strong>17</strong> 55 <strong>94</strong> 70 82 50</td><td>交换</td></tr>
    <tr><td>46 13 42 05 <strong>17</strong> 55 94 <strong>70</strong> 82 50</td><td>递进</td></tr>
    <tr><td>46 13 42 05 <strong>17</strong> 55 94 70 <strong>82</strong> 50</td><td>递进</td></tr>
    <tr><td>46 13 42 05 17 <strong>50</strong> 94 70 82 55</td><td>基准</td></tr>
</table>

#### 3. Hoare partition scheme
选择中间元素作为基准，随后由指针i从左向右寻找第一个大于等于基准的元素，指针j从右向左寻找第一个小于基准的元素，二者交换。随后继续进行这个过程，直到i和j相遇，此时j指向了基准元素。

不稳定实现。

#### 4. 随机选取
从序列中随机选取一个元素为基准，随后与第一个元素交换，随后进行以第一个元素为基准的划分。（也可以与最后一个元素交换，进行以最后一个元素为基准的划分）

#### 5. 三数中值
从序列中选取第一个元素、最后一个元素、中间元素的中值（第二大的元素），随后与第一个元素交换，随后进行以第一个元素为基准的划分。（也可以与最后一个元素交换，进行以最后一个元素为基准的划分）

## 算法分析

时间复杂度：平均O(nlogn)，最好情况下为O(nlogn)，最坏情况下为O(n<sup>2</sup>)

空间复杂度：O(logn)

稳定性：与实现有关，一般不稳定

大部分语言的实现中，快速排序可以利用空间局部性来访问数据，因此比堆排序更快。

对于小数组，快速排序性能不如插入排序。

快排通常以递归方式实现，一般情况下递归深度不会过大。当递归过深时，在子序列中可以改为堆排序。

## 优化

### 三路快速排序

三路快速排序是快速排序和基数排序的混合。

与原始的快速排序不同，三路快速排序在随机选取基准后，将待排元素划分为三个部分：小于、等于以及大于。使得与基准元素相等的元素聚集在基准元素周围。

三路快速排序在处理含有多个重复值的数组时，效率远高于原始快速排序。其最佳时间复杂度为O(n)。

### 内省排序

内省排序是快速排序和堆排序的结合，对快速排序进行了优化，保证了最差时间复杂度为O(nlogn)。

内省排序将快速排序的最大递归深度限制为log<sub>2</sub>n，超过限制时就转换为堆排序。这样既保留了快速排序内存访问的局部性，又可以防止快速排序在某些情况下性能退化为O(n<sup>2</sup>)。
