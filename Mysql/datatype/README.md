# 数据类型

> `data-type`  
*numeric-type* [**UNSIGNED** | **ZEROFILL** | **AUTO_INCREMENT** | **SERIAL DEFAULT VALUE**]*  
| *alphanumeric-type* [{**CHARACTER SET** | **CHAR SET** | **CHARSET**} *charset-name* | **COLLATE** *collate-name*]*  
| *temporal-type*  
| *blob-type*  
| *geometirc-type*  
| *complex-type*  
| *numeric-type*  
| *integer-type* | *decimal-type* | *float-type* | *bit-type*  
| *complex-type*  
| *enum-type*  
| *set-type*  

`UNSIGNED`z修饰符作用于数值类型，使得数值是无符号的，因此不允许产生负值，原先的符号位作为数据位扩充。

`ZEROFILL`修饰符影响数值的显示方式，如果一个数值的宽度小于允许的最大宽度，前面会被0填充。声明为ZEROFILL的类型总是隐式声明为`UNSIGNED`。

`AUTO_INCREMENT`修饰符指明，插入新行时如果该列指定了一个空值或没有指定值，则MySQL自动为其填充一个唯一的增量值。只有InnoDB和MyISAM引擎支持这个修饰符。 
默认情况下，顺序号码从1开始，并每次自动增加1。系统变量`AUTO_INCREMENT_OFFSET`指定了初值，`AUTO_INCREMENT_INCREMENT`表示增量。

`SERIAL DEFAULT VALUE`等价于`AUTO_INCREMENT NOT NULL UNIQUE`。