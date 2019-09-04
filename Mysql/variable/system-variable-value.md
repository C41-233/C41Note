# 系统变量

系统变量不区分大小写。

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
        <th>CHARACTER_SET_CLIENT</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>CHARACTER_SET_CONNECTION</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>CHARACTER_SET_DATABASE</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>CHARACTER_SET_RESULTS</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>CHARACTER_SET_SERVER</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>


## 语法

<table>
    <tr>
        <th>FT_BOOLEAN_SYNTAX</th>
        <td>CHAR</td>
        <td>可以和布尔查找一起用的运算符</td>
        <td>W</td>
    </tr>
    <tr>
        <th>LOWER_CASE_TABLES_NAME</th>
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
        <th>AUTOCOMMIT</th>
        <td>BOOL</td>
        <td>是否开启事务自动提交</td>
        <td>W</td>
    </tr>
    <tr>
        <th>INNODB_LOCK_WAIT_TIMEOUT</th>
        <td>INTEGER</td>
        <td>事务等待锁的最长时间（单位为秒）</td>
        <td>W</td>
    </tr>
    <tr>
        <th>TX_ISOLATION</th>
        <td>CHAR</td>
        <td>默认的事务隔离级别</td>
        <td>W</td>
    </tr>
</table>

## 全文索引

<table>
    <tr>
        <th>FT_MAX_WORD_LEN</th>
        <td>INTEGER</td>
        <td>可以包含在一个全文本索引中的单词最大长度，默认为84</td>
        <td>W</td>
    </tr>
    <tr>
        <th>FT_MIN_WORD_LEN</th>
        <td>INTEGER</td>
        <td>可以包含在一个全文本索引中的单词最小长度，默认为4</td>
        <td>W</td>
    </tr>
    <tr>
        <th>FT_STOPWORD_FILE</th>
        <td>CHAR</td>
        <td>包含停词的文件的名字，默认为4</td>
        <td>W</td>
    </tr>
</table>
		
## 其他

<table>
    <tr>
        <th>AUTO_INCREMENT_OFFSET</th>
        <td>INTEGER</td>
        <td>自增字段的起始值</td>
        <td>W</td>
    </tr>
    <tr>
        <th>AUTO_INCREMENT_INCREMENT</th>
        <td>INTEGER</td>
        <td>自增字段的增量值</td>
        <td>W</td>
    </tr>
    <tr>
        <th>CONCURRENT_INSERT</th>
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
        <th>EVENT_SCHEDULER</th>
        <td>BOOL</td>
        <td>是否开启调度器</td>
        <td>W</td>
    </tr>
    <tr>
        <th>FOREIGN_KEY_CHECKS</th>
        <td>BOOL</td>
        <td>是否开启外键约束检查</td>
        <td>W</td>
    </tr>
    <tr>
        <th>GROUP_CONCAT_MAX_LEN</th>
        <td>INTEGER</td>
        <td>GROUP_CONCAT结果的字符串长度</td>
        <td>W</td>
    </tr>
    <tr>
        <th>SQL_MODE</th>
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
        <th>SQL_SELECT_LIMIT</th>
        <td>INTEGER</td>
        <td>select语句结果最大行数</td>
        <td>W</td>
    </tr>
    <tr>
        <th>SQL_SELECT_MODE</th>
        <td></td>
        <td></td>
        <td>W</td>
    </tr>
    <tr>
        <th>SQL_WARNINGS</th>
        <td>BOOL</td>
        <td>错误的insert语句是否应该返回一条警告，默认为FALSE</td>
        <td>W</td>
    </tr>
    <tr>
        <th>STORAGE_ENGINE</th>
        <td>CHAR</td>
        <td>默认存储引擎</td>
        <td>W</td>
    </tr>
</table>
		
