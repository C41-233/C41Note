# OR

按位或运算，置CF和OF为0。

## 指令格式
```
OR R/address, R/address/idata
```

## 标志寄存器
| AF(辅助进位) | CF(进位) | DF(方向) | IF(中断) | OF(溢出) | PF(奇偶) | SF(符号) | TF(单步) | ZF(零) |
|---|---|---|---|---|---|---|---|---|
| √ | √ |  |  | √ | √ | √ |  | √ |