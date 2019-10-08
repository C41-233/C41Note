# LOCK TABLE语句

###### lock-table-statement
> **LOCK** **TABLE** *lock-table*

> **LOCK** **TABLES** *lock-table* [**,** *lock-table*]\*

###### lock-table
> *table-reference* [**AS** *name*]  
{**READ** | **READ LOCAL** | **WRITE** | **LOW_PRIORITY WRITE**}

###### table-reference
> <[*database-name* **.**] *table-name*>

LOCK TABLE语句用于在事务中锁定表。只有基础表可以被锁定，事务结束时锁自动释放。

MySQL支持如下锁类型：

| 锁 | 说明 |
|---|---|
| READ | 允许当前事务和其他事务读取表，但不允许修改表 |
| READ LOCAL | 只用于MyISAM存储引擎，在某些条件下可以同时添加行 |
| WRITE | 允许当前事务修改表，其他事务不允许读写该表 |
| LOW_PRIORITY WRITE | 允许当前事务修改表，其他事务允许读取该表，但不允许修改该表 |