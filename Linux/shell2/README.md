# Shell编程

## 1. 配置
- ~/.bashrc 用户每次打开新的shell时执行的脚本
- ~/.bash_logout 用户登出时执行的脚本
- ~/.bash_profile 用户登录时执行的脚本
    
## 2. 指令

### 别名
- alias 显示或设置命令别名
- unalias 删除命令别名

### 环境变量
- env 显示当前用户的环境变量
- [export 设置或显示环境变量](export.md)

### 执行
- source 在当前shell下执行指定脚本
- . 在当前shell下执行指定脚本

### 语句
- expr 计算表达式
- let 计算表达式组
- set 设置shell及用户变量
- true 仅返回0
- : 空命令

### 其他指令
- cd 改变当前目录
- chsh 改变当前shell
- clear 清屏
- exit 退出当前shell
- [read 从标准输入读取数据设置变量](read.md)
