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
对一列行数，COUNT(*)表示计数所有行（包括NULL）。

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