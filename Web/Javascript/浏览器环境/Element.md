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
| getBoundingClientRect | 获取元素的大小和位置 |
| getClientRects | 获取每个边框的大小和位置 |
| requestFullscreen | 元素进入全屏模式 |
| scroll | 滚动到指定位置 |
| scrollBy | 滚动偏移距离 |
| scrollIntoView | 滚动父元素，使该元素可见 |
| scrollTo | 滚动到指定位置 |

##### 属性

| 函数 | 描述 |
|---|---|
| getAttribute | 获取元素的特定属性值 |
| getAttributeNames | 获取元素的所有属性值 |
| getAttributeNode | 获取元素的特定属性结点 |
| getAttributeNodeNS | 根据命名空间获取元素的特定属性结点 |
| getAttributeNS | 根据命名空间获取元素的特定属性值 |
| hasAttribute | 判断元素是否具有指定属性 |
| hasAttributeNS | 判断元素是否具有指定命名空间的属性 |
| removeAttribute | 删除属性 |
| removeAttributeNode | 删除属性 |
| removeAttributeNS | 删除属性 |
| setAttribute | 设置属性 |
| setAttributeNode | 设置属性结点 |
| setAttributeNodeNS | 设置命名空间的属性结点 |
| setAttributeNS | 设置命名空间的属性 |
| toggleAttribute | 切换布尔属性的值 |

##### 选择器

| 函数 | 描述 |
|---|---|
| closest | 匹配离当前元素结点最近的祖先元素（包括当前元素结点本身） |
| getElementsByClassName | 根据class获取子元素 |
| getElementsByTagName | 根据标签获取子元素 |
| getElementsByTagNameNS | 根据命名空间和标签获取子元素 |
| matches | 判断元素是否匹配选择器 |
| querySelector | 查找第一个匹配的后代元素 |
| querySelectorAll | 查找所有匹配的后代元素 |

##### DOM操作

| 函数 | 描述 |
|---|---|
| after | 将多个结点插入到该元素结点的后面，作为紧邻兄弟结点 |
| append | 将多个结点插入到该元素子结点列表的最后 |
| before | 将多个结点插入到该元素结点的前面，作为紧邻兄弟结点 |
| insertAdjacentElement | 将元素结点插入相对于当前元素的指定位置 |
| insertAdjacentHTML | 将文本解析为元素结点，并插入相对于当前元素的指定位置 |
| insertAdjacentText | 将本文结点插入相对于当前元素的指定位置 |
| prepend | 将多个结点插入到该元素子结点列表的前面 |
| remove | 从父结点中移除 |
| replaceChildren | 替换子结点 |
| replaceWith | 替换当前元素结点 |

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

将多个结点插入到该元素子结点列表的最后。

- nodes：插入的多个子结点。其中，string类型作为文本结点。

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

##### getElementsByClassName

```
HTMLCollection Element.prototype.getElementsByClassName(string className)
```

---

##### getElementsByTagName

```
HTMLCollection Element.prototype.getElementsByTagName(string tagName)
```

---

##### getElementsByTagNameNS

```
HTMLCollection Element.prototype.getElementsByTagNameNS(string ns, string localName)
```

---

##### hasAttribute

```
boolean Element.prototype.hasAttribute(string name)
```

---

##### hasAttributeNS

```
boolean Element.prototype.hasAttributeNS(string ns, string localName)
```

---

##### insertAdjacentElement

```
Element Element.prototype.insertAdjacentElement(string position, Element element)
```

将元素结点插入相对于当前元素的指定位置。

- position：位置。
    - `'beforebegin'`：在该元素本身的前面。
    - `'afterbegin`： 在该元素第一个子结点前面。
    - `'beforeend`：在该元素最后一个子结点后面。
    - `'afterend`：在该元素本身的后面。
- element：被插入元素。

``` HTML
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

返回被插入的元素。

如果插入的位置无法识别，抛出`SyntaxError`。如果插入的元素不是有效元素，抛出`TypeError`。

---

##### insertAdjacentHTML

```
void Element.prototype.insertAdjacentHTML(string position, string element)
```

将文本解析为元素结点，并插入相对于当前元素的指定位置。

- position：位置。
    - `'beforebegin'`：在该元素本身的前面。
    - `'afterbegin`： 在该元素第一个子结点前面。
    - `'beforeend`：在该元素最后一个子结点后面。
    - `'afterend`：在该元素本身的后面。
