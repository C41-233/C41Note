# INFORMATION_SCHEMA.TABLE_PRIVILEGES

包含所有数据库的权限。

<table>
	<thead>
		<tr><th>列名</th><th>数据类型</th><th>描述</th></tr>
	</thead>
	<tbody>
		<tr><td>GRANTEE</td><td>CHAR</td><td>授予权限的用户</td></tr>
		<tr><td>TABLE_CATALOG</td><td>CHAR</td><td></td></tr>
		<tr><td>TABLE_SCHEMA</td><td>CHAR</td><td>表所在数据库名</td></tr>
		<tr><td>TABLE_NAME</td><td>CHAR</td><td>表名</td></tr>
		<tr><td>PRIVILEGE_TYPE</td><td>CHAR</td><td>权限类型</td></tr>
		<tr><td>IS_GRANTABLE</td><td>CHAR</td><td>是否可以传递该权限，YES/NO</td></tr>
	</tbody>
</table>
