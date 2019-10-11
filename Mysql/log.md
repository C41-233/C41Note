# 日志

## 错误日志（Error Log）
记录mysqld启动、运行、关闭过程中产生的错误。

## 通用查询日志（General Query Log）
记录客户端连接与执行的语句。

## 慢查询日志（Slow Query Log）
记录花费时间超过`long_query_time`的查询。

## DDL Log
记录DDL语句。

## 二进制日志（Binary Log）
记录数据变更。

binlog也用于主从复制。

## 中继日志（Relay Log）
从库记录从主库拉取的数据变更。
