# exp

以e为底的指数函数，即计算exp(x) = e<sup>x</sup>。

## 算法描述

首先将参数规约为非负，即exp(-x) = 1/exp(x)。

计算划分分为两部分，整数部分与小数部分。即exp(x) = exp(n+f) = exp(n)·exp(f)，其中n为整数，f为小数。

整数部分的计算通过快速幂计算。

小数部分根据泰勒公式计算。由于误差，在零点位置更精确，根据exp(x) = exp<sup>2</sup>(x/2)，可以不断递归逼近到零点。

## 实现

##### C#
```
public static double Exp(double x)
{
    if (x < 0)
    {
        return 1 / Exp(-x);
    }

    var n = (int) x;
    x -= n;
    var e1 = Pow(Math.E, n); //快速幂
    var e2 = EEE(x);
    return e1 * e2;
}

private static double EEE(double x)
{
    if (x > 1e-6)
    {
        var ee = EEE(x / 2);
        return ee * ee;
    }

    return 1 + x + x * x / 2 + Pow(x, 3) / 6 + Pow(x, 4) / 24 + Pow(x, 5) / 120;
}
```