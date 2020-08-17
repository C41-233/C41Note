``` C#
/*
 * 最小的参与合并的数组大小
 */
private const int MIN_MERGE_LEN = 32;

public static void Sort<T>(T[] arr, Comparison<T> comparator)
{
    Sort(arr, 0, arr.Length, comparator);
}

public static void Sort<T>(T[] arr, int low, int high, Comparison<T> comparator)
{
    RangeCheck(arr.Length, low, high);

    var lenRemaining = high - low;
    /*
     * 数组长度为0或1的已经有序
     */
    if (lenRemaining < 2)
    {
        return;
    }

    if (lenRemaining < MIN_MERGE_LEN)
    {
        var initRunLen = CountRunAndMakeAscending(arr, low, high, comparator);
        BinaryInsertionSort(arr, low, high, low + initRunLen, comparator);
        return;
    }

    var ts = new TimStack<T>(arr, comparator);
    var minRun = MinRunLength(lenRemaining);
    do
    {
        //查找下一个run
        var runLen = CountRunAndMakeAscending(arr, low, high, comparator);

        //对小的run二分插入排序扩展
        if (runLen < minRun)
        {
            var force = lenRemaining <= minRun ? lenRemaining : minRun;
            BinaryInsertionSort(arr, low, low + force, low + runLen, comparator);
            runLen = force;
        }

        //将run压栈
        ts.PushRun(low, runLen);
        ts.MergeCollapse();

        //寻找下一个run
        low += runLen;
        lenRemaining -= runLen;
    } while (lenRemaining != 0);

    //合并所有剩余的run
    ts.MergeForceCollapse();
}

/*
 * 二分插入排序，要求从[low, start)部分已经有序的，仅从start开始排序
 */
private static void BinaryInsertionSort<T>(T[] array, int low, int high, int start, Comparison<T> comparator)
{
    if (start == low)
    {
        start++;
    }
    while (start < high)
    {
        var pivot = array[start];

        var left = low;
        var right = start;

        while (left < right)
        {
            var mid = (left + right) / 2;
            if (comparator(pivot, array[mid]) < 0)
            {
                right = mid;
            }
            else
            {
                left = mid + 1;
            }
        }
        //此时left是需要插入的位置

        var n = start - left;
        switch (n)
        {
            case 2:
                array[left + 2] = array[left + 1];
                array[left + 1] = array[left];
                break;
            case 1:
                array[left + 1] = array[left];
                break;
            default:
                //数组从left开始整体向右移动
                Array.Copy(array, left, array, left + 1, n);
                break;
        }
        array[left] = pivot;

        start++;
    }
}

/*
 * 查找并返回数组中指定下标开始的run大小，这个run必须是严格递增的。如果是严格递减的，将其翻转。返回run的大小。
 */
private static int CountRunAndMakeAscending<T>(T[] arr, int low, int high, Comparison<T> comparator)
{
    var runHigh = low + 1;
    if (runHigh == high)
        return 1;

    if (comparator(arr[low], arr[runHigh++]) > 0)
    {
        while (runHigh < high && comparator(arr[runHigh - 1], arr[runHigh]) > 0)
        {
            runHigh++;
        }
        ReverseRange(arr, low, runHigh);
    }
    else
    {
        while (runHigh < high && comparator(arr[runHigh], arr[runHigh - 1]) >= 0)
        {
            runHigh++;
        }
    }

    return runHigh - low;
}

/*
 * 翻转数组
 */
private static void ReverseRange<T>(T[] arr, int low, int high)
{
    high--;
    while (low < high)
    {
        var t = arr[low];
        arr[low++] = arr[high];
        arr[high--] = t;
    }
}

/*
 * 返回指定大小数组的最小可接受run大小
 * 如果n<MIN_MERGE_LEN，则返回n。否则不断除以2直到小于MIN_MERGE_LEN，如果某一次不能整除，则再加上1
 */
private static int MinRunLength(int n)
{
    var r = 0;
    while (n >= MIN_MERGE_LEN)
    {
        r |= (n & 1);
        n >>= 1;
    }
    return n + r;
}

/*
 * 断言，主要发生在comparator没有正确实现的时候
 */
private static void RangeCheck(int arrayLen, int fromIndex, int toIndex)
{
    if (fromIndex > toIndex)
    {
        throw new ArgumentException("fromIndex(" + fromIndex + ")>toIndex(" + toIndex + ")");
    }
    if (fromIndex < 0)
    {
        throw new ArgumentException($"{fromIndex}");
    }
    if (toIndex > arrayLen)
    {
        throw new ArgumentException($"{toIndex}");
    }
}

private struct TimStack<T>
{

    private const int MIN_GALLOP = 7;
    private const int INITIAL_TMP_STORAGE_LENGTH = 256;

    private readonly Comparison<T> comparator;
    private readonly T[] array;
    private T[] tmp;

    private int minGallop;

    /*
     * 待合并的run栈
     * runBase[i] + runLen[i] == runBase[i + 1]
     */
    private readonly int[] runStack;

    private readonly int[] runLen;

    /*
     * 栈大小，同时指向栈顶空位
     */
    private int stackSize;

    public TimStack(T[] arr, Comparison<T> comparator)
    {
        this.array = arr;
        this.comparator = comparator;
        this.minGallop = MIN_GALLOP;
        this.stackSize = 0;

        var len = arr.Length;
        this.tmp = new T[
            len < 2 * INITIAL_TMP_STORAGE_LENGTH
            ? len >> 1
            : INITIAL_TMP_STORAGE_LENGTH];

        /*
         * 不可变的栈大小，魔数与MIN_MERGE_LEN紧耦合
         */
        int stackLen;
        if (len < 120)
        {
            stackLen = 5;
        }
        else if (len < 1542)
        {
            stackLen = 10;
        }
        else if (len < 119151)
        {
            stackLen = 19;
        }
        else
        {
            stackLen = 49;
        }
        this.runStack = new int[stackLen];
        this.runLen = new int[stackLen];
    }

    /*
     * run压栈
     */
    public void PushRun(int runBase, int runLen)
    {
        this.runStack[stackSize] = runBase;
        this.runLen[stackSize] = runLen;
        stackSize++;
    }

    /*
     * 合并相邻的run，直到满足以下条件
     * 1. runLen[i-3] > runLen[i-2] + runLen[i-1]
     * 2. runLen[i-2] > runLen[i-1]
     */
    public void MergeCollapse()
    {
        while (stackSize > 1)
        {
            var n = stackSize - 2;
            if (n > 0 && runLen[n - 1] <= runLen[n] + runLen[n + 1])
            {
                if (runLen[n - 1] < runLen[n + 1])
                {
                    n--;
                }
                MergeAt(n);
            }
            else if (runLen[n] <= runLen[n + 1])
            {
                MergeAt(n);
            }
            else
            {
                break;
            }
        }
    }

    /*
     * 合并栈内的所有run
     */
    public void MergeForceCollapse()
    {
        while (stackSize > 1)
        {
            var n = stackSize - 2;
            if (n > 0 && runLen[n - 1] < runLen[n + 1])
            {
                n--;
            }
            MergeAt(n);
        }
    }

    /*
     * 合并索引为i和i+1的两个run，i必须是栈中倒数第二个或倒数第三个，即i == stackSize-2 || i == stackSize-3;
     */
    private void MergeAt(int i)
    {
        var base1 = runStack[i];
        var len1 = runLen[i];
        var base2 = runStack[i + 1];
        var len2 = runLen[i + 1];

        runLen[i] = len1 + len2;
        /*
         * 如果i是倒数第三个run，忽略掉顶上的run
         */
        if (i == stackSize - 3)
        {
            runStack[i + 1] = runStack[i + 2];
            runLen[i + 1] = runLen[i + 2];
        }
        stackSize--;

        //在run1中找run2首元素的位置k，这前k个元素已经在合并后的位置
        var k = GallopRight(array[base2], array, base1, len1, 0, comparator);
        base1 += k;
        len1 -= k;
        if (len1 == 0)
        {
            return;
        }

        //在run2中找run1的尾元素位置len2，len2之后的元素已经在合并后的位置
        len2 = GallopLeft(array[base1 + len1 - 1], array, base2, len2, len2 - 1, comparator);
        if (len2 == 0)
        {
            return;
        }

        if (len1 <= len2)
        {
            MergeLo(base1, len1, base2, len2);
        }
        else
        {
            MergeHi(base1, len1, base2, len2);
        }
    }

    /*
     * 合并两个相邻的run，且run1中的第一个元素必须比run2中的第一个元素大，run1中的最后一个元素必须比run2中的所有元素大
     * 当且仅当len1 <= len2时调用该方法
     */
    private void MergeLo(int base1, int len1, int base2, int len2)
    {
        var arr = this.array;
        var tmp = EnsureCapacity(len1);
        Array.Copy(arr, base1, tmp, 0, len1);

        var cursor1 = 0;
        var cursor2 = base2;
        var dest = base1;

        arr[dest++] = arr[cursor2++];
        if (--len2 == 0)
        {
            Array.Copy(tmp, cursor1, arr, dest, len1);
            return;
        }
        if (len1 == 1)
        {
            Array.Copy(arr, cursor2, arr, dest, len2);
            arr[dest + len2] = tmp[cursor1];
            return;
        }

        var comparator = this.comparator;
        var minGallop = this.minGallop;
        outer: while (true)
        {
            var count1 = 0;
            var count2 = 0;

            do
            {
                if (comparator(arr[cursor2], tmp[cursor1]) < 0)
                {
                    arr[dest++] = arr[cursor2++];
                    count2++;
                    count1 = 0;
                    if (--len2 == 0)
                    {
                        goto outer;
                    }
                }
                else
                {
                    arr[dest++] = tmp[cursor1++];
                    count1++;
                    count2 = 0;
                    if (--len1 == 1)
                    {
                        goto outer;
                    }
                }
            } while ((count1 | count2) < minGallop);

            do
            {
                count1 = GallopRight(arr[cursor2], tmp, cursor1, len1, 0, comparator);
                if (count1 != 0)
                {
                    Array.Copy(tmp, cursor1, arr, dest, count1);
                    dest += count1;
                    cursor1 += count1;
                    len1 -= count1;
                    if (len1 <= 1)
                    {
                        goto outer;
                    }
                }
                arr[dest++] = arr[cursor2++];
                if (--len2 == 0)
                {
                    goto outer;
                }

                count2 = GallopLeft(tmp[cursor1], arr, cursor2, len2, 0, comparator);
                if (count2 != 0)
                {
                    Array.Copy(arr, cursor2, arr, dest, count2);
                    dest += count2;
                    cursor2 += count2;
                    len2 -= count2;
                    if (len2 == 0)
                    {
                        goto outer;
                    }
                }
                arr[dest++] = tmp[cursor1++];
                if (--len1 == 1)
                {
                    goto outer;
                }
                minGallop--;
            } while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP);
            if (minGallop < 0)
            {
                minGallop = 0;
            }
            minGallop += 2;
        }
        this.minGallop = minGallop < 1 ? 1 : minGallop;

        if (len1 == 1)
        {
            Array.Copy(arr, cursor2, arr, dest, len2);
            arr[dest + len2] = tmp[cursor1];
        }
        else if (len1 == 0)
        {
            throw new ArgumentException("Comparison method violates its general contract!");
        }
        else
        {
            Array.Copy(tmp, cursor1, arr, dest, len1);
        }
    }

    /*
     * 合并两个相邻的run，len1>=len2
     */
    private void MergeHi(int base1, int len1, int base2, int len2)
    {
        var arr = this.array;
        var tmp = EnsureCapacity(len2);
        Array.Copy(arr, base2, tmp, 0, len2);

        var cursor1 = base1 + len1 - 1;
        var cursor2 = len2 - 1;
        var dest = base2 + len2 - 1;

        arr[dest--] = arr[cursor1--];
        if (--len1 == 0)
        {
            Array.Copy(tmp, 0, arr, dest - (len2 - 1), len2);
            return;
        }
        if (len2 == 1)
        {
            dest -= len1;
            cursor1 -= len1;
            Array.Copy(arr, cursor1 + 1, arr, dest + 1, len1);
            arr[dest] = tmp[cursor2];
            return;
        }

        var c = this.comparator;

        var minGallop = this.minGallop;
        outer: while (true)
        {
            var count1 = 0;
            var count2 = 0;

            do
            {
                if (c(tmp[cursor2], arr[cursor1]) < 0)
                {
                    arr[dest--] = arr[cursor1--];
                    count1++;
                    count2 = 0;
                    if (--len1 == 0)
                    {
                        goto outer;
                    }
                }
                else
                {
                    arr[dest--] = tmp[cursor2--];
                    count2++;
                    count1 = 0;
                    if (--len2 == 1)
                    {
                        goto outer;
                    }
                }
            } while ((count1 | count2) < minGallop);

            do
            {
                count1 = len1 - GallopRight(tmp[cursor2], arr, base1, len1, len1 - 1, c);
                if (count1 != 0)
                {
                    dest -= count1;
                    cursor1 -= count1;
                    len1 -= count1;
                    Array.Copy(arr, cursor1 + 1, arr, dest + 1, count1);
                    if (len1 == 0)
                    {
                        goto outer;
                    }
                }
                arr[dest--] = tmp[cursor2--];
                if (--len2 == 1)
                {
                    goto outer;
                }

                count2 = len2 - GallopLeft(arr[cursor1], tmp, 0, len2, len2 - 1, c);
                if (count2 != 0)
                {
                    dest -= count2;
                    cursor2 -= count2;
                    len2 -= count2;
                    Array.Copy(tmp, cursor2 + 1, arr, dest + 1, count2);
                    if (len2 <= 1)
                    {
                        goto outer;
                    }
                }
                arr[dest--] = arr[cursor1--];
                if (--len1 == 0)
                {
                    goto outer;
                }
                minGallop--;
            } while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP);
            if (minGallop < 0)
                minGallop = 0;
            minGallop += 2;
        }
        this.minGallop = minGallop < 1 ? 1 : minGallop;

        if (len2 == 1)
        {
            dest -= len1;
            cursor1 -= len1;
            Array.Copy(arr, cursor1 + 1, arr, dest + 1, len1);
            arr[dest] = tmp[cursor2];
        }
        else if (len2 == 0)
        {
            throw new ArgumentException("Comparison method violates its general contract!");
        }
        else
        {
            Array.Copy(tmp, 0, arr, dest - (len2 - 1), len2);
        }
    }

    /*
     * 确保临时数组的大小至少有 minCapacity大
     */
    private T[] EnsureCapacity(int minCapacity)
    {
        if (tmp.Length < minCapacity)
        {
            var newSize = minCapacity;
            newSize |= newSize >> 1;
            newSize |= newSize >> 2;
            newSize |= newSize >> 4;
            newSize |= newSize >> 8;
            newSize |= newSize >> 16;
            newSize++;

            if (newSize < 0)
            {
                newSize = minCapacity;
            }
            else
            {
                newSize = Math.Min(newSize, array.Length >> 1);
            }
            var newArray = new T[newSize];
            tmp = newArray;
        }
        return tmp;
    }

    //查找数组中key的位置，该位置后的所有元素比key大
    private static int GallopLeft(T key, T[] arr, int start, int len, int hint, Comparison<T> comparator)
    {
        var lastOfs = 0;
        var ofs = 1;
        if (comparator(key, arr[start + hint]) > 0)
        {
            var maxOfs = len - hint;
            while (ofs < maxOfs && comparator(key, arr[start + hint + ofs]) > 0)
            {
                lastOfs = ofs;
                ofs = (ofs << 1) + 1;
                if (ofs <= 0)
                {
                    ofs = maxOfs;
                }
            }
            if (ofs > maxOfs)
            {
                ofs = maxOfs;
            }

            lastOfs += hint;
            ofs += hint;
        }
        else
        {
            var maxOfs = hint + 1;
            while (ofs < maxOfs && comparator(key, arr[start + hint - ofs]) <= 0)
            {
                lastOfs = ofs;
                ofs = (ofs << 1) + 1;
                if (ofs <= 0)
                {
                    ofs = maxOfs;
                }
            }
            if (ofs > maxOfs)
            {
                ofs = maxOfs;
            }

            var tmp = lastOfs;
            lastOfs = hint - ofs;
            ofs = hint - tmp;
        }

        lastOfs++;
        while (lastOfs < ofs)
        {
            var m = lastOfs + ((ofs - lastOfs) >> 1);
            if (comparator(key, arr[start + m]) > 0)
            {
                lastOfs = m + 1;
            }
            else
            {
                ofs = m;
            }
        }
        return ofs;
    }

    //查找数组中key的位置，该位置前的所有元素比key小
    private static int GallopRight(T key, T[] arr, int start, int len, int hint, Comparison<T> comparator)
    {
        var ofs = 1;
        var lastOfs = 0;
        if (comparator(key, arr[start + hint]) < 0)
        {
            var maxOfs = hint + 1;
            while (ofs < maxOfs && comparator(key, arr[start + hint - ofs]) < 0)
            {
                lastOfs = ofs;
                ofs = (ofs << 1) + 1;
                if (ofs <= 0)
                {
                    ofs = maxOfs;
                }
            }
            if (ofs > maxOfs)
            {
                ofs = maxOfs;
            }

            var tmp = lastOfs;
            lastOfs = hint - ofs;
            ofs = hint - tmp;
        }
        else
        {
            var maxOfs = len - hint;
            while (ofs < maxOfs && comparator(key, arr[start + hint + ofs]) >= 0)
            {
                lastOfs = ofs;
                ofs = (ofs << 1) + 1;
                if (ofs <= 0)
                {
                    ofs = maxOfs;
                }
            }
            if (ofs > maxOfs)
            {
                ofs = maxOfs;
            }

            lastOfs += hint;
            ofs += hint;
        }

        lastOfs++;
        while (lastOfs < ofs)
        {
            var m = lastOfs + ((ofs - lastOfs) >> 1);

            if (comparator(key, arr[start + m]) < 0)
            {
                ofs = m;
            }
            else
            {
                lastOfs = m + 1;
            }
        }
        return ofs;
    }

}
```
