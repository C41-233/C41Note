# echo
输出字符串，通常用于shell脚本中。

## 语法
`echo [options] string`

## 参数
- `-e` 支持反斜杠转义。
- `-n` 输出后不换行。默认情况下输出后换行。
- `-E` 不支持反斜杠转义，注意Shell下本身存在转义。（默认）
