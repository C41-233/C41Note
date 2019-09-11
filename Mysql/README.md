# Mysql

[MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)

[MySQL 5.7 Reference Manual](https://dev.mysql.com/doc/refman/5.7/en/)

[MySQL 5.6 Reference Manual](https://dev.mysql.com/doc/refman/5.6/en/)

## 工具链
1. [mysql](mysql.md)
1. mysqld
1. [mysqldump](mysqldump.md)

## 配置
1. [HELP语句](grammar/help-statement.md)
1. [系统变量](variable/system-variable-value.md)

## 表达式与数据类型
1. [字面直接量](expression/literal.md)
	1. [数值型直接量](expression/literal.md#数值型直接量)
		1. [整型直接量](expression/literal.md#整型直接量)
		1. [小数直接量](expression/literal.md#小数直接量)
		1. [浮点直接量](expression/literal.md#浮点直接量)
		1. [位直接量](expression/literal.md#位直接量)
	1. [十六进制直接量](expression/literal.md#十六进制直接量)
	1. [布尔直接量](expression/literal.md#布尔直接量)
	1. [字符串直接量](expression/literal.md#字符串直接量)
	1. [日期时间型直接量](expression/literal.md#日期时间型直接量)
		1. [日期直接量](expression/literal.md#日期直接量)
		1. [时间直接量](expression/literal.md#时间直接量)
		1. [日期时间直接量](expression/literal.md#日期时间直接量)
		1. [时间戳直接量](expression/literal.md#时间戳直接量)
		1. [年直接量](expression/literal.md#年直接量)
1. 运算符
	1. [算术运算符](expression/base-operator.md#算术运算符)
	1. [逻辑运算符](expression/base-operator.md#逻辑运算符)
	1. [位运算符](expression/base-operator.md#位运算符)
	1. [字符串运算符](expression/base-operator.md#字符串运算符)
	1. [空值运算符](expression/base-operator.md#空值运算符)
	1. [谓词运算符](expression/predicate-expression.md)
	1. [BETWEEN](expression/between-expression.md)
	1. [EXISTS](expression/exists-expression.md)
	1. [IN](expression/in-expression.md)
	1. [LIKE](expression/like-expression.md)
	1. [MATCH](expression/match-expression.md)
	1. [REGEXP/RLIKE](expression/regexp-expression.md)
1. [表达式](expression)
	1. [CASE](expression/case-expression.md)
	1. [日期时间表达式](expression/datetime-expression.md)
	1. [标量函数](scalar-function)
	1. [聚合函数](expression/aggregation-function.md)
1. [数据类型](datatype)
	1. 数值型数据类型
		1. [整型数据类型](datatype/integer-type.md)
		1. [小数数据类型](datatype/decimal-type.md)
		1. [浮点数据类型](datatype/float-type.md)
		1. [位数据类型](datatype/bit-type.md)
	1. [字符串数据类型](datatype/string-type.md)
	1. [日期时间数据类型](datatype/temporal-type.md)
	1. [BLOB数据类型](datatype/blob-type.md)
	1. 复合数据类型
		1. [枚举数据类型](datatype/enum-type.md)
		1. [集合数据类型](datatype/set-type.md)
1. [字符集和校对](variable/character-sets.md)
	1. [SHOW CHARACTER SET语句](grammar/show-character-set-statement.md)
	1. [SHOW COLLATION语句](grammar/show-collation-statement.md)
1. 变量
	1. [系统变量](variable/system-variable.md)
	1. [用户变量](variable/user-variable.md)
	1. [SET语句](grammar/set-statement.md)
	1. [SHOW VARIABLES语句](grammar/show-variables-statement.md)

## 数据库
1. 数据库管理
	1. [CREATE DATABASE语句](grammar/create-database-statement.md)
	1. [ALTER DATABASE语句](grammar/alert-database-statement.md)
	1. [DROP DATABASE语句](grammar/drop-database-statement.md)
	1. [SHOW CREATE DATABASE语句](grammar/show-create-database-statement.md)
	1. [SHOW DATABASES语句](grammar/show-databases-statement.md)
1. 数据库操作
	1. [DELIMITER语句](grammar/delimiter-statement.md)
	1. [DO语句](grammar/do-statement.md)
	1. [EXPLAIN语句](grammar/explain-statement.md)
	1. [SHOW PROCESSLIST语句](grammar/show-processlist-statement.md)
	1. [SHOW STATUS语句](grammar/show-status-statement.md)
	1. [SOURCE语句](grammar/source-statement.md)
	1. [USE语句](grammar/use-statement.md)
1. 元表
	1. INFORMATION_SCHEMA
		1. 数据库结构
			1. [SCHEMATA](meta/schemata-table.md) 数据库结构
			1. [TABLES](meta/tables-table.md) 表结构
			1. [VIEWS](meta/views-table.md) 视图结构
			1. [COLUMNS](meta/columns-table.md) 视图结构
			1. [STATISTICS](meta/statistics-table.md) 索引结构
		1. 权限
			1. [SCHEMA_PRIVILEGES](meta/schema-privileges-table.md) 数据库权限
			1. [TABLE_PRIVILEGES](meta/table-privileges-table.md) 表权限
			1. [COLUMN_PRIVILEGES](meta/column-privileges-table.md) 列权限
			1. [USER_PRIVILEGES](meta/user-privileges-table.md) 列权限
		1. 字符集和校对
			1. [CHARACTER_SETS](meta/character-sets-table.md) 可用字符集
			1. [COLLATIONS](meta/collations-table.md) 可用字符集校对
	1. MYSQL
		1. [USER](meta/user-table.md) 用户信息
		
## 表
1. 定义
	1. [CREATE TABLE语句](grammar/create-table-statement.md)
	1. [DROP TABLE语句](grammar/drop-table-statement.md)
	1. [RENAME TABLE语句](grammar/rename-table-statement.md)
	1. [ALTER TABLE语句](grammar/alter-table-statement.md)
	1. [SHOW COLUMNS语句](grammar/show-columns-statement.md)