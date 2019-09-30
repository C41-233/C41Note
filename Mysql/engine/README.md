# 存储引擎

一个存储引擎决定了数据如何存储以及如何访问，还有事务如何处理。存储引擎很大程度影响处理SQL语句所需的存储空间和速度。

允许为每张表定义存储引擎，如果没有指定，则使用默认引擎。

| 存储引擎 | 描述 | 默认版本 | 事务 | XA | 保存点 |
|---|---|---|---|---|---|
| [InnoDB](innodb-engine.md) | 支持事务、外键、行锁定 | 5.0 | YES | YES | YES |
| MyISAM | ISAM引擎扩展 | 3.23 | NO | NO | NO |
| (Merge)[merge-engine.md] | 合并视图。需要配合UNION和INSERT_METHOD子句 |  | NO | NO | NO |
| MRG_MyISAM |  |  | NO | NO | NO |
| ISAM | 早期MySQL的默认引擎 |  | NO | NO | NO |
| CVS | 使得数据存储在外部文件中，该文件拥有逗号隔开的值 | | NO | NO | NO |
| HEAP | 与MEMORY引擎相同 |  | NO | NO | NO |
| Memory | 数据驻留内存，而不存储在硬盘上，默认使用哈希索引。处理速度非常快，当数据库服务停止时，数据都被删除 |  | NO | NO | NO |
