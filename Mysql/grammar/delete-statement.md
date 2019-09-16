# DELETE语句
###### delete-statement
> **DELETE** [**LOW_PRIORITY**] [**IGNORE**]  
**FROM** *table-reference*  
[**WHERE** *where-condition*]  
[**ORDER BY** *sort-specification*]  
[**LIMIT** *limit-condition*]  

> **DELETE** [**LOW_PRIORITY**] *table-reference-group*  
**FROM** *table-reference-group*  
[**WHERE** *where-condition*]  

> **DELETE** [**LOW_PRIORITY**] [**IGNORE**] **FROM** *table-reference-group*  
**USING** *table-reference-group*  
[**WHERE** *where-condition*]  

###### table-reference-group
> *table-reference* [**,** *table-reference*]\*

###### table-reference  
> [*database-name* **.**] *table-name* [[**AS**] *name*]  

###### sort-specification
> {*column-reference* | *scalar-expression* | *column-number*} [**ASC** | **DESC**]

###### column-reference
> [*table-name* **.**] *column-name*

###### limit-condition
> [*offset* **,**] *number*  
| *number* [**OFFSET** *offset*]

DELETE语句用于从一个表中删除数据行。

WHERE子句指定了删除的行。

ORDER BY子句和LIMIT子句限定删除的行数。

也可以删除多表中的数据行，DELETE子句指代删除的表，FROM子句和WHERE子句指出删除的行满足的条件。DELETE子句中出现的表必须在FROM子句中出现。

LOW_PRIORITY选项使得只有当没有其它事务读取时，才执行删除，否则等待。