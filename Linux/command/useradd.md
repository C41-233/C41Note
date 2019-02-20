# useradd
增加一个用户。

##语法
`useradd [options] [<username>]`

- `-d <dir>` 指定用户主目录，默认情况下，将会在/home目录下新建一个与用户名相同的用户主目录

- `-g <组名>` 指定用户归属的组名。默认地，每当创建一个新用户的时候，一个与用户名相同的组就会被创建，而这个用户就是该组的成员

- `-s <shell>` 指定用户登录时使用的shell，默认的shell为/bin/bash

- `-u <uid>` 指定新用户的ID

- `-G <组列表>` 在Linux系统中，一个用户可以属于一个组，也可以属于多个组，其中用户在初始化时属于的组称为主组。如果要让用户属于其它的组，使用该选项

## 示例
`useradd user1 `    
新建一个用户user1，主目录为/home/user1，所属组为usr1。

`useradd -G ogrp xxx`    
将已经建立的用户xxx添加到组ogrp中。
