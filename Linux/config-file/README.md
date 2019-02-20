# 配置文件

## 磁盘
- /etc/fstab 文件系统分区
- /proc/filesystems 支持的文件系统
- /proc/partitions 磁盘信息

## 权限
- /etc/passwd 账号配置
- /etc/shadow 口令配置
- /etc/group 组账号配置
- /etc/gshadow 组口令配置

## 进程
- /usr/include/linux/signal.h 信号
- /var/spool/cron/* crontab文件，以用户名命名

## 系统    
- /etc/inittab 缺省运行级别配置

## 网络
- /etc/host.conf 域名解析的控制文件
- /etc/hosts 域名或主机名与IP地址的映射文件
- /etc/nsswitch.conf 域名解析交换配置文件
- /etc/protocols 定义使用的网络协议及协议号
- /etc/resolv.conf 域名服务器设置文件
- /etc/services  网络服务名与端口号的映射文件
- /etc/sysconfig/network 最基本的网络配置信息，系统启动时读取该文件
- /etc/sysconfig/network-scripts/ifcfg-* 系统启动时初始化网络信息，文件名以ifcfg-开头，后跟设备名
- /etc/named.conf 主配置文件
- /var/named/named.ca 根域名服务器指向文件
- /var/named/localhost.zonelocalhost 区文件，本地主机正向解析
- /var/named/0.0.127.in-addr.arpa.zonelocalhost 区文件，用于回环到本机映射
- /var/named/test.com.zone 用户配置区文件，将主机名映射为IP地址
- /var/named/1.168.192.in-addr.arpa.zone 用户配置区文件，将IP地址映射为主机名
