# telinit<br/>init
修改Linux运行级别。

Linux运行级别包括：
- 0 - 停机
- 1 - 单用户模式（安全模式）
- 2 - 多用户,没有NFS
- 3 - 多用户模式,标准的运行级
- 4 - 保留,一般不用
- 5 - X Window图形模式
- 6 - 重新启动

`init`是`telinit`的软链接。

`telinit`和`init`位于`sbin`，通常不在环境变量中。

## 语法
`telinit <n>`

\<n\>代表7个运行级别之一的数字。
