# ALTER TABLE语句

###### alter-table-statement
> **ALTER** [**IGNORE**] **TABLE** [table-reference](create-table-statement.md#table-reference) {table-change | column-change | constraint-change | index-change}

ALTER TABLE语句用于更改表的结构。

IGNORE选项使得出错时不会显示错误信息。