# 最大子矩阵 - C#

``` C#
public static int MaxMatrix(int[,] matrix)
{
    var xLength = matrix.GetLength(0);
    var yLength = matrix.GetLength(1);
    var sum = new int[xLength+1, yLength+1];
    for (var i=1; i<=xLength; i++)
    {
        for (var j=1; j<=yLength; j++)
        {
            sum[i, j] = sum[i, j-1] + sum[i-1, j] - sum[i-1, j-1] + matrix[i-1, j-1];
        }
    }

    var ans = 1;
    var index = 2;
    while (index <= Math.Min(xLength, yLength))
    {
        for (var i = index; i <= xLength; i++)
        {
            for (var j = index; j <= yLength; j++)
            {
                if (sum[i, j] - sum[i-index, j] - sum[i, j-index] + sum[i-index, j-index] == index*index)
                {
                    ans = Math.Max(ans, index);
                }
            }
        }
        index++;
    }

    return ans;
}
```