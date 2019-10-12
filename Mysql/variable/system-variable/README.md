# 系统变量

[MySQL 5.7 系统变量](https://dev.mysql.com/doc/refman/5.7/en/server-system-variable-reference.html)

系统变量不区分大小写。

通过[SHOW VARIABLES](../grammar/show-variables-statement.md)语句查询系统变量。

BOOL类型的变量可以设值`ON`/`OFF`、`TRUE`/`FALSE`、`1`/`0`。

通过`SELECT @@<variable>`来查看系统变量的值。特殊系统变量前面不需要使用`@@`。

---

##### 特殊
<table>
	<tr>
		<th>current_date</th>
		<td>当前系统日期（只读）</td>
		<td>DATE</td>
	</tr>
	<tr>
		<th>current_time</th>
		<td>当前系统时间（只读）</td>
		<td>TIME</td>
	</tr>
	<tr>
		<th>current_timestamp</th>
		<td>当前系统时间戳（只读）</td>
		<td>TIMESTAMP</td>
	</tr>
	<tr>
		<th>current_user</th>
		<td>当前用户（只读）</td>
		<td>CHAR</td>
	</tr>
</table>

##### 配置
<table>
	<tr>
		<th>datadir</th>
		<td>数据目录（只读）</td>
		<td>CHAR</td>
	</tr>
	<tr>
		<th>time_zone</th>
		<td>时区</td>
		<td>CHAR</td>
	</tr>
	<tr>
		<th>version</th>
		<td>MySQL的版本号（只读）</td>
		<td>CHAR</td>
	</tr>
</table>

##### 字符集
<table>
	<tr>
		<th>character_set_client</th>
		<td>客户端使用的字符集，默认为<code>utf8</code></td>
		<td>CHAR</td>
	</tr>
	<tr>
		<th>character_set_database</th>
		<td>数据库默认的字符集，默认为<code>latin1</code></td>
		<td>CHAR</td>
	</tr>
</table>

##### SQL
<table>
	<tr>
		<th>auto_increment_offset</th>
		<td>自增字段的默认起始值，默认为1</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>auto_increment_increment</th>
		<td>自增字段的默认增量值，默认为1</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>ft_boolean_syntax</th>
		<td>可以和布尔查找一起用的运算符</td>
		<td>CHAR</td>
	</tr>
	<tr>
		<th>group_concat_max_len</th>
		<td>GROUP_CONCAT结果的字符串长度</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>lower_case_tables_name</th>
		<td>表名和数据库名的大小写敏感性
            <li>0：大小写敏感</li>
            <li>1：大小写敏感，保存时全部转换为小写</li> 
            <li>2：大小写不敏感，保存时不转换</li>
		</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th><a href="sql_mode.md">sql_mode</a></th>
		<td>SQL模式</td>
		<td>SET</td>
	</tr>
	<tr>
		<th>sql_select_limit</th>
		<td>SELECT语句结果最大行数</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>sql_warnings</th>
		<td>错误的INSERT语句是否应该返回一条警告，默认为FALSE</td>
		<td>BOOL</td>
	</tr>
</table>

##### 事务
<table>
	<tr>
		<th><a href="autocommit.md">autocommit</a></th>
		<td>是否开启事务自动提交</td>
		<td>BOOL</td>
	</tr>
	<tr>
		<th>tx_isolation</th>
		<td>默认的事务隔离级别</td>
		<td>CHAR</td>
	</tr>
</table>

##### InnoDB
<table>
	<tr>
		<th>innodb_lock_wait_timeout</th>
		<td>事务等待锁的最长时间（单位为秒）</td>
		<td>INTEGER</td>
	</tr>
</table>

##### 全文索引
<table>
	<tr>
		<th>ft_max_word_len</th>
		<td>可以包含在一个全文本索引中的单词最大长度，默认为84</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>ft_min_word_len</th>
		<td>可以包含在一个全文本索引中的单词最小长度，默认为4</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>ft_stopword_file</th>
		<td>包含停词的文件名</td>
		<td>CHAR</td>
	</tr>
</table>

##### 日志
<table>
	<tr>
		<th>general_log</th>
		<td>是否开启通用查询日志，默认为0</td>
		<td>BOOL</td>
	</tr>
	<tr>
		<th>general_log_file</th>
		<td>通用查询日志输出文件</td>
		<td>CHAR</td>
	</tr>
	<tr>
		<th>log_bin</th>
		<td>是否开启binlog（只读）</td>
		<td>BOOL</td>
	</tr>
	<tr>
		<th>log_error</th>
		<td>错误日志的输出文件（只读）
			<br/>输出到控制台时值为<code>stderr</code>
		</td>
		<td>CHAR</td>
	</tr>
	<tr>
		<th>log_output</th>
		<td>通用查询日志与慢查询日志的输出目标
			<li>TABLE：输出到表
			<li>FILE：输出到文件</li>
			<li>NONE：不输出</li>
		</td>
		<td>SET</td>
	</tr>
	<tr>
		<th>log_timestamps</th>
		<td>日志时间戳使用的时区（5.7.2+）
			<li>UTC：默认值</li>
			<li>SYSTEM：本地时区</li>
		</td>
		<td>ENUM</td>
	</tr>
</table>

##### 其他
<table>
    <tr>
		<th>concurrent_insert</th>
		<td>并发插入模式
		    <li>0：不允许并发</li>
            <li>1：当表中无碎片时，在一个进程读表时，另一个进程在尾部并发插入  </li>
            <li>2：无论表中是否有碎片，，在一个进程读表时，另一个进程都在尾部并发插入</li>
		</td>
		<td>INTEGER</td>
	</tr>
	<tr>
		<th>event_scheduler</th>
		<td>是否开启调度器</td>
		<td>BOOL</td>
	</tr>
	<tr>
		<th>foreign_key_checks</th>
		<td>是否开启外键约束检查</td>
		<td>BOOL</td>
	</tr>
	<tr>
		<th>default_storage_engine</th>
		<td>默认存储引擎，默认值为<code>InnoDB</code></td>
		<td>CHAR</td>
	</tr>
</table>
