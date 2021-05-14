# 标量函数 - 数据库

## CURRENT_USER	

`CHAR CURRENT_USER()`

`CHAR CURRENT_USER`

返回当前登陆用户名。

## DATABASE	

`CHAR DATABASE()`

返回当前数据库名。

## DEFAULT	

`VALUE DEFAULT(COLUMN column)`

返回一列的默认值。

## FOUND_ROWS	

`INTEGER FOUND_ROWS()`	

查询前一次SELECT语句不包含LIMIT子句时的结果行数。

语句必须包含SQL_CALC_FOUND_ROWS选项。

## LAST_INSERT_ID	

`INTEGER LAST_INSERT_ID()`	

当前线程最后插入的自增值。

## USER	

`CHAR USER()`

返回当前登陆用户名。

## VERSION	

`CHAR VERSION()`

返回当前数据库版本。