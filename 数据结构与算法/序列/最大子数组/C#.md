## 分治
``` C#
public static void FindMaxSubArray(int[] array, out int left, out int right, out int sum)
{
    var range = FindMaxSubArray(array, 0, array.Length - 1);
    left = range.Left;
    right = range.Right;
    sum = range.Sum;
}

private struct Range
{
    public int Left;
    public int Right;
    public int Sum;
}

private static Range FindMaxSubArray(int[] array, int from, int to)
{
    if (from == to)
    {
        return new Range
        {
            Left = from,
            Right = to,
            Sum = array[from],
        };
    }

    var mid = (from + to) / 2;
    var left = FindMaxSubArray(array, from, mid);
    var right = FindMaxSubArray(array, mid + 1, to);
    var cross = FindMaxCrossSubArray(array, from, mid, to);

    if (left.Sum >= right.Sum && left.Sum >= cross.Sum)
    {
        return left;
    }
    if (right.Sum >= left.Sum && right.Sum >= cross.Sum)
    {
        return right;
    }

    return cross;
}

private static Range FindMaxCrossSubArray(int[] array, int from, int mid, int to)
{
    var range = new Range();
    var left_sum = int.MinValue;
    var right_sum = int.MinValue;
    {
        var sum = 0;
        for (var i = mid; i >= from; i--)
        {
            sum += array[i];
            if (sum > left_sum)
            {
                left_sum = sum;
                range.Left = i;
            }
        }
    }
    {

        var sum = 0;
        for (var j=mid + 1; j<=to; j++)
        {
            sum += array[j];
            if (sum > right_sum)
            {
                right_sum = sum;
                range.Right = j;
            }
        }
    }
    range.Sum = left_sum + right_sum;
    return range;
}
```

## 迭代
``` C#
public static void MaxSubArray(int[] array, out int from, out int to, out int sum)
{
    from = 0;
    to = 0;
    sum = int.MinValue;

    var current = 0;
    var current_from = 0;
    for (var i = 0; i < array.Length; i++)
    {
        if (array[i] > current + array[i])
        {
            current = array[i];
            current_from = i;
        }
        else
        {
            current = current + array[i];
        }
        if (sum < current)
        {
            sum = current;
            from = current_from;
            to = i;
        }
    }
}
```