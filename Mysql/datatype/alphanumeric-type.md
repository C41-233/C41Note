# 字符串数据类型

###### alphanumeric-type  
> [**NATIONAL**] { {**CHAR** | **CHARACTER**} [**VARYING**] | **VARCHAR** } **(** *length* **)**  
| {**NCHAR** [**VARYING**] | **TEXT**} **(** *length* **)**  
| **TINYTEXT**  
| **MEDIUMTEXT**  
| **LONG VARCHAR**  
| **LONGTEXT**  

字符串数据类型用于存储字符串，分为两类：定长和变长。定长的字符会用'\0'来补余。

无论定长还是变长字符串，都存在最大长度（字符数而非字节数）。

不同字符串数据类型及其最大长度：

<table>
	<tr><td rowspan="5">定长</td><th>CHAR</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>CHARACTER</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>NCHAR</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>NATIONAL CHAR</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>NATIONAL CHARACTER</th><td>2<sup>8</sup>-1</td></tr>
	<tr><td rowspan="13">变长</td></tr>
	<tr><th>TINYTEXT</th><td>2<sup>8</sup>-1</td></tr>
	<th>VARCHAR</th><td>2<sup>16</sup>-1</td>
	<tr><th>CHAR VARYING</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>CHARACTER VARYING</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>NCHAR VARYING</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>NATIONAL VARCHAR</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>NATIONAL CHAR VARYING</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>NATIONAL CHARACTER VARYING</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>TEXT</th><td>2<sup>16</sup>-1</td></tr>
	<tr><th>LONG VARCHAR</th><td>2<sup>24</sup>-1</td></tr>
	<tr><th>MEDIUMTEXT</th><td>2<sup>24</sup>-1</td></tr>
	<tr><th>LONGTEXT</th><td>2<sup>32</sup>-1</td></tr>
</table>

可以显示地为字符类型分配字符集，使用CHARACTER SET或CHAR SET或CHARSET后面直接指定字符集名。

定长字符串会删除尾部空格。