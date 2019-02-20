# rpm
rpm原来是Red Hat Linux发行版用来管理Linux各项套件的程序，后逐渐被其他发行版采用。该命令可以方便地安装、删除、升级Linux软件。

## 语法
`rpm 主选项 [辅选项] [packages]`

## 主选项
主选项指定了对软件包进行的操作，包括：

- `-e` 等价于`--erase`
- `-i` 等价于`--install`
- `-q` 等价于`--query`
- `-v` 等价于`--verify`
- `-U` 等价于`--upgrade`
- `--erase` 删除
- `--install` 安装
- `--query` 查询
- `--upgrade` 升级
- `--verify` 检验

## 辅选项

- `-h` 等价于`--hash`

- `--excludedocs` 不安装文档

- `--force` 忽略软件包冲突

- `--hash` 安装时输出哈希值

- `--ignorearchs` 不检验软件包结构

- `--ignoreos` 不检验软件包运行的操作系统

- `--includedocs` 安装文档

- `--noscripts` 不运行预安装和后安装脚本

- `--percent` 以百分比显示安装进度

- `--prefix <path>` 将软件包安装到path路径下

- `--replacepkgs` 强制重新安装已经安装的软件包

- `--replacefiles` 替换属于其他软件包的文件

- `--root <path>` 将path路径指定为根目录

- `--test` 只进行测试，不实际安装
