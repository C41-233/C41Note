# comm
对两个己排序文件进行逐行比较。

## 语法
`comm [options] <file1> <file2>`

file1或file2指定为-，表示标准输入。

## 参数
- `-1` 不输出仅在file1中出现的行。

- `-2` 不输出仅在file2中出现的行。

- `-3` 不输出在file1和file2中都出现的行。
