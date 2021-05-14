# chkconfig
服务管理。

## 语法
`chkconfig {--add | --del} <service>`  
添加或删除指定服务。

`chkconfig --list [service]`  
显示所有或指定服务，以及在每个运行级别的信息。

`chkconfig <service>`  
检查指定服务状态。

`chkconfig [--level <level>] <service> [on | off | reset]`  
改变服务运行级别及状态信息（启动、停止、重置）。
