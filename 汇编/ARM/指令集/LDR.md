# LDR	

```
LDR{cond}{B/SB/H/SH} Rd, address
LDR{cond}{B} Rd, label
LDR{cond} Rd, =address
```

从存储器向寄存器加载数据。

加载的数据大小根据字长后缀确定：
- 无字长后缀表示32位字。
- 后缀B表示8位字节。
- 后缀SB表示8位有符号字节。
- 后缀H表示16位半字。
- 后缀SH表示16位有符号半字。

第二操作数前有=号时，是伪指令。用于加载大范围地址。