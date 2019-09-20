# CREATE INDEX语句

###### create-index-statement
> **CREATE** [**UNIQUE** | **FULLTEXT** | **SPATIAL**] **INDEX** *index-name* [**USING** {**BTREE** | **HASH**}] **ON** *table-reference* **(** *sort-specification* [**,** *sort-specification*]*)

###### table-reference
> [*database-name* **.**] *table-name*

###### sort-specification
> *column-name* [**ASC** | **DESC**]

CREATE INDEX语句用于为表创建索引。

索引类型：
- UNIQUE	（默认）唯一索引，如果表中相关列已经包含重复值，则拒绝创建索引
- FULLTEXT	全文索引，用于MyISAM引擎的MATCH运算
- SPATIAL	用于几何数据类型

索引算法：
- BTREE	B树索引
- HASH	哈希索引（MEMORY引擎默认）

可以指定索引列的默认排序方向。

索引和加快查询的速度，但索引本身占用存储空间。每次更新需要同步更新索引，因此更新语句会降低效率。