- element：被插入元素。

如果插入的位置无法识别，抛出`SyntaxError`。

---

##### insertAdjacentText

```
void Element.prototype.insertAdjacentText(string position, string text)
```

将本文结点插入相对于当前元素的指定位置。

- position：位置。
    - `'beforebegin'`：在该元素本身的前面。
    - `'afterbegin`： 在该元素第一个子结点前面。
    - `'beforeend`：在该元素最后一个子结点后面。
    - `'afterend`：在该元素本身的后面。
- text：插入的文本。

如果插入的位置无法识别，抛出`SyntaxError`。

---

##### matches

```
boolean Element.prototype.matches(string selector)
```

---

##### prepend

```
void Element.prototype.prepend(Node/string... nodes)
```

将多个结点插入到该元素子结点列表的前面。

- nodes：插入的多个子结点。其中，string类型作为文本结点。

---

##### querySelector

```
Element Element.prototype.querySelector(string selector)
```

---

##### querySelectorAll

```
NodeList Element.prototype.querySelectorAll(string selector)
```

---

##### remove

```
void Element.prototype.remove()
```

---

##### removeAttribute

```
void Element.prototype.removeAttribute(string name)
```

---

##### removeAttributeNode

```
void Element.prototype.removeAttributeNode(Attr attr)
```

---

##### removeAttributeNS

```
void Element.prototype.removeAttributeNS(string ns, string name)
```

---

##### replaceChildren

```
void Element.prototype.replaceChildren(Node/string... nodes)
```

将该元素的后代全部替换为nodes。特别地，当参数为空时，元素的后代被清空。

---

##### replaceWith

```
void Element.prototype.replaceWith(Node/string... nodes)
```

---

##### requestFullscreen

```
Promise Element.prototype.requestFullscreen()
Promise Element.prototype.requestFullscreen(@FullscreenOptions options)
```

---

##### scroll

```
void Element.prototype.scroll(number x, number y)
void Element.prototype.scroll(@ScrollToOptions options)
```

---

##### scrollBy

```
void Element.prototype.scrollBy(number x, number y)
void Element.prototype.scrollBy(@ScrollToOptions options)
```

---

##### scrollHeight

```
number Element.prototype.scrollHeight
```

元素的内容高度，包括内边距和由于溢出导致的不可见内容，但不包括边框、外边距和垂直滚动条。即，元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。

scrollHeight包括`::before`和`::after`伪元素的高度。

---

##### scrollIntoView

```
void Element.prototype.scrollIntoView()
void Element.prototype.scrollIntoView(boolean alignToTop)
void Element.prototype.scrollIntoView(object options)
```

---

##### scrollTo

```
void Element.prototype.scrollTo(number x, number y)
void Element.prototype.scrollTo(@ScrollToOptions options)
```

---

##### scrollWidth

```
number Element.prototype.scrollWidth
```

元素的内容宽度，包括内边距和由于溢出导致的不可见内容，但不包括边框、外边距和垂直滚动条。即，元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小宽度。

scrollWidth包括`::before`和`::after`伪元素的高度。

---

##### setAttribute

```
void Element.prototype.setAttribute(string name, string value)
```

---

##### setAttributeNode

```
void Element.prototype.setAttributeNode(Attr attr)
```

---

##### setAttributeNodeNS

```
void Element.prototype.setAttributeNodeNS(Attr attr)
```

---

##### setAttributeNS

```
void Element.prototype.setAttributeNS(string ns, string name, string value)
```

---

##### tagName

```
string Element.prototype.tagName
```

元素的标签名。HTML文档的标签名称不区分大小写，因此HTML文档的tagName总是返回大写形式。

tagName的值等于nodeName的值。

---

##### toggleAttribute

```
void Element.prototype.toggleAttribute(string name)
void Element.prototype.toggleAttribute(string name, boolean force)
```