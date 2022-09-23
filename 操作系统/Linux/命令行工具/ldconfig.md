#ldconfig

在默认查找目录/lib和/usr/lib，以及动态库配置文件/etc/ld.so.conf所列目录下，查找可共享的动态库，创建链接器（ld.so）所需的缓存文件。

缓存文件默认为/etc/ld.so.cache，此文件保存已排好序的动态链接库名字列表，为了让动态链接库为系统所共享，需运行动态链接库的管理命令ldconfig，此执行程序存放在/sbin目录下。

ldconfig通常在系统启动时运行，而当用户安装了一个新的动态链接库时，就需要手工运行这个命令。

## 参数

- `-p`  打印当前缓存文件所保存的所有共享库的名字。

## 示例

```
> ldconfig -p | grep libstdc++
libstdc++.so.6 (libc6,x86-64) => /lib/x86_64-linux-gnu/libstdc++.so.6
```

查找libstdc++库所在的目录。