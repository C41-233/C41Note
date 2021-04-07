# test
条件测试。用于shell脚本的条件语句。

0表示true，非0表示false。

等价于 `[ <condition> ]` 结构。

## 语法
`test <condition>`

### 字符串测试
- `<str1> = <str2>`	字符串相等
- `<str1> != <str2>`	字符串不等
- `-z <str>`	字符串为空
- `-n <str>`	字符串非空

### 整数测试
- `<expr1> -eq <expr2>`	相等
- `<expr1> -nq <expr2>`	不等
- `<expr1> -gt <expr2>`	大于
- `<expr1> -ge <expr2>`	大于等于
- `<expr1> -lt <expr2>`	小于
- `<expr1> -le <expr2>`	小于等于

### 逻辑判断
- `! <expr>`	逻辑非
- `<expr1> -a <expr2>`	逻辑与
- `<expr1> -o <expr2>`	逻辑或

### 文件测试
- `-e <file>`	文件存在
- `-s <file>`	文件非空
- `-f <file>`	文件是普通文件
- `-d <file>`	文件是目录
- `-b <file>`	文件是块设备
- `-L <file>`	文件是符号链接
- `-O <file>`	文件属主是当前用户
- `-r <file>`	文件可读
- `-w <file>`	文件可写
- `-x <file>`	文件可执行

注意：表达式与操作符之间必须有空格。
