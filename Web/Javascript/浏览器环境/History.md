# History

用于控制历史记录，通过`window.history`访问。

## 继承

Object / History

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| length | number | 当前会话历史记录条目数，包括当前页面 | - | - | -|
| state | object | 历史记录栈顶的state | - | - | - |

## 原型函数

| 函数 | 描述 |
|---|---|
| back | 加载历史列表中的前一页 |
| forward | 加载历史列表中的后一页 |
| go | 根据偏移量加载历史记录 |
| pushState | 向历史记录添加一个state |
| replaceState | 更细当前历史记录state |

---

##### back

```
void History.prototype.back();
```

---

##### forward

```
void History.prototype.forward();
```

---

##### go

```
void History.prototype.go(number offset);
```

---

##### pushState

```
void History.prototype.pushState(object state, string title)
void History.prototype.pushState(object state, string title, string url)
```

向历史记录添加一个state，可以在不重新加载页面的情况下改变当前URL。

当历史记录触发时，会触发popState事件。

- state 要添加的state，state必须可序列化。
- title 标题。当前大多数浏览器不支持该参数，可以只传空字符串。
- url 新历史记录条目的URL。

---

##### replaceState

```
void History.prototype.replaceState(object state, string title)
void History.prototype.replaceState(object state, string title, string url)
```

修改当前历史记录的state，可以在不重新加载页面的情况下改变当前URL，且不会创建新历史记录条目。

- state 要添加的state，state必须可序列化。
- title 标题。当前大多数浏览器不支持该参数，可以只传空字符串。
- url URL。
