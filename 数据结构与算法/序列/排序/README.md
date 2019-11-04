# 排序

给定n个元素的序列，将序列的元素按照从小到大的顺序排列。

- 插入排序
	- [直接插入排序](插入排序#直接插入排序)
	- [二分插入排序](插入排序#二分插入排序)
	- [希尔排序](希尔排序)
- 交换排序
    - [冒泡排序](冒泡排序)

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

``` C#
private static void Swap<T>(ref T x, ref T y)
{
    var tmp = x;
    x = y;
    y = tmp;
}
```