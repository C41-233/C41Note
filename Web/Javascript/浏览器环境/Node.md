# Node

Node代表一个DOM中的结点，是一个接口。

## 继承

Object / [EventTarget](EventTarget.md) / Node

## Node各属性的含义

| Node | nodeName |
|---|---|
| Attr | 属性名称，等价于`Attr.name` |
| CDATASection | `"#cdata-section"` |
| Comment | `"#comment"` | 
| Document | `"#document"` |
| DocumentFragment | `"#document-fragment"` |
| DocumentType | 文档名称，等价于`DocumentType.name` |
| Element | 元素名称，等价于`Element.tagName` |
| Entity | 实体名称 |
| EntityReference | 实体引用名称 |
| Notation | Notation名称 |
| ProcessingInstruction | 指令名称，等价于`ProcessingInstruction.target` |
| Text | `"#text"` |

## 原型属性

| 名称 | 类型 | 描述 | writable | enumerable | configurable |
|---|---|---|---|---|---|
| baseURI | string | 结点的绝对基址URL | - | true | - |
| childNodes | NodeList | 子结点集合 | - | true | - |
| firstChild | Node | 第一个子结点 | - | true | - |
| isConnected | boolean | 结点是否与DOM树连接 | - | true | - |
| lastChild | Node | 最后一个子结点 | - | true | - |
| nextSibling | Node | 返回该结点之后的紧邻兄弟结点 | - | true | - |
| nodeName | string | 结点的名称 | - | true | - |