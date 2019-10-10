# ALTER EVENT语句

###### alter-event-statement
> **ALTER**  
[**DEFINER** **=** {*user-name* | **CURRENT_USER**}]  
**EVENT** *event-reference*  
**ON SCHEDULE** *[schedule-method](create-event-statement.md#schedule.method)*  
[**RENAME TO** *event-name*]  
[**ON COMPLETION** [**NOT**] **PRESERVE**]  
[**ENABLE** | **DISABLE**]  
[**COMMENT** *alphanumeric-literal*]  
**DO** *statement*

###### event-reference
> <[*database-name* **.**] *event-name*>

ALTER EVENT语句用于修改事件。

用户必须具有`EVENT`权限，成功执行后当前用户成为事件的Definer。

可以将事件移动到另一个database中，例如：

``` SQL
ALTER EVENT olddb.myevent RENAME TO newdb.myevent;
```

此时用户必须同时在两个数据库中都具有`EVENT`权限。