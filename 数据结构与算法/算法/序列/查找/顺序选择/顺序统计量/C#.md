# 顺序选择 - C#

## 一、排序法

#### 第k大元素

``` C#
/// <summary>
/// 从数组elements中查找第k大的元素，k从1开始计算
/// </summary>
public static T FindKMax<T>(T[] elements, int k, Comparison<T> comparison)
{
	var array = new T[k];
	for (var i = 0; i < k; i++)
	{
		InsertMax(array, elements[i], i, comparison);
	}
	for (var i = k; i < elements.Length; i++)
	{
		if (comparison(elements[i], array[k - 1]) > 0)
		{
			InsertMax(array, elements[i], k - 1, comparison);
		}
	}
	return array[k - 1];
}

private static void InsertMax<T>(T[] array, T value, int pos, Comparison<T> comparison)
{
	var j = pos;
	while (j > 0)
	{
		if (comparison(array[j - 1], value) < 0)
		{
			array[j] = array[j - 1];
		}
		else
		{
			break;
		}
		--j;
	}
	array[j] = value;
}
```

#### 第k小元素

``` C#
/// <summary>
/// 从数组elements中查找第k小的元素，k从1开始计算
/// </summary>
public static T FindKMin<T>(T[] elements, int k, Comparison<T> comparison)
{
    var array = new T[k];
    for (var i = 0; i < k; i++)
    {
        InsertMin(array, elements[i], i, comparison);
    }
    for (var i = k; i < elements.Length; i++)
    {
        if (comparison(elements[i], array[k - 1]) < 0)
        {
            InsertMin(array, elements[i], k - 1, comparison);
        }
    }
    return array[k - 1];
}

private static void InsertMin<T>(T[] array, T value, int pos, Comparison<T> comparison)
{
    var j = pos;
    while (j > 0)
    {
        if (comparison(array[j - 1], value) > 0)
        {
            array[j] = array[j - 1];
        }
        else
        {
            break;
        }
        j--;
    }
    array[j] = value;
}
```

## 二、分治法
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