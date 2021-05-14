# LODS<width>

加载串。

8位下，将(ES:DI)中的值加载到寄存器AL中，若DF=0，则SI:DI递增；若DF=1，则SI:DI递减。

16位下，将(ES:DI)中的值加载到寄存器AX中，若DF=0，则SI:DI递增；若DF=1，则SI:DI递减。

32位下，将(ES:EDI)中的值加载到寄存器EAX中，若DF=0，则SI:EDI递增；若DF=1，则SI:EDI递减。

## 指令格式
```
LODS<width>
```