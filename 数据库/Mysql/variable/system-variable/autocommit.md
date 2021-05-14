# autocommit

> BOOL

是否开启事务自动提交。

如果开启，每条SQL语句都在一个单独的事务内，执行成功后自动提交，执行失败后自动回滚。

如果开启，显式使用`START TRANSACTION`或`BEGIN`语句使得多条语句在同一个事务内。

如果关闭，每个连接在一个事务内，显示执行COMMIT或ROLLBACK后，将开启一个新的事务。如果连接最终没有执行COMMIT或ROLLBACK，将自动回滚。
