# Node

Node代表一个DOM中的结点，是一个接口。

## 继承

Object / [EventTarget](EventTarget.md) / Node

## Node各属性的含义

| Node | nodeName | nodeType | nodeValue |
|---|---|---|---|
| Attr | 属性名称，等价于`Attr.name` | Node.ATTRIBUTE_NODE |
| CDATASection | `"#cdata-section"` | Node.CDATA_SECTION_NODE |
| Comment | `"#comment"` | Node.COMMENT_NODE |
| Document | `"#document"` | Node.DOCUMENT_NODE |
| DocumentFragment | `"#document-fragment"` | Node.DOCUMENT_FRAGMENT_NODE |
| DocumentType | 文档名称，等价于`DocumentType.name` | Node.DOCUMENT_TYPE_NODE |
| Element | 元素名称，等价于`Element.tagName` | Node.ELEMENT_NODE |
| Entity | 实体名称 | Node.ENTITY_NODE |
| EntityReference | 实体引用名称 | Node.ENTITY_REFERENCE_NODE |
| Notation | Notation名称 | Node.NOTATION_NODE |
| ProcessingInstruction | 指令名称，等价于`ProcessingInstruction.target` | Node.PROCESSING_INSTRUCTION_NODE |
| Text | `"#text"` | Node.TEXT_NODE |

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
| nodeType | number | 结点类型 | - | true | - |
| nodeValue | string | 结点的值 | true | true | - |