# 快速幂取模

求a<sup>b</sup>%c，快速幂取模防止a和b数值过大溢出。

## 同余定理

a<sup>b</sup>%c = (a%c)<sup>b</sup>c

## C
``` C
long long qmod(long long a, long long n, long long mod)
{
    long long res = 1;
	a %= mod;
    while (n)
    {
        if (n & 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}
```