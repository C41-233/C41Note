# INSERT语句
###### insert-statement
> **INSERT** [**DELAYED** | **LOW_PRIORITY** | **HIGH_PRIORITY**]    
[**IGNORE**] [**INTO**] *[table-reference](#select-statement.md#table-reference)*  
*[insert-method](#insert-method)*  
[**ON DUPLICATE KEY UPDATE** *column-assign* [**,** *column-assign*]\*]  

###### insert-method
> [*[column-group](#column-group)*] VALUES *row-expression* [**,** *row-expression*]\*  
| [*[column-group](#column-group)*] *[select-statement](select-statement.md)*  
| **SET** *column-assign* [**,** *column-assign*]\*  

###### column-group
> **(** *column-name* [**,** *column-name*]\* **)**

###### row-expression
> **(** {*scalar-expression* | **DEFAULT**} [**,** {*scalar-expression* | **DEFAULT** }]* **)**

###### column-assign
> *column-name* **=** *scalar-expression*

INSERT语句用于向表中插入数据行。INTO可以省略，但SQL标准要求INTO。

INSERT语句出错后，会中断操作并保证恢复到执行前的状态。显示指定IGNORE，可以阻止出错消息的出现，但整条语句依然不会执行。

可以省略列名，此时要求值的顺序与默认列的顺序相同。可以在VALUES子句中提供多个行表达式来一次性插入多行。

插入的数据可以通过SELECT语句提供，但此时SELECT语句的结果必须与插入表相容。

ON DUPLICATE KEY声明使得当插入时导致主键或替代键重复，表中已存在的冲突行应当如何变更。

DELAYED选项使得该语句在事务等待列表中，应用程序总是收到语句正确处理的消息。MySQL决定何时真正执行该语句。

LOW_PRIORITY选项使得只有当没有其它事务读取时，才执行更新，否则等待。

HIGH_PRIORITY选项使得该操作对表独占。

