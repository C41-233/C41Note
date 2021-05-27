# WindowOrWorkerGlobalScope

mixin

## 原型函数

| 函数 | 描述 |
|---|---|
| setInterval | 以指定的周期（单位为毫秒）调用函数或执行代码 |
| setTimeout | 在指定的时间（毫秒）后调用函数或执行代码 |

---

##### setInterval	

```
number setInterval(string code, number millisec)
number setInterval(Function code, number millisec, object args...)	
```

以指定的周期（单位为毫秒）调用函数或执行代码。

函数返回一个handle，之后可以调用`clearInterval`停止。

---

##### setTimeout	
```
number setTimeout(string code, number millisec)
number setTimeout(Function code, number millisec, object args...)
```

在指定的时间（毫秒）后调用函数或执行代码。

函数返回一个handle，之后可以调用`clearTimeout`取消。