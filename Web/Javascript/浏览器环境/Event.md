# Event

表示一个DOM事件。

## 事件注册

Window、Document、Element对象可以注册对应的事件函数，当对应事件发生时回调。

| 事件 | 描述 |
|---|---|
| onactivate | |
| onabort	当加载中断时 |
| onafterprint	打印页面送往打印缓冲时 |
| onafterpudate	 |
| onbeforecopy |
| onbeforecut |
| onbeforedeactivate |
| onbeforeeditfocus |
| onbeforeprint	当用户确认打印时 |
| onbeforeonload	当文档加载之前调用 |
| onbeforepaste	 |
| onbeforeunload	当卸载或替换当前页面时 |
| onbeforeupdate |
| onblur	当元素失去焦点时 |
| oncanplay	当媒介能够开始播放但可能因缓冲而需要停止时 |
| oncanplaythrough	当媒介能够无需因缓冲而停止即可播放至结尾时 |
| oncellchange |
| onchange	当元素改变时 |
| onclick	当鼠标单击时 |
| oncontextmenu	当触发上下文菜单时 |
| oncontrolselect |
| oncopy	当进行复制时，return false阻止复制	IE Safari
| oncut		IE Safari
| ondataavailable		IE
| ondatasetchanged		IE
| ondatasetcomplete		IE
| ondeactivate		IE
| ondblclick	当鼠标双击时	W3C
| ondrag	当拖动元素时	HTML5
| ondragend	当拖动操作结束时	HTML5
| ondragenter	当元素被拖动至有效的拖放目标时	HTML5
| ondragleave	当元素离开有效拖放目标时	HTML5
| ondragover	当元素被拖动至有效拖放目标上方时	HTML5
| ondragstart	当拖动操作开始时	HTML5
| ondrop	被拖动元素正在被拖放时	HTML5
| ondurationchange	当媒介长度改变时	HTML5
| onemptied	当媒介资源元素突然为空时	HTML5
| onended	当媒介已抵达结尾时	HTML5
| onerror	当在元素加载期间发生错误时，return true阻止默认处理	HTML5
| onerrorupdate		IE
| onfilterchange		IE
| onfocus	当元素获得焦点时	W3C
| onfocusin		IE
| onfocusout		IE
| onformchange	当表单改变时	HTML5
| onforminput	当表单获得用户输入时	HTML5
| onhaschange	当文档改变时	HTML5
| onhelp	激活帮助信息时，return false阻止默认处理	IE
| oninput	当元素获得用户输入时	W3C
| oninvalid	当元素无效时	HTML5
| onkeydown	当键盘被按下时	W3C
| onkeypress	当键盘被按下后又松开时	W3C
| onkeyup	当键盘被松开时	W3C
| onlayoutcomplete		IE
| onload	当文档或图像被载入时	W3C
| onloadeddata	当加载媒介数据时	HTML5
| onloadedmetadata	当媒介元素的持续时间以及其他媒介数据已加载时	HTML5
| onloadstart	当浏览器开始加载媒介数据时	HTML5
| onlosecapture		IE
| onmessage	当触发消息时	HTML5
| onmousedown	当鼠标按钮被按下时	W3C
| onmousemove	当鼠标指针移动时	W3C
| onmouseout	当鼠标指针移出时	W3C
| onmouseover	当鼠标指针悬停时	W3C
| onmouseup	当鼠标按钮松开时	W3C
| onmousewheel	当转动鼠标滚轮时	HTML5
| onmove		IE
| onmoveend		IE
| onmovestart		IE
| onoffline	当文档离线时	HTML5
| ononline	当文档上线时	HTML5
| onpagehide	当窗口隐藏时	HTML5
| onpageshow	当窗口可见时	HTML5
| onpaste	当粘贴时，return false阻止粘贴	IE Safari
| onpause	当媒介数据暂停时	HTML5
| onplay	当媒介数据将要开始播放时	HTML5
| onplaying	当媒介数据已开始播放时	HTML5
| onpopstate	当窗口历史记录改变时	HTML5
| onprogress	当浏览器正在取媒介数据时	HTML5
| onpropertychange		IE
| onratechange	当媒介数据的播放速率改变时	HTML5
| onreadystatechange	当就绪状态改变时	HTML5
| onredo	当文档执行redo时	HTML5
| onreset	当表单被重置时	W3C
| onresize	窗口或框架被重新调整大小	HTML5
| onresizeend		IE
| onresizestart		IE
| onrowenter		IE
| onrowexit		IE
| onrowsdelete		IE
| onrowsinserted		IE
| onscroll	当滚动元素滚动元素的滚动条时	HTML5
| onseeked	当媒介元素的定位属性不再为真且定位已结束时	HTML5
| onseeking	当媒介元素的定位属性为真且定位已开始时	HTML5
| onselect	当元素被选取时	W3C
| onstalled	当取回媒介数据过程中（延迟）存在错误时	HTML5
| onselectstart		IE Safari
| onstorage	当存储空间中的数据发生变化时	HTML5
| onsubmit	当表单被提交时，return true继续提交，return false阻止表单提交	W3C
| onsuspend	当浏览器已在取媒介数据但在取回整个媒介文件之前停止时	HTML5
| ontimeupdate	当媒介改变其播放位置时	HTML5
| onundo	当文档撤销时	HTML5
| onunload	当文档被卸载时	HTML5
| onvolumechange	当媒介改变音量亦或当音量被设置为静音时	HTML5
| onwaiting	当媒介已停止播放但打算继续播放时	HTML5


## 继承

Object / Event

