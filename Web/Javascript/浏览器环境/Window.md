# Window

Window对象表示DOM文档窗口，是全局属性`window`的类型。

在有标签页功能的浏览器中，每个标签页都有自己的Window对象。

![](https://developer.mozilla.org/@api/deki/files/210/=FirefoxChromeToolbarsDescription7a.gif)

## 继承

Object / [@WindowOrWorkerGlobalScope](WindowOrWorkerGlobalScope.md) / Window  
Object / [EventTarget](EventTarget.md) / Window
Object / [@GlobalEventHandlers](GlobalEventHandlers.md) / Window

## 原型属性

##### 全局对象

| 名称 | 类型 | 描述 | writable | enumerable | configurable |
|---|---|---|---|---|---|
| console | Console | 获取控制台对象 | - | true | - |
| crypto | Crypto | 获取加密服务对象 | - | true | - |
| customElements | CustomElementRegistry | 获取CustomElementRegistry对象 | - | true | - |
| document | Document | 文档对象 | - | true | - |
| history | History | History对象 | - | true | - |
| localStorage | Storage | 本地存储对象 | - | true | - |
| location | Location | Location对象 | - | true | - |
| navigator | Navigator | 浏览器对象 | - | true | - |
| performance | Performance | 性能度量工具 | - | true | - |
| screen | Screen | 屏幕对象 | - | true | - |
| sessionStorage | Storage | 会话存储对象 | - | true | - |
| window | Window | 窗口自身 | - | true | - |

##### 窗口属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| closed | boolean | 窗口是否关闭 | - | true | - | 
| devicePixelRatio | number | 当前显示设备的物理像素分辨率与CSS像素分辨率之比 | - | true | - |
| innerHeight | number | 窗口的视口高度 | - | true | - |
| innerWidth | number | 窗口的视口宽度 | - | true | - |
| length | number | 当前窗口中包含的框架数量 | - | true | - |
| locationbar | object | 地址栏对象，只有一个visible属性 | - | true | - | 
| menubar | object | 菜单栏对象，只有一个visible属性 | - | true | - |
| name | string | 窗口名称 | - | true | - |
| opener | Window | 打开该窗口的窗口 | - | true | - |
| outerHeight | number | 整个浏览器窗口的高度 | - | true | - |
| outerWidth | number | 整个浏览器窗口的宽度 | - | true | - |
| pageXOffset | number | 页面水平滚动距离 | - | true | - |
| pageYOffset | number | 页面垂直滚动距离 | - | true | - |
| parent | Window | 父窗口 | - | true | - |
| personalbar | object | 个人工具栏，只有一个visible属性 | - | true | - |
| screenLeft | number | 浏览器窗口左边框到屏幕左边缘的距离 | - | true | - | 
| screenTop | number | 浏览器窗口上边框到屏幕上边缘的距离 | - | true | - |
| screenX | number | 浏览器窗口左边框到系统桌面左边缘的距离 | - | true | - |
| screenY | number | 浏览器窗口上边框到系统桌面上边缘的距离 | - | true | - |
| scrollbars | object | 滚动条对象，只有一个visible属性 | - | true | - |
| scrollX | number | 页面水平滚动距离 | - | true | - |
| scrollY | number | 页面垂直滚动距离 | - | true | - |
| self | Window | 指向自身 | - | true | - |
| status | string | 状态栏中的文本 | - | true | - |
| statusbar | object | 状态栏对象，只有一个visible属性 | - | true | - |
| toolbar | object | 工具栏对象，只有一个visible属性 | - | true | - |
| top | Window | 最顶层的窗口 | - | true | - |

## 原型函数

| 函数 | 描述 |
|---|---|
| alert | 弹出警告对话框 |
| blur | 使窗口失去焦点 |
| close | 关闭浏览器窗口 |
| confirm | 弹出确认对话框 |
| focus | 使窗口获得焦点 |
| getComputedStyle | 获得全局CSS属性对象 |
| getSelection | 获取当前用户选择的范围 |
| matchMedia | 媒体查询 |
| minimize | 最小化窗口 |
| moveBy | 按偏移移动窗口 |
| moveTo | 移动窗口 |
| open | 打开新窗口 |
| postMessage | 发送窗口消息 |
| print | 发起打印 |
| prompt | 弹出输入对话框 |
| requestAnimationFrame | 在下次渲染之前回调 |
| requestIdleCallback | 向空闲队列压入任务 |
| resizeBy | 以偏移量调整窗口大小 |
| resizeTo | 设置窗口大小 |
| scroll | 滚动窗口至特定位置 |
| scrollBy | 以偏移量滚动窗口 |
| scrollTo | 滚动窗口至特定位置 |
| showDirectoryPicker | 弹出目录选择对话框 |
| showOpenFilePicker | 弹出文件选择对话框 |
| showSaveFilePicker | 弹出文件保存对话框 |
| stop | 停止窗口加载 |

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
void Window.prototype.alert(string message)
```

显示带有一条指定消息和一个确定按钮的警告对话框。

##### blur

```
void Window.prototype.blur()
```

##### close

```
void Window.prototype.close()
```

##### confirm

```
boolean Window.prototype.confirm(string message)
```

显示一个带有指定消息和确定及取消按钮的确认对话框。

选择确定按钮，返回true；选择取消按钮或者关闭对话框，返回false。

##### focus

```
void Window.prototype.focus()
```

##### innerHeight

```
number Window.prototype.innerHeight
```

获取浏览器的视口（viewport）高度，单位为像素。如果存在水平滚动条，也包括水平滚动条的高度。

---

##### innerWidth

```
number Window.prototype.innerWidth
```

获取浏览器的视口（viewport）宽度，单位为像素。如果存在垂直滚动条，也包括垂直滚动条的高度。

##### open

```
Window Window.prototype.open(string url)
Window Window.prototype.open(string url, string name)
Window Window.prototype.open(string url, string name, string features)
```

打开新窗口。如果指定name的窗口已存在，则不再打开新的窗口，而是将URL加载到该窗口。

- url：新窗口加载的URL。
- name：新窗口的名称。
- features：新窗口的特征。特征以`name=value`的形式表示，各特征之间用逗号分隔。

    | 特征名称 | 特征值 | 描述 |
    |---|---|---|
    | channelmode | yes\|no\|1\|0 | 是否使用剧院模式显示窗口。默认为no |
    | directories | yes\|no\|1\|0 | 是否添加目录按钮。默认为yes |
    | fullscreen | yes\|no\|1\|0 | 是否使用全屏模式显示浏览器。默认是no |
    | height | pixels | 窗口文档显示区的高度 |
    | left | pixels | 窗口的x坐标 |
    | location | yes\|no\|1\|0 | 是否显示地址字段。默认是yes |
    | menubar | yes\|no\|1\|0 | 是否显示菜单栏。默认是yes |
    | resizable | yes\|no\|1\|0 | 窗口是否可调节尺寸。默认是yes |
    | scrollbars | yes\|no\|1\|0 | 是否显示滚动条。默认是yes |
    | status | yes\|no\|1\|0 | 是否添加状态栏。默认是yes |
    | titlebar | yes\|no\|1\|0 | 是否显示标题栏。默认是yes |
    | toolbar | yes\|no\|1\|0 | 是否显示浏览器的工具栏。默认是yes |
    | top | pixels | 窗口的y坐标 |
    | width | pixels | 窗口的文档显示区的宽度 |

---

##### prompt

```
string Window.prototype.prompt(string text, string defaultText)
```

显示可提示用户进行输入的对话框。

返回用户输入的内容，如果用户关闭了窗口则返回null。

---

##### requestAnimationFrame

```
number Window.prototype.requestAnimationFrame(Function callback)
```

---

##### requestIdleCallback

```
number Window.prototype.requestIdleCallback(Function callback)
number Window.prototype.requestIdleCallback(Function callback, number timeout)
```

---

##### resizeBy

```
void Window.prototype.resizeBy(number width, number height)
```

---

##### resizeTo

```
void Window.prototype.resizeTo(number width, number height)
```

---

##### scroll

```
void Window.prototype.scroll(number x, number y)
void Window.prototype.scroll(@ScrollToOptions options)
```

---

##### scrollBy

```
void Window.prototype.scrollBy(number x, number y)
void Window.prototype.scrollBy(@ScrollToOptions options)
```

---

##### scrollTo

```
void Window.prototype.scrollTo(number x, number y)
void Window.prototype.scrollTo(@ScrollToOptions options)
```

---

##### showDirectoryPicker

```
Promise<FileSystemDirectoryHandle> Window.prototype.showDirectoryPicker()
```

---

##### showOpenFilePicker

```
Promise<Array<FileSystemDirectoryHandle>> Window.prototype.showOpenFilePicker()
Promise<Array<FileSystemDirectoryHandle>> Window.prototype.showOpenFilePicker(object options)
```

- options：选项参数
    | 选项 | 类型 | 描述 | 默认值 |
    |---|---|---|---|
    | multiple | boolean | 是否可以选择多个文件 | false |
    | excludeAcceptAllOption | boolean | 是否隐藏选择所有文件的选项 | false |
    | types | Array\<object\> | 文件类型过滤，每项都包含下列属性：<br/>description：string类型，描述<br/>accept：Array\<string\>类型，文件MIME类型数组  | null |

用户放弃选择文件时，抛出AbortError。

---

##### showSaveFilePicker

```
Promise<Array<FileSystemDirectoryHandle>> Window.prototype.showSaveFilePicker()
Promise<Array<FileSystemDirectoryHandle>> Window.prototype.showSaveFilePicker(object options)
```

- options：选项参数
    | 选项 | 类型 | 描述 | 默认值 |
    |---|---|---|---|
    | excludeAcceptAllOption | boolean | 是否隐藏选择所有文件的选项 | false |
    | types | Array\<object\> | 文件类型过滤，每项都包含下列属性：<br/>description：string类型，描述<br/>accept：Array\<string\>类型，文件MIME类型数组  | null |

用户放弃保存文件时，抛出AbortError。

---

##### stop

```
void Window.prototype.stop()
```