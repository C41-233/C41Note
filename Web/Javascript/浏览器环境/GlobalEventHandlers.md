# @GlobalEventHandlers

GlobalEventHandlers接口定义了Window、Document、HTMLElement都包含的事件，这些事件可能由元素冒泡传递上来，而非必须由当前元素触发。

| 事件 | 函数 | 描述 | 类型 |
|---|---|---|---|
| animationcancel | onanimationcancel | 当动画被中断时 | AnimationEvent |
| animationend | onanimationend | 当动画完成时 | AnimationEvent |
| blur | onblur | 当元素失去焦点时 | FocusEvent |
| cancel | oncancel | 当用户离开dialog元素时 | Event |
| canplay | oncanplay | 当浏览器能够开始播放多媒体缓冲时，此时可能还未全部加载完毕 | Event |
| canplaythrough | oncanplaythrough | 当浏览器可播放多媒体至结尾而无需缓冲时 | Event |
| change | onchange | 当元素的值改变时 | Event |
| click | onclick | 当鼠标单击时 | MouseEvent |
| contextmenu | oncontextmenu | 当打开上下文菜单时 | 	MouseEvent |
| dblclick | ondblclick | 当鼠标双击时 | MouseEvent | 
| durationchange | ondurationchange | 当多媒体长度改变时 | Event |
| ended | onended | 当多媒体已抵达结尾时 | Event |
| error | onerror | 资源加载出错时 | Event/UIEvent |
| focus | onfocus | 元素获得焦点时 | FocusEvent |
| formdata | onformdata | 当表单发送前 | Event |
| input | oninput | 当元素获得用户输入时 | 	InputEvent |
| invalid | oninvalid | 当元素无效时 | Event |
| keydown | onkeydown | 当键盘被按下时 | KeyboardEvent |
| keypress | onkeypress | 当键盘被按下后又松开时 | KeyboardEvent |
| keyup | onkeyup | 当键盘被松开时 | KeyboardEvent |
| load | onload | 当资源被载入完成时 | Event |
| loadeddata | onloadeddata | 当加载多媒体数据时 | Event | 
| loadedmetadata | onloadedmetadata | 当多媒体元素的持续时间以及其他多媒体数据已加载时 | Event |