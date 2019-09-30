# INFORMATION_SCHEMA.INNODB_LOCKS

包含所有表的列的结构。

<table>
	<thead>
		<tr><th>列名</th><th>数据类型</th><th>描述</th></tr>
	</thead>
	<tbody>
		<tr><td>lock_id</td><td>varchar(81)</td><td></td></tr>
		<tr><td>lock_trx_id</td><td>varchar(18)</td><td></td></tr>
		<tr><td>lock_mode</td><td>varchar(32)</td><td></td></tr>
		<tr><td>lock_type</td><td>varchar(32)</td><td></td></tr>
		<tr><td>lock_table</td><td>varchar(1024)</td><td></td></tr>
		<tr><td>lock_index</td><td>varchar(1024)</td><td></td></tr>
		<tr><td>lock_space</td><td>bigint(21) unsigned</td><td></td></tr>
		<tr><td>lock_page</td><td>bigint(21) unsigned</td><td></td></tr>
		<tr><td>lock_rec</td><td>bigint(21) unsigned</td><td></td></tr>
		<tr><td>lock_data</td><td>varchar(8192)</td><td></td></tr>
	</tbody>
</table>
