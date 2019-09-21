# CREATE USER语句

###### create-user-statement
> **CREATE USER** *user-specification* [**,** *user-specification*]\*

###### user-specification
> *user* [**IDENTIFIED BY** [**PASSWORD**] *password*]

###### user
> *username* [**@** *hostname*]

CREATE USER语句用于创建用户。用户名、主机和密码必须是字符串形式，即用引号包围。如果指定主机'localhost'，则表示本地主机。

用户名相同但主机不同的用户视为不同的两个用户。

如果没有指定密码，则允许不使用密码登陆。

新创建的用户没有任何权限。