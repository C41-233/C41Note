# sql_mode

> CHAR

SQL模式，用逗号分隔的常量列表。

MySQL 5.7的默认值为<code>ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER, NO_ENGINE_SUBSTITUTION</code>。

<table>
	<tr><th>ALLOW_INVALID_DATES</th><td>允许不存在的日期（但必须保证月份在1到12间，日期在1到31间）</td></tr>
	<tr><th>ANSI</th><td>使用标准SQL语法，等价于<code>REAL_AS_FLOAT, PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, <tr><th>ONLY_FULL_GROUP_BY</code></td></tr>
	<tr><th>ANSI_QUOTES</th><td>关键字作为列或表名时可以使用双引号</td></tr>
	<tr><th>DB2</th><td>等价于<code>PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS</code></td></tr>
	<tr><th>ERROR_FOR_DIVISION_BY_ZERO</th><td></td></tr>
	<tr><th>HIGN_NOT_PRECEDENCE</th><td>提高NOT运算符的优先级</td></tr>
	<tr><th>IGNORE_SPACE</th><td></td></tr>
	<tr><th>PIPES_AS_CONCAT</th><td>允许使用||连接字符串</td></tr>
	<tr><th>MAXDB</th><td>等价于<code>PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS, NO_AUTO_CREATE_USER</code></td></tr>
	<tr><th>MSSQL</th><td>等价于<code>PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS</code></td></tr>
	<tr><th>NO_AUTO_CREATE_USER</th><td></td></tr>
	<tr><th>NO_AUTO_VALUE_ON_ZERO</th><td>允许对AUTO_INCREMENT的列插入0（默认情况下插入0视为插入NULL）</td></tr>
	<tr><th>NO_BACKSLASH_ESCAPES</th><td>反斜线作为普通字符</td></tr>
	<tr><th>NO_DIR_IN_CREATE</th><td></td></tr>
	<tr><th>NO_ENGINE_SUBSTITUTION</th><td></td></tr>
	<tr><th>NO_FIELD_OPTIONS</th><td></td></tr>
	<tr><th>NO_KEY_OPTIONS</th><td></td></tr>
	<tr><th>NO_TABLE_OPTIONS</th><td></td></tr>
	<tr><th>NO_UNSIGNED_SUBTRACTION</th><td></td></tr>
	<tr><th>NO_ZERO_DATE</th><td>禁止日期'0000-00-00'</td></tr>
	<tr><th>NO_ZERO_IN_DATE</th><td>禁止月份或日期为0的日期</td></tr>
	<tr><th>ONLY_FULL_GROUP_BY</th><td>GROUP BY严格符合聚合规则</td></tr>
	<tr><th>ORACLE</th><td>等价于<code>PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS, NO_AUTO_CREATE_USER</code></td></tr>
	<tr><th>PAD_CHAR_TO_FULL_LENGTH</th><td></td></tr>
	<tr><th>PIPES_AS_CONCAT</th><td></td></tr>
	<tr><th>POSTGRESQL</th><td>等价于<code>PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS</code></td></tr>
	<tr><th>REAL_AS_FLOAT</th><td></td></tr>
	<tr><th>STRICT_ALL_TABLES</th><td></td></tr>
	<tr><th>STRICT_TRANS_TABLES</th><td>如果一个值非法从而无法插入事务表，则中断当前语句</td></tr>
	<tr><th>TRANDITIONAL</th><td>传统严格校验模式，等价于<code>STRICT_TRANS_TABLES, STRICT_ALL_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER, and NO_ENGINE_SUBSTITUTION.</td></tr>
</table>
