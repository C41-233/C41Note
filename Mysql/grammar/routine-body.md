# 过程式语句

###### routine-body
> [*label* **:**] **BEGIN** [*statement* **;**]\* **END** [*label*]

###### statement
> *sql-statement*  
| *routine-body*  
| *routine-statement*

## 变量

### DECLARE VARIABLE过程语句

###### declare-variable-statement
> **DECLARE** *variable-name* [**,** *variable-name*]\* *data-type* [**DEFAULT** *scalar-expression*]

存储过程体中可以定义局部变量。局部变量必须被显式声明，从而确定它的数据类型和初始值。DEFAULT子句定义了局部变量的初始值，可以是任意标量表达式（包括标量子查询）。

DECALRE VARIABLE必须是一个BEGIN-END块的第一条语句。

一个局部变量的作用域从声明的位置开始，到该层END为止。内层BEGIN-END块可以使用外层定义的局部变量。

### SET过程语句
###### set-statement
> **SET** *variable-assign* [**,** *variable-assign*]\*

######variable-assign
> *variable-name* {**=** | **:=**} *scalar-expression*

用于存储过程局部变量的赋值语句，不需要在变量名前使用@。