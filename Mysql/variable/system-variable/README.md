# 系统变量

[MySQL 5.7 系统变量](https://dev.mysql.com/doc/refman/5.7/en/server-system-variable-reference.html)

系统变量不区分大小写。

通过[SHOW VARIABLES](../grammar/show-variables-statement.md)语句查询系统变量。

BOOL类型的变量可以设值`ON`/`OFF`、`TRUE`/`FALSE`、`1`/`0`。

特殊系统变量前面不需要使用`@@`。

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
		<th><a href="sql_mode.md">sql_mode</a></th>
		<td>SQL模式</td>
		<td>CHAR</td>
	</tr>
</table>

- ft_boolean_syntax 可以和布尔查找一起用的运算符
- group_concat_max_len GROUP_CONCAT结果的字符串长度
- lower_case_tables_name 表名和数据库名的大小写敏感性
- sql_select_limit SELECT语句结果最大行数
- sql_warnings 错误的INSERT语句是否应该返回一条警告
   
##### 事务
- autocommit 是否开启事务自动提交
- innodb_lock_wait_timeout 事务等待锁的最长时间
- tx_isolation 默认的事务隔离级别

##### 全文索引
- ft_max_word_len 可以包含在一个全文本索引中的单词最大长度
- ft_min_word_len 可以包含在一个全文本索引中的单词最小长度
- ft_stopword_file 包含停词的文件的名字

##### 日志
- log_error 

##### 其他
- concurrent_insert 并发插入模式
- event_scheduler 是否开启调度器
- foreign_key_checks 是否开启外键约束检查
- default_storage_engine 默认存储引擎
        
