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
| previousElementSibling | Element | 前一个紧邻兄弟元素结点 | - | true | - |
| scrollHeight | number | 元素的内容高度 | - | true | - |
| scrollLeft | number | 水平滚动条的滚动距离 | true | true | - |
| scrollLeft | number | 垂直滚动条的滚动距离 | true | true | - |
| scrollWidth | number | 元素的内容宽度 | - | true | - |
| slot | string | 已插入元素所在的Shadow DOM slot的名称 | true | true | - |
| tagName | string | 元素的标签名 | - | true | - |

## 原型函数

| 函数 | 描述 |
|---|---|
| after | 将多个结点插入到该元素结点的后面，作为紧邻兄弟结点 |
| append | 将多个结点插入到该元素结点子结点列表的最后 |
| before | 将多个结点插入到该元素结点的前面，作为紧邻兄弟结点 |
| closest | 匹配离当前元素结点最近的祖先元素（包括当前元素结点本身） |
| getAttribute | 获取元素的特定属性值 |
| getAttributeNames | 获取元素的所有属性值 |
| getAttributeNode | 获取元素的特定属性结点 |
| getAttributeNodeNS | 根据命名空间获取元素的特定属性结点 |
| getAttributeNS | 根据命名空间获取元素的特定属性值 |
| getBoundingClientRect | 获取元素的大小和位置 |

---

##### after

```
void Element.prototype.after(Node/string... nodes)
```

---

##### append

```
void Element.prototype.append(Node/string... nodes)
```

---

##### before

```
void Element.prototype.before(Node/string... nodes)
```

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

---

##### closest

```
Element Element.prototype.closest(string selector)
```

---

##### getAttribute

```
string Element.prototype.getAttribute(string name)
```

---

##### getAttributeNames

```
Array<string> Element.prototype.getAttributeNames()
```

---

##### getAttributeNode

```
Attr Element.prototype.getAttributeNode(string name)
```

---

##### getAttributeNodeNS

```
Attr Element.prototype.getAttributeNodeNS(string ns, string name)
```

---

##### getAttributeNS

```
string Element.prototype.getAttributeNS(string ns, string name)
```

---

##### getBoundingClientRect

```
DOMRect Element.prototype.getBoundingClientRect()
```

---

##### scrollHeight

```
number Element.prototype.scrollHeight
```

元素的内容高度，包括内边距和由于溢出导致的不可见内容，但不包括边框、外边距和垂直滚动条。即，元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。

scrollHeight包括`::before`和`::after`伪元素的高度。

---

##### scrollWidth

```
number Element.prototype.scrollWidth
```

元素的内容宽度，包括内边距和由于溢出导致的不可见内容，但不包括边框、外边距和垂直滚动条。即，元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小宽度。

scrollWidth包括`::before`和`::after`伪元素的高度。

---

##### tagName

```
string Element.prototype.tagName
```

元素的标签名。HTML文档的标签名称不区分大小写，因此HTML文档的tagName总是返回大写形式。

tagName的值等于nodeName的值。