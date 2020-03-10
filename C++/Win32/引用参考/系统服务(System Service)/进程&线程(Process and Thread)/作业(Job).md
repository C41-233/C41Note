# 作业

##### 函数

- AssignProcessToJobObject 将进程分配给作业
- CreateJobObject 创建作业
- IsProcessInJob 检测指定进程是否在指定作业中
- OpenJobObject 打开作业
- QueryInformationJobObject 查询作业的限制信息
- SetInformationJobObject 为作业添加限制信息
- UserHandleGrantAccess 授予或禁止一个作业访问施加了UI限制的用户对象

##### 结构体

- JOBOBJECT_BASIC_LIMIT_INFORMATION 基本限额
- JOBOBJECT_BASIC_UI_RESTRICTIONS 基本UI限额
- JOBOBJECT_EXTENDED_LIMIT_INFORMATION 扩展基本限额
- JOBOBJECT_SECURITY_LIMIT_INFORMATION 安全限额
