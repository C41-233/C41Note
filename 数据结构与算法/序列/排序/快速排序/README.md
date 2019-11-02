# 快速排序

快速排序，又称划分交换排序。

## 算法描述

在n个数的数组中，取定一个数作为基准，把小于等于它的数分划到它的左侧，把大于它的数分划到它的右侧，分划时原先元素的相对顺序可以保持不变，左右两侧可以为空。随后递归地对左右两侧进行划分。

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

#### 3. 随机选取
从序列中随机选取一个元素为基准，随后与第一个元素交换，随后进行以第一个元素为基准的划分。（也可以与最后一个元素交换，进行以最后一个元素为基准的划分）

#### 4. 三数中值
从序列中选取第一个元素、最后一个元素、中间元素的中值（第二大的元素），随后与第一个元素交换，随后进行以第一个元素为基准的划分。（也可以与最后一个元素交换，进行以最后一个元素为基准的划分）

## 算法分析

时间复杂度：平均O(nlogn)，最坏情况下O(n<sup>2</sup>)

空间复杂度：O(logn)

稳定性：与实现有关

对于小数组，快速排序性能不如插入排序。

快排通常以递归方式实现，一般情况下递归深度不会过大。当递归过深时，在子序列中可以改为堆排序。

## 实现 

#### 选取第一个数为基准

##### Java
``` Java
public static <T> void quickSort(T[] array, Comparator<T> comparator){
    quick_sort(array, 0, array.length-1, comparator);
}

private static <T> void quick_sort(T[] array, int start, int end, Comparator<T> comparator) {
    if(start > end){
        return;
    }
    int i = start, j = end;
    T key = array[start];
    while(i < j){
        while(i < j && comparator.compare(array[j], key) >= 0){
            j--;
        }
        if(i < j){
            array[i] = array[j];
        }
        while(i < j && comparator.compare(array[i], key) < 0){
            i++;
        }
        if(i < j){
            array[j] = array[i];
        }
    }
    array[i] = key;
    quick_sort(array, start, i-1, comparator);
    quick_sort(array, j+1, end, comparator);
}
```

##### C#
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

#### Lomuto partition scheme

##### C#
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

#### 三数中值（与最后一个数交换）

##### Java
``` Java
public static <T> void quickSort(T[] array, Comparator<T> comparator)
{
    quick_sort(array, 0, array.length-1, comparator);
}

private static <T> void quick_sort(T[] array, int left, int right, Comparator<T> comparator)
{
    if(left < right){
        int pivot_pos = partition(array, left, right, comparator);
        quick_sort(array, left, pivot_pos-1, comparator);
        quick_sort(array, pivot_pos+1, right, comparator);
    }
}

private static <T> int partition(T[] array, int left, int right, Comparator<T> comparator)
{
    int pivot_pos = pivot(array, left, right, comparator);
    T pivot_value = array[pivot_pos];
    swap(array, pivot_pos, right);
    int i = left;
    for(int j = left; j < right; j++){ 
        if (comparator.compare(array[j], pivot_value) <= 0){
            swap(array, i, j);
            i++;
        }
    }
    swap(array, right, i);
    return i;
}

private static <T> int pivot(T[] array, int left, int right, Comparator<T> comparator)
{
    int center = (left + right) / 2;
    if(comparator.compare(array[center], array[left]) < 0){
        swap(array,left,center);
    }
    if(comparator.compare(array[right], array[left]) < 0){
        swap(array,left,right);
    }
    if(comparator.compare(array[right], array[center]) < 0){
        swap(array,center,right);
    }
    return center;
}
```

##### C#
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

## 备注

##### Java
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

##### C#
``` C#
private static void Swap<T>(ref T x, ref T y)
{
    var tmp = x;
    x = y;
    y = tmp;
}
```