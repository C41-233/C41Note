# dd
读取，转换并输出数据。

若省略输入文件，则从标准输入获取。

## 语法
`dd [options]`

## 参数
- `bs=<字节数>` 将ibs(输入)与obs(输出)设成指定的字节数

- `cbs=<字节数>` 转换时，每次只转换指定的字节数

- `conv=<mode>` 字符集转换。
    - `ASCII` 把EBCDIC码转换为ASCIl码
    - `block` 把变动位转换成固定字符
    - `ebcdic` 把ASCIl码转换为EBCDIC码
    - `ibm` 把ASCIl码转换为alternate EBCDIC码
    - `lcase` 把字母由大写转换为小写
    - `noerror` 出错时不停止处理
    - `notrunc` 不截短输出文件
    - `swab` 交换每一对输入字节
    - `sync` 把每个输入记录的大小都调到ibs的大小（用NUL填充）
    - `ublock` 把固定位转换成变动位
    - `ucase` 把字母由小写转换为大写

- `count=<区块数>` 仅读取指定的区块数

- `ibs=<字节数>` 每次读取的字节数

- `if=<文件>` 从文件读取

- `obs=<字节数>` 每次输出的字节数

- `of=<文件>` 输出到文件

- `seek=<区块数>` 一开始输出时，跳过指定的区块数

- `skip=<区块数>` 一开始读取时，跳过指定的区块数

- `--help` 帮助

- `--version` 显示版本信息

## 示例
`dd if=/dev/cdrom of=/opt/mycd.iso`  
从光驱制作ISO文件，生成/opt/mycd.iso
