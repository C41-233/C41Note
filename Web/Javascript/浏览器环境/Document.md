# Document

表示一个文档结点对象，即DOM树，是文档的访问入口。

## 继承

Object / [EventTarget](EventTarget.md) / [Node](Node.md) / Document

Object / [@GlobalEventHandlers](GlobalEventHandlers.md) / [@DocumentEventHandlers](DocumentEventHandlers.md) / Document

## 原型属性

##### 全局对象

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| body | HTMLBodyElement | 文档的body元素 | - | true | true |
| characterSet | string | 当前文档的字符编码 | - | true | true |
| childElementCount | number | 子元素结点的个数 | - | true | true |
| children | HTMLCollection | 子元素结点集合 | - | true | true |
| compatMode | string | 文档渲染的模式 | - | true | true |
| contentType | string | 文档的MIME类型 | - | true | true |
| currentScript | HTMLScriptElement | 当前正在运行的脚本所属script元素 | - | true | true |
| defaultView | Window | 文档关联的Window对象 | - | true | true |
| designMode | string | 文档编辑模式 | - | true | true |
| dir | string | 文档文字朝向 | - | true | true |
| doctype | DocumentType | 文档DTD | - | true | true |
| documentElement | Element | 文档根元素结点 | - | true | true |
| documentURI | string | 文档URI | - | true | true |
| embeds | HTMLCollection | 文档的所有embed元素的集合 | - | true | true |
| firstElementChild | Element | 文档的第一个元素结点 | - | true | true |
| forms | HTMLCollection | 文档的所有form元素的集合 | - | true | true |
| fullscreenElement | Element | 文档中正在以全屏模式显示的结点 | - | true | true |
| fullScreenEnabled | boolean | 是否支持全屏模式 | - | true | true |
| head | HTMLHeadElement | 文档的head元素 | - | true | true |
| hidden | boolean | 页面是否隐藏 | - | true | true |