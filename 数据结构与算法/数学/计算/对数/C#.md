# 对数 - C#

## 自然对数

##### 辛普森公式

``` C#
public static double Ln(double x)
{
    return ASR(1, x, F); //辛普森公式
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

## 任意底数的对数

``` C#
public static double Log(double a, double x)
{
    return Ln(x) / Ln(a);
}
```