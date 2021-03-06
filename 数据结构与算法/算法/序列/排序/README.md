# 排序

给定n个元素的序列，将序列的元素按照一定的顺序排列（一般是从小到大）。

## 稳定性

排序算法的稳定性是指，相等的元素经过排序后相对顺序是否发生了改变。具有稳定性的排序算法，相等的元素经过排序后相对顺序保持不变。

## 排序算法

##### 基于比较的排序

在最坏情况下，任何基于比较的排序算法都需要做O(nlogn)次比较。

堆排序和归并排序是渐进最优比较排序算法。

- 插入排序
	- [直接插入排序](插入排序.md#直接插入排序)
	- [二分插入排序](插入排序.md#二分插入排序)
	- [希尔排序](希尔排序.md)
- 交换排序
    - [冒泡排序](冒泡排序.md)
    - [鸡尾酒排序](鸡尾酒排序.md)
    - [快速排序](快速排序)
- 选择排序
	- [选择排序](选择排序.md)
	- [锦标赛排序](锦标赛排序.md)
	- [堆排序](堆排序.md)
- 归并排序
	- [归并排序](归并排序.md)
	- [TimSort](TimSort)

##### 基于值的排序
- [计数排序](计数排序.md)
- [基数排序](基数排序.md)
- [桶排序](桶排序.md)

| 排序算法 | 时间复杂度 | 空间复杂度 | 稳定性 |
|---|---|---|---|
| 直接插入排序 | O(n)（最好）<br/>O(n<sup>2</sup>)（最坏）<br/>O(n<sup>2</sup>)（平均） | O(1) | 稳定 |
| 二分插入排序 | O(nlogn) | O(1) | 稳定 |
| 希尔排序 | | O(1) | 不稳定 |
| 冒泡排序 | O(n)（最好）<br/>O(n<sup>2</sup>)（最坏）<br/>O(n<sup>2</sup>)（平均） | O(1) | 稳定 |
| 鸡尾酒排序 | |  | 
| 快速排序 | O(nlogn)（最好）<br/>O(n<sup>2</sup>)（最坏）<br/>O(nlogn)（平均） | O(logn) | 不稳定 |
| 选择排序 | O(n<sup>2</sup>) | O(1) | 不稳定 |
| 堆排序 | O(nlogn) | O(1) | 不稳定 |
| 锦标赛排序 | O(nlogn) | O(n) | 不稳定 |
| 归并排序 | O(nlogn) | O(n) | 稳定 |
| 基数排序 | |  | 稳定 |
| 计数排序 | O(k+n) | O(k) | 稳定 |

## 算法涉及到的操作

##### 交换元素位置

``` Java
private static <T> void swap(T[] array, int left, int right)
{
    if(left==right){
        return;
    }
    T temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}
```

``` CSharp
private static void Swap<T>(ref T x, ref T y)
{
    var tmp = x;
    x = y;
    y = tmp;
}
```

``` C++
template <typename T>
void swap(T& x, T& y) noexcept
{
	T tmp = x;
	x = y;
	y = tmp;
}
```