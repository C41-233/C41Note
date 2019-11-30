### 选取第一个数为基准

``` C#
public static void QuickSort<T>(T[] array, Comparison<T> comparator)
{
    QuickSort(array, 0, array.Length - 1, comparator);
}

private static void QuickSort<T>(T[] array, int start, int end, Comparison<T> comparator)
{
    if (start > end)
    {
        return;
    }
    int i = start, j = end;
    var key = array[start];
    while (i < j)
    {
        while (i < j && comparator(array[j], key) >= 0)
        {
            j--;
        }
        if (i < j)
        {
            array[i] = array[j];
        }
        while (i < j && comparator(array[i], key) < 0)
        {
            i++;
        }
        if (i < j)
        {
            array[j] = array[i];
        }
    }
    array[i] = key;
    QuickSort(array, start, i - 1, comparator);
    QuickSort(array, j + 1, end, comparator);
}
```

### Lomuto partition scheme

``` C#
public static void QuickSort<T>(T[] array, Comparison<T> comparator)
{
    QuickSort(array, 0, array.Length - 1, comparator);
}

private static void QuickSort<T>(T[] array, int start, int end, Comparison<T> comparator)
{
    if (start < end)
    {
        var p = Partition(array, start, end, comparator);
        QuickSort(array, start, p - 1, comparator);
        QuickSort(array, p + 1, end, comparator);
    }
}

private static int Partition<T>(T[] array, int start, int end, Comparison<T> comparator)
{
    var target = array[end];
    var i = start;
    for (var j = start; j < end; j++)
    {
        if (comparator(array[j], target) <= 0)
        {
            Swap(ref array[i], ref array[j]);
            i++;
        }
    }

    Swap(ref array[i], ref array[end]);
    return i;
}
```

### Hoare partition scheme

``` C#
public static void QuickSort<T>(T[] array, Comparison<T> comparator)
{
    QuickSort(array, 0, array.Length - 1, comparator);
}

private static void QuickSort<T>(T[] array, int start, int end, Comparison<T> comparator)
{
    if (start < end)
    {
        var pivotPos = Partition(array, start, end, comparator);
        QuickSort(array, start, pivotPos - 1, comparator);
        QuickSort(array, pivotPos + 1, end, comparator);
    }
}

private static int Partition<T>(T[] array, int start, int end, Comparison<T> comparator)
{
    var pivot = array[start + (end - start) / 2];
    var i = start - 1;
    var j = end + 1;
    while (true)
    {
        do
        {
            i++;
        } while (comparator(array[i], pivot) < 0);
        do
        {
            j--;
        } while (comparator(array[j], pivot) > 0);

        if (i >= j)
            return j;
        Swap(ref array[i], ref array[j]);
    }
}
```

### 三数中值（与最后一个数交换）

``` C#
public static void QuickSort<T>(T[] array, Comparison<T> comparator)
{
    QuickSort(array, 0, array.Length - 1, comparator);
}

private static void QuickSort<T>(T[] array, int left, int right, Comparison<T> comparator)
{
    if (left < right)
    {
        var pivot_pos = Partition(array, left, right, comparator);
        QuickSort(array, left, pivot_pos - 1, comparator);
        QuickSort(array, pivot_pos + 1, right, comparator);
    }
}

private static int Partition<T>(T[] array, int left, int right, Comparison<T> comparator)
{
    var pivotPos = Pivot(array, left, right, comparator);
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
    Swap(ref array[right],  ref array[i]);
    return i;
}

private static int Pivot<T>(T[] array, int left, int right, Comparison<T> comparator)
{
    var center = (left + right) / 2;
    if (comparator(array[center], array[left]) < 0)
    {
        Swap(ref array[left], ref array[center]);
    }
    if (comparator(array[right], array[left]) < 0)
    {
        Swap(ref array[left], ref array[right]);
    }
    if (comparator(array[right], array[center]) < 0)
    {
        Swap(ref array[center], ref array[right]);
    }
    return center;
}
```
