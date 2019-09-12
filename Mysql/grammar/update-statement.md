# UPDATE语句

###### update-statement
> **UPDATE** [**LOW_PRIORITY**] [**IGNORE**] *[table-reference](#table-reference)* [**,** *[table-reference](#table-reference)*]\*  
**SET** *[column-assign](#column-assign)* [**,** *[column-assign](#column-assign)*]\*  
[**WHERE** *where-condition*]  
[**ORDER BY** *[sort-specification](#sort-specification)* [**,** *[sort-specification](#sort-specification)*]\*]  
[**LIMIT** *[limit-condition](#limit-condition)*]  

###### table-reference
> [*database-name* **.**] *table-name* [[**AS**] *name*]

###### column-assign
> *column-name* **=** {*scalar-expression* | **DEFAULT**}

###### sort-specification
> {[*table-name* **.**] *column-name* | *scalar-expression* | *column-number* }   
[**ASC** | **DESC**]

###### limit-condition
> [*offset* **,**] *number*  
| *number* [**OFFSET** *offset*]

UPDATE语句用于改变表中的值。

WHERE子句指定了要更新的行，SET子句指定行中的值如何改变。

为了避免冲突（例如修改主键），使用ORDER BY子句指定更新的顺序。

LIMIT子句限定了修改的行数，通常与ORDER BY子句共同使用，语法与SELECT语句中相同。

LOW_PRIORITY选项使得只有当没有其它事务读取时，才执行更新，否则等待。