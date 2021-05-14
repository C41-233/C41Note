# 剪贴板处理
##### 函数
- ChangeClipboardChain 从剪贴板浏览器链中移除指定窗口
- CloseClipboard 关闭剪贴板
- CountClipboardFormats 获取剪贴板数据格式数
- EmptyClipboard 清空剪贴板
- EnumClipboardFormats 枚举剪贴板数据格式
- GetClipboardData 获取剪贴板数据
- GetClipboardFormatName 获取剪贴板格式
- GetClipboardOwner 获取剪贴板拥有者
- GetClipboardViewer 获取剪贴板浏览器链中的第一个窗口
- IsClipboardFormatAvailable 剪贴板是否拥有指定格式的数据
- OpenClipboard 打开剪贴板
- RegisterClipboardFormat 注册剪贴板格式
- SetClipboardData 为剪贴板传送数据
- SetClipboardViewer 添加指定窗口至剪贴板浏览器链头部

##### 消息
- WM_ASKCBFORMATNAME 获取数据格式名称
- WM_CHANGECBCHAIN 剪贴板浏览器链发生变化，由当前剪贴板浏览器接收
- WM_DRAWCLIPBOARD 剪贴板内容变化，由当前剪贴板浏览器接收
- WM_DESTROYCLIPBOARD 要求延迟提交剪贴板拥有者清除数据
- WM_HSCROLLCLIPBOARD 通知剪贴簿所有者，使用者水平卷动了滚动条
- WM_PAINTCLIPBOARD 通知剪贴簿所有者，修改剪贴簿浏览器的显示区域
- WM_RENDERALLFORMATS 延迟提交剪贴板拥有者进程将要终止
- WM_RENDERFORMAT 要求延迟提交剪贴板拥有者提供数据
- WM_SIZECLIPBOARD 通知剪贴簿所有者，剪贴簿浏览器的显示区域大小己发生了变化
- WM_VSCROLLCLIPBOARD 通知剪贴簿所有者，使用者垂直卷动了滚动条