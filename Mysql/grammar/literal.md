# literal 字面直接量

> `literal`  
*numeric-literal* | *alphanumeric-literal* | *temporal-literal* | *boolean-literal* | *hexadecimal-literal*

> `numeric-literal`  
*integer-literal* | *decimal-literal* | *float-literal* | *bit-literal*

> `temporal-literal`  
*date-literal* | *time-literal* | *datetime-literal* | *timestamp-literal* | *year-literal*

> `digit`  
**0** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9**

字面直接量是可以直接写出的、固定不变的值。每个直接量都有一个特定的数据类型，但不是所有数据类型都有直接量。

- 数值型 numeric-literal
    - 整型 integer-literal
    - 小数 decimal-literal
    - 浮点 float-literal
    - 位 bit-literal
- 十六进制 hexadecimal-literal
- 布尔 boolean-literal
- 字符串 alphanumeric-literal
- 日期时间型 temporal-literal
    - 日期 date-literal
    - 时间 time-literal
    = 期时 datetime-literal
    - 时间戳 timestamp-literal
    - 年 year-literal

### 整型直接量

> `integer-literal`  
[**+** | **-**]*digit*+

### 小数直接量

> `decimal-literal`  
[**+** | **-**]*digit*+[**.** *digit*+]   
| [**+** | **-**]*digit*+**.**  
| [**+** | **-**]**.** *digit*+  

小数直接量时带有或不带有小数点的数值，前面可以有一个正号或负号。

数字位数的总数叫做精度，小数点后的位数叫做刻度。

例如：`49` `18.47` `-3400` `18.` `-.47`。

### 浮点直接量

> `float-literal`  
*[decimal-literal](#小数直接量)* {**E** | **e**}  *[integer-literal](整型直接量)*

浮点直接量表示单精度浮点数，小数直接量后跟一个指数。

例如：`-34E2` `0.16E4` `4E-3` `2e-2`

