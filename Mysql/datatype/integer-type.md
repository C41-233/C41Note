# 整型数据类型

> `integer-type`  
**TINYINT** [ **(**width**)** ]  
| **INT1** [**(**width**)**]  
| **SMALLINT** [(width)]  
| **INT2** [(width)]  
| **MEDIUMINT** [(width)]  
| **INT3** [(width)]  
| **MIDDLEINT** [(width)]  
| **INT** [(width)]  
| **INTEGER** [(width)]  
| **INT4** [(width)]  
| **BIGINT** [(width)]  
| **INT8** [(width)]  
| **BOOLEAN**  

整数数据类型可以存储完整的整数，它们之间的区别在于可以容纳的范围。

每个整数类型后可以显示指定位宽，这个位宽指的是显示时占用的字符位，而不是存储位。

不同整数数据类型范围如下：

TINYINT	8位
INT1	8位
SMALLINT	16位
INT2	16位
MEDIUMINT	24位
INT3	24位
MIDDLEINT	24位
INT	32位
INTEGER	32位
INT4	32位
BIGINT	64位
INT8	64位
BOOLEAN等价于TINYINT(1)。