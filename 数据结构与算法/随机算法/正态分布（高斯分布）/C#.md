``` C#
/// <summary>
/// 以正态分布返回随机值
/// </summary>
/// <param name="miu">均值μ</param>
/// <param name="sigma">方差σ</param>
/// <returns>返回范围为(-∞, +∞)</returns>
public static double NormalRandom(double miu, double sigma)
{
    var x1 = RandomDouble(0, 1);
    var x2 = RandomDouble(0, 1);
    return sigma * Math.Sqrt(-2 * Math.Log(x1)) * Math.Cos(2 * Math.PI * x2) + miu;
}
```

``` C#
/// <summary>
/// 以截断正态分布返回随机值
/// </summary>
public static double TruncatedNormalRandom(double miu, double sigma, double min, double max)
{
	double p = Range(double.Epsilon, 1d);
	double r = TruncatedNormalCumulativeInverse(p, miu, sigma, min, max);
	if (r < min)
	{
		return min;
	}

	if (r > max)
	{
		return max;
	}
	return r;
}

/// <summary>
/// 截断正态分布概率分布反函数
/// </summary>
private static double TruncatedNormalCumulativeInverse(double p, double miu, double sigma, double min, double max)
{
	return NormalCumulativeInverse(
		NormalCumulative(min, miu, sigma) + 
			p * (NormalCumulative(max, miu, sigma) - NormalCumulative(min, miu, sigma)), 
		miu, 
		sigma);
}

/// <summary>
/// 正态分布概率分布反函数
/// </summary>
private static double NormalCumulativeInverse(double p, double miu, double sigma)
{
	return StandardNormalCumulativeInverse(p) * sigma + miu;
}

/// <summary>
/// 标准正态分布概率分布反函数
/// </summary>
private static double StandardNormalCumulativeInverse(double p)
{
	Debug.Assert(p > 0.0 && p < 1.0);
	return p < 0.5
		? -RationalApproximation(Math.Sqrt(-2.0 * Math.Log(p)))
		: RationalApproximation(Math.Sqrt(-2.0 * Math.Log(1 - p)));
}

private static double RationalApproximation(double t)
{
	double[] c = { 2.515517, 0.802853, 0.010328 };
	double[] d = { 1.432788, 0.189269, 0.001308 };
	return t - ((c[2] * t + c[1]) * t + c[0]) / (((d[2] * t + d[1]) * t + d[0]) * t + 1.0);
}

/// <summary>
/// 正态分布概率分布函数
/// </summary>
private static double NormalCumulative(double x, double miu, double sigma)
{
	return StandardNormalCumulative((x - miu) / sigma);
}

/// <summary>
/// 标准正态分布概率分布函数
/// </summary>
private static double StandardNormalCumulative(double x)
{
	double c = 0.31938153;
	double u = -0.356563782;
	double v = 1.781477937;
	double w = -1.821255978;
	double p = 1.330274429;
	double eta = 0.2316419;
	double reciprocalSqrt2Pi = 0.39894228040143267793994605993438;

	double k = 1.0 / (1.0 + eta * Math.Abs(x));

	double cumulativeArea = reciprocalSqrt2Pi * Math.Exp(-0.5 * x * x) * (k * (c + k * (u + k * (v + k * (w + k * p)))));

	if (x > 0)
	{
		return 1 - cumulativeArea;
	}

	return cumulativeArea;
}
```