# 用户变量

###### user-variable  
> **@** *variable-name*

用户定义的变量，可以作为标量表达式。使用SET语句来定义和初始化一个用户变量，随后便可使用这个变量。

例如：
``` SQL
SET @PLAYERNO = 7
```

已经定义但没有初始化的变量值为NULL。

为变量赋予一个新值后可以改变变量的数据类型。

可以通过SELECT语句查询用户变量。

例如：

``` SQL
SELECT @PLAYERNO
```