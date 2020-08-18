# C#

``` C#
/// <summary>
/// 计算到每个顶点的最短路径，负数表示不可达
/// </summary>
/// <param name="map">邻接表形式的带权有向图</param>
/// <param name="start">起始顶点</param>
/// <param name="n">顶点数</param>
/// <returns>各个顶点的反向最短路径</returns>
public static int[] Dijkstra(int[,] map, int start, int n)
{
	var dis = new int[n]; //保存从顶点出发到各个顶点的当前最短路径

	var visited = new bool[n]; //记录是否已经访问过
	var pre = new int[n]; //反向路径

	//初始化
	for (var i = 0; i < n; i++)
	{
		dis[i] = -1;
		pre[i] = -1;
	}

	visited[start] = true;
	pre[start] = start;
	dis[start] = 0;

	var tempV = start; //刚加入已访问集合的顶点
	for (var i=1; i<n; i++)
	{
		for (var j=0; j<n; j++)
		{
			//检查各个顶点已经计算的路径，是否可以更新为从tempV经过的路径
			if (map[tempV, j] >= 0)
			{
				var newDis = dis[tempV] + map[tempV, j];
				if (dis[j] < 0 || newDis < dis[j])
				{
					dis[j] = newDis;
					pre[j] = tempV;
				}
			}
		}

		//选取一个当前可达路径最小的未访问顶点作为tempV
		var tempDis = -1;
		for (var j=0; j<n; j++)
		{
			if (visited[j])
			{
				continue;
			}
			if (dis[j] >= 0 && (tempDis < 0 || dis[j] < tempDis))
			{
				tempDis = dis[j];
				tempV = j;
			}
		}

		visited[tempV] = true;
	}

	return pre;
}
```