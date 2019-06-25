/// <summary>
/// 以正态分布返回随机值
/// </summary>
/// <param name="miu">均值μ</param>
/// <param name="sigma">方差σ</param>
/// <returns>返回范围为(-∞, +∞)</returns>
public static double Normal(double miu, double sigma)
{
	var x1 = random.NextDouble();
	var x2 = random.NextDouble();
	return sigma * Math.Sqrt(-2 * Math.Log(x1)) * Math.Cos(2 * Math.PI * x2) + miu;
}
