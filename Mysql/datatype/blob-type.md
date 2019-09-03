# BLOB数据类型

> `blob-type`  
| {**BINARY** | **VARBINARY** | **BLOB**} [*length*]  
| **TINYBLOB**  
| **MEDIUMBLOB**  
| **LONG VARBINARY**  
| **LONGBLOB**  

BLOB数据类型用于存储字节数据，有两种：定长和变长。

无论是定长还是变长类型，都有存储最大长度。

不同BLOB数据类型及最大长度：

<table>
	<tr><td rowspan="3">定长</td><th>BINARY</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>TINYBLOB</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>BLOB</th><td>2<sup>16</sup>-1</td></tr>
	<tr><td rowspan="4">变长</td><th>VARBINARY</th><td>2<sup>8</sup>-1</td></tr>
	<tr><th>LONG VARBINARY</th><td>2<sup>24</sup>-1</td></tr>
	<tr><th>MEDIUMBLOB</th><td>2<sup>24</sup>-1</td></tr>
	<tr><th>LONGBLOB</th><td>2<sup>32</sup>-1</td></tr>
</table>
