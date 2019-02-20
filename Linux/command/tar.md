# tar
文件或目录打包与解包。可以用于文件或目录的备份。

## 格式
`tar <options> <files>`

## 参数（必须）
- `-c`  创建新的打包文件。
- `-r`  将要打包的文件追加到打包文件的末尾。
- `-t`  列出打包文件的内容。
- `-u`  更新文件。用新文件取代原文件，如果在打包文件中找不到更新文件，则追加到打包文件的末尾。
- `-x`  解包文件。

参数 -c -t -x 不能同时存在。

## 参数（可选）
- `-f <file>`   指定打包文件或设备名称，该参数后必须紧跟文档名。
- `-j`   用bzip2压缩。
- `-k`   保存已经存在文件。在解包过程中，如果存在同名文件，不会覆盖。
- `-m`   解包过程中，把所有文件的修改时间设定为当前时间。
- `-v`   详细报告处理过程。
- `-w`   每一步都要求用户确认。
- `-z`   用gzip来压缩/解压缩文件。
- `--exclude <file>`   排除文件。

## 示例
- `tar -cvf /tmp/etc.tar /etc`  
把/etc打包至/tmp/etc.tar，不压缩。

- `tar -cvzf data.tar.gz data`  
把当前目录下的data打包且压缩至data.tar.gz。在data.tar.gz文件中，最顶层有一个data。

- `tar -tvzf /tmp/etc.tar.gz`  
查看备份压缩文件/tmp/etc.tar.gz的内容。

- `tar -xvzf /tmp/etc.tar.gz`  
在当前目录下解压/tmp/etc.tar.gz。

- `tar -xvzf /tmp/etc.tar.gz etc/password`  
在当前目录下解压/tmp/etc.tar.gz中的etc/password文件。

- `tar --exclude /home/dmtsai -zcvf myfile.tar.gz /home/* /etc`  
压缩备份/home和/etc成myfile.tar.gz，但是不包括文件/home/dmtsai。
