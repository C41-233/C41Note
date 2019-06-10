for (var i = 0; i < data.Count; i++)
{
	var to = RandomRange(i, data.Count); //随机选取范围[i, data.Count)
	var tmp = data[to];
	data[to] = data[i];
	data[i] = tmp;
}