# LOAD DATA语句

###### load-data-statement
> **LOAD DATA** [**LOW_PRIORITY**] [**CONCURRENT**] [**LOCAL**]  
**INFILE** *filename*  
[**REPLACE** | **IGNORE**]  
**INTO TABLE** *table-reference*   
[  
&nbsp;&nbsp;&nbsp;&nbsp;**FIELDS** [**TERMINATED BY** *character*]   
&nbsp;&nbsp;&nbsp;&nbsp;[[**OPTIONALLY**] **ENCLOSED BY** *character*]   
&nbsp;&nbsp;&nbsp;&nbsp;[**ESCAPED BY** *character*]  
]    
[ **LINES** [**TERMINATED BY** *character*] [**STARTING BY** *character*] ]  
[ **IGNORE** *number* **LINES** ]  
[ **(** *value-specification* [**,** value-specification]\* **)** ]  
[ *[set-statement](set-statement.md)* ]  

###### table-reference
> [*database-name* **.**] *table-name*

###### value-specification
> *column-name* | *user-variable*

LOAD DATA语句用于从文件载入数据。

INFILE子句指定了文件名，文件名是用引号包围的字符串，其中'\'需要转义，即'\\'。

REPLACE表示出现冲突时用新行代替旧行。IGNORE表示出现冲突时忽略冲突行。如果都没有指定，则冲突时停止载入，并返回出错消息。

FIELDS子句中，TERMINATED BY指定列之间的分隔符。

LINES子句中，TERMINATED BY指定行之间的分隔符。

IGNORE LINES子句指定了需要跳过的行数。