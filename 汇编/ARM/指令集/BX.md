# BX	

```
BX{cond} Rm	
```

跳转并切换指令集。

寄存器Rm含有目标地址。若Rm的[0]位为0，则进入ARM模式；若Rm的[0]位为1，则进入Thumb模式。