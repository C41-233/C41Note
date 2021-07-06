# Node

Node代表一个DOM中的结点，是一个接口。

## 继承

Object / [EventTarget](EventTarget.md) / Node

## Node各属性的含义

| Node | nodeName | nodeType | nodeValue |
|---|---|---|---|
| Attr | 属性名称，等价于`Attr.name` | Node.ATTRIBUTE_NODE | 属性的值 |
| CDATASection | `"#cdata-section"` | Node.CDATA_SECTION_NODE | CDATA的文本内容 |
| Comment | `"#comment"` | Node.COMMENT_NODE | 注释的文本内容 |
| Document | `"#document"` | Node.DOCUMENT_NODE | `null` |
| DocumentFragment | `"#document-fragment"` | Node.DOCUMENT_FRAGMENT_NODE | `null` |
| DocumentType | 文档名称，等价于`DocumentType.name` | Node.DOCUMENT_TYPE_NODE | `null` |
| Element | 元素名称，等价于`Element.tagName` | Node.ELEMENT_NODE | `null` |
| Entity | 实体名称 | Node.ENTITY_NODE | |
| EntityReference | 实体引用名称 | Node.ENTITY_REFERENCE_NODE | |
| Notation | Notation名称 | Node.NOTATION_NODE | `null` |
| ProcessingInstruction | 指令名称，等价于`ProcessingInstruction.target` | Node.PROCESSING_INSTRUCTION_NODE | 指令文本内容 |
| Text | `"#text"` | Node.TEXT_NODE | 文本内容 |

## 原型属性

| 名称 | 类型 | 描述 | writable | enumerable | configurable |
|---|---|---|---|---|---|
| baseURI | string | 结点的绝对基址URL | - | true | - |
| childNodes | NodeList | 子结点集合 | - | true | - |
| firstChild | Node | 第一个子结点 | - | true | - |
| isConnected | boolean | 结点是否与DOM树连接 | - | true | - |
| lastChild | Node | 最后一个子结点 | - | true | - |
| nextSibling | Node | 后一个紧邻兄弟结点 | - | true | - |
| nodeName | string | 结点的名称 | - | true | - |
| nodeType | number | 结点类型 | - | true | - |
| nodeValue | string | 结点的值 | true | true | true |
| ownerDocument | Document | 结点所属的文档对象 | - | true | - |
| parentElement | Element | 父元素结点 | - | true | - |
| parentNode | Node | 父结点 | - | true | - |
| previousSibling | Node | 前一个紧邻兄弟结点 | - | true | - |
| textContent | string | 结点及其子结点的文本内容 | - | true | - |

## 原型函数

| 函数 | 描述 |
|---|---|