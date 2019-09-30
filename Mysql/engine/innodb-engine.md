# Innodb存储引擎

## ACID

##### 原子性 Atomicity
事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。

##### 一致性 Consistency
事务前后数据的完整性必须保持一致。

##### 隔离性 Isolation
多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。

##### 持久性 Durability
一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影响。

## 锁

##### 共享锁、排他锁

共享锁 shared (S) lock：读锁。允许其他事务加S锁，但不允许加X锁。

排他锁 exclusive (X) lock：写锁。不允许其他事务加S锁或X锁。

##### 意向锁  intention lock

意向锁是一个表级锁，用来表明事务之后申请的行级锁（共享锁、排他锁）意图。用于同时支持行级锁和表级锁。

共享意向锁（IS）：事务意图设置行共享锁。

排他意向锁（IX）：事务意图设置行排他锁。

事务申请行S锁前，必须首先申请IS锁或IX锁。事务申请行X锁前，必须首先申请IX锁。

例如`SELECT ... LOCK IN SHARE MODE`会设置IS锁，`SELECT ... FOR UPDATE`会设置IX锁。

<table>
    <tr><th></th><th>X</th><th>IX</th><th>S</th><th>IS</th></tr>
    <tr><tr><th>X</th><td>×</td><td>×</td><td>×</td><td>×</td></tr>
    <tr><th>IX</th><td>×</td><td>√</td><td>×</td><td>√</td></tr>
    <tr><th>S</th><td>×</td><td>×</td><td>√</td><td>√</td></tr>
    <tr><th>IS</th><td>×</td><td>√</td><td>√</td><td>√</td></tr>
</table>

##### 记录锁 record lock

记录锁是索引记录（index record）上的锁，不锁真正的数据记录。

例如`SELECT c FROM t WHERE c=10 FOR UPDATE`，对在c上的值为10的索引记录加锁。

##### 区间锁 gap lock

区间锁锁住一个索引记录范围，包括第一个索引记录前的区间和最后一个索引记录范围后的区间。区间都是开区间，包括端点。

例如`SELECT c FROM t WHERE c BETWEEN 10 and 20 FOR UPDATE`，对在c上的索引范围[10, 20]加锁（无论是否存在这样的索引记录）。

##### 临键锁 next-key lock

临键锁是对一个索引记录的记录锁，以及以其为右端点的区间锁。即对以该索引记录为右端点的左开右闭区间加锁。

##### 插入意向锁 insert intention lock

在插入的时候产生的一种区间锁，在多个事务同时写入不同数据至同一索引间隙的时候，并不需要等待其他事务完成，不会发生锁等待。

##### 自增锁 auto-inc lock

AUTO-INC锁是一种特殊的表级锁，发生涉及AUTO_INCREMENT列的事务性插入操作时产生。