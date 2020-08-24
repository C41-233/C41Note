# 最大最小值

单独寻找最大值或最小值，顺序遍历每个元素，需要进行n-1次比较。

同时寻找最大值与最小值，不需要进行至多2n-2次比较。元素之间两两比较，较小元素与当前最小值比较，较大元素与当前最大值比较。每2个元素只需要3次比较，总共进行至多3⌊n/2⌋次比较。

## 实现

#### 从数组中获取最大最小值的下标

##### C#
``` C#
public static void FindMaxMin<T>(T[] array, Comparison<T> comparator, out int maxPos, out int minPos)
{
    maxPos = 0;
    minPos = 0;
    var i = 1;
    for (; i < array.Length - 1; i+=2)
    {
        int left, right;
        if (comparator(array[i], array[i + 1]) <= 0)
        {
            left = i;
            right = i + 1;
        }
        else
        {
            left = i + 1;
            right = i;
        }

        if (comparator(array[left], array[minPos]) < 0)
        {
            minPos = left;
        }

        if (comparator(array[right], array[maxPos]) > 0)
        {
            maxPos = right;
        }
    }

    if (comparator(array[i], array[minPos]) < 0)
    {
        minPos = i;
    }
    else if (comparator(array[i], array[maxPos]) > 0)
    {
        maxPos = i;
    }
}
```

#### 从序列中获取最大最小值

##### C#
``` C#
public static void FindMaxMin<T>(IEnumerable<T> enumerable, Comparison<T> comparator, out T max, out T min)
{
    using (var enumerator = enumerable.GetEnumerator())
    {
        if (!enumerator.MoveNext())
        {
            max = default;
            min = default;
            return;
        }

        max = enumerator.Current;
        min = enumerator.Current;
        while(enumerator.MoveNext())
        {
            var current = enumerator.Current;
            if (!enumerator.MoveNext())
            {
                if (comparator(current, max) > 0)
                {
                    max = current;
                }
                else if (comparator(current, min) < 0)
                {
                    min = current;
                }
                break;
            }

            var next = enumerator.Current;

            if (comparator(current, next) <= 0)
            {
                if (comparator(current, min) < 0)
                {
                    min = current;
                }

                if (comparator(next, max) > 0)
                {
                    max = next;
                }
            }
            else
            {
                if (comparator(current, max) > 0)
                {
                    max = current;
                }

                if (comparator(next, min) < 0)
                {
                    min = next;
                }
            }
        }
    }
}
```