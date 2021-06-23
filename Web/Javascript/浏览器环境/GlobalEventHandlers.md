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