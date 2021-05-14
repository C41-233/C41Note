# BACKUP TABLE语句

###### backup-table-statement
> **BACKUP TABLE** *table-reference* [**,** *table-reference*]\* **TO** *directory*

###### table-reference
> [*database-name* **.**] *table-name*

BACKUP TABLE对一个或多个MyISAM存储引擎的数据表进行备份。注意该语句已过时。

目录是引号包围的字符串，提供的目录文件必须已经存在。

可以通过RESTORE TABLE语句恢复备份表。