# SET语句

###### set-statement  
> **SET** *variable-definition* [**,** *variable-definition*]\*

###### variable-definition  
> {*user-variable* | *system-variable*} {**=** | **:=**} *scalar-expression*

定义或设置变量的值。变量可以出现在任何标量表达式中。

例如：

``` SQL
SET @ABC=5, @DEF='Inglewood', @GHI=DATE('2004-01-01')
```

可以在SELECT语句中定义变量，此时必须使用:=。

例如：

``` SQL
SELECT @PLAYERNO:=7
```