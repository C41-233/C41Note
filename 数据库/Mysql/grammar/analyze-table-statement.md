# ANALYZE TABLE语句

###### analyze-table-statement
> **ANALYZE** [**NO_WRITE_TO_BINLOG** | **LOCAL**] **TABLE** *table-reference* [**,** *table-reference*]\*

###### table-reference
> [*database-name* **.**] *table-name*

ANALYZE TABLE语句用于更新索引列的可压缩性。

默认情况下，该语句的执行会记录到日志文件中，可以显式指定NO_WRITE_TO_BINLOG或LOCAL关闭这一功能。