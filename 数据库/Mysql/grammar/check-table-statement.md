# CHECK TABLE语句

###### check-table-statement
> **CHECK TABLE** *table-reference* [**,** *table-reference*]\* [**FOR UPGRADE** | **QUICK** | **FAST** | **MEDIUM** | **EXTENDED** | **CHANGED**]\*

###### table-reference
> [*database-name* **.**] *table-name*

在某些意外情况下，数据库表可能会损坏。可以使用CHECK TABLE语句查看表是否处于正确状态。

| 参数 | 说明 |
|---|---|
| FOR UPDATE | 查看旧版本MySQL创建的表是否与当前MySQL版本兼容 |
| QUICK | 不检查错误连接 |
| FAST | 检查表是否正确关闭 |
| CHANGED | 只检查CHECK TABLE语句之后发生变化的表 |
| MEDIUM | 检查索引数据和表数据之间的连接是否正确 |
| EXTENDED | 对所有项目都进行检查 |