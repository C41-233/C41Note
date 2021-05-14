# ALTER DATABASE语句

###### alter-database-statement  
> **ALTER** {**DATABASE** | **SCHEMA**} [*database-name*] *[alter-specification](#alter-specification)*\*

###### alter-specification
> [**DEFAULT**] **CHARACTER** **SET** *charset-name*   
| [**DEFAULT**] **COLLATE** *collate-name*

ALTER DATABASE语句用于改变数据库的字符集和校对。

不指定数据库名称时，使用当前数据库。