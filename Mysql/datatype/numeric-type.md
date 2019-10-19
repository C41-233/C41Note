# 数值类型

###### numeric-type   
> { *[integer-type](#integer-type)* | *[decimal-type](#decimal-type)* | *[float-type](#float-type)* | *[bit-type](#bit-type)* }  
[**SIGNED** | **UNSIGNED** | **ZEROFILL** | **AUTO_INCREMENT** | **SERIAL DEFAULT VALUE**]* 

## 整型数据类型

###### integer-type  
> **TINYINT** [ **(** width **)** ]  
| **INT1** [ **(** width **)** ]  
| **SMALLINT** [ **(** width **)** ]  
| **INT2** [ **(** width **)** ]  
| **MEDIUMINT** [ **(** width **)** ]  
| **INT3** [ **(** width **)** ]  
| **MIDDLEINT** [ **(** width **)** ]  
| **INT** [ **(** width **)** ]  
| **INTEGER** [ **(** width **)** ]  
| **INT4** [ **(** width **)** ]  
| **BIGINT** [ **(** width **)** ]  
| **INT8** [ **(** width **)** ]  
| **BOOLEAN**  

整数数据类型可以存储完整的整数，它们之间的区别在于可以容纳的范围。

每个整数类型后可以显示指定位宽，这个位宽指的是显示时占用的字符位，而不是存储位。位宽最大值为255。

| 类型 | 存储位 |
|---|---|
| TINYINT | 8位 |
| INT1 | 8位 |
| SMALLINT | 16位 |
| INT2 | 16位 |
| MEDIUMINT | 24位 |
| INT3 | 24位 |
| MIDDLEINT | 24位 |
| INT | 32位 |
| INTEGER | 32位 |
| INT4 | 32位 | |
| BIGINT | 64位 |
| INT8 | 64位 |

BOOLEAN等价于TINYINT(1)。

## 小数数据类型

###### decimal-type  
> {**DEC** | **DECIMAL** | **NUMERIC** | **FIXED**} [ **(** *precision* [**,** *scale*] **)** ]

小数数据类型之间是同义词。后面可以显示指定精度和刻度。若没有指定刻度，默认为0。若都没有指定，则精度为10，刻度为0。精度必须在1到30之间。

可以显式指定精度（precision）和刻度（scale）。精度指位数，刻度指小数位数。例如，`DECIMAL(5,2)`的范围为-999.99至999.99。

若没有指定刻度，默认为0。若精度和刻度都没有指定，则精度为10，刻度为0。精度必须在1到30之间。

## 浮点数据类型

###### float-type  
> **FLOAT** [ **(** *length* **)** | **(** *width* **,** *scale* **)** ]  
| **FLOAT4** [ **(** *width* **,** *scale* **)** ]  
| **REAL** [ **(** *width* **,** *scale* **)** ]  
| **DOUBLE** [**PRECISION**] [ **(** *width* **,** *scale* **)** ]

浮点数据类型分为单精度浮点数（32位）和双精度浮点数（64位），通过指定长度值来指定类型：长度在0到24之间是单精度浮点数，长度在25到53之间是双精度浮点数。

FLOAT如果后面指定了两个参数，则第一个是宽度，第二个是刻度，并始终是单精度浮点数。宽度必须在1到255之间，刻度必须在0到30之间。

FLOAT4和REAL指定了单精度浮点数，DOUBLE和DOUBLE PRECISION指定了双精度浮点数。

浮点数的存储是平台相关的。

## 位数据类型

###### bit-type  
> **BIT** [ **(** *length* **)** ]

位数据类型用来存储基于位的值。如果没有指定长度，则默认为1。位最大长度为64。

位字面常量以`b'value'`的形式表示，例如`b'111001'`。为位数据类型赋值时宽度不足，则在左侧补0。