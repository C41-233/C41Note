# EventTarget

EventTarget接口定义了可以接收事件的对象，HTMLElement、Document、Window都是EventTarget。

## 原型函数

| 函数 | 描述 |
|---|---|
| addEventListener | 注册事件的监听 |
| dispatchEvent | 向对象派发一个事件 |
| removeEventListener | 移除监听 |

---

##### addEventListener

```
void EventTarget.prototype.addEventListener(string event, Function callback)
void EventTarget.prototype.addEventListener(string event, Function callback, object options)
void EventTarget.prototype.addEventListener(string event, Function callback, boolean useCapture)
```

在当前对象上注册指定的事件监听。

- event：事件名称
- callback：事件回调函数，参数为事件对象
- options：选项

    | 字段 | 类型 | 描述 |
    |---|---|---|
    | capture | boolean | 是否在捕获阶段触发，默认为冒泡阶段触发 |
    | once | boolean | 是否只触发一次，从而在触发后自动移除监听 |
    | passive | boolean | 监听不能preventDefault |
    | signal | AbortSignal | 该信号的abort被调用时，移除监听 |
- useCapture：是否在捕获阶段触发

---

##### dispatchEvent

```
boolean EventTarget.prototype.dispatchEvent(Event event)
```

向对象派发一个事件。

当该事件是可取消的并且至少一个该事件的事件处理方法调用了preventDefault，则返回值为false；否则返回true。

---

##### removeEventListener

```
void EventTarget.prototype.removeEventListener(string event, Function callback)
void EventTarget.prototype.removeEventListener(string event, Function callback, object options)
void EventTarget.prototype.removeEventListener(string event, Function callback, boolean useCapture)
```

移除通过addEventListener注册的监听。

- event：事件名称。
- callback：注册的回调。
- options：选项，要与注册时保持一致。
    | 字段 | 类型 | 描述 |
    |---|---|---|
    | capture | boolean | 是否注册在捕获阶段 |
- useCapture：是否注册在捕获阶段。

