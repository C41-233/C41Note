# INFORMATION_SCHEMA.STATISTICS

包含所有表的索引的结构。

<table>
	<thead>
		<tr><th>列名</th><th>数据类型</th><th>描述</th></tr>
	</thead>
	<tbody>
		<tr><th>列名</th><th>数据类型</th><th>描述</th></tr>
		<tr><td>TABLE_CATALOG</td><td>CHAR</td><td></td></tr>
		<tr><td>TABLE_SCHEMA</td><td>CHAR</td><td>表所在的数据库名</td></tr>
		<tr><td>TABLE_NAME</td><td>CHAR</td><td>索引所在表名</td></tr>
		<tr><td>NON_UNIQUE</td><td>INTEGER</td><td></td></tr>
		<tr><td>INDEX_SCHEMA</td><td>CHAR</td><td>索引所在的数据库名</td></tr>
		<tr><td>INDEX_NAME</td><td>CHAR</td><td>索引名</td></tr>
		<tr><td>SEQ_IN_INDEX</td><td>INTEGER</td><td></td></tr>
		<tr><td>COLUMN_NAME</td><td>CHAR</td><td></td></tr>
		<tr><td>COLLATION</td><td>CHAR</td><td></td></tr>
		<tr><td>CARDINALITY</td><td>INTEGER</td><td></td></tr>
		<tr><td>SUB_PART</td><td>INTEGER</td><td></td></tr>
		<tr><td>PACKED</td><td>CHAR</td><td></td></tr>
		<tr><td>NULLABLE</td><td>CHAR</td><td></td></tr>
		<tr><td>INDEX_TYPE</td><td>CHAR</td><td>索引类型，BTREE/HASH</td></tr>
		<tr><td>COMMENT</td><td>CHAR</td><td></td></tr>
		<tr><td>INDEX_COMMENT</td><td>CHAR</td><td></td></tr>
	</tbody>
</table>
