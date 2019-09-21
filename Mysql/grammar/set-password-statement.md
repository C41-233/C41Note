# SET PASSWORD语句

###### set-password-statement
> **SET PASSWORD** [**FOR** *user*] **=** **PASSWORD** **(** *password* **)**

###### user
> <*username* [**@** *hostname*]>

SET PASSWORD用于为用户修改密码。密码是用引号包围的字符串。

如果不指定用户，则默认为当前用户。