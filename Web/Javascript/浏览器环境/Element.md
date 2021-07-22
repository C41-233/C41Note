# Element

代表文档的所有元素的通用接口。

## 继承

Object / [EventTarget](EventTarget.md) / [Node](Node.md) / Element


## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| attributes | NamedNodeMap | 所有属性的集合 | - | true | - |
| childElementCount | number | 子元素结点的数量 | - | true | - |
| children | HTMLCollection | 所有子元素结点的集合 | - | true | - | 
| classList | DOMTokenList | 元素的class列表 | - | true | - |
| className | string | 元素class属性的值 | true | true | - |
| clientHeight | number | 元素的内部高度 | - | - | - |
| clientLeft | number | 元素的左边框宽度 | - | - | - |
| clientTop | number | 元素的上边框宽度 | - | - | - |

---

###### clientHeight

```
number Element.prototype.clientHeight
```

元素的内部高度，包含内边距，但不包括水平滚动条、边框和外边距。