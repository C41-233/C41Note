# DROP VIEW语句

###### drop-view-statement
> **DROP VIEW** [**IF EXISTS**] *table-reference* [**,** *table-reference*]\* [**RESTRICT** | **CASCADE**]

###### table-reference
> [*database-name* **.**] *table-name*

DROP VIEW语句用于删除视图。

指定IF EXISTS选项后，如果不存在相应视图，不会返回出错消息。

RESTRICT和CASCADE选项没有效果。