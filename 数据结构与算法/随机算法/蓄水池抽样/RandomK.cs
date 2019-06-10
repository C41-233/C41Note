public static List<T> Random<T>(IEnumerable<T> list, int num)
{
	var result = new List<T>(num);
	using (var it = list.GetEnumerator())
	{
		var i = 0;
		while (i < num && it.MoveNext())
		{
			result.Add(it.Current);
			++i;
		}

		while (it.MoveNext())
		{
			var drop = RandomRange(0, i + 1); //随机选取范围[0, i+1)
			if (drop < num)
			{
				result[drop] = it.Current;
			}
			++i;
		}
	}
	return result;
}