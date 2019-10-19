# ALTER TABLE语句

###### alter-table-statement
> **ALTER** [**IGNORE**] **TABLE** *[table-reference](#table-reference)*  
{*[table-change](#table-change)* | *[column-change](#column-change)* | *[constraint-change](#constraint-change)* | *[index-change](#index-change)*}

###### table-reference
> [*database-name* **.**] *table-name*

ALTER TABLE语句用于更改表的结构。

IGNORE选项使得出错时不会显示错误信息。

更改表结构要求当前用户对表具有`ALTER`、`CREATE`、`INSERT`权限。

### 表变更
###### table-change
> **RENAME** [**TO** | **AS**] *table-name*  
*[table-option](create-table-statement#table-option)*\*  
**CONVERT TO CHARACTER SET** {*charset-name* | **DEFAULT**} [**COLLATE** *collate-name*]  
**ORDER BY** *[sort-specification](#sort-specification.md)* [**,** *[sort-specification](#sort-specification.md)*]\*  
{**ENABLE** | **DISABLE**} **KEYS**  

###### sort-specification  
> *column-name* [**ASC** | **DESC**]  

RENAME TO或RENAME AS可以更改表名，与RENAME TABLE语句效果一样。

CONVERT子句用于改变表的字符集和校对，但不会对已有的列产生影响。

ORDER BY子句用于为表显式指定排序方法。

ENABLE KEYS和DISABLE KEYS子句只用于MyISAM引擎，分别用于开启和关闭索引自动更新。

### 列变更
###### column-change
> **ADD** [**COLUMN**] *[column-definition](#column-definition.md)* [**FIRST** | **AFTER** *column-name*]  
| **ADD** [**COLUMN**] *[table-schema](create-table-statement.md#table-schema)*  
| **DROP** [**COLUMN**] *column-name* [**RESTRICT** | **CASCADE**]  
| **CHANGE** [**COLUMN**] *column-name* *column-definition* [**FIRST** | **AFTER** *column-name*]  
| **MODIFY** [**COLUMN**] *[column-definition](#column-definition.md)* [**FIRST** | **AFTER** *column-name*]  
| **ALTER** [**COLUMN**] {**SET DEFAULT** *value* | **DROP DEFAULT**}

###### column-definition  
> *column-name* *data-type* [[**NOT**] **NULL**]  
[**PRIMARY KEY** | **UNIQUE** [**KEY**] | **CHECK** *check-condition*]  
[**AUTO_INCREMENT**] [**DEFAULT** *value* | **COMMENT** *string-literal*]*  

ADD COLUMN子句用于添加一列，并填充空值（如果无法填充空值，则填充零值）。默认成为最后一列，可以显式指定添加位置。

CHANGE COLUMN和MODIFY子句用于改变一列的结构。

ALTER COLUMN子句用于修改列的默认值声明。

### 完整性约束变更
###### constraint-change
> **ADD** *[table-constraint](#table-constraint)*  
| **DROP** {**PRIMARY KEY** | **FOREIGN KEY** *index-name* | **CHECK** *check-condition* | **CONSTRAINT** *constraint-name*}

###### table-constraint
> [**CONSTRAINT** [*constraint-name*]]   
{*[primary-key](create-table-statement#primary-key)* | *[alternate-key](create-table-statement#alternate-key)* | *[foreign-key](create-table-statement)* | **CHECK** *check-condition*}

通过ADD和DROP子句可以添加和删除完整性约束。

### 索引变更
###### index-change
> **ADD** [**UNIQUE** | **FULLTEXT** | **SPATIAL**] **INDEX** *index-name*   
[**USING** {**BTREE** | **HASH**}] (*[sort-specification](#sort-specification)* [**,** *[sort-specification](#sort-specification)*]\*)  
**DROP** {**INDEX** | **KEY**} *index-name*  

###### sort-specification  
> *column-name* [**ASC** | **DESC**]  

ADD INDEX子句用于为表添加索引。

DROP INDEX子句用于为表删除索引。