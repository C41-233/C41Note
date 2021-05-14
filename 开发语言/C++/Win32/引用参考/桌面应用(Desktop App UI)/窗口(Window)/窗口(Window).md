# 窗口

##### 函数
- AdjustWindowRect 根据客户区大小计算窗口大小
- CreateWindow 创建窗口
- CreateWindowEx 创建窗口
- DestroyWindow 销毁指定的窗口
- EnableWindow 启用或禁用窗口
- GetClientRect 获取窗口的用户区尺寸
- GetParent 获取父窗口句柄
- GetWindowLong 获取窗口32位整型信息
- GetWindowRect 获取指定窗口的边框矩形的尺寸
- GetWindowText 获取窗口标题
- IsWindowEnabled 窗口是否启用
- IsWindowUnicode 指定的窗口是否是一个本地Unicode窗口
- IsWindowVisible 窗口是否可见
- MoveWindow 移动窗口
- SetWindowLong 设置窗口32位整型信息
- SetWindowText 设置窗口标题
- ShowWindow 设置指定窗口的显示状态
- UpdateWindow 发送一个WM_PAINT消息来更新指定窗口的客户区
- WindowFromPoint 获得包含指定点的窗口的句柄

##### 消息
- WM_ACTIVATE 窗口激活或失活时
- WM_CLOSE 窗口关闭时
- WM_CREATE 创建窗口时
- WM_DESTROY 窗口销毁时
- WM_ENTERSIZEMOVE 窗口开始改变大小时
- WM_ERASEBKGND 窗口擦除背景时
- WM_EXITSIZEMOVE 窗口完成改变大小时
- WM_GETMINMAXINFO 窗口即将改变大小时
- WM_INPUTLANGCHANGE 窗口的输入语言改变时
- WM_QUIT 程序退出时
- WM_SETFONT 设置控件的字体
- WM_SHOWWINDOW 窗口显示或隐藏时
- WM_SIZE 窗口改变大小后

##### 结构体
- CREATESTRUCT 窗口创建结构
