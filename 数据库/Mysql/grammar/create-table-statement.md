# CREATE TABLE语句

###### create-table-statement
> **CREATE** [**TEMPORARY**] **TABLE** [**IF NOT EXISTS**] *[table-reference](#table-reference)* *[table-structure](#table-structure)* [*table-option*]\*  

###### table-reference  
> [*database-name* **.**] *table-name*

###### table-structure  
> *[table-schema](#table-schema)*  
| *[table-content](#table-content)*  
| *[table-schema](#table-schema)* *[table-content](#table-content)*  
| *[table-like-reference](#table-like-reference)*

###### table-schema  
> **(** *[table-element](#table-element)* [**,** *[table-element](#table-element)*]\*)

###### table-content  
> [**IGNORE** | **REPLACE**] [**AS**] *select-statement*  

###### table-element    
> *column-name* *data-type* [[**NOT**] **NULL**]  
{ *[primary-key](#primary-key)* | *[alternate-key](#alternate-key)* | *[foreign-key](#foreign-key)* | **CHECK** *check-condition* }  
[ **AUTO_INCREMENT** ]  
[ **DEFAULT** *value* | **COMMENT** *string-literal* ]\*  
[ **CONSTRAINT** *constraint-name* ]  
[ {**UNIQUE** | **FULLTEXT** | **SPATIAL**} {**INDEX** | **KEY**} *index-name* [ **USING** {**BTREE** | **HASH**} ]  
[ **(** *[sort-specification](#sort-specification)* [**,** *[sort-specification](#sort-specification)*]\* **)** ]  

###### column-reference-group
> **(** *column-name* [**,** *column-name*]\* **)**

###### sort-specification  
> *column-name* [**ASC** | **DESC**]  

`CREATE TABLE`语句用于创建数据表。属于同一数据库的两张表不能同名，属于同一张表的两个列不能同名。表名或列名不能超过64个字符，只能包含数字、字母、_和$，且必须以字母或数字开头。保留字不能用于名字。可以用单引号括起表名，此时可以不以数字或字母开头，也可以使用保留字。设置SQL_MODE为ANSI_QUOTES时，双引号也起到这个作用。

#### 临时表
默认情况下创建的是持久表，可以显示指定TEMPORARY创建临时表。临时表只对创建它的用户可见，会话结束时被自动删除。临时表名可以与已存在的持久表名相同，此时临时表隐藏了持久表。

#### IF NOT EXIST
默认情况下，创建已存在的表名会返回出错信息。可以显示指定IF NOT EXIST使得如果存在指定表名，则放弃创建。

#### 列声明
列定义包含列名、列数据类型和列完整性约束，不允许在一张表中存在重复的列名。默认情况下列允许存在空值（NULL），可以显示指定NOT NULL来禁止空值。列完整性约束PRIMARY KEY指定了当前列是主键，不允许重复，且隐式包含了NOT NULL声明。UNIQUE声明表示该列不允许重复。

DEFAULT指定了列的默认值，当新行没有为该列指定值时，就使用默认值。但不能为日期、BLOB、TEXT、几何数据类型指定默认值。

COMMENT为列添加注释说明，最长255字符。

#### 表复制

###### table-like-reference
> **LIKE** *[table-reference](#table-reference)*   
| **(** **LIKE** *[table-reference](#table-reference)* **)**  

LIKE子句可以在创建表时复制一张已存在表的模式，此时新表的列、数据结构、完整性约束和索引与复制的表相同，但数据内容不会复制，因此新表是空的。LIKE子句可以放在括号中。

通过AS子句也能复制表，此时SELECT语句的结果作为新表的数据内容。

#### 主键

###### primary-key  
> **PRIMARY KEY** [*index-name*] [ {**USING** | **TYPE**} {**UNIQUE** | **FULLTEXT** | **SPATIAL**} ] *[column-reference-group](#column-reference-group)*  

主键是表中的一列或多列，它们的值唯一，且任一部分不允许为空值。一张表只能有一个主键。

可以使用PRIMARY KEY在列声明时指定主键。也可以在表完整性约束中声明主键，此时可以声明多个列构成主键。

MySQL自动为每个主键创建索引，默认情况下索引名为PRIMARY，可以显示指定主键的索引名。

#### 替代键
###### alternate-key  
> **UNIQUE** [**INDEX** | **KEY**] [*index-name*] [ {**USING** | **TYPE**} {**UNIQUE** | **FULLTEXT** | **SPATIAL**} ] *[column-reference-group](#column-reference-group)*  

替代键是表中的一列或多列，它们的值是唯一的。与主键不同，一张表可以有多个替代键，并且可以为空值。

可以使用UNIQUE在列声明时指定替代键。也可以在表完整性约束中声明替代键，此时可以声明多个列构成替代键。

#### 外键

###### foreign-key  
> **FOREIGN KEY** [*index-name*] *[column-reference-group](#column-reference-group)*  
**REFERENCES** *[table-reference](#table-reference)* *[column-reference-group](#column-reference-group)*  
[  
&nbsp;&nbsp;&nbsp;&nbsp;**ON** {**UPDATE** | **DELETE**}  
&nbsp;&nbsp;&nbsp;&nbsp;{**CASCADE** | **RESTRICT** | **SET NULL** | **NO ACTION** | **SET DEFAULT**}  
&nbsp;&nbsp;&nbsp;&nbsp;[ **MATCH** {**FULL** | **PARTIAL** | **SIMPLE**} ]  
]\*  

外键是一种参考完整性约束，指明表与表之间的约束关系。只有InnoDB引擎支持外键。一个外键声明主要包含三部分，外键定义、参照表、参照表主键，其中外键定义和参照表主键必须一致。外键保证当前表的每一个非空外键都在被参考表中的主键出现。

定义时可以指定参照动作，表示发生冲突时如何处置。ON UPDATE表示更新时的处置，ON DELETE表示删除时的处置，二者可以同时使用。

- RESTRICT	表示出现冲突时必须拒绝操作
- CASCAD	表示出现冲突的操作导致参照表（定义主键的表）的改变，即更新时参照表的外键也改变，删除时参照表的相应数据行也删除
- SET NULL	表示出现冲突后参照表的外键被设为空值。需要注意的是，即使外键被定义为NOT NULL，此时仍然会被设置为NULL
- SET DEFAULT	表示出现冲突后参照表的外键被设为默认值，只有默认值存在时才能如此定义
- NO ACTION	等价于RESTRICT

为了与其他SQL产品兼容，外键约束的MATCH子句允许存在，但会被忽略。

#### 自增键
https://dev.mysql.com/doc/refman/5.7/en/innodb-auto-increment-handling.html

在InnoDb中，可以通过`innodb_autoinc_lock_mode`控制自增键的插入方式：
- tradition（经典）：所有insert-like语句执行过程中获取表级auto-inc锁（非事务过程中），保证值分配的确定性、连续性、可重复性（主从复制一致），并发能力低。
- consecutive（连续）：对simple-insert优化，一次性计算出插入个数并生成连续的插入值。auto_inc不需要等到语句结束，可以提前释放。这是InnoDb的默认值。
- interleaved（交错）：不加auto_inc锁，并发性能高。同一个语句生成的值可能不连续。（对statement模式的主从复制是不安全的）

#### 表完整性约束
CHECK完整性约束保证在表变化时作检查。

可以在定义完整性约束时显示指定约束名，这样可以在以后使用。

#### 表选项

###### table-option  
> *option-name* **=** *option-value*  

| 属性名 | 说明 | 格式 |
|---|---|---|
| ENGINE | 存储引擎 | <engine-name> |
| TYPE | 存储引擎（同ENGINE） | <engine-name> |
| UNION | 指定MERGE引擎合并的表名 | (<table-name> [, <table-name>]\*)  |
| INSERT_METHOD | 指定MERGE引擎是否允许执行INSERT语句<br/>NO 不允许<br/>FIRST 添加到第一个表<br/>LAST 添加到最后一个表 | NO \| FIRST \| LAST |
| AUTO_INCREMENT | 指定了自增列的起始值 | <integer-literal> |
| COMMENT | 用于表的注释 | <string-literal> |
| AVG_ROW_LENGTH | 指出每个数据行占用的平均字节长度估计值 | <integer-literal> |
| MAX_ROWS | 指出了表的最大行数估计值 | <integer-literal> |
| MIN_ROWS | 指出了表的最小行数估计值 | <integer-literal> |
| [DEFAULT] CHARACTER SET |  | <charset-name> \| DEFAULT |
| [DEFAULT] COLLATE |  | <collate-name> \| DEFAULT |
| DATA DIRECTORY | 数据文件 | <directory> |
| INDEX DIRECTORY | 索引文件 | <directory> |
| CHECK_SUM |  | 0 \| 1 |
| DELAY_KEY_WRITE | 	 | 0 \| 1 |
| PACK_KEYS	 |  | 0 \| 1 \| DEFAULT |
| PASSWORD	 |  | <string-literal> |
| RAID_TYPE	 |  | 1 \| STRIPED \| RAIDO |
| RAID_CHUNKS |  | <integer-literal> |
| RAID_CHUNKSIZE | 	 | <integer-literal> |
| ROW_FORMAT	 |  | DEFAULT \| DYNAMIC \| FIXED \| COMPRESSED |