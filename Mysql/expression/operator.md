# 运算符

## 算术运算符

运算符 | 描述 | 操作数
---|---|---
| + | 加法 | 2 |
| - | 减法 | 2 |
| - | 取负 | 1 |
| * | 乘法 | 2 |
| / | 除法 | 2 |
| % | 取模 | 2 |
| DIV | 除法并取整 | 2 |

## 逻辑运算符

运算符 | 描述 | 操作数
---|---|---
| = | 等于 | 2 |
| <=> | 等于或都为空值 | 2 |
| <> <br/> != | 不等于 | 2 |
| > | 大于 | 2 |
| < | 小于 | 2 |
| >= | 大于等于 | 2 |
| <= | 小于等于 | 2 |
| NOT | 逻辑非 | 1 |
| AND <br/> && | 逻辑与 | 2 |
| OR <br/> \|\| | 逻辑或 | 2 |
| XOR | 逻辑异或 | 2 |

## 位运算符

运算符 | 描述 | 操作数
---|---|---
| \|	| 按位或 | 2 |
| &	| 按位与 | 2 |
| ^	| 按位异或 | 2 |
| <<	| 位左移 | 2 |
| >>	| 位右移 | 2
| ~	| 按位取反 | 2 |

## 字符串运算符

运算符 | 描述 | 操作数
---|---|---
| \|\| | 字符串拼接<br/>仅当SQL_MODE设置为PIPES_AS_CONCAT时有效 | 2 |
| = | 等于 | 2 |
| <=> | 等于或都为空值 | 2 |
| <> | 不等于 | 2 |
| != | 不等于 | 2 |
| > | 大于 | 2 |
| < | 小于 | 2 |
| >= | 大于等于 | 2 |
| <= | 小于等于 | 2 |

## 空值运算符

运算符 | 描述 | 操作数
---|---|---
| IS NULL | 为空值 | 1 |
| IS NOT NULL | 不为空值 | 1 |

## 谓词运算符

> `predicate-expression`  
*scalar-expression* {**>** | **<** | **>=** | **<=** | **=** | **!=** | **<>**} {**ALL** | **ANY** | **SOME**} (*select-statement*)

- `ALL`	条件满足子查询所有行
- `SOME`/`ANY`	条件满足子查询任一行

``` SQL
SELECT playerno, name, birth_date
FROM players
WHERE birth_date<=ALL(SELECT birth_date FROM players)
```
查找最老的球员号码、名字、生日。

``` SQL
SELECT playerno, name, birth_date
FROM players
WHERE birth_date>ANY(SELECT birth_date FROM players)
```
查找非最老的球员号码、名字、生日。

## BETWEEN运算符

> `between-expression`  
*scalar-expression* [**NOT**] **BETWEEN** *scalar-expression* **AND** *scalar-expression*

BETWEEN运算符判断一个值是否在给定区间内，`A BETWEEN B AND C`等价于`(A>=B) AND (A<=C)`。

## EXISTS运算符

> `exists-expression`  
[**NOT**] **EXISTS** *select-statement*

EXISTS运算符进行一次表子查询，如果是空集返回FALSE，否则返回TRUE。

## IN运算符

> `in-expression`  
| *scalar-expression* [**NOT**] **IN** (*scalar-expression* [, *scalar-expression*]\*)  
| *row-expression* [**NOT**] **IN** (*row-expression* [, *row-expression*]\*)  
| {*scalar-expression* | *row-expression*} [**NOT**] **IN** *select-statement*  

IN运算符用于判断给定的值是否出现在一个列表中。

例如：
``` SQL
SELECT playerno, name, town
FROM players
WHERE town IN ('Inglewood', 'Plymouth', 'Midhurst', 'Douglas')

SELECT matchno, won, lost
FROM matches
WHERE (won, lost) IN ((3,1), (3,2))
```

IN运算符也能用于子查询，标量表达式后跟列子查询，行表达式后跟表子查询。

## LIKE运算符
> `like-expression`  
| 8scalar-expression* [**NOT**] **LIKE** *like-pattern* [**ESCAPE** *character*]

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