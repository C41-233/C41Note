# 读写锁

##### 函数

- AcquireSRWLockExclusive 申请排它锁（写锁）
- AcquireSRWLockShared 申请共享锁（读锁）
- InitializeSRWLock 初始化读写锁
- ReleaseSRWLockExclusive 释放排它锁（写锁）
- ReleaseSRWLockShared 释放共享锁（读锁）

##### 接口

- SRWLOCK 读写锁
