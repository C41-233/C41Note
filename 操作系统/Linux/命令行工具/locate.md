# locate
在文件索引数据库中查找文件，效率比find高。但可能无法查找最新的文件。

## 语法
`locate [options] <files>`

## 参数
- `-e <dirs>` 排除指定目录。

- `-d` 指定数据库的路径

- `-f` 特定的档案系统排除。

- `-h` 显示辅助讯息

- `-i` 大小写敏感

- `-l <level>` 安全级别，0表示不进行安全检查，1表示安全模式（用户不会看到无权限的文件）

- `-n <num>` 至多显示num个输出。

- `-o` 指定数据库存的名称。

- `-q` 安静模式，不会显示任何错误讯息。

- `-r <regex>` 正则匹配

- `-u` 从根目录开始创建数据库。

- `-v` 显示更多的讯息

- `-V` 显示程序的版本讯息

- `-U <dir>` 从指定目录开始创建数据库
