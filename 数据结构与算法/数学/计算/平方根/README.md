# 平方根

## 快速平方根倒数

计算f(x)=1/sqrt(x)。

### 实现

##### C
``` C
//long是32位的
float RSqrt(float number)
{
    const float threehalfs = 1.5F;
    float x2 = number * 0.5F;
    float y = number;

    long i = *(long*) &y;
    i = 0x5f3759df - (i >> 1);
    y = *(float*) &i;
    return y * (threehalfs - (x2 * y * y));
}
```

##### C#
``` C#
public static float RSqrt(float number)
{
    const float threehalfs = 1.5F;
    float x2 = number * 0.5F;
    float y = number;

    unsafe
    {
        int i = *(int*) &y;
        i = 0x5f3759df - (i >> 1);
        y = *(float*) &i;
        return y * (threehalfs - (x2 * y * y));
    }
}
```
