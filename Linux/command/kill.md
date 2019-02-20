# kill
中断进程。

## 语法
`kill [-s <信号> | -p] [-a] <pid>`

- `-p` 指定kill命令只显示命名进程的pid，并不真正送出任何信号
- `-s <信号>` 指定需要送出的信号，既可以是信号名也可以是信号ID

`kill -l [<信号>]`

显示信号名称列表，该列表在/usr/include/linux/signal.h中。
