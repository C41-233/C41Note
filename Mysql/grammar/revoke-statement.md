# REVOKE语句

###### grant-statement
> **REVOKE**   
{**ALL** [**PRIVILEGES**] | *[database-privilege](#grant-statement.md#database-privilege)* [**,** *[database-privilege](#grant-statement.md#database-privilege)*]\*}  
[**GRANT OPTION**]  
**ON** *[table-reference-all](#table-reference-all)*  
**FROM** *[user](#user)* [**,** *[user](#user)*]\*

> **REVOKE** {**ALL** [**PRIVILEGES**] | *[table-privilege](grant-statement.md#table-privilege)* [**,** *[table-privilege](grant-statement.md#table-privilege)*]\*}  
[**GRANT OPTION**]  
**ON** *[table-reference](#table-reference)*   
**FROM** *[user](#user)* [**,** *[user](#user)*]\*

> **REVOKE** {**ALL** [**PRIVILEGES**] | *[user-privilege](grant-statement.md#user-privilege)* [**,** *[user-privilege](grant-statement.md#user-privilege)*]\*}  
[**GRANT OPTION**]  
**ON** **\*.\***  
**FROM** *[user](#user)* [**,** *[user](#user)*]\*

###### user
> <*username* [**@** *hostname*]>

###### table-reference
> <[*database-name* **.**] *table-name*>

###### table-reference-all
> <[*database-name* **.**] **\***>

REVOKE语句用于收回用户的权限。

GRANT OPTION选项使得权限的传递属性被收回。