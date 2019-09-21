# ALTER VIEW语句

###### alter-view-statement
> **ALTER**  
[ **DEFINER** **=** {*user-name* | **CURRENT_USER**} ]  
[ **SQL SECURITY** {**DEFINER** | **INVOKER**} ]  
[ **ALGORITHM** **=** {**MERGE** | **TEMPTABLE** | **UNDEFINED**} ]  
**VIEW** *view-name*  
[ **(** *column-name* [**,** *column-name*]\* **)** ]  
**AS** *[select-statement](select-statement.md)*   
[ **WITH** [**CASCADED** | **LOCAL**] **CHECK OPTION**]

ALTER VIEW语句用于更改视图。