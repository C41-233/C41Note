# 均匀分布

## 实现
#### C#
``` C#
private static readonly Random random = new Random();

//以均匀分布随机返回[min, max)
public static double Range(double min, double max)
{
    return random.NextDouble() * (max - min) + min;
}

public static int Range(int min, int max){
	return random.Next(min, max);
}
```