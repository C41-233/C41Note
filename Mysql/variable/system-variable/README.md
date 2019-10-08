# 系统变量

[MySQL 5.7 系统变量](https://dev.mysql.com/doc/refman/5.7/en/server-system-variable-reference.html)

系统变量不区分大小写。

通过[SHOW VARIABLES](../grammar/show-variables-statement.md)语句查询系统变量。

BOOL类型的变量可以设值`ON`/`OFF`、`TRUE`/`FALSE`、`1`/`0`。

特殊系统变量前面不需要使用`@@`。

---

##### 特殊
- current_date
- current_time
- current_timestamp
- current_user

##### 配置
- time_zone
- version

##### 字符集
- character_set_client
- character_set_connection
- character_set_database
- character_set_results
- character_set_server

##### 语法
- ft_boolean_syntax
- lower_case_tables_name
   
##### 事务
- autocommit
- innodb_lock_wait_timeout
- tx_isolation

##### 全文索引
- ft_max_word_len
- ft_min_word_len
- ft_stopword_file

##### 其他
- auto_increment_offset 自增字段的默认起始值
- auto_increment_increment 自增字段的默认增量值
- concurrent_insert 并发插入模式
- event_scheduler 是否开启调度器
- foreign_key_checks 是否开启外键约束检查
- group_concat_max_len GROUP_CONCAT结果的字符串长度
- sql_mode
- sql_select_limit SELECT语句结果最大行数。
- sql_select_mode
- sql_warnings 错误的INSERT语句是否应该返回一条警告
- storage_engine 默认存储引擎
        
