# 谓词运算符

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
