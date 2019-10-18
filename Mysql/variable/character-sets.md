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

校对的命名一般以字符集名开头，包含特定的比较规则名称以及后缀。例如`latin1_bin`、`utf8mb4_general_ci`。

`binary`字符集只包含`binary`校对，比较每个字节。

后缀包含：
- `_bin` 以字符的值比较。
- `_ai` 方言无关。
- `_as` 方言有关。
- `_ci` 不区分大小写。
- `_cs` 区分大小写。

如果没有指定`_ai`和`_as`，则`_ci`同时表示`_ai`，`_cs`同时表示`_as`。

比价规则包含：
- `_general` 按照字符比较。
- `_unicode` 按照unicode比较（例如`ß=ss`）。

Unicode字符集可以指定UCA版本，没有指定时默认为4.0.0。例如`utf8_unicode_520_ci`指定UCA 5.2.0，`utf8_unicode_ci`指定UCA 4.0.0。

数据库元表使用`utf8`字符集。