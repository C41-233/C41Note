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

public static double Arccos(double x)
{
    return Math.PI / 2 - Arcsin(x);
}
        
private static double F(double x)
{
    return 1 / Math.Sqrt(1 - x * x);
}
```

``` C#
public static double ArcTan(double x)
{
    if (x < 0)
    {
        return -ArcTan(-x);
    }
    if (x >1)
    {
        return Math.PI / 2 - ArcTan(1 / x);
    }
    if (x > 1e-3)
    {
        return 2 * ArcTan((Math.Sqrt(1 + x * x) - 1) / x);
    }

    return x - Math.Pow(x, 3) / 3 + Math.Pow(x, 5) / 5 - Math.Pow(x, 7) / 7 + Math.Pow(x, 9) / 9;
}
```