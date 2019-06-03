# awk
awk是行文本处理器。

## 语法
`awk [options] <script> [<files>]`

脚本从参数中输入。

`awk [options] -f <script-file> [<files>]`

脚本从文件中读取。

不包含\<file\>时，输入从标准输入中读取。

## 参数
- `-v <var>=<value>` 定义环境变量，可以在脚本内通过`ENVIRON`变量读取
- `-F <regular>` 设置字段分隔符

## 脚本

脚本包含一组 `<pattern> {<actions>}` 和函数定义。

\<pattern\>可以为：
- BEGIN 
- END
- \<expressions\>

不包含\<actions\>时，默认为`{print}`。不包含\<pattern\>时，默认匹配。

BEGIN块在程序开始时执行，END块在程序结束时执行，其他匹配在每一行执行。

BEGIN和END不能省略\<actions\>。

### 数据类型
- 数字类型，以浮点数表示。非0表示true，0表示false
- 字符串类型，双引号。非空字符串表示true，空字符串表示false
- 数组类型，以字符串作为key，数字类型会转换到字符串。`array[<expr>]`访问数组元素，多维数组以`array[expr1, expr2]`或`array[expr1 SUBSEP  expr2]`的形式访问。

### 操作符

类型 | 操作符
---|---
赋值 | `=` `+=` `-=` `*=` `/=` `%=` `^=` `++` `--`
条件 | `? :`
逻辑 | `||` `&&` `!`
数组 | `in`
匹配 | `~` `!~`
关系 | `<` `>` `<=` `>=` `==` `!=`
算术 | `+` `-` `*` `/` `%` `^`

`<string> <string>` 

两个连续的字符串变量或常量表示字符串连接。

```
<expr> in <array>
(expr1, expr2) in <array>
```   
如果数组元素存在返回1，否则返回0。

`delete <array>[<expr>]`   

删除数组元素。

`delete <array>`   

清空数组。

### 流程语句
``` C
if ( <expr> ) <statement>
if ( <expr> ) <statement> else <statement>
while ( <expr> ) <statement>
do <statement> while ( <expr> )
for ( <opt-expr> ; <opt-expr> ; <opt-expr> ) <statement>
for ( <var> in <array> ) <statement>
continue
break
```

### 正则表达式语句
```
/<regular>/ {<action>}
<expr> ~ /<regular>/ {<action>}
```

省略\<expr\>等价于`$0 ~ /<regular>/ {<action>}`。

### 预定义变量

变量 | 说明
---|---
ARGC | 命令行参数个数
ARGV | 命令行参数数组，下标以0开始
ENVIRON | 环境变量数组，额外的环境变量可以通过`-v`参数提供
FILENAME | 输入文件名，标准输入表示为`"-"`
$0 | 当前行
$\<n\> | 当前行第n个字段
NF | 当前行字段数量
NR | 当前行号，多个文件合并递增
FNR | 当前行号，每个文件单独计数
FS | 输入字段分隔符
RS | 输入行分隔符，初始为`"\n"`
OFS | 输出字段分隔符，初始为空格
ORS | 输出行分隔符，初始为`"\n"`
CONVFMT | 数字转字符串的格式，初始为`"%.6g"`
OFMT | 输出字符串的格式，初始为`"%.6g"`
RSTART | 上一次调用`match`函数设置的index
RLENGTH | 上一次调用`match`函数设置的length
SUBSEP | 组成多维数组的分隔符，初始为`"\034"`

### 内置函数

#### 字符串

```
gsub(r, s, t) 
gsub(r, s)
```
在变量t中匹配正则表达式r，并替换为s，返回被替换的数量。

省略参数t时，以$0替代。

```
index(s, t)
```
返回字符串t在s中的下标（从1开始），如果不存在则返回0。

```
length(s)
```
返回字符串长度。

```
match(s, r)
```
返回正则表达式r在字符串s中匹配的下标，如果未匹配到则返回0。

变量RSTART被设置为返回值。RLENGTH被设置为匹配到的长度。其中，-1表示未匹配到。

如果空字符串被匹配到，RLENGTH被设置为0。返回值为1表示匹配在首部，返回值为length(s)+1表示匹配在尾部。

```
split(s, a, r)
split(s, a)
```
根据正则表达式r分割字符串s，并存入数组a。

省略参数a时，以`FS`分割。

```
sprintf(format, expr-list...)
```
根据格式format和expr-list返回字符串。

```
sub(r, s, t)
sub(r, s)
```
类似于`gsub`，但是只替换一次。


```
substr(s, i, n)
substr(s, i)
```
返回字符串s从下标i开始的子串，长度为n。

```
tolower(s)
```
字符串转小写。

```
toupper(s)
```
字符串转大写。

#### 算术运算

```
atan2(y, x)
cos(x)
exp(x)
log(x)
sin(x)
sqrt(x)
```

```
int(x)
```
x向下取整。

```
rand()
```
返回[0, 1)内的随机数。

```
srand(expr)
srand()
```
设置随机数种子。

省略参数`expr`表示使用当前时钟。

#### 输出

```
print
```
输出`$0 ORS`。

```
print expr1, expr2, ..., exprn
```
输出`expr1 OFS expr2 OFS ... exprn ORS`。

```
printf format, expr-list
```
格式化输出。

#### 输入
```
getline
```
读取一行至`$0`，并更新`NF`、`NR`、`FNR`。

```
getline < file
```
读取整个文件至`$0`，并更新`NF`。

```
getline var
```
读取一行至`var`，并更新`NR`、`FNR`。

```
getline var < file
```
读取整个文件至`var`。

## 示例
```Shell
awk '{x$0[]+=1}END{for(i in x){print i,x[i]}}'
```
统计相同行出现的次数。

```Shell
awk '!/^\s$/{print $0}'
```
删除空行。

```Shell
awk '{sum+=$1};END{print sum}'
```
按行求和。
