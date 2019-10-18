# CREATE DATABASE语句

###### create-database-statement  
> **CREATE DATABASE** [**IF NOT EXISTS**] *database-name* [[**DEFAULT**] {**CHARACTER SET** *charset-name* | **COLLATE** *collate-name*}]*

CREATE DATABASE语句用于创建数据库，所有的表都属于某个数据库。

`IF NOT EXISTS`选项使得如果存在同名数据库，不会返回出错消息。

可以为数据库指定默认字符集和校对，数据库的字符集和校对用于`CREATE TABLE`、`LOAD DATA`等在没有指定字符集的场合。