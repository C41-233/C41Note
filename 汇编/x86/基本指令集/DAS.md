# DAS

压缩BCD码调整。

AL是两个压缩BCD数相减的结果，如果AL的低半字节大于9或AF=1，则AL减少06H，置AF=1；然后，如果AL的高半字节大于9或CF=1，则AL减少60H，置CF=1。

## 指令格式
```
DAS
```

## 标志寄存器
| AF(辅助进位) | CF(进位) | DF(方向) | IF(中断) | OF(溢出) | PF(奇偶) | SF(符号) | TF(单步) | ZF(零) |
|---|---|---|---|---|---|---|---|---|
| √ | √ |  |  |  | √ | √ |  | √ |