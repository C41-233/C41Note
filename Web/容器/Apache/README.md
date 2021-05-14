# Apache

## 一、安装与配置

### Windows

Windows下配置文件是`/conf/httpd.conf`。

开放端口80：`控制面板->Windows 防火墙->高级设置->入站规则->新建规则->TCP/80`

### Linux

安装步骤如下：
```
sudo apt-get install apache2
```

配置文件位于`/etc/httpd/httpd.conf`，或者`/etc/apache2/apache2.conf`。默认文档目录为`/var/www`。

system-config-httpd是图形化配置工具。

Apache的服务名称是httpd，Linux下通过脚本`/etc/rc.d/init.d/httpd <op>`控制。参数含义op如下：
- start：启动
- stop：停止
- reload：发送hup消息，并重新读取更改后的配置文件
- restart：重启服务器
- condrestart：运行时重启服务器
- status：检测是否正在运行，如果正在运行则为每个服务器实例提供pid

Apache可执行文件位于`/usr/sbin`目录下。

[Apache配置指令](配置指令.md)

## 二、配置PHP

### Windows

Php Non Thread Safe版本用于IIS配置，Php Thread Safe版本用于Apache配置。

##### 加载PHP共享库

```
LoadModule php5_module D:/php-5.4.17-Win32-VC9-x86/php5apache2_2.dll
```

##### 配置文件php.ini的搜索目录

```
PHPIniDir "D:/php-5.4.17-Win32-VC9-x86"
```

##### PHP程序处理的文档后缀

```
<IfModule mime_module>
    AddType application/x-httpd-php .php .htm .html
</IfModule>
```

### Linux

```
sudo apt-get install libapache2-mod-php5
```