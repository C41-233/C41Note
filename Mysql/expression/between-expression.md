# BETWEEN运算符

> `between-expression`  
*scalar-expression* [**NOT**] **BETWEEN** *scalar-expression* **AND** *scalar-expression*

BETWEEN运算符判断一个值是否在给定区间内，`A BETWEEN B AND C`等价于`(A>=B) AND (A<=C)`。
