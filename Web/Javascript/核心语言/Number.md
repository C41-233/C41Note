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
