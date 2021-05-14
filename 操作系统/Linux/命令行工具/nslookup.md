# nslookup
nslookup用于DNS查询，包含交互模式和非交互模式。

## 语法
`nslookup [<options>] [<name> | -] [<server>]`

### 模式

Interactive mode is entered in the following cases:

1.  when no arguments are given (the default name server will be used)

2.  when the first argument is a hyphen (-) and the second argument is the host name or Internet address of a name server.

Non-interactive mode is used when the name or Internet address of the host to be looked up is given as the first argument. The optional second argument
specifies the host name or address of a name server.

### 参数
- `-query=<type>` 查询类型，默认为A记录。
    - a A记录，ipv4地址
    - aaaa A记录，ipv6地址
    - afsdb Andrew文件系统数据库服务器记录
    - atma ATM地址记录
    - cname 别名记录
    - hinfo 硬件配置记录，包括CPU、操作系统信息
    - isdn 域名对应的ISDN号码
    - mb 存放指定邮箱的服务器
    - mg 邮件组记录
    - minfo 邮件组和邮箱的信息记录
    - mr 改名的邮箱记录
    - mx 邮件服务器记录
    - ns 名字服务器记录
    - ptr 反向记录（从IP地址解释域名）
    - rp 负责人记录
    - rt 路由穿透记录
    - srv TCP服务器信息记录
    - txt 域名对应的文本信息
    - x25 域名对应的X.25地址记录

- `-timeout=<time>` 设定超时时间。

- `-version` 查看版本。

