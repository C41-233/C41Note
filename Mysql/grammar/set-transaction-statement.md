# SET TRANSACTION语句

###### set-transaction-statement
> **SET** [**GLOBAL** | **SESSION**] **TRANSACTION**  
**ISOLATION LEVEL** {**READ UNCOMMITTED** | **READ COMMITTED** | **REPEATABLE READ** | **SERIALIZABLE**}

为事务设置隔离级别。注意：该语句不对当前事务有效，只对下一个开始的事务有效。

只有支持事务的存储引擎（例如InnoDB和BDB）才可以定义隔离级。

该语句会导致一个事务的开始。

指定SESSION选项，使得新的隔离级别只适用于当前会话。GLOBAL选项直接修改系统变量TX_ISOLATION。
