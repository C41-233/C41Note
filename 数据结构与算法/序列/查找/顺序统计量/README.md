# 顺序统计量

给定一个包含n个数的序列，找到序列中第i小的元素。

特别地，最小值是第1小的元素，最大值是第n小的元素，中位数是第n/2小的元素。

## 分治法

采用快排的思想进行分治。

#### 算法分析

时间复杂度：平均O(n)，最坏O(n<sup>2</sup>)

#### 实现
##### C#
``` C#
//从数组array中查找第k小的元素，k从1开始计数
public static T Select<T>(T[] array, int k, Comparison<T> comparator)
{
    array = (T[]) array.Clone();
    return Select(array, 0, array.Length - 1, k, comparator);
}

private static T Select<T>(T[] array, int from, int to, int k, Comparison<T> comparator)
{
    if (from == to)
    {
        return array[from];
    }

    var pivot = Partition(array, from, to, comparator);
    var leftLen = pivot - from + 1;
    if (k == leftLen)
    {
        return array[pivot];
    }
    if (k < leftLen)
    {
        return Select(array, from, pivot - 1, k, comparator);
    }

    return Select(array, pivot + 1, to, k - leftLen, comparator);
}

private static int Partition<T>(T[] array, int left, int right, Comparison<T> comparator)
{
    var pivotPos = Random(left, right + 1);
    var pivot_value = array[pivotPos];
    Swap(ref array[pivotPos], ref array[right]);
    var i = left;
    for (var j = left; j < right; j++)
    {
        if (comparator(array[j], pivot_value) <= 0)
        {
            Swap(ref array[i], ref array[j]);
            i++;
        }
    }
    Swap(ref array[right], ref array[i]);
    return i;
}

private static void Swap<T>(ref T x, ref T y)
{
    var tmp = x;
    x = y;
    y = tmp;
}

private static readonly Random random = new Random();

private static int Random(int min, int max)
{
    return random.Next(min, max);
}
```