# apt-get
apt-get适用于deb包管理式的操作系统，主要用于自动从互联网的软件仓库中搜索、安装、升级、卸载软件或操作系统。

## 语法
`apt-get install <packagename>`

安装一个新的软件包。

`apt-get remove [--purge] <packagename>`

卸载一个已安装的软件包。

--purge 删除配置文档

`apt-get autoremove [--purge] <packagename>`

删除包及其依赖的软件包。

--purge 删除配置文档

`apt-get clean`

这个命令会把安装的软件的备份也删除，但是这样不会影响软件的使用。

`apt-get autoclean`

apt会把已装或已卸的软件都备份在硬盘上，所以假如需要空间的话，能够让这个命令来删除您已删掉的软件。

`apt-get update`

在修改/etc/apt/sources.list或/etc/apt/preferences之后运行该命令来更新源。

`apt-get [-u] upgrade`

可以使用这条命令更新软件包，apt-get upgrade不仅可以从相同版本号的发布版中更新软件包，也可以从新版本号的发布版中更新软件包，尽管实现后一种更新的推荐命令为apt-get dist-upgrade

在运行apt-get upgrade命令时加上-u选项很有用。这个选项让APT显示完整的可更新软件包列表。不加这个选项，你就只能盲目地更新。APT会下载每个软件包的最新更新版本，然后以合理的次序安装它们。注意在运行该命令前应先运行 apt-get update更新数据库。更新任何已安装的软件包。

`apt-get dist-update`

将系统升级到新版本。