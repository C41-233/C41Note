# LIKE运算符
###### like-expression  
> *scalar-expression* [**NOT**] **LIKE** *like-pattern* [**ESCAPE** *character*]

LIKE表达式本身是一个标量表达式，返回BOOL值，用于判断指定字符串是否满足模式。

正则模式如下：
- `%`	0个或多个字符
- `_`	任意一个字符

ESCAPE指定的字符表示转义符号。

例如：

``` SQL
SELECT name, playerno
FROM players
WHERE name LIKE '%#_%' ESCAPE '#'
```

找出名字中含有下划线的球员的名字和号码。
