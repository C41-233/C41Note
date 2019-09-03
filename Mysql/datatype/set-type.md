# 集合数据类型

> `set-type`  
**SET(** *char* [**,** *char*]\* **)**

集合数据类型允许多个枚举值的组合。最多可以有64个枚举值。

集合值的表示由引号和逗号指定。例如集合数据类型SET('first','second','third','fourth')，INSERT语句可以使用'first,second'作为集合值。

MySQL内部使用按位掩码来表示集合数据。