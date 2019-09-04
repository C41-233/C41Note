# SHOW DATABASES语句

> `show-databases-statement`   
**SHOW DATABASES** [**LIKE** *like-pattern*]

显示所有数据库列表。

所有用户都允许执行SHOW DATABASES语句。如果需要获得该执行权限的用户才能执行该语句，那么必须设置系统变量SKIP_SHOW_DATABASE的值为ON。