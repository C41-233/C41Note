# CASE表达式

###### case-expression  
> **CASE** *scalar-expression*   
**WHEN** *scalar-expression* **THEN** *scalar-expression*  
[**WHEN** *scalar-expression* **THEN** *scalar-expression*]*   
[**ELSE** *scalar-expression*]   
**END**  
\-\-\-  
**CASE**  
**WHEN** *condition* **THEN** *scalar-expression*   
[**WHEN** *condition* **THEN** *scalar-expression*]*   
[**ELSE** *scalar-expression*]   
**END**

case表达式用于充当选择分支，对于一个标量表达式，返回满足WHEN条件的THEN子句，如果没有匹配则返回ELSE子句。

case表达式本身是一个标量表达式，它的类型取决于then和else表达式的数据类型，如果不相容，则会返回出错消息。

WHEN定义有两种形式。

例如：

``` SQL
SELECT PLAYERNO, 
	CASE SEX 
		WHEN 'F' THEN 'FEMALE'
		ELSE 'MALE'
	END AS SEX, 
	NAME 
FROM PLAYERS 
WHERE JOINED>1980

SELECT PLAYERNO, 
	CASE 
		WHEN SEX='F' THEN 'FEMALE' 
		ELSE 'MALE' 
	END AS SEX, 
	NAME 
FROM PLAYERS 
WHERE JOINED>1980
```