# 枚举数据类型

> `enum-type`  
**ENUM(** *char* [**,** *char*]\* **)**

枚举数据类型指定了字符数据类型的范围，只能选择枚举列表中的一个值。最多可以有216-1个枚举值。

MySQL为每个枚举类型分配顺序整数，因此枚举类型参与运算会被转化为整型。