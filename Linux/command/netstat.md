# netstat
netstat命令用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。netstat是在内核中访问网络及相关信息的程序，它能提供TCP连接，TCP和UDP监听，进程内存管理的相关报告。

## 格式
`netstat  [<address_family_options>] [<options>]`

`netstate {--route|-r} [<address_family_options>] [<options>]`

`netstat  {--interfaces|-i} [<options>]`

`netstat {--groups|-g} [<options>]`

`netstat {--masquerade|-M} [<options>]`

`netstat {--statistics|-s} [<options>]`

`netstat {--version|-V}`

`netstat {--help|-h}`


## <address_family_options>
- `-4`
- `-6`

- `-x`

- `--appletalk`
- `--ash`
- `--ax25` 
- `--bluetooth`
- `--ddp`
- `--ec`
- `--econet`    同`--ec`。
- `--inet`  同`-4`。
- `--inet6` 同`-6`。
- `--ip`
- `--ipx`
- `--netrom`
- `--protocol=<protocol>` inet、inet6、unix、ipx、ax25、netrom、ddp、bluetooth
- `--rose`
- `--tcpip`
- `--unix`  同`-x`。
- `--x25`



