# 字符集与校对

字符集（Character Set）是字符的编码方式，校对（Collation）是字符的比较方式。

通过`SHOW CHARSET`显示所有字符集，`SHOW COLLATION`显示所有校对。

| 字符集 | 默认校对 | 说明 | 最大字节 |
| --- | --- | --- | --- |
| latin1 | latin1_swedish_ci | cp1252 West European | 1 | 
| latin2 | latin2_general_ci | ISO 8859-2 Central European | 1 | 
| ascii | ascii_general_ci | US ASCII | 1 | 
| gb2312 | gb2312_chinese_ci | GB2312 Simplified Chinese | 2 | 
| gbk | gbk_chinese_ci | GBK Simplified Chinese | 2 | 
| latin5 | latin5_turkish_ci | ISO 8859-9 Turkish | 1 | 
| utf8 | utf8_general_ci | UTF-8 Unicode | 3 | 
| latin7 | latin7_general_ci | ISO 8859-13 Baltic | 1 | 
| utf8mb4 | utf8mb4_general_ci | UTF-8 Unicode | 4 | 
| utf16 | utf16_general_ci | UTF-16 Unicode | 4 | 
| utf16le | utf16le_general_ci | UTF-16LE Unicode | 4 | 
| utf32 | utf32_general_ci | UTF-32 Unicode | 4 | 
| binary | binary | Binary pseudo charset | 1 | 

因历史遗留，`utf8`仅支持最多3字节的标准UTF8（所以不支持emoji），`utf8mb4`是支持最多4字节UTF8。

校对的命名一般以字符集名开头，包含特定的比较规则名称。例如`latin1_bin`、`utf8mb4_general_ci`。

- `bin` 以二进制方式存储与比较。
- `general_ci` 按照字符比较，不区分大小写。
- `general_cs` 按照字符比较，区分大小写。
- `unicode_ci` 按照unicode比较（例如`ß=ss`）

数据库元表使用`utf8`字符集。