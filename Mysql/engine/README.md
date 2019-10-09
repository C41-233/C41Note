# 存储引擎

一个存储引擎决定了数据如何存储以及如何访问，还有事务如何处理。存储引擎很大程度影响处理SQL语句所需的存储空间和速度。

允许为每张表定义存储引擎，如果没有指定，则使用默认引擎。

| 存储引擎 | 描述 | 事务 | XA | 保存点 |
|---|---|---|---|---|---|
| [InnoDB](innodb-engine.md) | 默认存储引擎，支持事务、外键、行级锁 | YES | YES | YES |
| MyISAM | 支持表级锁，早期MySQL的默认引擎 | NO | NO | NO |
| [Merge](merge-engine.md) | 合并视图。需要配合UNION和INSERT_METHOD子句 |  NO | NO | NO |
| CVS | 使得数据存储在外部文件中，该文件拥有逗号隔开的值，不支持索引 | NO | NO | NO |
| Memory/HEAP | 数据驻留内存，而不存储在硬盘上，默认使用哈希索引。处理速度非常快，当数据库服务停止时，数据都被删除  | NO | NO | NO |
| ARCHIVE | 压缩的数据存储 | NO | NO | NO |
| BACKHOLE | 不实际存储数据，查询结果永远为空 | NO | NO | NO |