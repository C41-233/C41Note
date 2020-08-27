# BFS - C#

``` C#
/// <summary>
/// 计算到每个顶点的最短路径，负数表示不可达
/// </summary>
/// <param name="map">邻接矩阵形式的无权有向图</param>
/// <param name="start">起始顶点</param>
/// <param name="n">顶点数</param>
/// <returns>各个顶点的反向最短路径</returns>
public static int[] BFS(bool[,] map, int start, int n)
{
	var queue = new Queue<int>();
	var pre = new int[n];
	for (var i=0; i<n; i++)
	{
		pre[i] = -1;
	}
	var visited = new bool[n];

	queue.Enqueue(start);
	pre[start] = start;
	visited[start] = true;

	while (queue.Count > 0)
	{
		var p = queue.Dequeue();
		for(var i=0; i<n ;i++)
		{
			if (!visited[i] && map[p, i])
			{
				visited[i] = true;
				pre[i] = p;
				queue.Enqueue(i);
			}
		}
	}

	return pre;
}
```