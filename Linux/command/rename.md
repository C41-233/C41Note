# rename
修改文件名。

perlexpr是perl正则表达式，指定了文件名修改的模式。files是要参与匹配的文件，如果不提供该参数，文件名从标准输入提供。

## 语法
`rename [options] <perlexpr> [files]`

## 参数
- `-f` 等价于`--force`
- `-n` 等价于`--no-act`
- `-v` 等价于`--verbose`
- `--force` 覆盖已经存在的文件
- `--no-act` 并不真正的执行命令，而只是显示哪些文件名应该怎么进行更改,用于测试模式
- `--verbose` 打印成功更改的文件名列表

## 示例
`rename 's/\.bak$//' *.bak`   
在当前目录下，把文件的.bak结尾去掉。

`rename 's/$/.zip/' *`   
当前目录下所有文件添加.zip扩展名

`rename 's/^/hello/' *`   
当前目录下所有文件名头部添加hello。

`rename 'y/A-Z/a-z/' *`   
在当前目录下，把文件名中的大写字母替换为小写字母。

`rename 's/[[:space:]]+/_/g' *`   
在当前目录下，把文件名中的空格去掉。

`rename 's/.html$/.htm/' *`   
把当前目录下.html扩展名替换为.htm
