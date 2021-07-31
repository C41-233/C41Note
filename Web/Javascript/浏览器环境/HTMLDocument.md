# HTMLDocument

代表HTML文档，使得Document中的属性都对应到HTMLElement。

## 继承

Object / [Node](Node.md) / [Document](Document.md) / HTMLDocument

## 接口

- [EventTarget](EventTarget.md)
- [@GlobalEventHandlers](GlobalEventHandlers.md)
- [@DocumentEventHandlers](DocumentEventHandlers.md)

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| body | HTMLBodyElement | 文档的body元素 | - | true | true |
| currentScript | HTMLScriptElement | 当前正在运行的脚本所属script元素 | - | true | true |
| defaultView | Window | 文档关联的Window对象 | - | true | true |
| dir | string | 文档文字朝向 | - | true | true |
| embeds | HTMLCollection | 文档的所有embed元素的集合 | - | true | true |
| forms | HTMLCollection | 文档的所有form元素的集合 | - | true | true |
| fullscreenElement | Element | 文档中正在以全屏模式显示的结点 | - | true | true |
| fullScreenEnabled | boolean | 是否支持全屏模式 | - | true | true |
| head | HTMLHeadElement | 文档的head元素 | - | true | true |
| hidden | boolean | 页面是否隐藏 | - | true | true |
| images | HTMLCollection | 文档的所有imgs元素的集合 | - | true | true |
| links | HTMLCollection | 文档所有area和a元素的集合 | - | true | true |
| location | Location | 文档的Location对象 | - | true | true |
| plugins | HTMLCollection | 文档的所有embed元素的集合 | - | true | true |
| referrer | string | 文档从该URI跳转而来 | - | true | true |
| scripts | HTMLCollection | 文档的所有script元素的集合 | - | true | true |
| scrollingElement | Element | 滚动文档的对象 | - | true | true |
| visibilityState | boolean | 文档的可见性 | - | true | true |

## 原型函数

| 函数 | 描述 |
|---|---|
| exitFullscreen | 退出全屏模式 |
| hasFocus | 文档是否获得焦点 |
| releaseCapture | 释放鼠标捕获 |

## 事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| readystatechange  | onreadystatechange | readystate变化时 | Event |
| scroll | onscroll | 当滚动文档滚动条时 | Event |
| visibilitychange | onvisibilitychange | 当文档选项卡内容可见或者隐藏时 | Event |
| DOMContentLoaded  | - | 文档加载完成后（无需等待资源加载） | Event |

---

##### hasFocus

```
boolean Document.prototype.hasFocus()
```

