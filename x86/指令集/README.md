# 指令集

## IA32-Mode SMD格式

<table>
	<tr>
	    <td>1</td>
	    <td>1,2,3</td>
	    <td>1</td>
	    <td>1</td>
	    <td>1,2,4,8</td>
	    <td>1,2,4,8</td>
    </tr>
    <tr>
        <td>Prefix</td>
        <td>Opcode</td>
	    <td>ModeR/M</td>
	    <td>SIB</td>
	    <td>Displacement</td>
	    <td>Immediate</td>
    </tr>
    <tr>
        <td>前缀</td>
        <td>操作码</td>
	    <td>内存/寄存器</td>
	    <td>索引寻址</td>
	    <td>偏移</td>
	    <td>立即数</td>
    </tr>
</table>

#### 1. Prefix

##### LOCK 

F0H

指令在执行时候禁用数据线复用，用在多核的处理器上，一般很少需要手动指定。

##### REP

重复执行指令，由CX（16位）、ECX（32位）、RCX（64位）寄存器计数。

- REPNE / REPNZ

F2H

当ZF=0时（不相等时，非零时）重复执行。

- REP / REPE / REPZ

F3H

当ZF=1（相等时，零时）重复执行。