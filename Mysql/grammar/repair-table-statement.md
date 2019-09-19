# REPAIR TABLE语句

###### optimize-table-statement
**REPAIR** [**NO_WRITE_TO_BINLOG** | **LOCAL**] **TABLE** *table-reference* [**,** *table-reference*]\* [**QUICK**] [**EXTENDED**] [**USE_FRM**]

###### table-reference
> [*database-name* **.**] *table-name*

如果一个表或索引损坏，可以尝试用REPAIR TABLE语句修复。该语句只对MyISAM或ARCHIVE引起有效。

NO_WRITE_TO_BINLOG或LOCAL选项使得不写入日志。

QUICK选项只修正索引树。

EXTENDED选项一行一行修正索引。

USE_FRM选项重新构建索引。