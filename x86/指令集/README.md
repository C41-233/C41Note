# 基本指令集

## 汇编宏
- D<width> 位填充

## 运算

##### 算术运算

- ADC 带进位加法
- ADD 加法
- DIV 无符号除法
- IDIV 有符号除法
- IMUL 有符号乘法

##### BCD

- AAA 非压BCD加法调整
- AAD 非压BCD除法调整
- AAM 非压BCD乘法调整
- AAS 非压BCD减法调整
- DAA 压缩BCD加法调整
- DAS 压缩BCD减法调整

##### 位运算

- AND 按位与
- BSF 位右扫描
- BSR 位左扫描
- BT 位测试
- BTC 位测试求反
- BTR 位测试清零
- BTS 位测试置位

##### 位扩展

- CBW 8位符号扩展为16位
- CDQ 32位符号扩展为64位
- CWD 16位符号扩展为32位
- CWDE 16位扩展

##### 比较

- CMP 比较
 
## 内存操作

##### 赋值
- CMOV<cond> 条件传送
- DEC 自减
- INC 自增

##### 交换
- BSWAP 交换字节
- CMPXCHG 比较交换
- CMPXCHG486 比较交换486
- CMPXCHG8B 比较交换8字节

##### 串操作
- CMPS<width> 串比较

## 标志寄存器

- CLC 进位清零（CF）
- CLD 方向清零（DF）
- CLI 中断清零（IF）
- CLTS 任务清除
- CMC 进位取反（CF）
- LAHF 加载低8位标志寄存器

## 跳转
- CALL 过程调用
- J<cond> 条件跳转
- JMP 无条件跳转
- JMPE 扩展无条件跳转

## 中断
- IRET 16位中断返回
- IRETD 32位中断返回

## 其他指令
- ARPL 调整优先级
- BOUND 检查数组
- CPUID CPU标识
- ENTER 建立堆栈帧
- HLT 停机
- IN 端口输入
- INS<width>端口输入串
- INT软中断

- LAR加载访问权限
- LDS加载数据段
- LEA加载偏移地址
- LEAVE清除过程堆栈
- LES加载附加段
- LFS加载标志段
- LGDT加载全局描述符
- LGS加载全局段
- LIDT加载中断描述符
- LLDT加载局部描述符
- LMSW加载状态字
- LOADALL加载所有段
- LOADALL286加载所有段286
- LOCK锁
- LODS<width>串加载
- LOOP无条件计数循环
- LOOP<cond>条件计数循环
- LSL加载段界限
- LSS加载堆栈段
- LTR加载任务
- MONITOR监视
- MOV数据传送
- MOVS<width>串传送
- MOVSX符号扩展
- MOVZX无符号扩展
- MUL无符号乘法
- MWAIT监视器等待
- NEG相反数
- NOP空指令
- NOT按位取反
- OR按位或
- OUT端口输出
- OUTS<width>端口输出串
- POP数据出栈
- POPA16位寄存器全出栈
- POPAD32位寄存器全出栈
- POPF16位标志寄存器出栈
- POPFD32位标志寄存器出栈
- PUSH数据压栈
- PUSHA16位寄存器全压栈
- PUSHAD32位寄存器全压栈
- PUSHF16位标志寄存器压栈
- PUSHFD32位标志寄存器压栈
- RCL带进位左移
- RCR带进位右移
- RDMSR读专用模式
- RDPMC读执行监视计数
- RDSHR
- RDTSC读时间戳计数
- REP无条件重复
- REP<cond>条件重复
- RET过程返回
- RETF远过程返回
- RETN近过程返回
- ROL循环左移
- ROR循环右移
- RSM恢复系统管理
- SAHF恢复标志寄存器低8位
- SAL算术左移
- SALC
- SAR算术右移
- SBB带借位减法
- SCAS<width>带借位减法
- SET<cond>置位
- SGDT存储全局描述符
- SHL逻辑左移
- SHLD双精度左移
- SHR逻辑右移
- SHRD双精度右移
- SIDT存储中断描述符
- SLDT存储局部描述符
- SMI
- SMINT
- SMINTOLD
- SMSW保存状态字
- STC进位置位（CF）
- STD方向置位（DF）
- STI中断置位（IF）
- STOS<width>串存储
- STR存储任务
- SUB减法
- SYSCALL系统调用
- SYSENTER系统进入
- SYSEXIT系统退出
- SYSRET系统返回
- TEST按位与测试
- UD0无效0
- UD1无效1
- UD2无效2
- UMOV
- VERW校验写
- WAIT等待
- WBINVD回写无效高速缓存
- WRMSR写专用模式
- WRSHR
- XADD交换加
- XBTS
- XCHG交换
- XLAT查表
- XOR按位异或
- XSTORE