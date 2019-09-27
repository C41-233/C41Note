# 系统变量

[MySQL 5.7 系统变量](https://dev.mysql.com/doc/refman/5.7/en/server-system-variable-reference.html)

系统变量不区分大小写。

通过[SHOW VARIABLES](../grammar/show-variables-statement.md)语句查询系统变量。

## 特殊

特殊系统变量前面不需要使用`@@`。

<table>
    <tr>
        <th>current_date</th>
        <td>DATE</td>
        <td>当前系统日期</td>
        <td>R</td>
    </tr>
    <tr>
        <th>current_time</th>
        <td>TIME</td>
        <td>当前系统时间</td>
        <td>R</td>
    </tr>
    <tr>
        <th>current_timestamp</th>
        <td>TIMESTAMP</td>
        <td>当前系统时间戳</td>
        <td>R</td>
    </tr>
    <tr>
        <th>current_user</th>
        <td>CHAR</td>
        <td>当前用户</td>
        <td>R</td>
    </tr>
</table>


## 配置

<table>
    <tr>
        <th>time_zone</th>
        <td>CHAR</td>
        <td>时区</td>
        <td>W</td>
    </tr>
    <tr>
        <th>version</th>
        <td>CHAR</td>
        <td>MySQL的版本号</td>
        <td>R</td>
    </tr>
</table>

## 字符集

<table>
    <tr>
        <th>character_set_client</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>character_set_connection</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>character_set_database</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>character_set_results</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>character_set_server</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>


## 语法

<table>
    <tr>
        <th>ft_boolean_syntax</th>
        <td>CHAR</td>
        <td>可以和布尔查找一起用的运算符</td>
        <td>W</td>
    </tr>
    <tr>
        <th>lower_case_tables_name</th>
        <td>INTEGER</td>
        <td>
            表名和数据库名的大小写敏感性  
            <br>0：大小写敏感  
            <br/>1：大小写敏感，保存时全部转换为小写  
            <br/>2：大小写不敏感，保存时不转换
        </td>
        <td>W</td>
    </tr>
</table>

## 事务

<table>
    <tr>
        <th>autocommit</th>
        <td>BOOL</td>
        <td>是否开启事务自动提交</td>
        <td>W</td>
    </tr>
    <tr>
        <th>innodb_lock_wait_timeout</th>
        <td>INTEGER</td>
        <td>事务等待锁的最长时间（单位为秒）</td>
        <td>W</td>
    </tr>
    <tr>
        <th>tx_isolation</th>
        <td>CHAR</td>
        <td>默认的事务隔离级别</td>
        <td>W</td>
    </tr>
</table>

## 全文索引

<table>
    <tr>
        <th>ft_max_word_len</th>
        <td>INTEGER</td>
        <td>可以包含在一个全文本索引中的单词最大长度，默认为84</td>
        <td>W</td>
    </tr>
    <tr>
        <th>ft_min_word_len</th>
        <td>INTEGER</td>
        <td>可以包含在一个全文本索引中的单词最小长度，默认为4</td>
        <td>W</td>
    </tr>
    <tr>
        <th>ft_stopword_file</th>
        <td>CHAR</td>
        <td>包含停词的文件的名字，默认为4</td>
        <td>W</td>
    </tr>
</table>
		
## 其他

<table>
    <tr>
        <th>auto_increment_offset</th>
        <td>INTEGER</td>
        <td>自增字段的默认起始值，默认为1</td>
        <td>W</td>
    </tr>
    <tr>
        <th>auto_increment_increment</th>
        <td>INTEGER</td>
        <td>自增字段的默认增量值，默认为1</td>
        <td>W</td>
    </tr>
    <tr>
        <th>concurrent_insert</th>
        <td>INTEGER</td>
        <td>>
            并发插入模式
            <br/>0：不允许并发
            <br/>1：当表中无碎片时，在一个进程读表时，另一个进程在尾部并发插入  
            <br/>2：无论表中是否有碎片，，在一个进程读表时，另一个进程都在尾部并发插入
        </td>
        <td>W</td>
    </tr>
    <tr>
        <th>event_scheduler</th>
        <td>BOOL</td>
        <td>是否开启调度器</td>
        <td>W</td>
    </tr>
    <tr>
        <th>foreign_key_checks</th>
        <td>BOOL</td>
        <td>是否开启外键约束检查</td>
        <td>W</td>
    </tr>
    <tr>
        <th>group_concat_max_len</th>
        <td>INTEGER</td>
        <td>GROUP_CONCAT结果的字符串长度</td>
        <td>W</td>
    </tr>
    <tr>
        <th>sql_mode</th>
        <td>CHAR</td>
        <td>
            SQL模式，用逗号分隔的常量列表。
            <table>
                <tr><th>ANSI</th><td>使用标准SQL语法</td></tr>
                <tr><th>ALLOW_INVALID_DATES</th><td>允许不存在的日期（但必须保证月份在1到12间，日期在1到31间）</td></tr>
                <tr><th>ANSI_QUOTES</th><td>关键字作为列或表名时可以使用双引号</td></tr>
                <tr><th>HIGN_NOT_PRECEDENCE</th><td>提高NOT运算符的优先级</td></tr>
                <tr><th>PIPES_AS_CONCAT</th><td>允许使用||连接字符串</td></tr>
                <tr><th>NO_BACKSLASH_ESCAPES</th><td>反斜线作为普通字符</td></tr>
                <tr><th>NO_ZERO_DATE</th><td>禁止日期'0000-00-00'</td></tr>
                <tr><th>NO_ZERO_IN_DATE</th><td>禁止月份或日期为0的日期</td></tr>
                <tr><th>>ONLY_FULL_GROUP_BY</th><td>GROUP BY严格符合聚合规则</td></tr>
                <tr><th>STRICT_TRANS_TABLES</th><td>不允许非法日期和超过字段长度限制的数据</td></tr>
                <tr><th>TRANDITIONAL</th><td>传统严格校验模式</td></tr>
            </table>
        </td>
        <td>W</td>
    </tr>
    <tr>
        <th>sql_select_limit</th>
        <td>INTEGER</td>
        <td>select语句结果最大行数</td>
        <td>W</td>
    </tr>
    <tr>
        <th>sql_select_mode</th>
        <td></td>
        <td></td>
        <td>W</td>
    </tr>
    <tr>
        <th>sql_warnings</th>
        <td>BOOL</td>
        <td>错误的insert语句是否应该返回一条警告，默认为FALSE</td>
        <td>W</td>
    </tr>
    <tr>
        <th>storage_engine</th>
        <td>CHAR</td>
        <td>默认存储引擎</td>
        <td>W</td>
    </tr>
</table>
		
