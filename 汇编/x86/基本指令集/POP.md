# POP

数据出栈，只能按字（16位）操作。

栈顶由SS:SP确定。

将SS:SP处的数据送入目标地址，再SP=SP+2。

## 指令格式
```
POP r/m
```