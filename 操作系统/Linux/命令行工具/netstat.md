# netstat
netstat命令用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。netstat是在内核中访问网络及相关信息的程序，它能提供TCP连接，TCP和UDP监听，进程内存管理的相关报告。

## 格式
`netstat  [<options>]`

By default, netstat displays a list of open sockets.  If you don't specify any address families, then the active sockets of  all  configured address families will be printed.

`netstate {--route|-r} [<options>]`

Display the kernel routing tables. See the description in route(8) for details.  netstat -r and route -e produce the same output.

`netstat  {--interfaces|-i} [<options>]`

显示网卡列表。

`netstat {--groups|-g} [<options>]`

显示组播组关系。

`netstat {--masquerade|-M} [<options>]`

Display a list of masqueraded connections.

`netstat {--statistics|-s} [<options>]`

显示网络统计信息。

`netstat {--version|-V}`

显示版本信息。

`netstat {--help|-h}`

显示帮助信息。

## 参数

### <address-family-options>
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

### \<protocol-options\>
- `-t --tcp` 
- `-u --udp`
- `-w --raw`
- `-x --unix`

- `-S --sctp` 
- `-U --udplite` 

- `--ax25`
- `--ipx`
- `--netrom`

### \<options\>
- `-a` Show both listening and non-listening sockets.  With the --interfaces option, show interfaces that are not up.
- `-c` This will cause netstat to print the selected information every second continuously.
- `-e` Display additional information.  Use this option twice for maximum detail.
- `-l` 仅列出Listen状态的服务。
- `-n` 显示数字形式的地址、端口，不要显示别名，不进行反向域名解析。
- `-o`  Include information related to networking timers.
- `-p` 显示相关连接的pid和进程名。
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

## 输出列

### Proto
使用的协议。(tcp, udp, udpl, raw)

### Recv-Q
Established:  The count of bytes not copied by the user program connected to this socket.  

Listening: The current syn backlog.

### Send-Q
Established: The count of bytes not acknowledged by the remote host.  

Listening: The  maximum size of the syn backlog.

### Local Address
Address and port number of the local end of the socket.  Unless the --numeric (-n) option is specified, the socket address is resolved to its canonical host name (FQDN), and the port number is translated into the corresponding service name.

### Foreign Address
Address and port number of the remote end of the socket.  Analogous to "Local Address".

### State
The state of the socket. Since there are no states in raw mode and usually no states used in UDP and UDPLite, this column may be left blank. Normally this can be one of several values:

- ESTABLISHED The socket has an established connection.

- SYN_SENT The socket is actively attempting to establish a connection.

- SYN_RECV A connection request has been received from the network.

- FIN_WAIT1 The socket is closed, and the connection is shutting down.

- FIN_WAIT2 Connection is closed, and the socket is waiting for a shutdown from the remote end.

- TIME_WAIT The socket is waiting after close to handle packets still in the network.

- CLOSE The socket is not being used.

- CLOSE_WAIT The remote end has shut down, waiting for the socket to close.

- LAST_ACK The remote end has shut down, and the socket is closed. Waiting for acknowledgement.

- LISTEN The socket is listening for incoming connections.  Such sockets are not included in the output unless you specify the --listen‐ing (-l) or --all (-a) option.

- CLOSING Both sockets are shut down but we still don't have all our data sent.

- UNKNOWN The state of the socket is unknown.

### User
The username or the user id (UID) of the owner of the socket.

### PID/Program name
Slash-separated pair of the process id (PID) and process name of the process that owns the socket.  --program causes this column to be included.   You will also need superuser privileges to see this information on sockets you don't own.  This identification information is not yet available for IPX sockets.

## 示例

`netstat -tunlpe | grep <port>`

查看指定端口占用情况。

`netstat -at`

查看所有TCP连接。

`netstat -au`

查看所有UDP连接。
