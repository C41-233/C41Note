# CALL

CALL伪指令是ACALL和LCALL指令的助记符，用于过程调用。

ACALL用于短转移（11位寻址，2K），当前的IP压栈，并转移。

LCALL用于长转移（16位寻址，64K），当前的IP和CS压栈，并转移。

## 指令格式
```
CALL R/M
```