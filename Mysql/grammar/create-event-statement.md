# CREATE EVENT语句

###### create-event-statement
> **CREATE EVENT**  
[**IF NOT EXISTS**] *event-reference*  
**ON SCHEDULE** *schedule-method*  
[**ON COMPLETION** [**NOT**] **PRESERVE*]  
[**ENABLE** | **DISABLE**]  
[**COMMENT** *alphanumeric-literal*]  
**DO** *statement*  

###### event-reference
> <[*database-name* **.**] *event-name*>

###### schedule-method
> **AT** *timestamp*  

> **EVERY** *integer* *time* [**STARTS** timestamp] [**ENDS** timestamp]

###### time
> **MICROSECOND**  
| **SECOND**  
| **MINUTE**  
| **HOUR**  
| **DAY**  
| **WEEK**  
| **MONTH**  
| **QUARTER**  
| **YEAR**  

CREATE EVENT语句用于创建事件。事件是满足指定时间条件自动触发的过程。

一个事件可以是打开或关闭的。打开的事件会被调度器调度执行，而关闭的事件不会被调度。系统变量EVENT_SCHEDULER设置调度器是否打开。一个事件被创建后立即成为打开状态（ENABLE），可以显式指定DISABLE关闭事件。

AT子句使得事件在指定时间执行一次，EVERY子句使得事件循环执行多次。

同一时刻调用的多个事件，不能假定他们的调用顺序。

ON COMPLETION选项指定了事件最后一次调用后是否被删除，默认情况下会被删除（NOT PRESERVE）；可以显式指定PRESERVE使得事件保留。

COMMENT选项为事件添加注释。