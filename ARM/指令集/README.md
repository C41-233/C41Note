# ARM指令集

ARM指令的通用格式为：

```
opcode{cond}{S} Rd, Rn {, operand2}
```

- opcode：指令
- cond：条件选项
- S：开启影响CPSR寄存器选项
- Rd：目标寄存器
- Rn：第一操作数寄存器
- oprand2：第二操作数

## opcode

- [ADC 带进位加法](ADC.md)
- [ADD 加法](ADD.md)
- [ADR 小范围地址读取](ADR.md)
- [ADRL 中等范围地址读取](ADRL.md)
- [AND 按位与](AND.md)
- [B 跳转](B.md)
- [BIC 位清零](BIC.md)
- [BKPT 断点中断](BKPT.md)
- [BL 链接跳转](BL.md)
- [BLX 链接跳转并切换指令集](BLX.md)
- [BX 跳转并切换指令集](BX.md)
- [CDP 协处理器指令](CDP.md)
- [CLZ 前导零计数](CLZ.md)
- [CMN 负比较](CMN.md)
- [CMP 比较](CMP.md)
- [EOR 按位异或](EOR.md)
- [LDC 从存储器传送数据到协处理器](LDC.md)
- [LDM 从存储器向一组寄存器传送数据](LDM.md)
- [LDR 从存储器向寄存器传送数据](LDR.md)
- [MCR 从处理器寄存器传送数据到协处理器寄存器](MCR.md)
- [MLA 32位乘累加](MLA.md)
- [MOV 将操作数中的值拷贝到目标寄存器中](MOV.md)
- [MRC 从协处理器寄存器传送数据到处理器寄存器](MRC.md)
- [MRS 将状态寄存器的值拷贝到通用寄存器](MRS.md)
- [MSR 将通用寄存器的值拷贝到状态寄存器](MSR.md)
- [MUL 32位乘法](MUL.md)
- [MVN 将操作数按位取反的值拷贝到目标寄存器中](MVN.md)
- [NOP 空操作](NOP.md)
- [ORR 按位或](ORR.md)
- [RSB 反向减法](RSB.md)
- [RSC 带借位反向减法](RSC.md)
- [SBC 带借位减法](SBC.md)
- [SDC 从协处理器传送数据到存储器](SDC.md)
- [SMLAL 64位有符号乘累加](SMLAL.md)
- [SMULL 64位有符号乘法](SMULL.md)
- [STM 从一组寄存器向存储器存储数据](STM.md)
- [STR 从寄存器向存储器存储数据](STR.md)
- [SUB 	减法](SUB.md)
- [SWI 	产生SWI异常中断](SWI.md)
- [SWP 	数据交换](SWP.md)
- [TEQ 	测试相等](TEQ.md)
- [TST 	测试](TST.md)
- [UMLAL 64位无符号乘累加](UMLAL.md)
- [UMULL 64位无符号乘法](UMULL.md)