# find
查找文件或目录，该命令会递归在子目录下查找。

## 语法
`find [\<files\>] [\<expressions\>]`

\<files\>指定了要查找的目录，如果不给出，则默认是当前目录。

## \<expressions\>表达式
\<expressions\>指定了查找条件，可以使用()分隔表达式。

- 逻辑与：`<exp1> <exp2>` 或 `<exp1> -a <exp2>` 或 `<exp1> -and <exp2>`
- 逻辑非：`!<exp>` 或 `-not <exp>`
- 逻辑或：`<exp1> -o <exp2>` 或 `<exp1> -or <exp2>`

表达式参数：

- `-amin [-|+]<n>`	按文件访问时间来查找，-n指n分钟以内，+n指n分钟以前，默认为-
- `-atime [-|+]<n>`	按文件访问时间来查找，-n指n天以内，+n指n天以前，默认为-
- `-anewer {<file1> !<file2>}`	访问时间比file1新但比file2旧的文件
- `-cmin [-|+]<n>`	按文件创建时间来查找文件，-n指n分钟以内，+n指n分钟以前，默认为-
- `-ctime [-|+]<n>`	按文件创建时间来查找文件，-n指n天以内，+n指n天以前，默认为-
- `-cnewer {<file1> !<file2>}`	创建时间比file1新但比file2旧的文件
- `-mmin [-|+]<n>`	按文件更改时间来查找文件，-n指n分钟以内，+n指n分钟以前，默认为-
- `-mtime [-|+]<n>`	按文件更改时间来查找文件，-n指n天以内，+n指n天以前，默认为-
- `-newer {<file1> !<file2>}`	更改时间比file1新但比file2旧的文件
- `-cpio`	对匹配的文件使用cpio命令，将他们备份到磁带设备中
- `-depth`	使查找在进入子目录前先行查找完本目录
- `-empty`	大小为0的文件或空目录
- `-follow`	如果遇到符号链接文件，就跟踪链接所指的文件
- `-ftype <type>`	查位于某一类型文件系统中的文件，这些文件系统类型通常可 在/etc/fstab中找到
- `-gid <id>`	文件组id
- `-group <groupname>`	按组来查找
- `-iname <filename>`	忽略大小写的文件名
- `-ipath <path>`	忽略大小写的路径名称
- `-mount`	查文件时不跨越文件系统mount点
- `-name <filename>`	文件名
- `-nogroup`	无有效属组的文件，即文件的属组在/etc/groups中不存在
- `-nouser`	无有效属主的文件，即文件的属主在/etc/passwd中不存
- `-path <path>`	路径名称
- `-perm <permission>`	按执行权限permission来查找
- `-pid <pid>`	文件pid
- `-print`	将匹配的文件输出到标准输出
- `-prune`	忽略某个目录
- `-size [+|-]<n>`	查找长度为n的文件，后面可以加上单位（k表示KB，c表示字符数，b表示块数，w表示双字节数），+表示大于，-表示小于
- `-type {b|d|c|p|l|f}`	块设备、目录、字符设备、管道、符号链接、普通文件
- `-user <username>`	按文件属主来查找


## 示例
`find ~ -name "*.txt" -print`  
在主目录下递归查找后缀为.txt的文件并显示

`find . -name "[A-Z]*" -print`   
在当前目录下递归查找大写字母开头的文件并显示
