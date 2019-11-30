``` C#
public static double Arcsin(double x)
{
    if (Math.Abs(x) > 1)
    {
        return double.NaN;
    }

    double fl = 1;
    if (x < 0)
    {
        fl = -fl;
        x = -x;
    }

    if (Math.Abs(x - 1) < 1e-7)
    {
        return Math.PI / 2;
    }

    return fl * Asr(0, x, F); //辛普森公式
}

private static double F(double x)
{
    return 1 / Math.Sqrt(1 - x * x);
}
```