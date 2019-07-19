# 标量函数 - 控制流

## COALESCE	

`T COALESCE(params...)`

返回多个参数中第一个不为空值的参数值

## IF	

`T IF(BOOLEAN condition, value1, value2)`

如果condition为true返回value1，否则返回value2

## IFNULL	

`T IFNULL(value1, value2)`	

如果value1不为空返回value1，否则返回value2