# SET TRANSACTION语句

###### set-transaction-statement
> **SET** [**GLOBAL** | **SESSION**] **TRANSACTION**  
**ISOLATION LEVEL** {**READ UNCOMMITTED** | **READ COMMITTED** | **REPEATABLE READ** | **SERIALIZABLE**}

为事务设置隔离级别。注意：该语句不对当前事务有效，只对下一个开始的事务有效。

只有支持事务的存储引擎（例如InnoDB和BDB）才可以定义隔离级。

该语句会导致一个事务的开始。

指定SESSION选项，使得新的隔离级别只适用于当前会话。GLOBAL选项直接修改系统变量TX_ISOLATION。

MySQL支持以下隔离级别：
- READ UNCOMMITTED	未提交读。修改数据时获取排它锁，修改后立即释放。会导致脏读
- READ COMMITTED	提交读。读取数据获取共享锁，并在读取后立即释放；但修改数据获取排他锁，直到事务结束才释放
- REPEATABLE READ	可重复读。事务读取的所有数据上设置共享锁，修改的所有数据上设置排它锁，锁直到事务结束才释放。该保证了在事务中多次读取相同的数据结果一致
- SERIALIZABLE	可顺序化

隔离级引起的问题：
- 脏读：一个事务的查询结果是另一个事务还没有提交的更新数据。
- 非重复读：部分脏读。
- 幻读：连续相同的查询条件得到的结果不同。
- 更新丢失：一个事务的更新覆盖了另一个事务的更新。

| 隔离级 | 脏读 | 不一致读 | 非重复读 | 幻读 | 更新丢失 |
|---|---|---|---|---|---|
| READ UNCOMMITTED | √ | √  | √  | √  | √  |
| READ COMMITTED |  |  | √  | √  | √  |
| REPEATABLE READ |  |  |  |  | √  |
| SERIALIZABLE |  |  |  |  |   |				