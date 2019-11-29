# 基本指令集

## 指令描述

- [<cond> 条件判断](cond.md)
- [<width> 位宽](width.md)
- [REP 无条件重复](REP.md)
- [REP<cond> 条件重复](REP.md)

## 汇编宏
- [D<width> 位填充](D.md)

## 运算

##### 算术运算

- [ADC 带进位加法](ADC.md)
- [ADD 加法](ADD.md)
- [DIV 无符号除法](DIV.md)
- [IDIV 有符号除法](IDIV.md)
- [IMUL 有符号乘法](IMUL.md)
- [MUL 无符号乘法](MUL.md)
- [NEG 相反数](NEG.md)
- SBB 带借位减法
- SUB 减法

##### BCD

- [AAA 非压BCD加法调整](AAA.md)
- [AAD 非压BCD除法调整](AAD.md)
- [AAM 非压BCD乘法调整](AAM.md)
- [AAS 非压BCD减法调整](AAS.md)
- [DAA 压缩BCD加法调整](DAA.md)
- [DAS 压缩BCD减法调整](DAS.md)

##### 逻辑运算

- [AND 按位与](AND.md)
- BSF 位右扫描
- BSR 位左扫描
- BT 位测试
- BTC 位测试求反
- BTR 位测试清零
- BTS 位测试置位
- [NOT 按位取反](NOT.md)
- [OR 按位或](OR.md)
- XOR 按位异或

##### 移位
- [RCL 带进位左移](RCL.md)
- [RCR 带进位右移](RCR.md)
- [ROL 循环左移](ROL.md)
- [ROR 循环右移](ROR.md)
- [SAL 算术左移](SAL.md)
- SAR 算术右移
- SHL 逻辑左移
- SHLD 双精度左移
- SHR 逻辑右移
- SHRD 双精度右移

##### 位扩展

- [CBW 8位符号扩展为16位](CBW.md)
- CDQ 32位符号扩展为64位
- [CWD 16位符号扩展为32位](CWD.md)
- CWDE 16位扩展
- MOVSX 符号扩展
- [MOVZX 无符号扩展](MOVZX.md)

##### 比较

- [CMP 比较](CMP.md)
- TEST 按位与测试
 
## 内存操作

##### 赋值
- [CMOV<cond> 条件传送](CMOV.md)
- [DEC 自减](DEC.md)
- [INC 自增](INC.md)
- [MOV 数据传送](MOV.md)

##### 栈操作
- [POP 数据出栈](POP.md)
- [POPA 16位寄存器全出栈](POPA.md)
- [POPAD 32位寄存器全出栈](POPA.md)
- [PUSH 数据压栈](PUSH.md)
- [PUSHA 16位寄存器全压栈](PUSHA.md)
- [PUSHAD 32位寄存器全压栈](PUSHAD.md)

##### 交换
- BSWAP 交换字节
- CMPXCHG 比较交换
- CMPXCHG486 比较交换486
- CMPXCHG8B 比较交换8字节
- XADD 交换加
- XCHG 交换

##### 串操作
- [CMPS<width> 串比较](CMPS.md)
- [LODS<width> 串加载](LODS.md)
- [MOVS<width> 串传送](MOVS.md)
- SCAS<width>
- STOS<width> 串存储

##### 段页
- [LDS 加载数据段](LDS.md)
- [LEA 加载偏移地址](LEA.md)
- [LES 加载附加段](LES.md)
- [LGDT 加载全局描述符](LGDT.md)
- [LLDT 加载局部描述符](LLDT.md)

## 标志寄存器
- [CLC 进位清零（CF）](CLC.md)
- [CLD 方向清零（DF）](CLD.md)
- [CLI 中断清零（IF）](CLI.md)
- [CMC 进位取反（CF）](CMC.md)
- LAHF 加载低8位标志寄存器
- [POPF 16位标志寄存器出栈](POPF.md)
- [POPFD 32位标志寄存器出栈](POPF.md)
- [PUSHF 16位标志寄存器压栈](PUSHF.md)
- [PUSHFD 32位标志寄存器压栈](PUSHFD.md)
- SAHF 恢复标志寄存器低8位
- SET<cond> 置位
- STC 进位置位（CF）
- STD 方向置位（DF）
- STI 中断置位（IF）

## 跳转
- [CALL ACALL LCALL 过程调用](CALL.md)
- [JCXZ JECXZ 条件跳转](J.md)
- [JMP 无条件跳转](JMP.md)
- JMPE 扩展无条件跳转
- [LOOP 无条件计数循环](LOOP.md)
- [LOOP<cond> 条件计数循环](LOOPx.md)
- [RET 过程返回](RET.md)
- [RETF 远过程返回](RETF.md)
- RETN 近过程返回

## 中断
- [INT 软中断](INT.md)
- [IRET IRETD 中断返回](IRET.md)
- [LIDT 加载中断描述符](LIDT.md)

## 特权

##### 任务
- [CLTS 任务清除](CLTS.md)
- [LTR 加载任务](LTR.md)

##### 端口
- [IN 端口输入](IN.md)
- INS<width> 端口输入串
- [OUT 端口输出](OUT.md)
- OUTS<width> 端口输出串

## 其他指令
- ARPL 调整优先级
- BOUND 检查数组
- CPUID CPU标识
- ENTER 建立堆栈帧
- [HLT 停机](HLT.md)
- LAR 加载访问权限
- LEAVE 清除过程堆栈
- LFS 加载标志段
- LGS 加载全局段
- LMSW 加载状态字
- LOADALL 加载所有段
- LOADALL286 加载所有段286
- LOCK 锁
- LSL 加载段界限
- LSS 加载堆栈段
- MONITOR 监视
- MWAIT 监视器等待
- [NOP 空指令](NOP.md)
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

