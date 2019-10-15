# 系统变量

[MySQL 5.7 系统变量](https://dev.mysql.com/doc/refman/5.7/en/server-system-variable-reference.html)

系统变量不区分大小写。

通过[SHOW VARIABLES](../grammar/show-variables-statement.md)语句查询系统变量。

BOOL类型的变量可以设值`ON`/`OFF`、`TRUE`/`FALSE`、`1`/`0`。

通过`SELECT @@<variable>`来查看系统变量的值。

- [通用系统变量](general-variables.md)
- [InnoDb系统变量](innodb-variables.md)