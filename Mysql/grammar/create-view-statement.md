# CREATE VIEW语句

###### create-view-statement
> **CREATE** [**OR REPLACE**]  
[ **DEFINER** **=** {*user-name* | **CURRENT_USER**} ]  
[ **SQL SECURITY** {**DEFINER** | **INVOKER**} ]  
[ **ALGORITHM** **=** {**MERGE** | **TEMPTABLE** | **UNDEFINED**} ]  
**VIEW** *view-name*  
[ **(** *column-name* [**,** *column-name*]\* **)** ]  
**AS** *select-statement*  
[ **WITH** [**CASCADED** | **LOCAL**] **CHECK OPTION** ]

CREATE VIEW语句用于创建视图。

DEFINER子句用于指定视图的定义者。默认情况下定义者就是创建者，与指定CURRET_USER效果一致。

SQL SECURITY子句规定查询权限。默认为DEFINER，表示创建视图的用户必须拥有相关表的查询权限，视图用户不需要权限。INVOKER选项表示必须显式子把访问表所需的权限授予用户。

ALGORITHM子句指定视图内部处理算法。MERGE方法使得查询视图的SELECT语句和视图公式组合处理。TEMPTABLE方式使得视图公式查询结果先存储到临时表，然后对临时表进行查询。UNDEFINED表示MySQL自动选择。

OR REPLACE选项表示，如果视图名已经存在，则用新的视图公式覆盖旧的。

视图列名默认等于SELECT子句的列名，也可以显式定义视图列名。

WITH CHECK OPTION子句使得对视图表更新时进行有效性检查。

视图可以嵌套，WITH LOCAL CHECK OPTION只对将要更新的视图中的条件进行检查，WITH CASCADED CHECK OPTION会检查所有相关视图。默认选项是CASCADED。