# Function

每一个在Javascript中定义的函数都是Function对象。

对Function对象进行typeof运算，返回值是`"function"`。

函数在调用时不必与声明的参数个数匹配，所有参数组成了arguments数组。没有显式指定返回值的函数，返回值是undefined。

## 继承

[Object](Object.md) / Function

## 构造函数

```
new Function(string params..., string body)
```

动态创建一个函数对象。

- params 参数名称
- body 函数体