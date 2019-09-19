# OPTIMIZE TABLE语句

###### optimize-table-statement
> **OPTIMIZE** [**NO_WRITE_TO_BINLOG** | **LOCAL**] **TABLE** *table-reference* [**,** *table-reference*]\*

###### table-reference
[*database-name* **.**] *table-name*

不断对表进行的更新导致表内部结构产生碎片，这降低了SQL语句的执行速度。OPTIMIZE TABLE语句对表进行碎片清理。

NO_WRITE_TO_BINLOG或LOCAL选项用于关闭向日志文件写入。