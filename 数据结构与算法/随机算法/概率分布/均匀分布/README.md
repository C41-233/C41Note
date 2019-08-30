# 均匀分布

## 实现
#### C#
``` C#
private static readonly Random random = new Random();

//以均匀分布随机返回[min, max)
private static double Range(double min, double max)
{
    return random.NextDouble() * (max - min) + min;
}
```