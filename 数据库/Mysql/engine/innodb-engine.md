# Innodb存储引擎

## 一、ACID

##### 原子性 Atomicity
事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。

##### 一致性 Consistency
事务前后数据的完整性必须保持一致。

##### 隔离性 Isolation
多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。

##### 持久性 Durability
一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影响。

## 二、锁

[不同SQL语句涉及的锁](https://dev.mysql.com/doc/refman/5.7/en/innodb-locks-set.html)

##### 共享锁、排他锁

共享锁 shared (S) lock：读锁。允许其他事务加S锁，但不允许加X锁。

排他锁 exclusive (X) lock：写锁。不允许其他事务加S锁或X锁。

##### 意向锁  intention lock

意向锁是一个**表级锁**，用来表明事务之后申请的行级锁（行共享锁、行排他锁）意图。事务设置行级锁之前，首先要申请意向锁。意向锁用于同时支持行级锁和表级锁，当事务申请行级锁时，只需要比较同一行的行级锁即可；当事务申请表级锁时，还需要比较意向锁，从而避免遍历查询所有的行级锁。

共享意向锁（IS）：事务意图设置行共享锁，申请行S锁之前申请。

排他意向锁（IX）：事务意图设置行排他锁，申请行S锁或行X锁之前申请。

事务申请行S锁前，必须先申请IS锁或IX锁；事务申请行X锁前，必须先申请IX锁。

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

## 三、隔离级别

隔离级引起的问题：
- 脏读：一个事务的查询结果是另一个事务还没有提交的更新数据。
- 非重复读：部分脏读。
- 幻读：连续相同的查询条件得到的结果不同。
- 更新丢失：一个事务的更新覆盖了另一个事务的更新。

| 隔离级别 | 脏读 | 不一致读 | 非重复读 | 幻读 | 更新丢失 |
|---|---|---|---|---|---|
| READ UNCOMMITTED | √ | √  | √  | √  | √  |
| READ COMMITTED |  |  | √  | √  | √  |
| REPEATABLE READ |  |  |  |  | √  |
| SERIALIZABLE |  |  |  |  |   |				

InnoDb的默认级别是REPEATABLE READ。

- 即时读（current read）：总是读取到最新的数据。
- 一致性读（consistent read）：事务读取到数据的同一个快照，而不会因为其他数据的更新而改变。快照通过undo log构建。

##### READ UNCOMMITTED 未提交读
会导致脏读。

修改数据时获取排它锁，修改后立即释放。

##### READ COMMITTED 提交读	
会导致幻读和非重复读。

读取数据获取共享锁，并在读取后立即释放；但修改数据获取排他锁，直到事务结束才释放。

无锁读时使用快照读，不加锁。

加锁读、更新、删除时，加记录锁，从而允许对其他记录的插入。区间锁只在外键约束检查与重复键检查时使用。

##### REPEATABLE READ 可重复读
事务读取的所有数据上设置共享锁，修改的所有数据上设置排它锁，锁直到事务结束才释放。该级别保证了在事务中多次读取相同的数据结果一致。

无锁读时使用快照读，不加锁。

加锁读、更新、删除时：
- 在唯一索引上的唯一查询条件，只对该索引加记录锁（不使用区间锁或临键锁）。
- 范围查询条件，对索引区间加锁（区间锁或临键锁），阻止范围内的记录插入。

##### SERIALIZABLE 可顺序化
将所有未加锁的SELECT语句都隐式转化为`SELECT ... LOCK IN SHARE MODE`。

## 四、日志
##### undo log
用于其他事务构建变更前的快照，以及帮助当前事务回滚。

逻辑格式的日志，在执行undo的时候，仅仅是将数据从逻辑上恢复至事务之前的状态，而不是从物理页面上操作实现的（因为此时还没有将数据刷到磁盘），这一点是不同于redo log的。

当事务提交之后，undo log并不能立马被删除，而是放入待清理的链表，由purge线程判断是否由其他事务在使用undo段中表的上一个事务之前的版本信息，决定是否可以清理undo log的日志空间。

undo log包括insert undo，记录插入的唯一键值；update undo，记录修改的唯一键值以及旧的记录快照。

##### redo log
用于在crash后，恢复未写入data file的已提交事务。

物理格式的日志，记录的是物理数据页面的修改的信息，其redo log是顺序写入redo log file的物理文件中去的，速度比随机写入实际的数据页快。

事务开始之后就产生redo log，redo log的落盘并不是随着事务的提交才写入的，而是在事务的执行过程中，便开始写入redo log文件中。

当对应事务的脏页写入到磁盘之后，redo log的使命也就完成了，重做日志占用的空间就可以重用（被覆盖）。

InnoDb对redo log有以下优化：
- 尽量保持redo log存储在一段连续的空间上。因此在系统第一次启动时就会将日志文件的空间完全分配。以顺序追加的方式记录redo log，通过顺序IO来改善性能。
- 批量写入日志。日志并不是直接写入文件，而是先写入redo log buffer。当需要将日志刷新到磁盘时（如事务提交），将许多日志一起写入磁盘。
- 并发的事务共享redo log的存储空间，它们的redo log按语句的执行顺序，依次交替的记录在一起，以减少日志占用的空间。


## 五、索引

##### 聚簇索引（Clustered Index）

实际的数据直接保存在B树索引的叶子结点，索引即数据。一个表只能有一个聚簇索引，因为物理存储结构只有一种。

InnoDb中的聚簇索引构成为：
- 如果存在一个主键，则主键为聚簇索引；
- 否则，第一个非NULL唯一索引为聚簇索引；
- 否则，生成一个隐式的列作为聚簇索引，值为rowid。

##### 次级索引（Secondary Index）

非聚簇索引都称为次级索引，次级索引指向了聚簇索引。

## 六、Doublewrite Buffer

磁盘IO和文件系统IO存在最小单位，数据页通常大于这个值，刷盘时可能因断电导致page损坏。此时无法通过redo log来恢复，因为可能未在事务中修改的数据一并损坏了。

InnoDb先将数据页写入Doublewrite Buffer（顺序写），再将数据刷到对应的磁盘（随机写）。