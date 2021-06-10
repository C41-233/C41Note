# Function

每一个在Javascript中定义的函数都是Function对象。

对Function对象进行typeof运算，返回值是`"function"`。

函数在调用时不必与声明的参数个数匹配，所有参数组成了arguments数组。没有显式指定返回值的函数，返回值是undefined。

## 继承

[Object](Object.md) / Function

## 原型属性

| 名称 | 类型 | 描述 | writable | enumerable | configurable |
|---|---|---|---|---|---|
| length | number | 函数形参个数 | - | - | √ |
| name | string | 函数名称 | - | - | √ |

## 原型函数

| 函数 | 描述 |
|---|---|
| apply | 调用函数，数组参数形式 |
| bind | 生成一个新函数，绑定this和预置参数 |
| call | 调用函数，不定参数形式 |
| toString | 获取函数源代码字符串 |

## 构造函数

```
new Function(string params..., string body)
```

动态创建一个函数对象。

- params 参数名称
- body 函数体

---

##### apply

```
object Function.prototype.apply(object this, @array args)
```

---

##### bind

```
Function Function.prototype.bind(object this, object args...)
```

---

##### call

```
object Function.prototype.call(object this, object args...)
```