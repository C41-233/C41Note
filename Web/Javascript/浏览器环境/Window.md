# Window

Window对象表示DOM文档窗口，是全局属性`window`的类型。

在有标签页功能的浏览器中，每个标签页都有自己的Window对象。

## 继承

Object / [@WindowOrWorkerGlobalScope](WindowOrWorkerGlobalScope.md) / Window  
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
| localStorage | Storage | 本地存储对象 | - | - | - |
| location | Location | Location对象 | - | - | - |
| navigator | Navigator | 浏览器对象 | - | - | - |
| performance | Performance | 性能度量工具 | - | - | - |
| screen | Screen | 屏幕对象 | - | - | - |
| sessionStorage | Storage | 会话存储对象 | - | - | - |
| window | Window | 窗口自身 | - | - | - |

##### 窗口属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| closed | boolean | 窗口是否关闭 | - | - | - | 
| devicePixelRatio | number | 当前显示设备的物理像素分辨率与CSS像素分辨率之比 | - | - | - |
| innerHeight | number | 窗口的视口高度 | - | - | - |
| innerWidth | number | 窗口的视口宽度 | - | - | - |
| length | number | 当前窗口中包含的框架数量 | - | - | - |
| locationbar | object | 地址栏对象，只有一个visible属性 | - | - | - | 
| menubar | object | 菜单栏对象，只有一个visible属性 | - | - | - |
| name | string | 窗口名称 | - | - | - |
| opener | Window | 打开该窗口的窗口 | - | - | - |
| outerHeight | number | 整个浏览器窗口的高度 | - | - | - |
| outerWidth | number | 整个浏览器窗口的宽度 | - | - | - |
| pageXOffset | number | 页面水平滚动距离 | - | - | - |
| pageYOffset | number | 页面垂直滚动距离 | - | - | - |
| parent | Window | 父窗口 | - | - | - |
| personalbar | object | 个人工具栏，只有一个visible属性 | - | - | - |
| screenLeft | number | 浏览器窗口左边框到屏幕左边缘的距离 | - | - | - | 
| screenTop | number | 浏览器窗口上边框到屏幕上边缘的距离 | - | - | - |
| screenX | number | 浏览器窗口左边框到系统桌面左边缘的距离 | - | - | - |
| screenY | number | 浏览器窗口上边框到系统桌面上边缘的距离 | - | - | - |
| scrollbars | object | 滚动条对象，只有一个visible属性 | - | - | - |
| scrollX | number | 页面水平滚动距离 | - | - | - |
| scrollY | number | 页面垂直滚动距离 | - | - | - |
| self | Window | 指向自身 | - | - | - |
| status | string | 状态栏中的文本 | - | - | - |
| statusbar | object | 状态栏对象，只有一个visible属性 | - | - | - |
| toolbar | object | 工具栏对象，只有一个visible属性 | - | - | - |
| top | Window | 最顶层的窗口 | - | - | - |

## 原型函数

| 函数 | 描述 |
|---|---|
| alert | 显示带有一条指定消息和一个确定按钮的警告框 |
| blur | 使窗口失去焦点 |
| close | 关闭浏览器窗口 |
| confirm | 显示一个带有指定消息和确定及取消按钮的对话框 |
| focus | 使窗口获得焦点 |
| getComputedStyle | 获得全局CSS属性对象 |
| getSelection | 获取当前用户选择的范围 |
| matchMedia | 媒体查询 |
| minimize | 最小化窗口 |
| moveBy | 按偏移移动窗口 |
| moveTo | 移动窗口 |

## 事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| afterprint | onafterprint | 打印页面送往打印缓冲时 | Event | 
| beforeprint | onbeforeprint | 当用户确认打印时 | Event |
| beforeunload | onbeforeunload | 当窗口关闭或者刷新时 | Event | 
| blur | onblur | 当窗口失去焦点时 | FocusEvent |
| focus | onfocus | 当窗口获得焦点时 | FocusEvent |
| hashchange | onhashchange | 当URL的hash部分修改时 | HashChangeEvent |
| load | onload | 当文档及资源被载入完成时 | Event |
| message | onmessage | 当触发消息时 | MessageEvent |
| messageerror | onmessageerror | 当触发消息被解序列化失败时 | MessageEvent |
| offline | onoffline | 当浏览器失去网络连接时 | Event |
| online | ononline | 当浏览器恢复网络连接时 | Event |
| orientationchange | onorientationchange | 当设备纵横改变时 | Event |
| pagehide | onpagehide | 当当前页面窗口隐藏时 | 	PageTransitionEvent |
| pageshow | onpageshow | 当当前页面窗口可见时 | 	PageTransitionEvent |
| popstate | onpopstate | 当活动历史记录改变时 | PopStateEvent |
| rejectionhandled | onrejectionhandled | 当Promise被reject且存在处理器时，全局触发该事件 | PromiseRejectionEvent |
| resize | onresize | 当窗口大小改变时 | UIEvent |
| storage | onstorage | 在存储区域的数据被修改时 | StorageEvent |
| unhandledrejection | onunhandledrejection | 当Promise被reject且没有处理器时，全局触发该事件 | PromiseRejectionEvent |
| unload | onunload | 当文档或资源被卸载时 | 	Event |

---

##### alert

```
void alert(string message)
```

##### blur

```
void blur()
```

##### close

```
void close()
```

##### confirm

```
boolean confirm(string message)
```

显示一个带有指定消息和确定及取消按钮的对话框。

选择确定按钮，返回true；选择取消按钮或者关闭对话框，返回false。

##### focus

```
void focus()
```

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

