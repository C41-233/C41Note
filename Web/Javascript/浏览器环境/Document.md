# Document

表示一个文档结点对象，即DOM树，是文档的访问入口。

## 继承

Object / [Node](Node.md) / Document

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| characterSet | string | 当前文档的字符编码 | - | true | true |
| childElementCount | number | 子元素结点的个数 | - | true | true |
| children | HTMLCollection | 子元素结点集合 | - | true | true |
| compatMode | string | 文档渲染的模式 | - | true | true |
| contentType | string | 文档的MIME类型 | - | true | true |
| designMode | string | 文档编辑模式 | - | true | true |
| doctype | DocumentType | 文档DTD | - | true | true |
| documentElement | Element | 文档根元素结点 | - | true | true |
| documentURI | string | 文档URI | - | true | true |
| firstElementChild | Element | 文档的第一个元素结点 | - | true | true |
| implementation | DOMImplementation | 文档关联的DOMImplementation对象 | - | true | true |
| lastElementChild  | Element | 文档的最后一个子元素结点 | - | true | true |
| lastModified | string | 文档最后修改日期时间 | - | true | true |
| readyState | string | 文档的加载状态 | - | true | true |
| title | string | 文档的标题 | true | true | true |
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
| createElementNS | 创建具有命名空间的元素 |
| createEvent | 创建事件对象 |
| createExpression | 创建XPath表达式 |
| createNodeIterator | 创建NodeIterator对象 |
| createNSResolver | 创建XPathNSResolver对象 |
| createProcessingInstruction | 创建指令结点 |
| createRange | 创建Range对象 |
| createTextNode | 创建文本结点 |
| createTreeWalker | 创建TreeWalker对象 |
| evaluate | 执行XPath |
| getElementById | 根据ID查找元素 |
| getElementsByClassName | 根据类名查找元素 |
| getElementsByName | 根据name查找元素 |
| getElementsByTagName | 根据元素名称查找元素 |
| getElementsByTagNameNS | 根据元素名称和命名空间查找元素 |
| importNode | 拷贝外部文档的结点至当前文档 |
| open | 打开要写入的文档 |
| querySelector | 查找第一个匹配的元素 |
| querySelectorAll | 查找所有匹配的元素 |
| write | 将文本字符串写入打开的文档流 |
| writeln | 将文本字符串写入打开的文档流，并换行 |

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

##### createElementNS

```
Element Document.prototype.createElementNS(string ns, string qualifiedName)
Element Document.prototype.createElementNS(string ns, string qualifiedName, object options)
```

---

##### createEvent

```
Event Document.prototype.createEvent(string type)
```

---

##### createExpression

```
XPathExpression Document.prototype.createExpression(string xpath)
XPathExpression Document.prototype.createExpression(string xpath, function namespaceMapper)
```

---

##### createNodeIterator

```
NodeIterator Document.prototype.createNodeIterator(Node root)
NodeIterator Document.prototype.createNodeIterator(Node root, number mask)
NodeIterator Document.prototype.createNodeIterator(Node root, number mask, object filter)
```

---

##### createProcessingInstruction

```
ProcessingInstruction Document.prototype.createProcessingInstruction(string target, string data)
```

---

##### createRange

```
Range Document.prototype.createRange()
```

---

##### createTextNode

```
Text Document.prototype.createTextNode(string data)
```

---

##### evaluate

```
XPathResult Document.prototype.evaluate(string xpath, Node contextNode, function namespaceResolver, number resultType, XPathResult result)
```

执行XPath查询。

- xpath：xpath表达式。
- contextNode： 查询的上下文结点，通常是document。
- namespaceResolver 命名空间前缀到命名空间的映射，可以为null。
- resultType 返回的XPathResult类型。
- result 储存结果的XPathResult对象。null表示创建新的XPathResult对象。

---

##### getElementById

```
Element Document.prototype.getElementById(string id)
```

---

##### getElementsByClassName

```
HTMLCollection Document.prototype.getElementsByClassName(string names)
```

- names：CSS类名，多个类名之间用空格分隔。

---

##### getElementsByName

```
HTMLCollection Document.prototype.getElementsByName(string name)
```

---

##### getElementsByTagName

```
HTMLCollection Document.prototype.getElementsByTagName(string name)
```

- name：元素的tag名称，`"*"`表示所有元素。

---

##### getElementsByTagNameNS

```
HTMLCollection Document.prototype.getElementsByTagNameNS(string ns, string name)
```

---

##### importNode

```
Node Document.prototype.importNode(Node node, boolean deep)
```

---

##### querySelector

```
Element Document.prototype.querySelector(string selector)
```

---

##### querySelectorAll

```
NodeList Document.prototype.querySelectorAll(string selector)
```

---

##### open

```
void Document.prototype.open()
```

打开要写入的文档。该方法会导致所有结点及已注册的事件被清除。

---

##### readyState

```
string Document.prototype.readyState
```

文档的加载状态。

- `loading`：正在加载。
- `interactive`：文档已被加载并解析，但是资源还在加载，此时处于可交互状态。
- `complete`：文档及所有资源都已完成加载。

---

##### write

```
void Document.prototype.write(string text)
```

---

##### writeln

```
void Document.prototype.writeln(string text)
```