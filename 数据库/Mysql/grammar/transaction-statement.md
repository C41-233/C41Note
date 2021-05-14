# TRANSACTION语句

###### start-transaction-statement
> **START TRASACTION**

显式开始一个事务。

一条START TRANSACTION语句自动导致对还没有持久化的修改的一个COMMIT。

###### begin-work-statement
> **BEGIN WORK**

与START TRANSACTION语句等价。

###### rollback-statement
> **ROLLBACK** [**WORK**]   
[**AND** [**NO**] **CHAIN**]   
[[**NO**] **RELEASE**]  
[**TO** **SAVEPOINT** *savepoint-name*]

回滚并终止事务。返回到事务的开始状态。

可以忽略关键字WORK。

NO RELEASE选项终止事务后不释放MySQL的连接，RELEASE选项在事务完成后释放连接。默认情况与系统变量COMPLETION_TYPE有关。

TO SAVEPOINT子句可以回滚至指定保存点。

###### commit-statement
> **COMMIT** [**WORK**]  
[**AND** [**NO**] **CHAIN**]  
[[**NO**] **RELEASE**]

提交并终止事务，使得事务的修改持久化。

可以忽略关键字WORK。

NO RELEASE选项终止事务后不释放MySQL的连接，RELEASE选项在事务完成后释放连接。默认情况与系统变量COMPLETION_TYPE有关。

###### savepoint-statement
> **SAVEPOINT** *savepoint-name*

创建一个保存点。

保存点用于在一个事务中回滚部分内容。