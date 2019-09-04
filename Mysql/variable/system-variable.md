# 系统变量

系统变量不区分大小写。

---

## 特殊

特殊系统变量前面不需要使用`@@`。

<table>

</table>

- #### CURRENT_DATE
*DATE R*  
>当前系统日期。

- #### CURRENT_TIME
*TIME R*
>当前系统时间。

- #### CURRENT_TIMESTAMP
*TIMESTAMP R*
>当前系统时间戳。

- #### CURRENT_USER
*CHAR R*
>当前用户。

## 配置

- #### TIME_ZONE
*CHAR W*
>时区。
		
- #### VERSION
*CHAR R*
>MySQL的版本号。

## 字符集
- #### CHARACTER_SET_CLIENT

- #### CHARACTER_SET_CONNECTION

- #### CHARACTER_SET_DATABASE

- #### CHARACTER_SET_RESULTS

- #### CHARACTER_SET_SERVER

## 语法
- #### FT_BOOLEAN_SYNTAX
*CHAR W*
>可以和布尔查找一起用的运算符。
		
- #### LOWER_CASE_TABLES_NAME
*INTEGER W*
>表名和数据库名的大小写敏感性  
>0：大小写敏感  
>1：大小写敏感，保存时全部转换为小写  
>2：大小写不敏感，保存时不转换  

## 事务
- #### AUTOCOMMIT
*BOOL W*
>是否开启事务自动提交。
		
- #### INNODB_LOCK_WAIT_TIMEOUT
*INTEGER R*
>事务等待锁的最长时间（单位为秒）。
		
- #### TX_ISOLATION
*CHAR*
>默认的事务隔离级别。

## 全文索引
		
- #### FT_MAX_WORD_LEN
*INTEGER W*
>可以包含在一个全文本索引中的单词最大长度，默认为84。
		
- #### FT_MIN_WORD_LEN
*INTEGER W*
>可以包含在一个全文本索引中的单词最小长度，默认为4。
		
- #### FT_STOPWORD_FILE
*CHAR W*
>包含停词的文件的名字。

## 其他
		
- #### AUTO_INCREMENT_OFFSET
*INTEGER W*
>自增字段的起始值。
		
- #### AUTO_INCREMENT_INCREMENT
*INTEGER W*
>自增字段的增量值。
		
- #### CONCURRENT_INSERT
*INTEGER W*
>并发插入模式。  
>0：不允许并发。  
>1：当表中无碎片时，在一个进程读表时，另一个进程在尾部并发插入。  
>2：无论表中是否有碎片，，在一个进程读表时，另一个进程都在尾部并发插入。
		
- #### EVENT_SCHEDULER
*BOOL W*
>是否开启调度器。
		
- #### FOREIGN_KEY_CHECKS
*BOOL W*
>是否开启外键约束检查。
		
- #### GROUP_CONCAT_MAX_LEN
*INTEGER W*
>GROUP_CONCAT结果的字符串长度。
		
- #### SQL_MODE
*CHAR W*
>SQL模式，用逗号分隔的常量列表。
>- ANSI：使用标准SQL语法。
>- ALLOW_INVALID_DATES：允许不存在的日期（但必须保证月份在1到12间，日期在1到31间）。
>- ANSI_QUOTES：关键字作为列或表名时可以使用双引号。
>- HIGN_NOT_PRECEDENCE：提高NOT运算符的优先级。
>- PIPES_AS_CONCAT：允许使用||连接字符串。
>- NO_BACKSLASH_ESCAPES：反斜线作为普通字符。
>- NO_ZERO_DATE：禁止日期'0000-00-00'。
>- NO_ZERO_IN_DATE：禁止月份或日期为0的日期。
>- ONLY_FULL_GROUP_BY：GROUP BY严格符合聚合规则。
>- STRICT_TRANS_TABLES：不允许非法日期和超过字段长度限制的数据。
>- TRANDITIONAL：传统严格校验模式。
		
- #### SQL_SELECT_LIMIT
*INTEGER W*
>select语句结果最大行数。
		
- #### SQL_SELECT_MODE
		
- #### SQL_WARNINGS
*BOOL W*
>错误的insert语句是否应该返回一条警告，默认为FALSE。
		
- #### STORAGE_ENGINE
*CHAR W*
>默认存储引擎。
