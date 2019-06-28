``` C#
public static Vector RandomPositionInCircle(Vector center, double radius)
{
	var r = Math.Sqrt(RandomRange(0, 1)) * radius;
	var theta = 2 * Math.PI * RandomRange(0, 1);
	return new Vector
	{
		X = r * Math.Cos(theta) + center.X,
		Y = r * Math.Sin(theta) + center.Y,
	};
}
```