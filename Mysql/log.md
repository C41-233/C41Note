# 日志

## 错误日志（Error Log）
记录mysqld启动、运行、关闭过程中产生的错误。

如果启用了`--console`参数，则向控制台输出。

如果启动了`--log-error`参数，则输出到对应的文件中。
- 如果没有指定文件名，则输出到数据目录下的`<host_name>.err`。
- 如果没有指定后缀名，则以`.err`为后缀名。
- 如果提供了相对目录，则输出到数据目录中。

## 通用查询日志（General Query Log）
记录客户端连接、断开信息以及收到的SQL语句。

语句按照从客户端收到的顺序记录，而非执行的顺序。

默认关闭，通过`--general-log`选项开启。通过`--general-log-file`以及`--log-output`选项设置输出文件。

## 慢查询日志（Slow Query Log）
记录花费时间超过`long_query_time`的查询。

## DDL Log
记录DDL语句。

## 二进制日志（Binary Log）
记录数据变更，也包含部分元数据变更（建表）和数据变更可能（DELETE删除0行）。

binlog用于：
- 主从复制，Slave通过从Master拉取binlog中的事件并执行来同步。
- 数据恢复。

binlog中涉及的密码不会以明文输出。

查看`log_bin`系统变量是否开启（与`--log-bin`不同）。

通过`--log-bin`选项设置输出文件。

## 中继日志（Relay Log）
从库记录从主库拉取的数据变更。
