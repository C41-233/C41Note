# 基本指令集

## 指令描述

- [<cond> 条件判断](cond.md)
- [<width> 位宽](width.md)

## 汇编宏
- D<width> 位填充
- REP 无条件重复
- REP<cond> 条件重复

## 运算

##### 算术运算

- ADC 带进位加法
- ADD 加法
- DIV 无符号除法
- IDIV 有符号除法
- IMUL 有符号乘法
- MUL 无符号乘法
- NEG 相反数
- SBB 带借位减法
- SCAS<width> 带借位减法
- SUB 减法

##### BCD

- [AAA 非压BCD加法调整](AAA.md)
- [AAD 非压BCD除法调整](AAD.md)
- AAM 非压BCD乘法调整
- AAS 非压BCD减法调整
- DAA 压缩BCD加法调整
- DAS 压缩BCD减法调整

##### 逻辑运算

- AND 按位与
- BSF 位右扫描
- BSR 位左扫描
- BT 位测试
- BTC 位测试求反
- BTR 位测试清零
- BTS 位测试置位
- NOT 按位取反
- OR 按位或
- XOR 按位异或

##### 位移
- RCL 带进位左移
- RCR 带进位右移
- ROL 循环左移
- ROR 循环右移
- SAL 算术左移
- SAR 算术右移
- SHL 逻辑左移
- SHLD 双精度左移
- SHR 逻辑右移
- SHRD 双精度右移

##### 位扩展

- CBW 8位符号扩展为16位
- CDQ 32位符号扩展为64位
- CWD 16位符号扩展为32位
- CWDE 16位扩展
- MOVSX 符号扩展
- MOVZX 无符号扩展

##### 比较

- CMP 比较
- TEST 按位与测试
 
## 内存操作

##### 赋值
- CMOV<cond> 条件传送
- DEC 自减
- INC 自增
- MOV 数据传送

##### 栈操作
- POP 数据出栈
- POPA 16位寄存器全出栈
- POPAD 32位寄存器全出栈
- PUSH 数据压栈
- PUSHA 16位寄存器全压栈
- PUSHAD 32位寄存器全压栈

##### 交换
- BSWAP 交换字节
- CMPXCHG 比较交换
- CMPXCHG486 比较交换486
- CMPXCHG8B 比较交换8字节
- XADD 交换加
- XCHG 交换

##### 串操作
- CMPS<width> 串比较
- LODS<width> 串加载
- MOVS<width> 串传送
- STOS<width> 串存储

## 标志寄存器

- CLC 进位清零（CF）
- CLD 方向清零（DF）
- CLI 中断清零（IF）
- CLTS 任务清除
- CMC 进位取反（CF）
- LAHF 加载低8位标志寄存器
- POPF 16位标志寄存器出栈
- POPFD 32位标志寄存器出栈
- PUSHF 16位标志寄存器压栈
- PUSHFD 32位标志寄存器压栈
- SAHF 恢复标志寄存器低8位
- SET<cond> 置位
- STC 进位置位（CF）
- STD 方向置位（DF）
- STI 中断置位（IF）

## 跳转
- CALL 过程调用
- J<cond> 条件跳转
- JMP 无条件跳转
- JMPE 扩展无条件跳转
- LOOP 无条件计数循环
- LOOP<cond> 条件计数循环
- RET 过程返回
- RETF 远过程返回
- RETN 近过程返回

## 中断
- INT 软中断
- IRET 16位中断返回
- IRETD 32位中断返回
- LIDT 加载中断描述符

## 其他指令
- ARPL 调整优先级
- BOUND 检查数组
- CPUID CPU标识
- ENTER 建立堆栈帧
- HLT 停机
- IN 端口输入
- INS<width> 端口输入串
- LAR 加载访问权限
- LDS 加载数据段
- LEA 加载偏移地址
- LEAVE 清除过程堆栈
- LES 加载附加段
- LFS 加载标志段
- LGDT 加载全局描述符
- LGS 加载全局段
- LLDT 加载局部描述符
- LMSW 加载状态字
- LOADALL 加载所有段
- LOADALL286 加载所有段286
- LOCK 锁
- LSL 加载段界限
- LSS 加载堆栈段
- LTR 加载任务
- MONITOR 监视
- MWAIT 监视器等待
- NOP 空指令
- OUT 端口输出
- OUTS<width> 端口输出串
- RDMSR 读专用模式
- RDPMC 读执行监视计数
- RDSHR
- RDTSC 读时间戳计数
- RSM 恢复系统管理
- SGDT 存储全局描述符
- SIDT 存储中断描述符
- SLDT 存储局部描述符
- SMSW 保存状态字
- STR 存储任务
- SYSCALL 系统调用
- SYSENTER 系统进入
- SYSEXIT 系统退出
- SYSRET 系统返回
- UD0 无效0
- UD1 无效1
- UD2 无效2
- UMOV
- VERW 校验写
- WAIT 等待
- WBINVD 回写无效高速缓存
- WRMSR 写专用模式
- WRSHR

