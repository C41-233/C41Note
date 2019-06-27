# MATCH运算符

> `match-expression`  
**MATCH** (*column-reference* [, *column-reference*]*) **AGAINST** (*scalar-expression* [*search-type*])

> `column-reference`  
[[*database-name* **.**]*table-name* **.**]*column-name*

> `search-type`  
**IN NATURAL LANGUAGE MODE**  
| [**IN NATURAL LANGUAGE MODE**] **WITH QUERY EXPANSION**   
| **IN BOOLEAN MODE**

MATCH表达式本身是一个标量表达式，返回INTEGER值，用于判断指定字符串是否在文本中。如果返回0，表示不存在；非0的结果是该单词的相关性。

要使用MATCH表达式，相关的表必须使用MyISAM引擎，且相关的列需要创建FULLTEXT索引。

IN NATURAL LANGUAGE MODE 自然语言查找
（默认）自然语言查找。在该模式下，停词被忽略，在超过50%的行中出现的单词被视为停词。

自然语言查找会按照相关性进行递减排序。

例如：
``` SQL
SELECT bookno, title
FROM books
WHERE MATCH(title) AGAINST ('design')
```

获取书名中包含单词design的图书的号码和书名。

#### IN BOOLEAN MODE 
布尔查找。在该模式下，停词不会被忽略。

可以在所查找的单词上指定修饰符：

| 模式 | 描述 |
|---|---|
| +data | 包含单词data |
| -data | 不包含单词data |
| >data	| 包含单词data，并提高50%的相关性 |
| <data	| 不包含单词data，并减少50%的相关性 |
| () | 嵌套 |
| ~data	| 包含单词data，并使相关性为负 |
| data*	| 以单词data开头 |
| "data data data" | 短语data data data |

#### [IN NATURAL LANGUAGE MODE] WITH QUERY EXPANSION 

带有子查询扩展的自然语言查找。先进行自然语言查找，然后对查找结果再次进行自然语言查找。