# 对话框

## 对话框 Dialog Box

##### 函数
- CreateDialog 创建对话框
- DialogBox 创建预定义对话框
- EndDialog 销毁对话框
- GetDialogBaseUnits 返回对话框的系统字体字符的平均宽度和高度
- GetDlgCtrlID 获取对话框ID
- GetDlgItem 获取窗口中指定参数ID的子元素的句柄
- GetDlgItemInt 获取控件中里面字符串并转换成整型返回
- IsDialogMessage 是否是对话框消息
- SetDlgItemText 设置对话框中控件的文本和标题

## 通用对话框 Common Dialog Box
##### 函数
- ChooseColor 创建选取颜色对话框
- ChooseFont 创建选择字体对话框
- FindText 创建查找对话框
- GetOpenFileName 创建打开文件对话框
- GetSaveFileName 创建保存文件对话框
- MessageBox 显示消息框
- PrintDlg
- ReplaceText 创建替换对话框

##### 结构体
- CHOOSECOLOR 选取对话框信息
- CHOOSEFONT 选择字体对话框信息
- OPENFILENAME 打开/保存文件对话框信息
- PRINTDLG 打印对话框信息