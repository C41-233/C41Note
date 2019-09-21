# PREPARE语句
###### prepare-statement
> **PREPARE** *statement-name* **FROM** {*char* | *user-variable*}

PREPAREE语句用于准备预处理SQL语句。该语句会检查语法和存在性，并进行优化。

FROM子句后面要跟上SQL语句字符串。

SQL语句串中使用`?`作为占位符，使得可以在EXECUTE语句中提供具体参数。