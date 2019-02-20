# chgrp
修改文件所属组。

## 语法
`chgrp [options] <gname> <files>`

<gname> 新的文件所属组名

## 参数
- `-R` 对当前目录下的所有文件及子目录进行相同的拥有者或组的变更操作

## 示例
chgrp bin log2012.log  
将log2012.log文件改为bin属组。
