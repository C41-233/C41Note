# SET CHARSET语句

###### set-charset-statement
> SET {CHARACTER SET | CHARSET} {*charset_name* | DEFAULT}

为当前会话一次性设置`character_set_client`、`character_set_results`，并将` character_set_connection`设为` character_set_database`。

*charset_name*可以使用引号。