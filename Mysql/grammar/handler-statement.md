# HANDLER语句

### HANDLER OPEN语句
###### handler-open-statement
> **HANDLER** *[table-reference](select-statement#table-reference)* **OPEN** [**AS** *handler-name*]

首先必须打开一个句柄。MySQL内部注册了一个句柄，它不会存储在目录中。对于一个句柄，MySQL只是列出将要浏览的表、所用的索引和当前的行。用户创建的一个句柄对于其他也是可见的。打开的句柄使用完毕后必须关闭。

### HANDLER READ语句
###### handler-read-statement
> **HANDLER** *handler-name* **READ** *[read-specification](#read-specification)* [**WHERE** *where-condition*] [**LIMIT** *limit-condition*]

###### read-specification
> **FIRST**  
| **NEXT**  
| *index-name* {**FIRST** | **NEXT** | **PREV** | **LAST**}  
| *index-name* {**=** | **>** | **>=** | **<=** | **<**} **(** *scalar-expression* [**,** *scalar-expression*]\* **)**  

###### limit-condition
> [*offset* **,**] *number*  
| *number* [**OFFSET** *offset*]

HANDLER语句按照句柄一行一行访问数据，这不是一条符合SQL标准的语句。

可以显式指定索引顺序。WHERE子句和LIMIT子句与SELECT语句中相同。

FIRST移动到第一行，NEXT移动到下一行，PREV移动到前一行，LAST移动到最后一行。

### HANDLER CLOSE语句
###### handler-close-statement
> **HANDLER** *handler-name* **CLOSE**

句柄使用完毕后必须关闭。