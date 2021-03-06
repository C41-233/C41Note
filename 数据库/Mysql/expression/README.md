# 表达式 expression

###### expression  
> *scalar-expression* | *row-expression* | *table-expression*

表达式根据特定的运算规则，计算出一个值。一个表达式的类型指的是该表达式运算的结果类型。

## 标量表达式 scalar-expression

标量表达式的结果是一个普通的数据值，包括字面量、列、用户变量、系统变量、强制转换表达式、CASE表达式、NULL、标量函数、聚合函数、标量子查询。

标量表达式可以放在括号之间，这不会改变标量表达式的值，但会改变运算优先级。

例如：`SELECT (((PLAYERNO))) FROM PLAYERS`。

空值NULL是一个没有数据类型的标量表达式。

标量表达式之间通过运算符进行组合，构成复合标量表达式。

如果一个子查询只返回一个值，则它是一个标量表达式，否则是一个表表达式。

## 行表达式 row-expression
一个行表达式是标量集合组成的一行，包括用括号括起并用逗号分隔的多个标量表达式，以及行子查询。

行表达式中元素的数目叫做度（degree）。

例如：
``` SQL
(PLAYERNO, 'John', 100*50)
```

行表达式也可以参与运算，并且按照字典序进行比较。

例如：
``` SQL
(won, lost)=(2,3)
```
``` SQL
(2,4)>(1,3)
```

## 表表达式 table-expression

表表达式是0个、1个或多个行表达式集合。

例如：
``` SQL
((1,6,'1980-12-08'),(2,44,'1981-06-05'),(7,44,'1983-12-30'))
```