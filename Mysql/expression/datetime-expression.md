# 日期时间表达式

###### datetime-expression  
> *datetime* [**+**|**-**] **INTERVAL** *length* *interval-type*

###### interval-type  
> **MICROSECOND**   
| **SECOND**    
| **MINUTE**    
| **HOUR**    
| **DAY**    
| **WEEK**    
| **MONTH**    
| **QUARTER**    
| **YEAR**    
| **SECOND_MICROSECOND**    
| **MINUTE_MICROSECOND**    
| **MINUTE_SECOND**    
| **HOUR_MICROSECOND**    
| **HOUR_SECOND**    
| **HOUR_MINUTE**    
| **DAY_MICROSECOND**    
| **DAY_SECOND**    
| **DAY_MINUTE**    
| **DAY_HOUR**    
| **YEAR_MONTH**   

日期时间运算构成复合标量表达式，可以对日期、时间、日期时间、时间戳类型进行运算。

日期时间通过加减法添加间隔时间。

例如：

``` SQL
SELECT paymentno, payment_date, payment_date+INTERVAL 7 DAY
FROM penalties
WHERE paymentno>5
```

查找编号大于5的每次罚款，获得支付编号、支付日期及支付后7天的日期。
对于复合间隔，要用引号，并且两个值之间用符合隔开。

例如：`X + INTERVAL '4:2' HOUR_MINUTE` 等价于 `X + INTERVAL 4 HOUR + INTERVAL 2 MINUTE`。