## 命令行工具

### 文件
- 文件查看
    1. [cat 文件查看与连接](cat.md)
    1. [comm 比较两个文件](comm.md)
    1. cut 文件行切割
    1. [diff 比较两个文件](diff.md)
    1. [diff3 比较三个文件](diff3.md)
	1. [du 查看文件大小](du.md)
    1. egrep 扩展的文件检索
    1. file 辨识文件类型
    1. [grep 文件检索](grep.md)
    1. head 显示文件开头
    1. [less 分页显示文件](less.md)
    1. [ls 查看文件信息](ls.md)
    1. [more 分屏显示文件](more.md)
    1. [sort 文件排序](sort.md)
    1. [strings 查看文件中的可打印字符](strings.md)
    1. tail 显示文件结尾
    1. [wc 计算字数](wc.md)

- 文件查找
    1. [find 文件查找](find.md)
    1. [locate 文件定位](locate.md)
    1. whereis 查找文件

- 文件创建
    1. [mkdir 建立目录](mkdir.md)
    1. mkfifo 建立实名管道
    1. mknod 建立设备文件

- 文件删除
    1. [rm 文件删除](rm.md)
    1. [rmdir 目录删除](rmdir.md)

- 文件操作
    1. [cp 文件复制](cp.md)
    1. dir 查看目录
    1. [ln 文件链接](ln.md)
    1. [mv 移动或重命名](mv.md)
    1. pwd 显示当前目录
    1. [rename 修改文件名](rename.md)
    1. [touch 改变文件时间](touch.md)

- 文件归档
    1. ar 文件备份
    1. [gzip 压缩/解压](gzip.md)
    1. [tar 文件打包/解包](tar.md)
    1. [unzip zip解压](unzip.md)

- 文件处理
    1. [awk 文本处理](awk.md)
    1. [dd 读取，转换并输出数据](dd.md)
    1. [sed 文本处理](sed.md)

### 权限管理
- 用户管理
    1. chfn 改变系统存储的用户信息
    1. finger 查找并显示用户信息
    1. mkpasswd 生成随机密码
    1. [passwd 修改用户口令](passwd.md)
    1. su 切换用户身份
    1. [useradd 增加用户](useradd.md)
    1. [userdel 删除用户](userdel.md)
    1. usermod 修改用户属性
    1. [w 显示登录到系统的用户情况](w.md)
    1. [who 显示目前登入系统的用户信息](who.md)
    1. [whoami 显示当前用户](whoami.md)

- 组群管理
    1. groupadd 增加用户组
    1. groupdel 删除用户组

- 文件权限
    1. [chgrp 改变文件属组](chgrp.md)
    1. [chmod 修改文件权限](chmod.md)
    1. [chown 改变文件属主](chown.md)
    1. sudo 以root权限执行指令
    1. [umask 设置创建文件的默认权限](umask.md)

- SELinux
    1. chcon 设置安全上下文
    1. fixfiles 根据策略标记文件系统
    1. getenforce 获得SELinux模式
    1. id 查看当前用户安全上下文
    1. restorecon 恢复默认安全上下文
    1. setfiles 初始化安全上下文数据库
    1. setenforce 设置SELinux模式

### 进程
- 进程查看
    1. free 内存查看
    1. ipcs 查案进程通信状态
    1. jobs 查看当前在后台运行的命令
    1. [ps 显示运行的进程](ps.md)
    1. pstree 以树状显示进程
    1. [top 系统监控](top.md)

- 进程调度
    1. batch 用低优先级运行作业
    1. bg 使一个在后台暂停的命令继续执行
    1. fg 将后台中的命令调至前台运行
    1. [kill 终止进程](kill.md)
    1. nice 设置任务优先级
    1. renice 调整任务优先级

- 服务
    1. [chkconfig 服务管理](chkconfig.md)
    1. [service 服务管理](service.md)

- 计划任务
    1. [at 一次性定时计划任务](at.md)
    1. atq 查看安排的作业序列
    1. atrm 删除指定的作业序列
    1. crontab cron控制

### 网络
- 网络配置
    1. [ip 网络配置](ip.md)
    1. [iptables 防火墙配置](iptables.md)
    1. [ifconfig 网络配置](ifconfig.md)
    1. ifdown 禁用网络设备
    1. ifup 启动网络设备
    1. [netstat 查看网络状况](netstat.md)
    1. ping 测试主机连通性
    1. [route 路由表管理](route.md)
    1. traceroute 路由跟踪
    1. /etc/rc.d/init.d/network 网络控制

- 远程登录
    1. rlogin 远程登录
    1. ssh 远程登录
    1. telnet 远程登录

- SecureCRT
    1. rz 下载
    1. sz 上传

- DNS
    1. [dig DNS查询](dig.md)
    1. [nslookup DNS查询](nslookup.md)

- 传输
    1. [curl 数据传输](curl.md)

- 屏幕
	1. [tmux 窗口复用](tmux.md)

### 硬件
- 硬件控制
    1. [eject 外设控制](eject.md)

- 设备挂载
    1. [mount 挂载设备](mount.md)
    1. umount 卸载设备

- 磁盘管理
    1. [df 显示磁盘用量](df.md)
    1. [fdisk 磁盘分区](fdisk.md)
    1. mdadm RAID
    1. [mkfs 磁盘格式化](mkfs.md)

- ext2文件系统
    1. e2fsck 检查ext2文件系统的正确性
    1. mke2fs 建立ext2文件系统
    1. resize2fs 调整ext2文件系统大小

- LVM
    - 物理卷
        1. pvcreate 创建物理卷
        1. pvdisplay 显示物理卷属性
        1. pvs 打印物理卷信息报表
    - 逻辑卷
        1. lvdisplay 显示逻辑卷属性
        1. lvextend 扩展逻辑卷大小
        1. lvreduce 减少逻辑卷大小
        1. lvs 打印逻辑卷信息报表
        1. lvcreate 创建逻辑卷
    - 卷组
        1. vgcreate 创建卷组
        1. vgdisplay 查看卷组使用情况
        1. vgs 显示卷组信息报表

- 打印机
    1. pr 打印
    1. lpr 文件打印

### 系统
- 动态库
    1. [ldconfig 配置动态库](ldconfig.md)
    1. [ldd 输出依赖的动态库](ldd.md)

- 运行级别
    1. halt 关机
    1. [init 修改运行级别](telinit.md)
    1. logout 注销
    1. poweroff 关机
    1. reboot 重启
    1. [shutdown 关机](shutdown.md)
    1. [telinit 修改运行级别](telinit.md)

- 系统信息
    1. sar 性能分析
    1. setup 文本模式配置工具
    1. uname 显示系统信息
    1. lscpu 查看CPU信息

- 对话
    1. [write 发送消息](write.md)
    1. [wall 广播消息](wall.md)

- 时间
    1. [cal 显示日历](cal.md)
    1. [date 显示或设置系统日期时间](date.md)

### Shell
- 条件语句
    1. [test 条件测试](test.md)
- 其他指令
    1. [echo 标准输出](echo.md)
    1. [sleep 延迟](sleep.md)

### 软件包
- 帮助信息
    1. help 显示命令帮助信息
    1. info 显示帮助手册
    1. man 显示帮助手册
	
- 软件包管理
    1. [rpm](rpm.md)
    1. yum
	
- apt工具
    1. [apt-get 软件包管理](apt-get.md)
    1. apt-cache 软件包查询
