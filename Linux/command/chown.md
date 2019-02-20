# chown
改变文件拥有者。

## 语法
`chown [options] <username>[:<groupname>] files`

## 参数
- `-c` 只有该文件的拥有者确实已经更改才显示其更改动作。

- `-f` 即使该文件拥有者无法被更改也不显示错误信息。

- `-h` 只对链接进行变更，不改变被链接指向的文件。

- `-R` 对目录下的所有文件及子目录进行相同的拥有者或组的变更操作。

- `-` 显示变更的详细信息。

## 示例
`chown flying:flyings file1.txt`  
将文件file1.txt的拥有者设为flyings组的flying。

`chown -R flying:users *`  
将当前目录下的所有文件及子文件拥有者修改为users组的flying。
