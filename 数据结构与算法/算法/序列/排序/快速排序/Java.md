# 快速排序 - Java

### 选取第一个数为基准

递归版本

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

### 三数中值（与最后一个数交换）

递归版本

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
