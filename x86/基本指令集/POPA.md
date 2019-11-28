# POPA

16位寄存器全部出栈。

连续出栈，分别将数据存入DI、SI、BP、SP、BX、DX、CX、AX，栈顶由[SS:SP]确定。

## 指令格式
```
POPA
```