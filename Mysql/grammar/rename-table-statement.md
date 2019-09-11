# RENAME TABLE语句

###### rename-table-statement
> **RENAME** [**TABLE** | **TABLES**] *table-change* [**,** *table-change*]\*

###### table-change
> *table-name* **TO** *table-name*

RENAME TABLES语句用来修改表名。所有该表相关的名字都改变，赋予的权限没有变化。使用该表的视图仍然可以使用。

指定TABLE来修改一张表，指定TABLES来修改多张表。