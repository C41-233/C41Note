# IN运算符

> `in-expression`  
*scalar-expression* [**NOT**] **IN** (*scalar-expression* [, *scalar-expression*]\*)
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
