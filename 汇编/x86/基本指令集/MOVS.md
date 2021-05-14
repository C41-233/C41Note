# MOVS<width>

串传送。

8位和16位下，将(DS:SI)中的值送入(ES:DI)，若DF=0，则SI:DI按8位地址递增；若DF=1，则SI:DI按8位地址递减。

32位下，将(DS:ESI)中的值送入(ES:EDI)，若DF=0，则SI:EDI按8位地址递增；若DF=1，则SI:EDI按8位地址递减。

## 指令格式
```
MOVS<width>
```