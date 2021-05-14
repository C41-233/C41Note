# INFORMATION_SCHEMA.COLUMNS

包含所有表的列的结构。

<table>
	<thead>
		<tr><th>列名</th><th>数据类型</th><th>描述</th></tr>
	</thead>
	<tbody>
		<tr><td>TABLE_CATALOG</td><td>CHAR</td><td></td></tr>
		<tr><td>TABLE_SCHEMA</td><td>CHAR</td><td>表所属的数据库名</td></tr>
		<tr><td>TABLE_NAME</td><td>CHAR</td><td>表名</td></tr>
		<tr><td>COLUMN_NAME</td><td>CHAR</td><td>列名</td></tr>
		<tr><td>ORDINAL_POSITION</td><td>INTEGER</td><td>列的顺序号码，与CREATE TABLE语句指定的顺序一致</td></tr>
		<tr><td>COLUMN_DEFAULT</td><td>CHAR</td><td>列默认值</td></tr>
		<tr><td>IS_NULLABLE</td><td>CHAR</td><td>是否允许空值，YES/NO</td></tr>
		<tr><td>DATA_TYPE</td><td>CHAR</td><td>列的数据类型</td></tr>
		<tr><td>CHARACTER_MAXIMUM_LENGTH</td><td>INTEGER</td><td>如果是字符类型，则指出最大长度</td></tr>
		<tr><td>CHARACTER_OCTET_LENGTH</td><td>INTEGER</td><td></td></tr>
		<tr><td>NUMERIC_PRECISION</td><td>INTEGER</td><td>如果是数值类型，则指出精度</td></tr>
		<tr><td>NUMERIC_SCALE</td><td>INTEGER</td><td>如果是数值类型，则指出刻度</td></tr>
		<tr><td>DATETIME_PRECISION</td><td>INTEGER</td><td>如果是日期时间类型，则指出精度</td></tr>
		<tr><td>CHARACTER_SET_NAME</td><td>CHAR</td><td>字符集</td></tr>
		<tr><td>COLLATION_NAME</td><td>CHAR</td><td>字符校对</td></tr>
		<tr><td>COLUMN_TYPE</td><td>CHAR</td><td></td></tr>
		<tr><td>COLUMN_KEY</td><td>CHAR</td><td></td></tr>
		<tr><td>EXTRA</td><td>CHAR</td><td></td></tr>
		<tr><td>PRIVILEGES</td><td>CHAR</td><td></td></tr>
		<tr><td>COLUMN_COMMENT</td><td>CHAR</td><td>列注释</td></tr>

	</tbody>
</table>
