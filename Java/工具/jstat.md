# jstat

虚拟机统计信息监视工具。用于监视虚拟机各种运行状态，可以显示本地或者远程虚拟机进程中的类装载、内存、垃圾收集、JIT编译等运行数据。

## 格式

```
jstat {-help | -options}
jstat -<option> [-t] [-h<lines>] <vmid> [<interval> [<count>]]
```

## 示例

`jstat -gcutil 16418 1000 10`  
每秒查询一次进程16418的垃圾收集情况，一共查询10次。