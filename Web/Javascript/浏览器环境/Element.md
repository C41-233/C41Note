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
| clientHeight | number | 元素的内部高度 | - | true | - |
| clientLeft | number | 元素的左边框宽度 | - | true | - |
| clientTop | number | 元素的上边框宽度 | - | true | - |
| clientWidth | number | 元素的内部宽度 | - | true | - |
| firstElementChild | Element | 第一个子元素结点 | - | true | - |
| id | string | 元素的ID | - | true | - |
| innerHTML | string | 元素的内部序列化片段 | true | true | - |
| lastElementChild | Element | 最后一个子元素结点 | - | true | - |
| localName | string | 元素名称的local部分 | - | true | - |
| namespaceURI | string | 元素的命名空间 | - | true | - |
| nextElementSibling | Element | 后一个紧邻兄弟元素结点 | - | true | - |
| outerHTML | Element | 元素的序列化片段（包括元素本身） | true | true | - |
| prefix | string | 元素的命名空间前缀 | - | true | - | 

---

###### clientHeight

```
number Element.prototype.clientHeight
```

元素的内部高度，包含内边距，但不包括水平滚动条、边框和外边距。

html元素的clientHeight等于viewport的高度。

---

##### clientWidth

```
number Element.prototype.clientWidth
```

元素的内部宽度，包含内边距，但不包括垂直滚动条、边框和外边距。

html元素的clientWidth等于viewport的宽度。