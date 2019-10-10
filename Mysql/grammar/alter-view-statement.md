# ALTER VIEW语句

###### alter-view-statement
> **ALTER**  
[ **ALGORITHM** **=** {**UNDEFINED** | **MERGE** | **TEMPTABLE**} ]  
[ **DEFINER** **=** {*user-name* | **CURRENT_USER**} ]  
[ **SQL SECURITY** {**DEFINER** | **INVOKER**} ]  
**VIEW** *view-name*  
[ **(** *column-name* [**,** *column-name*]\* **)** ]  
**AS** *[select-statement](select-statement.md)*   
[ **WITH** [**CASCADED** | **LOCAL**] **CHECK OPTION**]

ALTER VIEW语句用于更改视图。

更改视图要求当前用户对视图具有`CREATE VIEW`、`DROP`权限。