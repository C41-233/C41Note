# literal 字面直接量

###### literal  
> *numeric-literal* | *string-literal* | *temporal-literal* | *boolean-literal* | *hexadecimal-literal*

###### digit  
> **0** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9**

字面直接量是可以直接写出的、固定不变的值。每个直接量都有一个特定的数据类型，但不是所有数据类型都有直接量。

- 数值型 numeric-literal
    - 整型 integer-literal
    - 小数 decimal-literal
    - 浮点 float-literal
    - 位 bit-literal
- 十六进制 hexadecimal-literal
- 布尔 boolean-literal
- 字符串 string-literal
- 日期时间型 temporal-literal
    - 日期 date-literal
    - 时间 time-literal
    = 期时 datetime-literal
    - 时间戳 timestamp-literal
    - 年 year-literal

## 数值型直接量

###### numeric-literal  
> *integer-literal* | *decimal-literal* | *float-literal* | *bit-literal*

### 整型直接量

###### integer-literal  
> [**+** | **-**]*digit*+

### 小数直接量

###### decimal-literal  
> [**+** | **-**]*digit*+[**.** *digit*+]   
| [**+** | **-**]*digit*+**.**  
| [**+** | **-**]**.** *digit*+  

小数直接量时带有或不带有小数点的数值，前面可以有一个正号或负号。

数字位数的总数叫做精度，小数点后的位数叫做刻度。

例如：`49`、`18.47`、`-3400`、`18.`、`-.47`。

### 浮点直接量

###### float-literal  
> *[decimal-literal](#小数直接量)* {**E** | **e**}  *[integer-literal](#整型直接量)*

浮点直接量表示单精度浮点数，小数直接量后跟一个指数。

例如：`-34E2`、`0.16E4`、`4E-3`、`2e-2`

### 位直接量
###### bit-literal  
> {**B** | **b**}**'** *bit-digit*+ **'**

###### bit-digit  
> **0** | **1**

位直接量写成字符形式，最多可以有64位。

例如：`B'1001'`、`b'11111'`

## 十六进制直接量

###### hexadecimal-literal  
> {**X** | **x**}**'** *hexadecimal-digit*+ **'**  
| **0x***hexadecimal-digit*+

###### hexadecimal-digit  
> **0** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **A** | **B** | **C** | **D** | **E** | **F** | **a** | **b** | **c** | **d** | **e** | **f**

十六进制直接量直接表示二进制数值。

例如：`x'41'`、`X'3B'`、`0x41`

## 布尔直接量

###### boolean-literal  
> **TRUE** | **FALSE**

TRUE值为1，FALSE值为0。

## 字符串直接量

###### string-literal  
> '*character* *'  
| "*character* *"

字符串直接量由0个或多个字符组成的序列，用单引号或双引号括起来。

在单引号字符串中不需要转义双引号，在双引号字符串中不需要转义单引号。

在单引号字符串中的单引号需要使用连续两个单引号来表示，在双引号字符串中的双引号需要使用连续两个双引号来表示。

特殊字符需要转义。

## 日期时间型直接量

###### temporal-literal  
> *date-literal* | *time-literal* | *datetime-literal* | *timestamp-literal* | *year-literal*

### 日期直接量

###### date-literal  
> **'** *date-literal-body* **'**  
| **"** *date-literal-body* **"**  
| *year-month-day*

###### date-literal-body  
> *year* *splitter* *month* *splitter* *day*

###### splitter  
> **-** | **/** | **@** | **%**

日期直接量由年、月、日组成，用来表示一个太阳历。

当年份指定为2个数字时，若在00-69间，增加2000；否则增加1900。

写作字符直接量时，用引号括起来，年月日间用`-`、`/`、`@`或`%`分隔。

例如：`'1980-12-08'` `'1991-6-19'` `'1991@6@19'`

写作整型直接量时，最后两个数字解释为日期，倒数第三第四个数字解释为月份，前面其余数字解释为年份。

例如：`19801208` `19910619` `991111`

日期直接量的范围从1000年1月1日到9999年12月31日。

日期`'0000-00-00'`以及月份或日期为0的日期是允许的，表示未知的日期。例如：`'2006-00-00'`、`'2006-11-00'`。

不正确的直接量在处理过程中转换为NULL，而在INSERT语句中转换为'0000-00-00'。

可以通过`SQL_MODE`变量设置零日期相关参数。
- `NO_ZERO_DATE`可以禁止`'0000-00-00'`
- `NO_ZERO_IN_DATE`可以禁止月份或日期为0的日期-
- `ALLOW_INVALID_DATES`可以允许不存在的日期（但必须保证月份在1到12间，日期在1到31间）。


### 时间直接量

###### time-literal  
> **'** *time-literal-body* **'**  
| **"** *time-literal-body* **"**  
| {*second*[**.** *integer*]  
| {*minute-second*[**.** *integer*]  
| {*hour-minute-second*[**.** *integer*]  

###### time-literal-body  
> [*day*] *hour* *splitter* *minute* [*splitter* *second* [**.** *microsecond*]]  
| [*hour* *splitter* *minute* *splitter*] *second*  
| [*day*] *hour*  

###### splitter  
> **:** | **-** | **/** | **@** | **%**

时间直接量由时、分、秒、微妙组成。

写作字符串直接量时，用引号括起来，时、分、秒间用`:`、`-`、`/`、`@`、`%`分隔，微妙前加`.`。

当只包含一个部分时，表示秒。例如：`"23:59:59"`、`'14:00'`、`"14"`、`'00:00:00.000013'`

写作整型直接量时，最后两个数字解释为秒，倒数第三第四个数字解释为分，前面其余数字解释为时。

例如：
- `235959` 23:59:59 
- `1400` 00:14:00 
- `14` 00:00:14 
- `000000.000013` 00:00:00.000013

可以在小时前指定天数，此時必須用字符串直接量。

例如：
- `"10 10:00:00"` 10天又10小时 
- `'10 10'` 10天又10小时

时间直接量的有效范围是-838:59:59到838:59:59。

INSERT语句忽略时间直接量的微秒部分。

### 日期时间直接量

###### datetime-literal  
> **'** *datetime-literal-body* **'**  
| **"** *datetime-literal-body* **"**  
| *year-month-day-hour-minute-second*

###### datetime-literal-body  
> *year-month-day*  
| *year-month-day* *hour*  
| *year-month-day* *hour* **:** *minute*  
| *year-month-day* *hour* **:** *minute* **:** *second*  
| *year-month-day* *hour* **:** *minute* **:** *second* **.** *microsecond*

合并日期直接量与时间直接量构成日期时间直接量。

例如：`'1980-12-08 23:59:59.999999'`

年份的有效范围为1000到9999之间。

### 时间戳直接量
###### timestamp-literal 
> **'** *timestamp-literal-body* **'**  
| **"** *timestamp-literal-body* **"**  
| *year-month-day-hour-minute-second*

###### timestamp-literal-body  
> *year-month-day*  
| *year-month-day* *hour*  
| *year-month-day* *hour* **:** *minute*  
| *year-month-day* *hour* **:** *minute* **:** *second*  
| *year-month-day* *hour* **:** *minute* **:** *second* **.** *microsecond*

合并日期直接量与时间直接量构成时间戳直接量。

例如：`'1980-12-08 23:59:59.999999'`

年份的有效范围为1970至2037之间。

时间戳直接量支持时区，存储时被转换为UTC时间。

### 年直接量
###### year-literal  
> *digit*+  
| **'** *digit*+ **'**    
| **"** *digit*+ **"**  

年直接量用于表示年份，值必须在1901至2155之间。