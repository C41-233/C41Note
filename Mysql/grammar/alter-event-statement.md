# ALTER EVENT语句

###### alter-event-statement
> **ALTER EVENT** *event-reference*  
**ON SCHEDULE** *[schedule-method](create-event-statement.md#schedule.method)*  
[**RENAME TO** *event-name*]  
[**ON COMPLETION** [**NOT**] **PRESERVE**]  
[**ENABLE** | **DISABLE**]  
[**COMMENT** *alphanumeric-literal*]  
**DO** *statement*

###### event-reference
> <[*database-name* **.**] *event-name*>

ALTER EVENT语句用于修改事件。