# EXPLAIN语句

> `explain-statement`  
**EXPLAIN** *sql-statement*

显示执行计划。

<table>
	<thead>
		<tr>
			<th>列</th>
			<th>含义</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>id</th>
			<td>查询顺序</td>
		</tr>
		<tr>
			<th>select_type</th>
			<td>查询类型
			<br/>SIMPLE：简单表，不使用表连接或子查询
			<br/>PRIMARY：主查询
			<br/>UNION：UNION查询
			<br/>SUBQUERY：子查询</td>
		</tr>
		<tr>
			<th>table</th>
			<td>输出结果集的表</td>
		</tr>
		<tr>
			<th>type</th>
			<td>表的连接类型
			<br/>SYSTEM：表中仅有一行的常量表
			<br/>CONST：单表中最多有一个匹配行，查询主键或唯一索引
			<br/>EQ_REF：在此表中只查询一条记录，查询主键或唯一索引
			<br/>REF：在此表中只查询一条记录，查询索引
			<br/>REF_OR_NULL：在此表中只查询一条记录，条件中包含NULL
			<br/>INDEX_MERGE：索引合并优化
			<br/>UNIQUE_SUBQUERY：IN子查询中查询主键
			<br/>INDEX_SUBQUERY：IN子查询中查询非唯一索引
			<br/>RANGE：单表中的范围查询
			<br/>INDEX：查询索引
			<br/>ALL：全表扫描</td>
		</tr>
		<tr>
			<th>possible_keys</th>
			<td>可能使用的索引</td>
		</tr>
		<tr>
			<th>key</th>
			<td>实际使用的索引</td>
		</tr>
		<tr>
			<th>key_len</th>
			<td>索引字段长度</td>
		</tr>
		<tr>
			<th>ref</th>
			<td>列或常数与索引一起使用</td>
		</tr>
		<tr>
			<th>rows</th>
			<td>扫描行数</td>
		</tr>
		<tr>
			<th>extra</th>
			<td>DISTINCT：当找到了匹配行时就不再搜索
			<br/>NOT EXISTS：当找到匹配LEFT JOIN的行时就不再搜索
			<br/>USING FILESORT：需要额外的步骤排序全部行
			<br/>USING INDEX：只使用索引，没有读取实际数据
			<br/>USING TEMPORARY：使用临时表存储结果
			<br/>USING WHERE：使用了WHERE子句
			<br/></td>
		</tr>
	</tbody>
</table>
