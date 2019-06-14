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
*scalar-expression* {**>**|**<**|**>=**|**<=**|**=**|**!=**|**<>**} {**ALL** | **ANY** | **SOME**} (*select-statement*)

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