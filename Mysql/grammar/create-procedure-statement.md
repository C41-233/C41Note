# CREATE PROCEDURE语句

###### create-procedure-statement
> **CREATE**  
[**DEFINER** **=** {*user* | **CURRENT_USER**}]  
**PROCEDURE** *procedure-name*  
([*procedure-parameter* [**,** *procedure-parameter*]\*])  
*[procedure-characteristic](#procedure-characteristic)*\*  
*routine-body*

###### procedure-parameter
> [**IN** | **OUT** | **INOUT**] *parameter-name* *[data-type](../datatype)*

###### user
> <*username* [**@** *hostname*]>

CREATE PROCEDURE语句用于创建存储过程。

一个存储过程可以带有0个或多个参数，这些参数可以指定为输入参数（IN）、输出参数（OUT)、输入/输出参数（INOUT)。必须确保参数名与相关列名不同，否则列名覆盖了参数名。

存储过程体是一个BEGIN-END块，并且可以嵌套，但嵌套的内层BEGIN-END块必须以分号;结尾。BEGIN-END快可以带上标签，其他存储过程语句可以使用这些标签。END后面的标签不是必需的，但如果使用，必须与该层BEGIN前的标签一致。

在存储过程体中可以使用任何SQL语句（DLL、DCL和DML语句），也可以使用专门的过程式语句。

可以使用DEFINER选项显式指定存储过程的定义者，使用CURRENT_USER选项是默认的。

###### procedure-characteristic
| 特性 | 说明 |
|---|---|
| **COMMENT** *string-literal* | 用于为存储过程添加注释信息 |
| **READ SQL DATA** | 存储过程只是查询数据 |
| **MODIFIES SQL DATA** | 存储过程会添加、修改、删除数据 |
| **LANGUAGE SQL** | 表示过程体包含SQL语法，而非其他语言 |
| [**NOT**] **DETERMINISTIC** | 表示只要给定相同的参数，总是能执行相同的结果。NOT - DETERMINISTIC是默认的，表示结果是不确定的 |
| **CONTAINS SQL** | 存储过程体包含标准SQL语句 |
| **NO SQL** | 存储过程体仅包含过程式语句 |
| **SQL SECURITY** {**DEFINER** \| **INVOKE**} | 指定了调用存储过程的用户是否需要具有相关表的权限。默认情况下是DEFINER，即调用者不需要权限，但存储过程创建者需要有权限。如果指定INVOKER选项，则调用者必须具有权限 |