# 聚合函数

聚合函数把对一组行进行求值，每组只产生一个结果行。参数是一组标量表达式，可以使用ALL或DISTINCT。

不允许对聚合函数进行嵌套。

###### aggregation-function  
> **function-name** **(** [**DISTINCT** | **ALL**] *expression* **)**

###### count-function  
> **COUNT** **(** [**DISTINCT** | **ALL**] {**\*** | *expression*} **)**

##### AVG	
求一列的算术平均值。

##### BIT_AND	
对一列的所有值按位与运算。

##### BIT_OR	
对一列的所有值按位或运算。

##### BIT_XOR	
对一列的所有值按位异或运算。

##### COUNT	
计算一列的行数，返回类型为BIGINT。

`COUNT(*)`会计数所有行（包含NULL），`COUNT(expression)`计算表达式结果非NULL的行数。

在InnoDb中，为了支持不同事务并行时行数的准确性，没有单独保存一个总行数。总是在执行时扫描表。当存在非聚簇索引时，会挑选一个占用空间最小的非聚簇索引扫描；否则扫描聚簇索引。非聚簇索引保存指向了聚簇索引的指针，聚簇索引保存了数据本身，因此扫描非聚簇索引更快。

InnoDb中`COUNT(*)`与`COUNT(1)`的结果和性能是一致的。

在MyISAM中，保存了表的总行数，因此简单的`SELECT(*)`（不带WHERE子句）是经过优化非常快的。

##### GROUP_CONCAT	
生成一组所有值的列表。

##### MAX	
确定一列最大值。

##### MIN	
确定一列最小值。

##### STD STDDEV STDDEV_POP
求一列标准差。

##### STDDEV_SAMP	
求一列样本标准差。

##### SUM	
求一列值的和。

##### VARIANCE VAR_POP
求一列方差。

##### VAR_SAMP	
求一列样本方差。