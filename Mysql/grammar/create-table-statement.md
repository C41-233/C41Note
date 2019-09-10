# CREATE TABLE语句

###### create-table-statement
> **CREATE** [**TEMPORARY**] **TABLE** [**IF NOT EXISTS**] *[table-reference](#table-reference)* *[table-structure](#table-structure)* [*table-option*]\*  

###### table-reference  
> [*database-name* **.**]*table-name*

###### table-structure  
> *table-schema*  
| *table-content*  
| *table-schema* *table-content*  
| **LIKE** *table-reference*   
| **(** **LIKE** *table-reference* **)**  

> `table-schema`  
**(** *table-element* [**,** *table-element*]\*)  

> `table-content`  
[**IGNORE** | **REPLACE**] [**AS**] *select-statement*  

> `table-element`    
*column-name* *data-type* [[**NOT**] **NULL**] [**PRIMARY KEY** | **UNIQUE** [**KEY**] | **CHECK** *check-condition*] [**AUTO_INCREMENT**] [**DEFAULT** *value* | **COMMENT** *char*]\*  
[**CONSTRAINT** [*constraint-name*]] {*primary-key* | *alternate-key* | *foreign-key* | **CHECK** *check-condition*}  
{**UNIQUE** | **FULLTEXT** | **SPATIAL**} {**INDEX** | **KEY**} [*index-name*] [ **USING** {**BTREE** | **HASH**} ] (*sort-specification* [**,** *sort-specification*]\*)  

> `primary-key`  
**PRIMARY KEY** [*index-name*] [{**USING** | **TYPE**} {**UNIQUE** | **FULLTEXT** | **SPATIAL**}] (*column-name* [**,** *column-name*]\*)  

> `alternate-key`  
**UNIQUE** [**INDEX** | **KEY**] [*index-name*] [ {**USING** | **TYPE**} {**UNIQUE** | **FULLTEXT** | **SPATIAL**} ] (*column-name* [**,** *column-name*]\*)  

> `foreign-key`  
**FOREIGN KEY** [*index-name*] (*column-name* [**,** *column-name*]\*)  
**REFERENCES** *table-reference* (column-name [, column-name]*)  
[  
    ON {UPDATE|DELETE}  
    {CASCADE | RESTRICT | SET NULL | NO ACTION | SET DEFAULT}  
    [MATCH {FULL|PARTIAL|SIMPLE}]  
]*  

> `table-option`  
**ENGINE** **=** *engine-name*  
| TYPE = engine-name  
| UNION = (table-name [,table-name]*)  
| INSERT_METHOD = {NO|FIRST|LAST}  
| AUTO_INCREMENT = column-number  
| COMMENT = char  
| AVG_ROW_LENGTH = integer  
| MAX_ROWS = integer  
| MIN_ROWS = integer  
| [DEFAULT] CHARACTER SET {charset-name|DEFAULT}  
| [DEFAULT] COLLATE {collate-name|DEFAULT}  
| DATA DIRECTORY = directory  
| INDEX DIRECTORY = directory  
| CHECK_SUM = {0|1}  
| DELAY_KEY_WRITE = {0|1}  
| PACK_KEYS = {0|1|DEFAULT}  
| PASSWORD = char  
| RAID_TYPE = {1|STRIPED|RAIDO}  
| RAID_CHUNKS = integer  
| RAID_CHUNKSIZE = integer  
| ROW_FORMAT = {DEFAULT|DYNAMIC|FIXED|COMPRESSED}  

> `sort-specification`  
*column-name* [**ASC** | **DESC**]  

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
LIKE子句可以在创建表时复制一张已存在表的模式，此时新表的列、数据结构、完整性约束和索引与复制的表相同，但数据内容不会复制，因此新表是空的。LIKE子句可以放在括号中。

通过AS子句也能复制表，此时SELECT语句的结果作为新表的数据内容。

#### 主键
主键是表中的一列或多列，它们的值唯一，且任一部分不允许为空值。一张表只能有一个主键。

可以使用PRIMARY KEY在列声明时指定主键。也可以在表完整性约束中声明主键，此时可以声明多个列构成主键。

MySQL自动为每个主键创建索引，默认情况下索引名为PRIMARY，可以显示指定主键的索引名。

#### 替代键
替代键是表中的一列或多列，它们的值是唯一的。与主键不同，一张表可以有多个替代键，并且可以为空值。

可以使用UNIQUE在列声明时指定替代键。也可以在表完整性约束中声明替代键，此时可以声明多个列构成替代键。

#### 外键
外键是一种参考完整性约束，指明表与表之间的约束关系。只有InnoDB引擎支持外键。一个外键声明主要包含三部分，外键定义、参照表、参照表主键，其中外键定义和参照表主键必须一致。外键保证当前表的每一个非空外键都在被参考表中的主键出现。

定义时可以指定参照动作，表示发生冲突时如何处置。ON UPDATE表示更新时的处置，ON DELETE表示删除时的处置，二者可以同时使用。

RESTRICT	表示出现冲突时必须拒绝操作
CASCAD	表示出现冲突的操作导致参照表（定义主键的表）的改变，即更新时参照表的外键也改变，删除时参照表的相应数据行也删除
SET NULL	表示出现冲突后参照表的外键被设为空值。需要注意的是，即使外键被定义为NOT NULL，此时仍然会被设置为NULL
SET DEFAULT	表示出现冲突后参照表的外键被设为默认值，只有默认值存在时才能如此定义
NO ACTION	等价于RESTRICT
为了与其他SQL产品兼容，外键约束的MATCH子句允许存在，但会被忽略。

#### 表完整性约束
CHECK完整性约束保证在表变化时作检查。

可以在定义完整性约束时显示指定约束名，这样可以在以后使用。

#### 表选项
ENGINE	指定了存储引擎，具体参见存储引擎。
TYPE	与ENGINE相同
UNION	指定合并的表名
必须使用MERGE引擎
INSERT_METHOD	指定是否允许执行INSERT语句，NO表示不允许，FIRST则添加到第一个表，LAST则添加到最后一个表
必须使用MERGE引擎
AUTO_INCREMENT	指定了自增列的起始值
COMMENT	用于表的注释
AVG_ROW_LENGTH	指出每个数据行占用的平均字节长度估计值
MAX_ROWS	指出了表的最大行数估计值
MIN_ROWS	指出了表的最小行数估计值
CHARACTER SET	
COLLATE	
DATA DIRECTORY	数据文件
INDEX DIRECTORY	索引文件
CHECK_SUM	
DELAY_KEY_WRITE	
PACK_KEYS	
PASSWORD	
RAID_TYPE	
RAID_CHUNKS	
RAID_CHUNKSIZE	
ROW_FORMAT	