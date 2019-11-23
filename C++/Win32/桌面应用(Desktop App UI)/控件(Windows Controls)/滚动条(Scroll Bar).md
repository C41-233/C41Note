# 滚动条
##### 函数
- GetScrollInfo 获取当前滚动条参数
- GetScrollPos 获取指定滚动条中滚动方块的当前位置
- GetScrollRange 获取指定滚动条中滚动方块位置的当前最大最小值
- ScrollDC 滚动位矩形
- ScrollWindow 滚动所指定的窗口客户区域内容
- SetScrollInfo 设置滚动条参数
- SetScrollPos 设置所指定滚动条中的滚动方块的位置
- SetScrollRange 设置所指定滚动条范围的最小值和最大值

##### 结构体
- SCROLLINFO 滚动条参数

##### 消息
- WM_CTLCOLORSCROLLBAR 滚动条即将绘制时
- WM_HSCROLL 滚动条水平滚动
- WM_VSCROLL 滚动条垂直滚动