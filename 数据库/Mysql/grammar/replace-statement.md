# REPLACE语句
###### replace-statement
> **REPLACE** [**DELAYED** | **LOW_PRIORITY** | **HIGH_PRIORITY**]  
[**IGNORE**] [**INTO**] *[table-reference](#table-reference)* *[insert-method](#insert-method.md)*  

###### insert-method  
> **(** *column-name* [**,** *column-name*]\* **)** **VALUES** *row-expression* [**,** *row-expression*]\*  
| **(** *column-name* [**,** *column-name*]\* **)** *[select-statement](select-statement.md)*  
| **SET** *[column-assign](#column-assign)* [**,** *[column-assign](#column-assign)*]\*  

###### row-expression
**(** *scalar-expression* [**,** *scalar-expression*]\* **)**

###### column-assign
*column-name* **=** *scalar-expression*

REPLACE语句同INSERT语句作用相同，用于向表中插入新行。区别在于，当插入的行与已有的行产生冲突（主键或候选键），则用新行取代旧行。