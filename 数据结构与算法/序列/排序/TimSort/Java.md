# TimSort - Java

``` Java
/*
 * 最小的参与合并的数组大小
 */
private static final int MIN_MERGE_LEN = 32;

public static <T> void sort(T[] arr, Comparator<? super T> comparator) {
	sort(arr, 0, arr.length, comparator);
}

/*
 * 排序范围[low, high)
 */
public static <T> void sort(T[] arr, int low, int high, Comparator<? super T> comparator) {
	range_check(arr.length, low, high);
	
	int lenRemaining = high - low;
	/*
	 * 数组长度为0或1的已经有序
	 */
	if (lenRemaining < 2){
		return;
	}

	if (lenRemaining < MIN_MERGE_LEN) {
		int initRunLen = count_run_and_make_ascending(arr, low, high, comparator);
		binary_insertion_sort(arr, low, high, low+initRunLen, comparator);
		return;
	}

	TimStack<T> ts = new TimStack<>(arr, comparator);
	int minRun = min_run_length(lenRemaining);
	do {
		//查找下一个run
		int runLen = count_run_and_make_ascending(arr, low, high, comparator);

		//对小的run二分插入排序扩展
		if (runLen < minRun) {
			int force = lenRemaining <= minRun ? lenRemaining : minRun;
			binary_insertion_sort(arr, low, low+force, low+runLen, comparator);
			runLen = force;
		}

		//将run压栈
		ts.pushRun(low, runLen);
		ts.mergeCollapse();

		//寻找下一个run
		low += runLen;
		lenRemaining -= runLen;
	} while (lenRemaining != 0);

	//合并所有剩余的run
	ts.mergeForceCollapse();
}

/*
 * 二分插入排序，要求从[low, start)部分已经有序的，仅从start开始排序
 */
private static <T> void binary_insertion_sort(T[] array, int low, int high, int start, Comparator<? super T> comparator) {
	if (start == low){
		start++;
	}
	while(start < high) {
		T pivot = array[start];

		int left = low;
		int right = start;

		while (left < right) {
			int mid = (left + right) / 2;
			if (comparator.compare(pivot, array[mid]) < 0){
				right = mid;
			}
			else{
				left = mid + 1;
			}
		}
        //此时left是需要插入的位置
        
		int n = start - left;
		switch (n) {
		case 2:
			array[left + 2] = array[left + 1];
			//go through
		case 1:
			array[left + 1] = array[left];
			break;
		default:
			//数组从left开始整体向右移动
			System.arraycopy(array, left, array, left+1, n);
		}
		array[left] = pivot;
		
		start++;
	}
}

/*
 * 查找并返回数组中指定下标开始的run大小，这个run必须是严格递增的。如果是严格递减的，将其翻转。返回run的大小。
 */
private static <T> int count_run_and_make_ascending(T[] arr, int low, int high, Comparator<? super T> comparator) {
	int runHigh = low + 1;
	if (runHigh == high)
		return 1;

	if (comparator.compare(arr[low], arr[runHigh++]) > 0) {
		while (runHigh < high && comparator.compare(arr[runHigh-1], arr[runHigh]) > 0){
			runHigh++;
		}
		reverse_range(arr, low, runHigh);
	} 
	else {
		while (runHigh < high && comparator.compare(arr[runHigh], arr[runHigh-1]) >= 0){
			runHigh++;
		}
	}

	return runHigh - low;
}

/*
 * 翻转数组
 */
private static <T> void reverse_range(T[] arr, int low, int high) {
	high--;
	while (low < high) {
		T t = arr[low];
		arr[low++] = arr[high];
		arr[high--] = t;
	}
}

/*
 * 返回指定大小数组的最小可接受run大小
 * 如果n<MIN_MERGE_LEN，则返回n。否则不断除以2直到小于MIN_MERGE_LEN，如果某一次不能整除，则再加上1
 */
private static int min_run_length(int n) {
	int r = 0;
	while (n >= MIN_MERGE_LEN) {
		r |= (n & 1);
		n >>= 1;
	}
	return n+r;
}

/*
 * 断言，主要发生在comparator没有正确实现的时候
 */
private static void range_check(int arrayLen, int fromIndex, int toIndex) {
	if (fromIndex > toIndex){
		throw new IllegalArgumentException("fromIndex("+fromIndex+")>toIndex("+toIndex+")");
	}
	if (fromIndex < 0){
		throw new ArrayIndexOutOfBoundsException(fromIndex);
	}
	if (toIndex > arrayLen){
		throw new ArrayIndexOutOfBoundsException(toIndex);
	}
}

private static class TimStack<T> {
	
	private static final int MIN_GALLOP = 7;
	private static final int INITIAL_TMP_STORAGE_LENGTH = 256;
	
	private final Comparator<? super T> comparator;
	private final T[] array;
	private T[] tmp;

	private int minGallop = MIN_GALLOP;

	/*
	 * 待合并的run栈
	 * runBase[i] + runLen[i] == runBase[i + 1]
	 */
	private final int[] runStack;
	
	private final int[] runLen;
	
	/*
	 * 栈大小，同时指向栈顶空位
	 */
	private int stackSize = 0;

	public TimStack(T[] arr, Comparator<? super T> comparator) {
		this.array = arr;
		this.comparator = comparator;

		int len = arr.length;
		this.tmp = (T[]) new Object[len < 2*INITIAL_TMP_STORAGE_LENGTH 
		    ? len>>>1 
		    : INITIAL_TMP_STORAGE_LENGTH];

		/*
		 * 不可变的栈大小，魔数与MIN_MERGE_LEN紧耦合
		 */
		int stackLen;
		if (len < 120) {
			stackLen = 5;
		} 
		else if (len < 1542) {
			stackLen = 10;
		} 
		else if (len < 119151) {
			stackLen = 19;
		} 
		else {
			stackLen = 49;
		}
		this.runStack = new int[stackLen];
		this.runLen = new int[stackLen];
	}

	/*
	 * run压栈
	 */
	public void pushRun(int runBase, int runLen) {
		this.runStack[stackSize] = runBase;
		this.runLen[stackSize] = runLen;
		stackSize++;
	}

	/*
	 * 合并相邻的run，直到满足以下条件
	 * 1. runLen[i-3] > runLen[i-2] + runLen[i-1]
	 * 2. runLen[i-2] > runLen[i-1]
	 */
	public void mergeCollapse() {
		while (stackSize > 1) {
			int n = stackSize - 2;
			if (n > 0 && runLen[n-1] <= runLen[n] + runLen[n+1]) {
				if (runLen[n-1] < runLen[n+1]){
					n--;
				}
				mergeAt(n);
			} 
			else if (runLen[n] <= runLen[n+1]) {
				mergeAt(n);
			} 
			else {
				break;
			}
		}
	}

	/*
	 * 合并栈内的所有run
	 */
	public void mergeForceCollapse() {
		while (stackSize > 1) {
			int n = stackSize - 2;
			if (n > 0 && runLen[n - 1] < runLen[n + 1]){
				n--;
			}
			mergeAt(n);
		}
	}

	/*
	 * 合并索引为i和i+1的两个run，i必须是栈中倒数第二个或倒数第三个，即i == stackSize-2 || i == stackSize-3;
	 */
	private void mergeAt(int i) {
		int base1 = runStack[i];
		int len1 = runLen[i];
		int base2 = runStack[i + 1];
		int len2 = runLen[i + 1];

		runLen[i] = len1+len2;
		/*
		 * 如果i是倒数第三个run，忽略掉顶上的run
		 */
		if (i == stackSize-3) {
			runStack[i + 1] = runStack[i + 2];
			runLen[i + 1] = runLen[i + 2];
		}
		stackSize--;

		//在run1中找run2首元素的位置k，这前k个元素已经在合并后的位置
		int k = gallopRight(array[base2], array, base1, len1, 0, comparator);
		base1 += k;
		len1 -= k;
		if (len1 == 0){
			return;
		}

		//在run2中找run1的尾元素位置len2，len2之后的元素已经在合并后的位置
		len2 = gallopLeft(array[base1 + len1 - 1], array, base2, len2, len2 - 1, comparator);
		if (len2 == 0){
			return;
		}

		if (len1 <= len2){
			mergeLo(base1, len1, base2, len2);
		}
		else{
			mergeHi(base1, len1, base2, len2);
		}
	}

	/*
	 * 合并两个相邻的run，且run1中的第一个元素必须比run2中的第一个元素大，run1中的最后一个元素必须比run2中的所有元素大
	 * 当且仅当len1 <= len2时调用该方法
	 */
	private void mergeLo(int base1, int len1, int base2, int len2) {
		T[] arr = this.array;
		T[] tmp = ensureCapacity(len1);
		System.arraycopy(arr, base1, tmp, 0, len1);

		int cursor1 = 0;
		int cursor2 = base2;
		int dest = base1;

		arr[dest++] = arr[cursor2++];
		if (--len2 == 0) {
			System.arraycopy(tmp, cursor1, arr, dest, len1);
			return;
		}
		if (len1 == 1) {
			System.arraycopy(arr, cursor2, arr, dest, len2);
			arr[dest + len2] = tmp[cursor1];
			return;
		}

		Comparator<? super T> comparator = this.comparator;
		int minGallop = this.minGallop; 
		outer: while (true) {
			int count1 = 0;
			int count2 = 0;

			do {
				if (comparator.compare(arr[cursor2], tmp[cursor1]) < 0) {
					arr[dest++] = arr[cursor2++];
					count2++;
					count1 = 0;
					if (--len2 == 0){
						break outer;
					}
				} 
				else {
					arr[dest++] = tmp[cursor1++];
					count1++;
					count2 = 0;
					if (--len1 == 1){
						break outer;
					}
				}
			} while ((count1|count2) < minGallop);

			do {
				count1 = gallopRight(arr[cursor2], tmp, cursor1, len1, 0, comparator);
				if (count1 != 0) {
					System.arraycopy(tmp, cursor1, arr, dest, count1);
					dest += count1;
					cursor1 += count1;
					len1 -= count1;
					if (len1 <= 1){
						break outer;
					}
				}
				arr[dest++] = arr[cursor2++];
				if (--len2 == 0){
					break outer;
				}

				count2 = gallopLeft(tmp[cursor1], arr, cursor2, len2, 0, comparator);
				if (count2 != 0) {
					System.arraycopy(arr, cursor2, arr, dest, count2);
					dest += count2;
					cursor2 += count2;
					len2 -= count2;
					if (len2 == 0){
						break outer;
					}
				}
				arr[dest++] = tmp[cursor1++];
				if (--len1 == 1){
					break outer;
				}
				minGallop--;
			} while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP);
			if (minGallop < 0){
				minGallop = 0;
			}
			minGallop += 2;
		}
		this.minGallop = minGallop<1 ? 1 : minGallop;

		if (len1 == 1) {
			System.arraycopy(arr, cursor2, arr, dest, len2);
			arr[dest + len2] = tmp[cursor1];
		}
		else if (len1 == 0) {
			throw new IllegalArgumentException("Comparison method violates its general contract!");
		} 
		else {
			System.arraycopy(tmp, cursor1, arr, dest, len1);
		}
	}

	/*
	 * 合并两个相邻的run，len1>=len2
	 */
	private void mergeHi(int base1, int len1, int base2, int len2) {
		T[] arr = this.array;
		T[] tmp = ensureCapacity(len2);
		System.arraycopy(arr, base2, tmp, 0, len2);

		int cursor1 = base1+len1-1;
		int cursor2 = len2-1;
		int dest = base2+len2-1;

		arr[dest--] = arr[cursor1--];
		if (--len1 == 0) {
			System.arraycopy(tmp, 0, arr, dest - (len2 - 1), len2);
			return;
		}
		if (len2 == 1) {
			dest -= len1;
			cursor1 -= len1;
			System.arraycopy(arr, cursor1 + 1, arr, dest + 1, len1);
			arr[dest] = tmp[cursor2];
			return;
		}

		Comparator<? super T> c = this.comparator;
						
		int minGallop = this.minGallop;
		outer: while (true) {
			int count1 = 0;
			int count2 = 0;

			do {
				if (c.compare(tmp[cursor2], arr[cursor1]) < 0) {
					arr[dest--] = arr[cursor1--];
					count1++;
					count2 = 0;
					if (--len1 == 0){
						break outer;
					}
				} 
				else {
					arr[dest--] = tmp[cursor2--];
					count2++;
					count1 = 0;
					if (--len2 == 1){
						break outer;
					}
				}
			} while ((count1 | count2) < minGallop);

			do {
				count1 = len1 - gallopRight(tmp[cursor2], arr, base1, len1, len1 - 1, c);
				if (count1 != 0) {
					dest -= count1;
					cursor1 -= count1;
					len1 -= count1;
					System.arraycopy(arr, cursor1+1, arr, dest+1, count1);
					if (len1 == 0){
						break outer;
					}
				}
				arr[dest--] = tmp[cursor2--];
				if (--len2 == 1){
					break outer;
				}

				count2 = len2 - gallopLeft(arr[cursor1], tmp, 0, len2, len2-1, c);
				if (count2 != 0) {
					dest -= count2;
					cursor2 -= count2;
					len2 -= count2;
					System.arraycopy(tmp, cursor2+1, arr, dest+1, count2);
					if (len2 <= 1){
						break outer;
					}
				}
				arr[dest--] = arr[cursor1--];
				if (--len1 == 0){
					break outer;
				}
				minGallop--;
			} while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP);
			if (minGallop < 0)
				minGallop = 0;
			minGallop += 2;
		}
		this.minGallop = minGallop < 1 ? 1 : minGallop;

		if (len2 == 1) {
			dest -= len1;
			cursor1 -= len1;
			System.arraycopy(arr, cursor1+1, arr, dest+1, len1);
			arr[dest] = tmp[cursor2];
		} 
		else if (len2 == 0) {
			throw new IllegalArgumentException("Comparison method violates its general contract!");
		} 
		else {
			System.arraycopy(tmp, 0, arr, dest-(len2-1), len2);
		}
	}

	/*
	 * 确保临时数组的大小至少有 minCapacity大
	 */
	private T[] ensureCapacity(int minCapacity) {
		if (tmp.length < minCapacity) {
			int newSize = minCapacity;
			newSize |= newSize >> 1;
			newSize |= newSize >> 2;
			newSize |= newSize >> 4;
			newSize |= newSize >> 8;
			newSize |= newSize >> 16;
			newSize++;

			if (newSize < 0) {
				newSize = minCapacity;
			}
			else{
				newSize = Math.min(newSize, array.length>>>1);
			}
			T[] newArray = (T[]) new Object[newSize];
			tmp = newArray;
		}
		return tmp;
	}

	//查找数组中key的位置，该位置后的所有元素比key大
	private static <T> int gallopLeft(T key, T[] arr, int base, int len, int hint, Comparator<? super T> c) {
		int lastOfs = 0;
		int ofs = 1;
		if (c.compare(key, arr[base + hint]) > 0) {
			int maxOfs = len - hint;
			while (ofs < maxOfs && c.compare(key, arr[base + hint + ofs]) > 0) {
				lastOfs = ofs;
				ofs = (ofs << 1) + 1;
				if (ofs <= 0) {
					ofs = maxOfs;
				}
			}
			if (ofs > maxOfs){
				ofs = maxOfs;
			}

			lastOfs += hint;
			ofs += hint;
		} 
		else {
			final int maxOfs = hint + 1;
			while (ofs < maxOfs && c.compare(key, arr[base + hint - ofs]) <= 0) {
				lastOfs = ofs;
				ofs = (ofs << 1) + 1;
				if (ofs <= 0){
					ofs = maxOfs;
				}
			}
			if (ofs > maxOfs){
				ofs = maxOfs;
			}

			int tmp = lastOfs;
			lastOfs = hint - ofs;
			ofs = hint - tmp;
		}
		
		lastOfs++;
		while (lastOfs < ofs) {
			int m = lastOfs + ((ofs - lastOfs) >>> 1);
			if (c.compare(key, arr[base + m]) > 0){
				lastOfs = m + 1;
			}
			else{
				ofs = m;
			}
		}
		return ofs;
	}

	//查找数组中key的位置，该位置前的所有元素比key小
	private static <T> int gallopRight(T key, T[] arr, int base, int len, int hint, Comparator<? super T> c) {
		int ofs = 1;
		int lastOfs = 0;
		if (c.compare(key, arr[base + hint]) < 0) {
			int maxOfs = hint + 1;
			while (ofs < maxOfs && c.compare(key, arr[base + hint - ofs]) < 0) {
				lastOfs = ofs;
				ofs = (ofs << 1) + 1;
				if (ofs <= 0){
					ofs = maxOfs;
				}
			}
			if (ofs > maxOfs){
				ofs = maxOfs;
			}

			int tmp = lastOfs;
			lastOfs = hint - ofs;
			ofs = hint - tmp;
		} else {
			int maxOfs = len - hint;
			while (ofs < maxOfs && c.compare(key, arr[base + hint + ofs]) >= 0) {
				lastOfs = ofs;
				ofs = (ofs << 1) + 1;
				if (ofs <= 0){
					ofs = maxOfs;
				}
			}
			if (ofs > maxOfs){
				ofs = maxOfs;
			}

			lastOfs += hint;
			ofs += hint;
		}

		lastOfs++;
		while (lastOfs < ofs) {
			int m = lastOfs + ((ofs - lastOfs) >>> 1);

			if (c.compare(key, arr[base + m]) < 0){
				ofs = m;
			}
			else {
				lastOfs = m + 1; 
			}
		}
		return ofs;
	}

}
```