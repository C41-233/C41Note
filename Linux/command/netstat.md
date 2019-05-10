# netstat
netstat命令用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。netstat是在内核中访问网络及相关信息的程序，它能提供TCP连接，TCP和UDP监听，进程内存管理的相关报告。

## 格式
`netstat  [<address_family_options>] [<options>]`

By default, netstat displays a list of open sockets.  If you don't specify any address families, then the active sockets of  all  configured address families will be printed.

`netstate {--route|-r} [<address_family_options>] [<options>]`

Display the kernel routing tables. See the description in route(8) for details.  netstat -r and route -e produce the same output.

`netstat  {--interfaces|-i} [<options>]`

Display a table of all network interfaces.

`netstat {--groups|-g} [<options>]`

Display multicast group membership information for IPv4 and IPv6.

`netstat {--masquerade|-M} [<options>]`

Display a list of masqueraded connections.

`netstat {--statistics|-s} [<options>]`

Display summary statistics for each protocol.

`netstat {--version|-V}`

`netstat {--help|-h}`


### <address_family_options>
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

### \<options\>
- `-a` Show both listening and non-listening sockets.  With the --interfaces option, show interfaces that are not up
- `-c` This will cause netstat to print the selected information every second continuously.
- `-e` Display additional information.  Use this option twice for maximum detail.
- `-l` Show only listening sockets.  (These are omitted by default.)
- `-n` Show numerical addresses instead of trying to determine symbolic host, port or user names.
- `-o`  Include information related to networking timers.
- `-p` Show the PID and name of the program to which each socket belongs.
- `-v` Tell the user what is going on by being verbose. Especially print some useful information about unconfigured address families.

- `-A` Specifies  the  address families (perhaps better described as low level protocols) for which connections are to be shown.  family is a comma (',') separated list of address family keywords like inet, inet6, unix, ipx, ax25, netrom, econet, ddp, and bluetooth.  This has the same effect as using the --inet|-4, --inet6|-6, --unix|-x, --ipx, --ax25, --netrom, --ddp, and --bluetooth options.<br/>The address family inet (Iv4) includes raw, udp, udplite and tcp protocol sockets. <br/>The address family bluetooth (Iv4) includes l2cap and rfcomm protocol sockets.
- `-C` Print routing information from the route cache.
- `-F` Print routing information from the FIB.  (This is the default.)
- `-W` Do not truncate IP addresses by using output as wide as needed. This is optional for now to not break existing scripts.

- `--all` 同`-a`。
- `--continuous` 同`-c`。
- `--extend` 同`-e`。
- `--listening` 同`-l`。
- `--numeric` 同`-n`。
- `--numeric-hosts` shows numerical host addresses but does not affect the resolution of port or user names.
- `--numeric-ports` shows numerical port numbers but does not affect the resolution of host or user names.
- `--numeric-users` shows numerical user IDs but does not affect the resolution of host or port names.
- `--program` 同`-p`。
- `--timers` 同`-o`。
- `--verbose` 同`-v`。
- `--wide` 同`-W`。
- `--protocol=family` 同`-A`。

