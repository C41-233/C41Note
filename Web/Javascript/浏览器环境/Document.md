# Document

表示一个文档结点对象，即DOM树，是文档的访问入口。

## 继承

Object / [EventTarget](EventTarget.md) / [Node](Node.md) / Document

Object / [@GlobalEventHandlers](GlobalEventHandlers.md) / [@DocumentEventHandlers](DocumentEventHandlers.md) / Document

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| body | HTMLBodyElement | 文档的body元素 | - | true | true |
| characterSet | string | 当前文档的字符编码 | - | true | true |
| childElementCount | number | 子元素结点的个数 | - | true | true |
| children | HTMLCollection | 子元素结点集合 | - | true | true |
| compatMode | string | 文档渲染的模式 | - | true | true |
| contentType | string | 文档的MIME类型 | - | true | true |
| currentScript | HTMLScriptElement | 当前正在运行的脚本所属script元素 | - | true | true |
| defaultView | Window | 文档关联的Window对象 | - | true | true |
| designMode | string | 文档编辑模式 | - | true | true |
| dir | string | 文档文字朝向 | - | true | true |
| doctype | DocumentType | 文档DTD | - | true | true |
| documentElement | Element | 文档根元素结点 | - | true | true |
| documentURI | string | 文档URI | - | true | true |
| embeds | HTMLCollection | 文档的所有embed元素的集合 | - | true | true |
| firstElementChild | Element | 文档的第一个元素结点 | - | true | true |
| forms | HTMLCollection | 文档的所有form元素的集合 | - | true | true |
| fullscreenElement | Element | 文档中正在以全屏模式显示的结点 | - | true | true |
| fullScreenEnabled | boolean | 是否支持全屏模式 | - | true | true |
| head | HTMLHeadElement | 文档的head元素 | - | true | true |
| hidden | boolean | 页面是否隐藏 | - | true | true |
| images | HTMLCollection | 文档的所有imgs元素的集合 | - | true | true |
| implementation | DOMImplementation | 文档关联的DOMImplementation对象 | - | true | true |
| lastElementChild  | Element | 文档的最后一个子元素结点 | - | true | true |
| lastModified | string | 文档最后修改日期时间 | - | true | true |
| links | HTMLCollection | 文档所有area和a元素的集合 | - | true | true |
| location | Location | 文档的Location对象 | - | true | true |
| plugins | HTMLCollection | 文档的所有embed元素的集合 | - | true | true |
| readyState | string | 文档的加载状态 | - | true | true |
| referrer | string | 文档从该URI跳转而来 | - | true | true |
| scripts | HTMLCollection | 文档的所有script元素的结婚 | - | true | true |
| scrollingElement | Element | 滚动文档的对象 | - | true | true |
| title | string | 文档的标题 | true | true | true |
| visibilityState | boolean | 文档的可见性 | - | true | true |
| URL | string | 当前文档的URL | - | true | true |

## 原型函数

| 函数 | 描述 |
|---|---|
| adoptNode | 从其他文档获取一个结点 |
| close | 结束对文档的写入 |
| createAttribute | 创建属性结点 |
| createCDATASection | 创建CDATA结点 |
| createComment | 创建注释结点 |
| createDocumentFragment | 创建文档片段结点 |
| createElement | 创建元素结点 |

## 事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| readystatechange  | onreadystatechange | readystate变化时 | Event |
| scroll | onscroll | 当滚动文档滚动条时 | Event |
| visibilitychange | onvisibilitychange | 当文档选项卡内容可见或者隐藏时 | Event |
| DOMContentLoaded  | - | 文档加载完成后（无需等待资源加载） | Event |

---

##### close

```
void Document.prototype.close()
```
---

##### createAttribute

```
Attr Document.prototype.createAttribute(string name)
```

---

##### createCDATASection

```
CDATASection Document.prototype.createCDATASection(string data)
```

---

##### createComment

```
Comment Document.prototype.createComment(string data)
```

---

##### createDocumentFragment

```
DocumentFragment Document.prototype.createDocumentFragment()
```

---

##### createElement

```
Element Document.prototype.createElement(string tagName)
Element Document.prototype.createElement(string tagName, object options)
```

---

##### readyState

```
string Document.prototype.readyState
```

文档的加载状态。

- `loading`：正在加载。
- `interactive`：文档已被加载并解析，但是资源还在加载，此时处于可交互状态。
- `complete`：文档及所有资源都已完成加载。