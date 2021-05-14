# 进程

##### 函数

- CreateProcess 创建进程
- CreateProcessWithLogonW 以指定用户启动进程
- ExitProcess 终止当前进程
- GetCommandLine 获得命令行参数
- GetCurrentProcess 获得当前进程句柄
- GetCurrentProcessId 获得当前进程的pid
- GetExitCodeProcess 获得进程退出代码
- GetPriorityClass 获取进程优先级类
- GetProcessId 获得指定进程的pid
- GetProcessAffinityMask 获得进程处理器亲和
- GetProcessMemoryInfo 获取指定进程的内存使用情况
- GetProcessPriorityBoost 获取是否启用进程优先级提升
- GetProcessTimes 获取进程的创建时间、退出时间、内核时间、用户时间
- GetStartupInfo 获得进程启动信息结构
- IsWow64Process 检测是否是64位系统下的32位进程
- OpenProcess 打开进程
- QueryProcessCycleTime 获得进程所用的时钟周期数
- SetProcessAffinityMask 设置进程处理器亲和
- SetPriorityClass 为进程设置优先级类
- SetProcessPriorityBoost 设置是否启用进程优先级提升
- TerminateProcess 终止指定进程
- WaitForInputIdle 等待新进程完成它的初始化并等待用户输入
- WinExec 启动进程

##### 结构体
- PROCESS_INFORMATION 创建的进程信息
- PROCESS_MEMORY_COUNTERS_EX 进程信息
- STARTUPINFO 新进程的启动信息
- STARTUPINFOEX 新进程的启动信息