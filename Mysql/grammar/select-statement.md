# SELECT语句

###### select-statement
> *[select-clause](#select-clause)*  
[*[into-clause](#into-clause)*]  
[*[from-clause](#from-clause)* [*[index-hint](#index-hint)*]\* [*[where-clause](#where-clause)*] [*[group-by-clause](#group-by-clause)*] [*[having-clause](#having-clause)*]]  
[*[union-clause](#union-clause)*]\*  
[*[order-by-clause](#order-by-clause)*]  
[*[limit-clause](#limit-clause)*]  
[*[lock-option](#lock-option)*]  
[ **PROCEDURE ANALYSE** **(** [*max_elements* [**,** *max_mermoy*] **)** ]  

###### table-reference  
> [*database-name* **.**] *table-name*

SELECT语句用于查询，是一个表表达式。

## SELECT子句
###### select-clause
> **SELECT** [*[select-option](#select-option)*]\* *[column-specification](#column-specification)* [**,** *[column-specification](#column-specification)*]\*  

###### column-specification
> { *[column-reference](#column-reference)* | *scalar-expression* }   
[ [**AS**] *name* ]  
[ *[table-reference](#table-reference)* **.** ] **\***

###### column-reference
> [ *[table-reference](#table-reference)* **.** ] *column-name*

对列取别名出现在结果中，别名不可以在同一条语句中使用。

##### select-option

| 属性 | 描述 |
|---|---|
| DISTINCT/DISTINCTROW | 去除重复的行 |
| ALL | （默认）保留重复的行 |
| HIGH_PRIORITY | 数据锁定 |
| SQL_BUFFER_RESULT | 查询结果缓存 |
| SQL_CACHE | 对查询进行缓存 |
| SQL_NO_CACHE | 不对查询进行缓存 |
| SQL_CALC_FOUND_ROWS | 统计不包含LIMIT子句时的行数 |
| SQL_SMALL_RESULT | 提示优化器查询结果量大 |
| SQL_BIG_RESULT | 提示优化器查询结果量小 |
| STRAIGHT_JOIN | 必须按照FROM子句中出现的顺序来连接表 |

## INTO子句
###### into-clause
> **INTO** *[into-method](#into-method)*  

###### into-method  
> **OUTFILE** *[file](#file)*  
[  
&nbsp;&nbsp;&nbsp;&nbsp;**FIELDS** [**TERMINATED BY** *character*]  
&nbsp;&nbsp;&nbsp;&nbsp;[[**OPTIONALLY**] **ENCLOSED BY** *character*]  
&nbsp;&nbsp;&nbsp;&nbsp;[**ESCAPED BY** *character*]  
]  
[**LINES TERMINATED BY** *character*]  

> **DUMPFILE** *[file](#file)*  

> *variable* [**,** *variable*]\*  

###### file  
**'** *file-name* **'**  
**"** *file-name* **"**  

INTO子句用于将数据存储到文件，例如：

``` SQL
SELECT *
INTO OUTFILE 'D:/teams.txt'
FROM teams
```

默认情况下，`\t`分隔每一列，`\n`分隔每一行。

可以显式设置分隔符，例如：

``` SQL
-- 列之间用逗号分隔，行之间用问号分隔

SELECT *
INTO OUTFILE 'D:/teams.txt'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '?'
FROM teams
```

OPTIONALLY ENCLOSED BY用于设置字符串值的包围符号，ENCLOSED BY设置所有字段的包围符号。

ESCAPED BY用于设置转义引导字符。

## FROM子句
###### from-clause
> **FROM** *[table-specification](#table-specification)* [**,** *[table-specification](#table-specification)*]*

###### table-specification
> {*[table-reference](#table-reference)* | *[select-statement](#select-statement)*} [[**AS**] *name*]  
| *[table-join](#table-join)*  
| **(** *[table-join](#table-join)* **)**

###### table-join
> *[table-specification](#table-specification)* *[join-op](#join-op)* *[table-specification](#table-specification)* {**ON** *join-condition* | **USING** *column-name* [**,** *column-name*]\*}

###### join-op
> [**INNER**] **JOIN**  
| **LEFT** [**OUTER**] **JOIN**  
| **RIGHT** [**OUTER**] **JOIN**  
| **NATURAL** [**LEFT** | **RIGHT**] [**OUTER**] **JOIN**  
| **CROSS** **JOIN**

对表取别名，则在该语句中只能使用该别名而不能使用原名。

可以在FROM子句中进行表子查询。

例如：
``` SQL
SELECT playerno
FROM (SELECT * FROM players WHERE town='Stratford') AS stratforders
```

##### 内联接 INNER JOIN
根据条件联接两表，与select from where结果相同，只显示两表都存在的记录。

例如：
``` SQL
SELECT players.playerno, name, amount
FROM players, penalties,
WHERE players.playerno=penalties.playerno
	AND birth_date>'1920-06-30'

-- 等价于

SELECT players.playerno, name, amount
FROM players INNER JOIN penalties ON(players.playerno=penalties.playerno)
WHERE birth_date>'1920-06-30'
```

##### 左外联接 LEFT OUTER JOIN
按照条件联接两表，左表所有的行都会在结果中出现，右表不满足的列用NULL填充。

##### 右外联接 RIGHT OUTER JOIN
按照条件联接两表，右表所有的行都会在结果中出现，左表不满足的列用NULL填充。

##### 自然联接 NATURAL JOIN
自动根据相同列的比较条件进行外联接，也分为左自然联接与右自然联接。

##### 交叉联接 CROSS JOIN
产生两表的笛卡尔积，两张表的记录都会显示。

## 索引提示
###### index-hint
{**USE** | **IGNORE** | **FORCE**} **INDEX** **(** *index-name* [**,** *index-name*]\* **)**

USE INDEX子句用于建议使用指定索引。

IGNORE INDEX子句用于强制不使用指定索引。

FORCE INDEX子句用于强制使用指定索引。

## WHERE子句
###### where-clause
> **WHERE** *where-condition*

一个标量子查询只有一行，且只有一个值。标量子查询可以参与标量表达式。

例如：

``` SQL
-- 获取1号球队的队长的号码和名字。

SELECT playerno, name
FROM players
WHERE playerno=(SELECT playerno FROM teams WHERE teamno=1)
```

行子查询只返回1行。行子查询可以参与行表达式。

``` SQL
-- 获取名字和首字母组合在字母顺序中位于6号球员之前的所有球员的号码、名字、首字母。

SELECT playerno, name, initials
FROM players
WHERE (name, initials)<(SELECT name, initials FROM players WHERE playerno=6)
ORDER BY name, initials
````

关联子查询是在子查询中出现主查询表的列，该列的值由主查询每一行代入。

例如：

``` SQL
-- 查询球队的队长参加的每场比赛，列出比赛编号、球员号码、球队号码。

SELECT matchno, playerno, teamno
FROM matches
WHERE playerno=(SELECT playerno FROM teams WHERE teams.playerno=matches.playerno)
```

在WHERE子句中，非0值表示TRUE，0值表示FALSE。

## GROUP BY子句
###### group-by-clause
> **GROUP BY** *[group-column-specification](#group-column-specification)* [**,** *[group-column-specification](#group-column-specification)*]\* [**WITH ROLLUP**]

###### group-column-specification
> {*[column-reference](#column-reference)* | scalar-expression} [**ASC** | **DESC**]

GROUP BY子句用于分组查询。

可以按照列分组，例如：

``` SQL
SELECT town, COUNT(*)
FROM players
GROUP BY town
```

也可以对表达式分组，例如：

``` SQL
SELECT YEAR(payment_date), COUNT(*)
FROM penalties
GROUP BY YEAR(payment_date)
```

分组可以排序，例如：

``` SQL
SELECT teamno, COUNT(*)
FROM matches
GROUP BY teamno DESC

-- 等价于

SELECT teamno, COUNT(*)
FROM matches
GROUP BY teamno
ORDER BY teamno DESC
```

SELECT子句中指定的列必须是聚合函数的参数，或者在GROUP BY子句中指定。

WITH ROLLUP将多次聚合。

## HAVING子句
###### having-clause
> **HAVING** *having-condition*

HAVING子句用于对组进行筛选，在GROUP BY子句后执行。条件中可以包含聚合函数。

## UNION子句
###### union-clause
> **UNION** [**ALL** | **DISTINCT**] *[select-statement](#select-statement)*

UNION子句用于对多个查询进行合并。默认去除重复行。

## ORDER BY子句
###### order-by-clause
> **ORDER BY** *sort-specification* [**,** *sort-specification*]\*

###### sort-specification
> {[*table-name* **.**] *column-name* | *scalar-expression* | *column-number*}  
[**ASC** | **DESC**]

ORDER BY子句用于对结果行进行排序。

ASC表示升序，DESC表示降序。默认升序。

NULL视为最小的值。

可以指定列的顺序号码，号码从1开始。

## LIMIT子句
###### limit-clause
> **LIMIT** [ *offset* **,** ] *number*   
| **LIMIT** *number* [ **OFFSET** *offset* ]

LIMIT子句用于选取结果行的一部分。

## Locking Read
###### lock-option
> **FOR UPDATE** | **LOCK IN SHARE MODE**  

##### LOCK IN SHARE MODE	
在查询时加共享意向锁（IS）。

其他事务可以读相关的行，但在当前事务提交前不能写相关的行。

如果相关行被其他事务修改且未提交，查询将等待事务完成。

##### FOR UPDATE	
在查询时加排他意向锁（IX）。

其他事务在读写相关行时阻塞。注意在一致性读的情况下会忽略锁。