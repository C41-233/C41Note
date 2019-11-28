# PUSHF PUSHFD

将标志寄存器压栈。先压高字节，再压低字节。

PUSHF将FLAGS压栈，栈顶由[SS:SP]确定。SP=SP-2，再将FLAGS送入新的[SS:SP]处。

PUSHFD将EFLAGS压栈。

## 指令格式
```
PUSHF
PUSHFD
```