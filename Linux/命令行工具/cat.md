# cat
按照指定次序显示文件。配合输出重定向可以连接多个文件。

## 语法
`cat [options] [files]`

## 参数
- `-b` 给非空输出行编号。

- `-e` 等价于-vE。

- `-n` 等价于--number。

- `-s`  等价于--squeeze-blank。

- `-t` 等价于-vT。

- `-v`  等价于--show-nonprinting。

- `-A`  等价于-vET。

- `-E` 等价于--show-ends。

- `-T` 等价于--show-tabs。

- `--help` 显示帮助并退出。

- `--number-nonblank` 给非空输出行编号。

- `--number` 给所有输出行编号，编号从1开始。

- `--show-all` 等价于-A。
- 
- `--show-ends` 在每行结束显示$ 。

- `--show-nonprinting` 除了LFD和TAB之外所有控制符用^和M-记方式显示。

- `--show-tabs` 把TAB字符显示为^I。

- `--squeeze-blank` 将所有的连续的多个空行替换为一个空行。

- `--version` 显示版本信息并退出。
