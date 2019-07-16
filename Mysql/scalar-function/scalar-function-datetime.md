# 标量函数 - 日期时间

## ADDDATE	

`DATETIME ADDDATE(DATETIME date, INTERVAL value TYPE)`	

为日期时间增加间隔。

## ADDTIME	

`TIME ADDTIME(TIME time, INTEGER interval)`	

为时间增加间隔。

## CURDATE	

`DATE CURDATE()`	

当前日期。

## CURTIME	

`TIME CURTIME()`	

当前时间。

## DATEDIFF	

`INTEGER DATEDIFF(DATE end, DATE begin)`	

计算两个日期间相隔的天数。

## DATE_ADD	

`DATETIME DATE_ADD(DATETIME datetime, INTERVAL value TYPE)`	

为日期时间增加间隔。

## DATE_FORMAT	

`CHAR DATE_FORMAT(DATETIME datetime, CHAR format)`	

格式化日期时间字符串。

## DAYNAME	

`CHAR DAYNAME(DATE date)`	

提取一个日期的星期名。

## DAYOFMONTH	

`INTEGER DAYOFMONTH(DATE date)`	

返回日期是当月的第几日。

## DAYOFWEEK	

`INTEGER DAYOFWEEK(DATE date)`	

返回日期的星期数（星期日为1）。

## DAYOFYEAR	

`INTEGER DAYOFYEAR(DATE date)`	

返回一个日期是当年的第几天。

## FROM_UNIXTIME	

`DATETIME FROM_UNIXTIME(TIMESTAMP timestamp)`	

获取UNIX时间戳的日期时间。

## HOUR	

`INTEGER HOUR(TIME date)`	

返回小时数（0~23）。

## INTEGER	

`WEEK(DATE date, INTEGER first)`	

返回日期是一年的第几周(first默认值0，1表示周一是周的开始，0表示周日是周的开始)。

## MINUTE	

`INTEGER MINUTE(TIME date)`	

返回分钟数（0~59）。

## MONTH	

`INTEGER MONTH(DATE date)`	

获得日期的月份数值。

## MONTHNAME	

`CHAR MONTHNAME(DATE date)`	

提取一个日期的月份名。

## NOW	

`DATETIME NOW()`	

获得当前日期时间。

## QUARTER	

`INTEGER QUARTER(DATE date)`	

返回日期是一年的第几个季度。

## UNIX_TIMESTAMP	

`TIMESTAMP UNIX_TIMESTAMP(DATETIME datetime)`	

获取指定日期时间的UNIX时间戳。

## SECOND	

`INTEGER SECOND(TIME date)`	

返回秒钟数（0~59）。

## WEEK	

`INTEGER WEEK(DATE date)`	

## WEEKDAY	

`INTEGER WEEKDAY(DATE date)`	

返回日期的星期数（星期一为0）。

## YEAR	

`INTEGER YEAR(DATE date)`	

从日期中提取年份。