# CREATE FUNCTION语句

###### create-function-statement
> **CREATE**   
[ **DEFINER** **=** {*user* | **CURRENT_USER**} ]  
**FUNCTION** *function-name*  
**(** [*function-parameter* [**,** *function-parameter*]\*] **)**  
**RETURNS** *[data-type](../datatype)*  
*[function-characteristic](create-procedure-statement.md#function-characteristic)*\*  
*routine-body*  

###### user
> <*username* [**@** *hostname*]>

###### function-parameter
> *parameter-name* *[data-type](../datatype)*

CREATE FUNCTION语句用于创建存储函数。

不能使用CALL语句调用一个存储函数，存储函数应当使用在标量函数相同的地方。但是可以在存储函数中使用CALL语句。

每个存储函数都必须包含至少一条RETURN语句，用于返回。

存储函数与存储过程不能同名。