# POPA POAD

POPA用于16位寄存器全部出栈。即对栈连续POP，分别将数据存入DI、SI、BP、SP、BX、DX、CX、AX，栈顶由[SS:SP]确定。

POPAD用于32位寄存器全部出栈。即对栈连续POP，分别将数据存入EDI、ESI、EBP、ESP、EBX、EDX、ECX、EAX。

## 指令格式
```
POPA
POPAD
```