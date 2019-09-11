# SELECT语句

###### select-statement
> *[select-clause](#select-clause)*  
[*[into-clause](#into-clause)*]  
[*from-clause* [*index-hint*]\* [*where-clause*] [*group-by-clause*] [*having-clause*]]  
[*union-clause*]\*  
[*order-by-clause*]  
[*limit-clause*]  
[**FOR UPDATE** | **LOCK IN SHARE MODE**]  
[ **PROCEDURE ANALYSE** **(** [*max_elements* [**,** *max_mermoy*] **)** ]  

SELECT语句用于查询，是一个表表达式。

可以在查询时显式加锁：
- LOCK IN SHARE MODE	共享锁
- FOR UPDATE	排他锁

### SELECT子句
###### select-clause
> **SELECT** [*[select-option](#select-option)*]\* *[column-reference](#column-reference)* [**,** *[column-reference](#column-reference)*]\*  

###### table-reference  
> [*database-name* **.**] *table-name*

###### column-reference
> { [*[table-reference](#table-reference)* **.**] *column-name* | *scalar-expression* }   
[ [**AS**] *name* ]  
[ *[table-reference](#table-reference)* **.**]\*

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

### INTO子句
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