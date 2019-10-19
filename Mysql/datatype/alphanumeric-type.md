# 字符串数据类型

###### alphanumeric-type  
> [**NATIONAL**] {**CHAR** | **CHARACTER**} [**VARYING**] **(** *length* **)**  
| [**NATIONAL**] **VARCHAR** **(** *length* **)**  
| **NCHAR** [**VARYING**] **(** *length* **)**  
| **TEXT** **(** *length* **)**  
| **TINYTEXT**  
| **MEDIUMTEXT**  
| **LONG VARCHAR**  
| **LONGTEXT**  

字符串数据类型用于存储字符串，分为两类：定长和变长。定长的字符会用'\0'来补余。

`CHARACTER`和`CHAR`含义相同，`CHAR VARYING`和`VARCHAT`含义相同，`NATIONAL CHAR`和`NCHAR`含义相同。

`NATIONAL CHAR`指定字符串应当使用`utf8`字符集。

无论定长还是变长字符串，都存在最大长度（字符数而非字节数）。

不同字符串数据类型及其最大长度：

<table>
	<tr><td>定长</td><th>CHAR</th><td>2<sup>8</sup>-1</td></tr>
	<tr><td rowspan="7">变长</td></tr>
	<tr><th>TINYTEXT</th><td>2<sup>8</sup>-1</td></tr>
	<th>VARCHAR</th><td>2<sup>16</sup>-1</td>
	<tr><th>TEXT</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>LONG VARCHAR</th><td>2<sup>24</sup>-1</td></tr>
	<tr><th>MEDIUMTEXT</th><td>2<sup>24</sup>-1</td></tr>
	<tr><th>LONGTEXT</th><td>2<sup>32</sup>-1</td></tr>
</table>

定长字符串会删除尾部空白。