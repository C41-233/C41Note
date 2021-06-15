# Number

Number对象是原始数值number类型的包装对象。这种类型底层是IEEE-754 64位双精度浮点数，可以完全覆盖32位整数的范围。

字面量以0开头的整数是八进制的，以0x开头的整数是十六进制的。浮点数可以写成带e的科学计数法。

对number类型进行typeof运算返回值是"number"，但对Number类型进行typeof运算返回值是"object"。

## 继承

[Object](Object.md) / Number

## 对象属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| EPSILON  | number | 1与大于1的最小值的差 | - | - | - |
| MAX_SAFE_INTEGER  | number | 可表示的最大整数 | - | - | - |
| MAX_VALUE | number | 可表示的最大的数 | - | - | - |
| MIN_SAFE_INTEGER |  number | 可表示的最小整数 | - | - | - |
| MIN_VALUE | number | 可表示的最小的数 | - | - | - |
| NaN | number | 非数字值 | - | - | - |
| NEGATIVE_INFINITY | number | 负无穷大 | - | - | - |
| POSITIVE_INFINITY | number | 正无穷大 | - | - | - |

## 对象函数

| 函数 | 描述 |
|---|---|
| isFinite | 是否是一个有限数 |
| isInteger | 判断是否是一个整数 |
| isNaN | 判断是否是NaN |
| isSafeInteger | 判断是否是一个安全整数 |
| parseFloat | 将字符串转换为浮点数 |
| parseInt | 将字符串转换为整数 |

## 原型函数

| 函数 | 描述 |
|---|---|
| toExponential | 转换成指数计数法字符串 |
| toFixed | 转换成定点小数字符串 |
| toLocaleString | 转换成本地格式字符串 |
| toPrecision | 转换成指定精度的字符串 |
| toString | 转换字符串 |
| valueOf | 返回number |

## 构造函数

```
number Number(object size)
new Number(object obj)
```
---

