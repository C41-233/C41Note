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