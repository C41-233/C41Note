# sed
sed是一个流编辑器，利用脚本来处理文本文件。

本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作。

sed会一次处理一行内容。处理时，把当前处理的行存储在临时缓冲区中，成为"模式空间"，接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。

## 语法
`sed [<options>] [<script>] [<file>]`

不提供\<file\>则文本从标准输入读取。

## 参数
- `-e <script>` 等价于`--expression`
- `-f <script-file>` 等价于`--file`
- `-h` 等价于`--help`
- `-i[<suffix>]` 等价于`--in-place`
- `-n` 等价于`--silent`
- `-r` 使用扩展正则表达式

- `-E` 等价于`-r`
- `-V` 等价于`--version`

- `--expression=<script>` 指定脚本，在需要多个脚本的时候使用。
- `--file=<script-file>` 指定脚本文件
- `--help` 显示帮助
- `--in-place[=<suffix>]` 修改输入的文件。如果指定了<suffix>，则将原始文件备份。
- `--quiet` 等价于`--silent`
- `--silent` sed默认会把模式空间处理完毕后的内容输出到标准输出，加上该选项后设定为安静模式，不会输出默认打印信息。除非子命令中特别指定打印选项，则只会把匹配修改的行进行打印。
- `--version` 显示版本

## 脚本
`<script> := [<addr>][<function>]`

#### 行定址
定址模式 | 描述
---|---
x | 第x行
x,y | 第x至y行
x,+y | 第x至x+y行
x,~y | 第x至从x行开始的第一个y的倍数行
$ | 最后一行
/<pattern> | 匹配正则表达式对应的行 
<addr>! | 匹配不满足定址的行 

#### 函数
函数 | 描述
---|---
[`a <content>`](#函数-a) | 在匹配行下方插入行，插入`\n<content>`
[`r <file>`](#函数-r) | 在匹配行下方插入文件内容，插入`\n<file>`
[`i <content>`](#函数-i) | 在匹配行上方插入行，插入`<content>\n`
[`=`](#函数-) | 在匹配行上方插入行号
[`c <content>`](#函数-c) | 将匹配行替换，在连续行的情况下将作为一个整体替换
[`d`](#函数-d) | 删除匹配行
[`y/<chars-from>/<chars-to>/`](#函数-y) | 将\<chars-from\>中的每个字符分别替换为\<chars-to\>中的对应字符，源字符与目标字符必须一一对应
[`s/<pattern>/<replacement>/<flags>`](#函数-s) | 对匹配行进行正则替换


## 示例

#### 安静模式（-n）
```shell
>> echo -e 'hello world\nnihao' | sed -n 's/hello/A/'

```
没有输出。

```shell
>> echo -e 'hello world\nnihao' | sed -n 's/hello/A/p'
A world
```
`-n`与`p`一起使用，只输出匹配并修改的内容。

#### 多条命令
```shell
>> echo -e 'hello world' | sed -e 's/hello/A/' -e 's/world/B/'
A B
>> echo -e 'hello world' | sed 's/hello/A/;s/world/B/'
A B
```

#### 函数 s
\<flags\>包含：
- `<n>` 1-512，每行第n次出现时替换
- `i` 忽略大小写
- `g` 全局替换
- `p` 打印模式空间的内容
- `w <file>` 输出到文件

不指定flags的情况下，默认为1，即每行第1次出现时替换。

\<replacement\>中可以包含：
- `&` 整个匹配内容
- `\<n>` 正则表达式分组，从1开始

扩展正则表达式需要`-r`参数。

```shell
>> echo -e 'aa\nab\nac' | sed 's/a/A/'
Aa
Ab
Ac
```
将每行第一个`a`替换为`A`。

```shell
>> echo -e 'abcABC123' | sed -r 's/([a-z]+)([A-Z]+)([0-9]+)/\3\1/'
123abc
```
正则表达式分组交换顺序。

```shell
>> echo -e 'abc\nABC\n123' | sed -r 's/.*/&end/'
abcend
ABCend
123end
```
为每一行结尾增加字符串`end`。

```shell
>> echo -e 'abc\nABC\n123' | sed -rn 's/123/&end/p'
123end
```
只输出被替换的行（替换后的结果）。

#### 函数 a
```shell
>> echo -e 'a\nb\nc' | sed 'a A'
a
A
b
A
c
A
```
每一行下插入一行A。

```shell
>> echo -e 'a\nb\nc' | sed '1,2a A'
a
A
b
A
c
```
第1至2行下分别插入一行A。

```shell
>> echo -e 'a\nb\nc' | sed '1,2a A\nB'
a
A
B
b
A
B
c
```
第1至2行下分别插入一行A和一行B。

#### 函数 r
```shell
>> cat test.txt
XYZ
>> echo -e 'a\nb\nc' | sed '2r test.txt'
a
b
XYZ
c
```
将文件test.txt的内容插入在第2行下方。

#### 函数 i
```shell
>> echo -e 'a\nb\nc' | sed 'i A'
A
a
A
b
A
c
```
每一行上插入一行A。

#### 函数 c
```shell
>> echo -e 'a\nb\nc' | sed 'c A'
A
A
A
```
替换每一行为A。

```shell
>> echo -e 'a\nb\nc' | sed '1,2c A'
A
c
```
第1-2行整体替换为A。

#### 函数 d
`sed '/aaa/d'`   
将包含aaa的行删除。

`sed '/^aaa/,/^bbb/'`   
将从以`aaa`开头的行至以`bbb`开头的行之间的所有行删除。

`sed '/^$/d'`   
将空行删除。

`sed '1,/^aaa/d'`   
将第1行至以aaa开头的行之间的所有行删除。

```shell
>> echo -e 'a\nb\nc' | sed '2d'
a
c
```
删除第2行。

#### 函数 y
```shell
>> echo -e 'a-line\nb-line\nc-line' | sed 'y/ac/AC/'
A-line
b-line
C-line
```
将每一行的`a`字符替换为`A`，`c`字符替换为`C`。

#### 函数 =
```shell
>> echo -e 'a\nb\nc' | sed '2,3='
a
2
b
3
c
```
在第2-3行上方分别输出行号。

#### 行定址
`sed 's/aaa/bbb/g'`  
将`aaa`替换为`bbb`。

`sed '4s/aaa/bbb/g'`   
将`aaa`替换为`bbb`。

`sed '2,4s/aaa/bbb/g'`   
将第2-4行中的`aaa`替换为`bbb`。

`sed '2,+4s/aaa/bbb/g'`   
将第2行开始的4行（第2-6行）中的`aaa`替换为`bbb`。

`sed '4,~3s/aaa/bbb/g'`   
将第4行开始的第一个3的倍数行（第4-6行）中的`aaa`替换为`bbb`。

`sed '2,3s{/cn/china/g;/a/b/g}'`   
将中第2-3行中的`cn`替换为`china`，`a`替换为`b`。
