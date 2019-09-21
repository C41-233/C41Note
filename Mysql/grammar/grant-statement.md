# GRANT语句

###### grant-statement
> **GRANT** {*[database-privileges](#database-privileges)* | *[table-privileges](#table-privileges)* | *[user-privileges](#user-privilege)* | *[execute-privileges](#execute-privileges)* | *[event-privileges](#event-privileges)*}  
**TO** *[user-specification](#user-specification)* [**,** *[user-specification](#user-specification)*]\*  
[**WITH** {*[grant-option](#grant-option)*}\*]

###### user-specification
> *[user](#user)* [**IDENTIFIED BY** [**PASSWORD**] *password*]

###### user
> <*username* [**@** *hostname*]>

GRANT语句用于为用户分配权限，可以一次分配一个或多个权限，也可以使用选项ALL或ALL PRIVILEGES分配所有权限。

TO子句指定了权限被分配的用户。如果不存在该用户，则自动创建之。被创建的用户主机名为'%'，没有密码。

###### grant-option

| 选项 | 说明 |
|---|---|
| **GRANT OPTION** | 使得用户可以把自己的权限传递给其他用户，而不用显式为其他用户分配该权限 |
| **MAX_CONNECTIONS_PER_HOUR** *integer* | 限制每小时数据库访问次数 |
| **MAX_QUERIES_PER_HOUR** *integer* | 限制每小时查询次数 |
| **MAX_UPDATES_PER_HOUR** *integer* | 限制每小时更新次数 |
| **MAX_USER_CONNECTIONS** *integer* | 限制最大用户访问次数 |

###### table-reference-all
> <[*database-name* **.**]**\***>

### 数据库权限

###### database-privileges
> {**ALL** [**PRIVILEGES**] | *[database-privilege](#database-privilege)* [**,** *[database-privilege](#database-privilege)*]\*}  
**ON** *[table-reference-all](#table-reference-all)*

###### database-privilege

| 权限 | 描述 |
|---|---|
| **SELECT** | 给予用户使用SELECT语句访问特定数据库中所有表的权力 |
| **INSERT** | 给予用户使用INSERT语句向特定数据库中所有表添加数据的权力 |
| **DELETE** | 给予用户使用DELETE语句从特定数据库的所有表中删除数据 |
| **UPDATE** | 给予用户使用UPDATE语句修改特定数据库的所有表的权力 |
| **REFERENCES** | 给予用户创建外键来参照特定数据库所有表的权力 |
| **CREATE** | 给予用户使用CREATE TABLE语句在特定数据库中创建表的权力 |
| **ALTER** | 给予用户使用ALTER TABLE语句修改特定数据库的所有表模式的权力 |
| **INDEX** | 给予用户在特定数据库的表上定义和删除索引的权力 |
| **DROP** | 给予用户删除特定数据库的表的权力 |
| **CREATE TEMPORARY TABLES** | 给予用户在特定数据库中创建临时表的权力 |
| **CREATE VIEW** | 给予用户使用CREATE VIEW语句在特定数据库中创建视图的权力 |
| **SHOW VIEW** | 给予用户在特定数据库中使用SHOW VIEW语句查看视图的权力 |
| **CREATE ROUTINE** | 给予用户为特定数据库创建存储过程的权力 |
| **ALTER ROUTINE** | 给予用户为特定数据库修改和删除存储过程的权力 |
| **EXECUTE ROUTINE** | 给予用户调用特定数据库存储过程的权力 |
| **LOCK TABLES** | 给予用户锁定指定数据库表的权力 |

### 表权限
###### table-privileges
> {**ALL** [**PRIVILEGES**] | *[table-privilege](#table-privilege)* [**,** *[table-privilege](#table-privilege)*]\*}  
ON *[table-reference](#table-reference)*

###### table-reference
> <[*database-name* **.**] *table-name*>

###### column-group
> **(** *column-name* [**,** *column-name*]\* **)**

###### table-privilege
| 权限 | 描述 |
|---|---|
| **SELECT** | 给予用户使用SELECT语句访问特定表特定列的权力，对于视图用户还必须具有相关表的权限 |
| **INSERT** | 给予用户使用INSERT语句向特定表添加数据的权力 |
| **DELETE** *[column-group](#column-group)* | 给予用户使用DELETE语句从特定表中删除数据的权力 |
| **UPDATE** *[column-group](#column-group)* | 给予用户使用UPDATE语句修改特定表特定列的权力 |
| **REFERENCES** *[column-group](#column-group)* | 给予用户创建外键来参照特定表特定列的权力 |
| **CREATE** | 给予用户使用CREATE TABLE语句创建特定表的权力 |
| **ALTER** | 给予用户使用ALTER TABLE语句修改表模式的权力 |
| **INDEX** *[column-group](#column-group)* | 给予用户在特定表特定列上定义和删除索引的权力 |
| **DROP** | 给予用户删除特定表的权力 |

没有指出权限分配的列，则表示对所有列有效。

表权限同样对视图有效。

### 用户权限
###### user-privileges
> {**ALL** [**PRIVILEGES**] | *[user-privilege](#user-privilege)* [**,** *[user-privilege](#user-privilege)*]\*}  
**ON** **\*.\***

###### user-privilege
| 权限 | 描述 |
|---|---|
| **SELECT** | 给予用户使用SELECT语句访问所有表的权力 |
| **INSERT** | 给予用户使用INSERT语句向所有表添加数据的权力 |
| **DELETE** | 给予用户使用DELETE语句从所有表中删除数据 |
| **UPDATE** | 给予用户使用UPDATE语句修改所有表的权力 |
| **REFERENCES** | 给予用户创建外键来参照所有表的权力 |
| **CREATE** | 给予用户使用CREATE TABLE语句在创建表的权力 |
| **ALTER** | 给予用户使用ALTER TABLE语句修改所有表模式的权力 |
| **INDEX** | 给予用户在表上定义和删除索引的权力 |
| **DROP** | 给予用户删除表的权力 |
| **CREATE TEMPORARY TABLES** | 给予用户创建临时表的权力 |
| **CREATE VIEW** | 给予用户使用CREATE VIEW语句创建视图的权力 |
| **SHOW VIEW** | 给予用户使用SHOW VIEW语句查看视图的权力 |
| **CREATE ROUTINE** | 给予用户创建存储过程的权力 |
| **ALTER ROUTINE** | 给予用户修改和删除存储过程的权力 |
| **EXECUTE ROUTINE** | 给予用户调用存储过程的权力 |
| **LOCK TABLES** | 给予用户锁定表的权力 |
| **CREATE USER** | 给予用户创建和删除用户的权力 |
| **SHOW DATABASES** | 给予用户使用SHOW DATABASES查看所有数据库的权力 |

### 执行权限
###### execute-privileges
> **GRANT EXECUTE**  
**ON** {**PROCEDURE** *procedure-name* | **FUNCTION** *function-name*}

### 事件权限
###### event-privileges
> **EVENT ON** {*[table-reference-all](#table-reference-all)* | **\*.\***}