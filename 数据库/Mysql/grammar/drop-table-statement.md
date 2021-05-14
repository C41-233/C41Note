# DROP TABLE语句

###### drop-table-statement
> **DROP** [**TEMPORARY**] [**TABLE** | **TABLES**] [**IF EXISTS**] *table-reference* [**,** *table-reference*]\* [**CASCADE** | **RESTRICT**]

###### table-reference
> [*database-name* **.**] *table-name*

DROP TABLES语句用来删除表。与该表相关的完整性约束、索引、权限、视图都被删除。

指定TABLE来删除一张表，指定TABLES来删除多张表。