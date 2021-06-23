# Event

表示一个DOM事件。

## 事件注册

Window、Document、Element对象可以注册对应的事件函数，当对应事件发生时回调，事件函数的名称是`on<event>`。例如，mousedown事件对应的事件函数为onmousedown。

##### 鼠标事件

| 事件 | 描述 |
|---|---|
| mousedown | 当鼠标按钮被按下时 |
| mousemove | 当鼠标指针移动时 |
| mouseout | 当鼠标指针移出时 |
| mouseover | 当鼠标指针悬停时 |
| mouseup | 当鼠标按钮松开时 |
| mousewheel | 当转动鼠标滚轮时 |

##### 键盘事件

| 事件 | 描述 |
|---|---|
| keydown | 当键盘被按下时 |
| keypress | 当键盘被按下后又松开时 |
| keyup | 当键盘被松开时 |

##### 焦点事件

| 事件 | 描述 |
|---|---|
| blur | 当元素失去焦点时 |
| focus | 当元素获得焦点时 |

##### 拖拽事件

| 事件 | 描述 |
|---|---|
| drag | 当拖动元素时 |
| dragend | 当拖动操作结束时 |
| dragenter | 当元素被拖动至有效的拖放目标时 |
| dragleave | 当元素离开有效拖放目标时 |
| dragover | 当元素被拖动至有效拖放目标上方时 |
| dragstart | 当拖动操作开始时 |
| drop | 被拖动元素正在被拖放时 |

##### 动画事件

| 事件 | 描述 |
|---|---|
| animationcancel | 当动画被中断时 |
| animationend | 当动画完成时 |
| animationiteration | 当动画完成最后一帧时 |

##### 多媒体事件 



##### 其他事件

| 事件 | 描述 |
|---|---|
| activate | |
| abort | 当加载中断时 |
| afterprint | 打印页面送往打印缓冲时 |
| afterpudate	 | |
| beforecopy | |
| beforecut | |
| beforedeactivate | | 
| beforeeditfocus | | 
| beforeprint | 当用户确认打印时 |
| beforeonload | 当文档加载之前调用 |
| beforepaste	 | | 
| beforeunload | 当卸载或替换当前页面时 |
| beforeupdate | | 
| cancel | 当用户离开dialog元素时 |
| canplay | 当媒介能够开始播放但可能因缓冲而需要停止时 |
| canplaythrough | 当媒介能够无需因缓冲而停止即可播放至结尾时 |
| cellchange | | 
| change | 当元素改变时 |
| click | 当鼠标单击时 |
| contextmenu	当触发上下文菜单时 |
| controlselect |
| copy | 当进行复制时，return false阻止复制 |
| cut | | 
| dataavailable | | 
| datasetchanged | | 
| datasetcomplete | | 
| deactivate | | 
| dblclick | 当鼠标双击时 |
| durationchange | 当媒介长度改变时 |
| emptied | 当媒介资源元素突然为空时 |
| ended | 当媒介已抵达结尾时 |
| error | 当在元素加载期间发生错误时，return true阻止默认处理 |
| errorupdate | | 
| filterchange | | 
| focusin | | 
| focusout | | 
| formchange | 当表单改变时 |
| forminput | 当表单获得用户输入时 |
| haschange	当文档改变时 |
| help | 激活帮助信息时，return false阻止默认处理 |
| input | 当元素获得用户输入时 |
| invalid | 当元素无效时 |
| layoutcomplete | |
| load | 当文档或图像被载入时 |
| loadeddata | 当加载媒介数据时 |
| loadedmetadata | 当媒介元素的持续时间以及其他媒介数据已加载时 |
| loadstart | 当浏览器开始加载媒介数据时 |
| losecapture | | 
| message | 当触发消息时 |
| move | | 
| moveend | | 
| movestart | | 
| offline | 当文档离线时 |
| online | 当文档上线时 |
| pagehide | 当窗口隐藏时 |
| pageshow | 当窗口可见时 |
| paste | 当粘贴时，return false阻止粘贴 |
| pause | 当媒介数据暂停时 |
| play | 当媒介数据将要开始播放时 |
| playing | 当媒介数据已开始播放时 |
| popstate | 当窗口历史记录改变时 |
| progress | 当浏览器正在取媒介数据时 |
| propertychange | | 
| ratechange | 当媒介数据的播放速率改变时 |
| readystatechange | 当就绪状态改变时 |
| redo | 当文档执行redo时 |
| reset | 当表单被重置时 |
| resize | 窗口或框架被重新调整大小 |
| resizeend | | 
| resizestart | | 
| rowenter | | 
| rowexit | | 
| rowsdelete | | 
| rowsinserted | | 
| scroll | 当滚动元素滚动元素的滚动条时 |
| seeked | 当媒介元素的定位属性不再为真且定位已结束时 |
| seeking | 当媒介元素的定位属性为真且定位已开始时 |
| select | 当元素被选取时 |
| stalled | 当取回媒介数据过程中（延迟）存在错误时 |
| selectstart | | 
| storage | 当存储空间中的数据发生变化时 |
| submit | 当表单被提交时，return true继续提交，return false阻止表单提交 |
| suspend | 当浏览器已在取媒介数据但在取回整个媒介文件之前停止时 |
| timeupdate | 当媒介改变其播放位置时 |
| undo | 当文档撤销时 |
| unload | 当文档被卸载时 |
| volumechange | 当媒介改变音量亦或当音量被设置为静音时	 |
| waiting | 当媒介已停止播放但打算继续播放时 |

## 继承

Object / Event

