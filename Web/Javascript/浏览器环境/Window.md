# Window

Window对象表示DOM文档窗口，是全局属性`window`的类型。

在有标签页功能的浏览器中，每个标签页都有自己的Window对象。

## 继承

Object / [@WindowOrWorkerGlobalScope](WindowOrWorkerGlobalScope.md) / Window  
Object / @AbstractView / Window  
Object / [EventTarget](EventTarget.md) / Window
Object / [@GlobalEventHandlers](GlobalEventHandlers.md) / Window

## 原型属性

##### 全局对象

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| console | Console | 获取控制台对象 | - | - | - |
| crypto | Crypto | 获取加密服务对象 | - | - | - |
| customElements | CustomElementRegistry | 获取CustomElementRegistry对象 | - | - | - |
| document | Document | 文档对象 | - | - | - |
| history | History | History对象 | - | - | - |
| localStorage | Storage | 浏览器本地存储对象 | - | - | - |
| location | Location | Location对象 | - | - | - |
| navigator | Navigator | 浏览器对象 | - | - | - |

##### 窗口属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| closed | boolean | 窗口是否关闭 | - | - | - | 
| devicePixelRatio | number | 当前显示设备的物理像素分辨率与CSS像素分辨率之比 | - | - | - |
| innerHeight | number | 窗口的视口高度 | - | - | - |
| innerWidth | number | 窗口的视口宽度 | - | - | - |
| length | number | 当前窗口中包含的框架数量 | - | - | - |
| locationbar | object | 地址栏对象 | - | - | - | menubar | object | 菜单栏对象 | - | - | - |
| name | string | 窗口名称 | - | - | - |

## 事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| afterprint | onafterprint | 打印页面送往打印缓冲时 | Event | 
| beforeprint | onbeforeprint | 当用户确认打印时 | Event |
| beforeunload | onbeforeunload | 当窗口关闭或者刷新时 | Event | 
| blur | onblur | 当窗口失去焦点时 | FocusEvent |
| copy | oncopy | 当复制时 | ClipboardEvent |
| cut | oncut | 当剪切时 | ClipboardEvent |
| error | onerror | 当资源加载错误时 | Event/UIEvent |
| focus | onfocus | 当窗口获得焦点时 | FocusEvent |
| hashchange | onhashchange | 当URL的hash部分修改时 | HashChangeEvent |
| load | onload | 当文档及资源被载入完成时 | Event |
| orientationchange | onorientationchange | 当设备纵横改变时 | Event |
| pagehide | onpagehide | 当当前页面窗口隐藏时 | 	PageTransitionEvent |
| pageshow | onpageshow | 当当前页面窗口可见时 | 	PageTransitionEvent |
| paste | onpaste | 当粘贴时 | ClipboardEvent |
| message | onmessage | 当触发消息时 | MessageEvent |
| messageerror | onmessageerror | 当触发消息被解序列化失败时 | MessageEvent |
| popstate | onpopstate | 当活动历史记录改变时 | PopStateEvent |
| offline | onoffline | 当浏览器失去网络连接时 | Event |
| online | ononline | 当浏览器恢复网络连接时 | Event |
| rejectionhandled | onrejectionhandled | 当Promise被reject且存在处理器时，全局触发该事件 | PromiseRejectionEvent |
| storage | onstorage | 在存储区域的数据被修改时 | StorageEvent |
| unhandledrejection | onunhandledrejection | 当Promise被reject且没有处理器时，全局触发该事件 | PromiseRejectionEvent |
| unload | onunload | 当文档或资源被卸载时 | 	Event |

---

##### innerHeight

```
number innerHeight
```

获取浏览器的视口（viewport）高度，单位为像素。如果存在水平滚动条，也包括水平滚动条的高度。

---

##### innerWidth

```
number innerWidth
```

获取浏览器的视口（viewport）宽度，单位为像素。如果存在垂直滚动条，也包括垂直滚动条的高度。