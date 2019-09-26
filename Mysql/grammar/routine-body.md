# 过程式语句

###### routine-body
> [*label* **:**] **BEGIN** [*statement* **;**]\* **END** [*label*]

###### statement
> *sql-statement*  
| *routine-body*  
| *routine-statement*

###### statements
> {*statement* **;**}+

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

## 条件

### IF过程语句

###### if-statement
> **IF** *condition* **THEN** *statements*    
[**ELSEIF** *condition* **THEN** *statements*]  
[**ELSE** *statements*]  
**END IF** 

条件分支，由一个IF条件，可选的多个ELSEIF分条件，和一个可选的ELSE组成。

### CASE过程语句
###### case-statement
> **CASE** *scalar-expression*  
{ **WHEN** *scalar-expression* **THEN** *statements* }+  
[ **ELSE** *statements* ]  
**END CASE**  

> **CASE**  
{ **WHEN** *condition* **THEN** *statements* }+  
[ **ELSE** *statements* ]  
**END CASE**  

CASE语句用于代替复杂的IF-THEN-ELSE结构。

## 循环

### WHILE过程语句
###### while-statement
> [*label* **:**] **WHILE** *condition* **DO**  
*statements*  
**END WHILE** [*label*]  

WHILE语句用于循环，仅当条件为true时执行循环体。

### REPEAT过程语句
###### repeat-statement
> [*label* **:**] **REPEAT**  
*statements* 
**UNTIL** *condition*  
**END REPEAT** [*label*]   
 
REPEAT语句用于循环，首先执行一次循环体，直到条件为true时离开循环。

### LOOP过程语句
###### loop-statement
> [*label* **:**] **LOOP**  
*statements*  
**END LOOP** [*label*]  

LOOP语句用于无条件循环。除非使用LEAVE语句离开循环体，否则将一直循环下去。

### LEAVE过程语句
###### leave-statement
> **LEAVE** *label*

LEAVE语句用于离开指定标签的语句块。

### TERATE过程语句
###### iterate-statement
> **ITERATE** *label*

ITERATE语句用于立即开始指定标签的循环。

## 游标
### DECLARE CURSOR语句
###### declare-cursor-statement
> **DECLARE** *cursor-name* **CURSOR FOR** *select-statement*

游标用于返回SELECT语句返回的多行结果。

DECLARE CURSOR语句用于定义游标。

### OPEN CURSOR语句
###### open-cursor-statement
> **OPEN** *cursor-name*

游标用于返回SELECT语句返回的多行结果。

游标只有执行OPEN CURSOR语句后才被激活。

### FETCH CURSOR语句
###### fetch-cursor-statement
> **FETCH** *cursor-name* **INTO** *variable* [**,** *variable*]\*

游标用于返回SELECT语句返回的多行结果。

FETCH CURSOR语句用于获取结果集中的一行，初始时游标指向第一行之前，每次FETCH都将游标向后移动一行，并获取该行数据。如果已经到达了最后一行，再次使用FETCH CURSOR语句会抛出NOT FOUND异常。

### CLOSE CURSOR语句
###### close-cursor-statement
> **CLOSE** *cursor-name*

游标用于返回SELECT语句返回的多行结果。

CLOSE CURSOR语句关闭游标。

## 过程控制

### DECLARE HANDLER过程语句
###### declare-handler-statement
> **DECLARE** {**CONTINUE** | **EXIT** | **UNDO**} **HANDLER** **FOR** *condition-value* [**,** *condition-value*]\* *statement*

###### condition-value
> **SQLSTATE** [**VALUE**] *sqlstate-value*  
| **SQLWARNING**  
| **NOT FOUND**  
| **SQLEXCEPTION**  
| *mysql-error-code*  
| *condition-name*  

DECLARE HANDLER语句定义了异常处理程序。该语句指定了当SQL语句导致错误发生时如何处置。

SQLSTATE代码是SQL标准的错误代码，需要使用单引号括起代码数字。MySQL错误代码是MySQL定义的错误编号。

SQLWARNING指代了所有01开头的SQLSTATE代码。

NOT FOUND指代了所有02开头的SQLSTATE代码。

SQLEXCEPTION指代了所有不以01或02开头的SQLSTATE代码。

可以直接使用DECLARE CONDITION语句声明的出错代码。

### DECLARE CONDITION过程语句
###### declare-condition-statement
> **DECLARE** *condition-name* **CONDITION FOR**   
{ **SQLSTATE** [**VALUE**] *sqlstate-value* | *mysql-error-code* }

可以为SQLSTATE或MySQL出错代码一个名字，在后面的处理中可以使用这个名字。

### RETURN过程语句
###### return-statement
> **RETURN** *scalar-expression*

RETURN语句用于返回存储函数。RETURN语句可以包含复杂的标量表达式。