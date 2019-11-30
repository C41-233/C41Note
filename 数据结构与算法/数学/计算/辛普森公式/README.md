# 辛普森公式

![\int_{a}^{b}f(x)dx \approx \frac{b-a}{6}[f(a) + 4f(\frac{a+b}{2}) + f(b)]](1.gif)

## 实现

##### C#
``` C#
public static double Asr(double a, double b, Func<double, double> f)
{
    return Asr(a, b, Simpson(a, b, f), 1e-8, f);
}

private static double Asr(double a, double b, double A, double eps, Func<double, double> f)
{
    double c = a + (b - a) / 2;
    double L = Simpson(a, c, f);
    double R = Simpson(c, b, f);
    if (Math.Abs(L + R - A) <= 15 * eps)
    {
        return L + R + (L + R - A) / 15;
    }

    return Asr(a, c, L, eps / 2, f) + Asr(c, b, R, eps / 2, f);
}

private static double Simpson(double a, double b, Func<double, double> f)
{
    double c = a + (b - a) / 2;
    return (f(a) + 4 * f(c) + f(b)) * (b - a) / 6;
}
```