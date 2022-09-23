#strings

查看文件中的可打印字符，一般用于查看二进制文件中的字符串。

## 示例

```
> strings /lib64/ld-linux-x86-64.so.2 | grep GLIBC
GLIBC_2.2.5
GLIBC_2.3
GLIBC_2.4
GLIBC_2.34
GLIBC_2.35
GLIBC_PRIVATE
GLIBC_TUNABLES
GLIBC_PRIVATE
GLIBC_TUNABLES
GLIBC_2.2.5
```
查看支持的GLIBC版本。