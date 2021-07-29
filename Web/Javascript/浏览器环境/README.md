# 浏览器环境

在浏览器环境下全局对象为`window`，类型是`Window`。

##### 浏览器对象

- Clipboard 剪贴板对象
- [Console](Console.md) 控制台对象
- Crypto 加密对象
- CustomElementRegistry
- Geolocation 地理信息对象
- [History](History.md) 历史记录对象
- IDBFactory
- [Location](Location.md) 链接对象
- MediaDevices 设备对象
- MediaSession 设备会话对象
- [Navigator](Navigator.md) 浏览器对象
- NetworkInformation 网络连接信息对象
- Performance 性能度量工具
- [Screen](Screen.md) 屏幕对象
- ServiceWorkerContainer
- [Storage](Storage.md) 本地存储对象
- [Window](Window.md) 窗口对象
- [@WindowOrWorkerGlobalScope](WindowOrWorkerGlobalScope) 全局对象接口

##### 事件

- [Event](Event.md) 事件对象
- [EventTarget](EventTarget.md) 事件目标接口
- [@GlobalEventHandlers](GlobalEventHandlers) 全局事件接口
- [@DocumentEventHandlers](DocumentEventHandlers) 元素事件接口

##### DOM

- CSSStyleDeclaration 样式对象
- DOMImplementation
- DOMRect 大小和位置
- [Node](Node.md) 结点对象
    - [Attr](Attr.md) 属性结点
    - CDATASection CDATA结点
    - Comment 注释结点
    - [Document](Document.md) 文档结点
        - [HTMLDocument](HTMLDocument.md) HTML文档结点
        - XMLDocument XML文档结点
    - DocumentFragment 文档片段结点
    - DocumentType 文档类型结点
    - [Element](Element.md) 元素结点
        - [HTMLElement](HTMLElement.md) HTML文档元素结点
            - [HTMLAnchorElement](HTMLAnchorElement.md) a
            - HTMLAreaElement area
            - HTMLAudioElement audio
            - HTMLBaseElement base
            - HTMLBodyElement body
            - HTMLBRElement br
            - HTMLButtonElement button
            - HTMLCanvasElement canvas
            - HTMLDataListElement datalist
            - HTMLDetailsElement details
            - HTMLDialogElement dialog
            - HTMLDivElement div
            - HTMLDListElement dl
            - HTMLEmbedElement embed
            - HTMLFieldSetElement fieldset
            - HTMLFontElement font
            - HTMLFormElement form
            - HTMLHeadElement head
            - HTMLHeadingElement h1、h2、h3、h4、h5、h6
            - HTMLHRElement hr
            - HTMLHtmlElement html
            - HTMLIFrameElement iframe
            - HTMLImageElement img
            - HTMLKeygenElement keygen
            - HTMLLabelElement label
            - HTMLLegendElement legend
            - HTMLLinkElement link
            - HTMLMapElement map
            - HTMLMenuElement menu
            - HTMLMenuItemElement menuitem
            - HTMLMetaElement meta
            - HTMLMeterElement meter
            - HTMLModElement del、ins
            - HTMLObjectElement object
            - HTMLOListElement ol
            - HTMLOptionElement option
            - HTMLOptGroupElement optgroup
            - HTMLOutputElement output
            - HTMLParamElement param
            - HTMLProgressElement progress
            - HTMLQuoteElement quote
            - HTMLParagraphElement p
            - HTMLPreElement pre
            - HTMLScriptElement script
            - HTMLSelectElement select
            - HTMLSlotElement slot
            - HTMLSourceElement source
            - HTMLSpanElement span
            - HTMLStyleElement style
            - HTMLTableCaptionElement caption
            - HTMLTableColElement col、colgroup
            - HTMLTableDataCellElement th、td
            - HTMLTableElement table
            - HTMLTableRowElement tr
            - HTMLTableSectionElement thead、tbody、tfoot
            - HTMLTextAreaElement textarea
            - HTMLTimeElement time
            - HTMLTitleElement title
            - HTMLTrackElement track
            - HTMLUListElement ul
            - HTMLUnknownElement 未知结点
            - HTMLVideoElement video
        - SVGElement
    - ProcessingInstruction 文档指令结点
    - Text 文本结点
    - [@HTMLHyperlinkElementUtils](HTMLHyperlinkElementUtils.md) 支持超链接的元素接口

##### 集合

- DOMStringMap
- DOMTokenList
- HTMLCollection
- NamedNodeMap

##### 选项

- BarProp
- @FullscreenOptions
- @ScrollToOptions