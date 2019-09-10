# DELIMITER语句

###### delimiter-statement  
> **DELIMITER** *character*

DELIMITER语句告诉SQL执行器，当遇到指定字符时才执行。默认情况下，遇到分号;就会执行，但在创建存储过程和存储函数时，要阻止语句的执行。

字符串不需要引号，该语句本身不需要分号结尾。