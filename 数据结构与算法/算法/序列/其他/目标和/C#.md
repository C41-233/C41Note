# 目标和

## 前缀和法

``` C#
public static int SubArraySum(int[] array, int k)
{
	var count = 0;
	var pre = 0;

	var sum = new Dictionary<int, int>();
	sum[0] = 1;

	foreach (var value in array)
	{
		pre += value;
		if (sum.TryGetValue(pre - k, out var t))
		{
			count += t;
		}

		if (!sum.TryGetValue(pre, out var p))
		{
			p = 0;
		}

		sum[pre] = p + 1;
	}
	return count;
}
```