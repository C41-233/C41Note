# STR	

```
STR{cond}{B/H} Rd, address
STR{cond}{B} Rd, label
```

从寄存器向存储器存储数据，数据长度由字长后缀指定：
- 无字长后缀表示32位字。
- 后缀B表示8位字节。
- 后缀H表示16位半字。