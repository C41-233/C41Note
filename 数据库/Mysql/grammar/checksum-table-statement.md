# CHECKSUM TABLE语句

###### checksum-table-statement
> CHECKSUM TABLE *table-reference* [**,** *table-reference*]\* [**QUICK** | **EXTENDED**]

###### table-reference
> [*database-name* **.**] *table-name*

对于每个表，都可以通过CHECKSUM TABLE获得一个校验和。

MyISAM存储引擎将校验和存储在表中，对表作出的任何更新都会更新校验和。

如果指定EXTENDED选项，则总是计算校验和；如果指定QUICK选项，则返回存储的校验和（非MyISAM引擎表返回空值）。默认是EXTENDED选项。