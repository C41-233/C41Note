# 绘图

##### 函数
- BeginPaint 为指定窗口进行绘图工作的准备，并用将和绘图有关的信息填充到一个PAINTSTRUCT结构中
- EndPaint 标记指定窗口的绘图过程结束
- GetUpdateRect 获得更新区域
- InvalidateRect 向指定的窗体更新区域添加一个矩形，然后窗口客户区域的这一部分将被重新绘制
- InvalidateRgn 向指定的窗体更新区域添加一个区域，然后窗口客户区域的这一部分将被重新绘制
- ValidateRect 更新指定窗口的无效矩形区域，使之有效
- ValidateRgn 更新指定的区域，使之有效
- GetBkColor 获取背景色
- SetBkColor 设置背景色
- GetBkMode 获取背景模式
- SetBkMode 设置背景模式
- GetROP2 获取前景色混合模式
- SetROP2 设置前景色混合模式

##### 结构体
- PAINTSTRUCT 绘图

##### 消息
- WM_NCPAINT 非显示区域绘图
- WM_PAINT 当窗口显示区域的一部分显示内容或者全部变为无效，以致于必须更新画面时