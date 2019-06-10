//原址乱序
public static void RandomSort<T>(List<T> list)
{
	for (var i = 0; i < list.Count; i++)
	{
		var to = RandomRange(i, list.Count); //随机选取范围[i, list.Count)
		var tmp = list[to];
		list[to] = list[i];
		list[i] = tmp;
	}
}