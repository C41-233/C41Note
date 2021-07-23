# @DocumentEventHandlers

DocumentEventHandlers接口定义了Document和HTMLElement都可以监听的事件。这些事件可能由内部元素冒泡传递上来，而非必须由当前元素自己触发。

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| beforecopy | onbeforecopy |  |  |
| beforecut | onbeforecut |  |  |
| beforepaste | onbeforepaste |  |  |
| copy | oncopy | 当复制时 | ClipboardEvent |
| cut | oncut | 当剪切时 | ClipboardEvent |
| fullscreenchange | onfullscreenchange | 当进入或退出全屏状态时 | Event |
| fullscreenerror | onfullscreenerror | 当进入或退出全屏状态失败时 |Event |
| paste | onpaste | 当粘贴时 | ClipboardEvent |