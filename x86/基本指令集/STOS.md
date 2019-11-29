# STOS<width>

8位下，将AL中的值存储到[ES:DI]中。若DF=0，则SI:DI递增；若DF=1，则SI:DI递减。

16位下，将AX中的值存储到[ES:DI]中。若DF=0，则SI:DI递增；若DF=1，则SI:DI递减。

32位下，将EAX中的值存储到[ES:EDI]中。若DF=0，则SI:EDI递增；若DF=1，则SI:EDI递减。

<width>指定位宽。

## 指令格式
```
STOS<width>
```