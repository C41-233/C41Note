# HTMLElement

代表HTML文档的元素。

## 继承

Object / [EventTarget](EventTarget.md) / [Node](Node.md) / [Element](Element.md) / HTMLElement

Object / [@GlobalEventHandlers](GlobalEventHandlers.md) / HTMLElement

Object / [@DocumentEventHandlers](DocumentEventHandlers.md) / HTMLElement

## 原型属性

##### 通用属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| dataset | DOMStringMap | 自定义数据 | - | true | - |
| innerText | string | 结点及后代的渲染文本内容 | true | true | - |
| isContentEditable | bool | 元素是否可编辑 | - | true | - |
| offsetHeight | number | 元素的布局高度 | - | true | - |
| offsetLeft | number | 元素左上角相对于offsetParent元素左内边距的距离 | - | true | - |
| offsetParent | HTMLElement | 最近的父级定位元素 | - | true | - |
| offsetTop | HTMLElement | 元素左上角相对于offsetParent元素上内边距的距离 | - | true | - |
| offsetWidth | number | 元素的布局宽度 | - | true | - |
| style | CSSStyleDeclaration | 元素的样式 | - | true | - |

##### HTML属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| contentEditable | string | contenteditable | true | true | - |
| dir | string | dir | true | true | - |
| hidden | boolean | hidden | true | true | - |
| lang | string | lang | true | true | - |
| tabindex | number | tabindex | true | true | - |
| title | string | title | true | true | - |

---

##### contentEditable

```
boolean HTMLElement.prototype.contentEditable
```

属性contenteditable，表示元素是否可编辑。

- `true` 可编辑。
- `false` 不可编辑。
- `inherit` 继承父元素的值。
