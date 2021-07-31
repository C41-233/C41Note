# @GlobalEventHandlers

GlobalEventHandlers接口定义HTML结点可以监听的事件。这些事件可能由内部元素冒泡传递上来，而非必须由当前元素自己触发。

## 派生

- [HTMLDocument](HTMLDocument.md)
- [HTMLElement](HTMLElement.md)
- [Window](Window.md)

##### 鼠标事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| click | onclick | 当鼠标单击时 | MouseEvent |
| dblclick | ondblclick | 当鼠标双击时 | MouseEvent | 
| mousedown | onmousedown | 当鼠标按钮被按下时 | MouseEvent |
| mousemove | onmousemove | 当鼠标指针移动时 | MouseEvent | 
| mouseout | onmouseout | 当鼠标指针移出时 | MouseEvent |
| mouseover | onmouseover | 当鼠标指针经过时 | MouseEvent |
| mouseup | onmouseup | 当鼠标按钮松开时 | MouseEvent |
| mousewheel | onmousewheel | 当转动鼠标滚轮时 | MouseWheelEvent |
| wheel | onwheel | 当转动鼠标滚轮时 | WheelEvent |

##### 键盘事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| keydown | onkeydown | 当键盘被按下时 | KeyboardEvent |
| keypress | onkeypress | 当键盘被按下后又松开时 | KeyboardEvent |
| keyup | onkeyup | 当键盘被松开时 | KeyboardEvent |

##### 拖拽事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| drag | ondrag | 当拖动元素时 | DragEvent |
| dragend | ondragend | 当拖动操作结束时 | DragEvent |
| dragenter | ondragenter | 当元素被拖动至有效的拖放目标时 | DragEvent |
| dragleave | ondragleave | 当元素离开有效拖放目标时 | DragEvent |
| dragover | ondragover | 当元素被拖动至有效拖放目标上方时 | DragEvent |
| dragstart | ondragstart | 当拖动操作开始时 | DragEvent |
| drop | ondrop | 被拖动元素正在被拖放时 | DragEvent |

##### 多媒体事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| canplay | oncanplay | 当浏览器能够开始播放多媒体缓冲时，此时可能还未全部加载完毕 | Event |
| canplaythrough | oncanplaythrough | 当浏览器可播放多媒体至结尾而无需缓冲时 | Event |
| loadeddata | onloadeddata | 当加载多媒体数据时 | Event | 
| loadedmetadata | onloadedmetadata | 当多媒体元素的持续时间以及其他多媒体数据已加载时 | Event |
| loadstart | onloadstart | 当浏览器开始加载多媒体数据时 | Event |
| pause | onpause | 当多媒体数据暂停时 | Event |
| play | onplay | 当多媒体数据将要开始播放时 |
| playing | onplaying | 当多媒体数据已开始播放时 | Event |
| progress | onprogress | 当浏览器正在取多媒体数据时 | Event |
| ratechange | onratechange | 当多媒体数据的播放速率改变时 | Event |
| durationchange | ondurationchange | 当多媒体长度改变时 | Event |
| emptied | onemptied | 当多媒体资源元素突然为空时 | Event |
| ended | onended | 当多媒体已抵达结尾时 | Event |
| seeked | onseeked | 当多媒体元素的定位属性不再为真且定位已结束时 | Event |
| seeking | onseeking | 当多媒体元素的定位属性为真且定位已开始时 | Event |
| stalled | onstalled | 当取回多媒体数据过程中（延迟）存在错误时 | Event |
| suspend | onsuspend | 当浏览器已在取多媒体数据但在取回整个媒体文件之前停止时 | Event |
| timeupdate | ontimeupdate | 当多媒体改变其播放位置时 | Event |
| volumechange | onvolumechange | 当多媒体改变音量亦或当音量被设置为静音时 | Event |
| waiting | onwaiting | 当多媒体已停止播放但打算继续播放时 | Event |

##### 动画事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| animationcancel | onanimationcancel | 当动画被中断时 | AnimationEvent |
| animationend | onanimationend | 当动画完成时 | AnimationEvent |
| animationstart | onanimationstart | 当动画开始时 | AnimationEvent |

##### 其他事件

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| abort | onabort | 当加载中断时 | Event |
| blur | onblur | 当元素失去焦点时 | FocusEvent |
| cancel | oncancel | 当用户离开dialog元素时 | Event |
| change | onchange | 当元素的值改变时 | Event |
| contextmenu | oncontextmenu | 当打开上下文菜单时 | 	MouseEvent |
| error | onerror | 资源加载出错时 | Event |
| focus | onfocus | 元素获得焦点时 | FocusEvent |
| formdata | onformdata | 当表单发送前 | Event |
| input | oninput | 当元素获得用户输入时 | 	InputEvent |
| invalid | oninvalid | 当元素无效时 | Event |
| load | onload | 当资源被载入完成时 | Event |
| reset | onreset | 当表单被重置时 | Event |
| resize | onresize | 当元素大小改变时 | Event |
| scroll | onscroll | 当滚动元素滚动滚动条时 | Event |
| select | onselect | 当文本被选择时 | Event |
| selectionchange | onselectionchange | 当选择文本区域时 | Event |
| selectstart | onselectstart | 当开始选择文本时 | Event | 
| submit | onsubmit | 当表单被提交时 | SubmitEvent |
| toggle | ontoggle | 当detail元素切换开关时 | Event |