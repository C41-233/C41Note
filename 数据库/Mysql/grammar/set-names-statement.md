# SET NAMES语句

###### set-names-statement
> **SET NAMES** {*charset-specification* | **DEFAULT**}

###### charset-specification
> *charset_name* [**COLLATE** *collation_name*]

为当前会话一次性设置`character_set_client`、`character_set_connection`、`character_set_results`。

*charset_name*和*collation_name*可以使用引号。