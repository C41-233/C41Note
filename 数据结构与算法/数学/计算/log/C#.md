# log

## 自然对数

##### 辛普森公式

``` C#
public static double Ln(double x)
{
    return ASR(1, x, 1e-8);
}

private static double ASR(double a, double b, double eps)
{
    return ASR(a, b, Simpson(a, b), eps);
}

private static double ASR(double a, double b, double A, double eps)
{
    double c = a + (b - a) / 2;
    double L = Simpson(a, c);
    double R = Simpson(c, b);
    if (Math.Abs(L + R - A) <= 15 * eps)
    {
        return L + R + (L + R - A) / 15;
    }

    return ASR(a, c, L, eps/2) + ASR(c, b, R, eps/2);
}

private static double Simpson(double a, double b)
{
    double c = a + (b - a) / 2;
    return (F(a) + 4 * F(c) + F(b)) * (b - a) / 6;
}

private static double F(double x)
{
    return 1 / x;
}
```

##### 黎曼和

``` C#
public static double Ln(double u)
{
    double x = (u - 1) / (u + 1);
    double res = 0;
    int i = 1;
    double t;
    do
    {
        t = T(i++, x);
        res += t;
    } while (t > 1e-9);

    return res;
}

private static double T(int n, double x)
{
    int p = 2 * n - 1;
    return 2 * Pow(x, p) / p; //快速幂
}
```