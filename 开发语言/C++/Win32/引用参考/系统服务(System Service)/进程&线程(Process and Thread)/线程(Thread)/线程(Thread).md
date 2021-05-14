# 线程

##### 函数

- CreateThread 创建线程
- ExitThread 终止当前线程
- GetCurrentThread 获取当前线程
- GetCurrentThreadId 获取当前线程tid
- GetExitCodeThread 获得线程退出代码
- GetProcessIdOfThread 获取指定线程pid
- GetThreadContext 获取进程上下文
- GetThreadPriority 获取线程相对优先级
- GetThreadPriorityBoost 获取是否启用线程优先级提升
- GetThreadTimes 获取线程的创建时间、退出时间、内核时间、用户时间
- OpenThread 打开线程句柄
- QueryThreadCycleTime 获得线程所用的时钟周期数
- ResumeThread 恢复指定线程
- SetThreadAffinityMask 设置线程处理器亲和
- Sleep 暂停当前线程
- SleepEx 暂停当前线程
- SwitchToThread 当前线程放弃剩余时间片
- SuspendThread 挂起指定线程
- TerminateThread 终止指定线程
- SetThreadContext 改变线程上下文
- SetThreadPriority 设置线程相对优先级
- SetThreadPriorityBoost 设置是否启用线程优先级提升
- SetThreadIdealProcessor 设置线程首选处理器
- SetThreadStackGuarantee 设置线程栈保护空间大小

##### 回调函数

- LPTHREAD_START_ROUTINE 线程主函数

##### 结构体

- CONTEXT (x86)线程上下文
