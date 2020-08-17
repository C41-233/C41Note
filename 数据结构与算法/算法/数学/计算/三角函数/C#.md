## 泰勒公式

``` C#
public static double Sin(double x)
{
    double sign = 1;
    Adjust(ref x, ref sign);
    return Sin(x, sign);
}

private static double Sin(double x, double sign)
{
    if (x > Math.PI / 4)
    {
        return Cos(Math.PI / 2 - x, sign);
    }

    var result = x - Math.Pow(x, 3) / 6 + Math.Pow(x, 5) / 120 - Math.Pow(x, 7) / 5040 + Math.Pow(x, 9) / 362880;
    return sign * result;
}

public static double Cos(double x)
{
    double sign = 1;
    Adjust(ref x, ref sign);
    return Cos(x, sign);
}

private static double Cos(double x, double sign)
{
    if (x > Math.PI / 4)
    {
        return Sin(Math.PI / 2 - x, sign);
    }

    var result = 1 - Math.Pow(x, 2) / 2 + Math.Pow(x, 4) / 24 - Math.Pow(x, 6) / 720 + Math.Pow(x, 8) / 40320;
    return sign * result;
}

public static double Tan(double x)
{
    double sign = 1;
    Adjust(ref x, ref sign);
    return Sin(x, sign) / Cos(x, sign);
}

private static void Adjust(ref double x, ref double sign)
{
    if (x > 2 * Math.PI || x < -2 * Math.PI)
    {
        x -= (int)(x / (2 * Math.PI)) * 2 * Math.PI;
    }

    if (x > Math.PI)
    {
        x -= 2 * Math.PI;
    }
    else if (x < -Math.PI)
    {
        x += 2 * Math.PI;
    }

    if (x > Math.PI / 2)
    {
        x -= Math.PI;
        sign = -sign;
    }
    else if (x < -Math.PI / 2)
    {
        x += Math.PI;
        sign = -sign;
    }
}
```