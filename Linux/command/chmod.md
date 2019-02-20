# chmod
修改文件权限。

## 语法

```
chmod [options] <who> <operator> <what> <files>
chmod [options] <permission> files
```

## 参数
- `-c` 只有该文件的确实已经更改才显示其更改动作。

- `-f` 即使该文件无法被更改也不显示错误信息。

- `-R` 对目录下的所有文件及子目录进行相同的权限变更操作。

- `-v` 显示变更的详细信息。

\<who\>表示修改的权限类别：
- `u` owner 
- `g` group 
- `o` others 
- `a` 所有用户

\<operator\>表示权限操作： 
- `+` 添加权限 
- `-` 移除权限 
- `=` 设置权限

\<what\>表示权限类型 
- `r` 读 
- `w` 写 
- `x` 执行 
- `X` 仅当该文件是目录或可执行时 
- `s` suid或sgid

\<permission\>表示一次性指定要设置的权限，用八进制表示。

权限每一位的含义如下：

11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0
---|---|---|---|---|---|---|---|---|---|---|---
suid | sgid | sticky | owner r | ower w | owner x | group r | group w | group x | other r | other w | other x

## 示例
`chmod ugo+r file1.txt`  
为文件file1.txt的所有用户增加读权限。

`chmod 777 file1.txt`   
为文件file1.txt的所有用户增加所有权限。
