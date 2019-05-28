# nslookup
nslookup用于DNS查询，包含交互模式和非交互模式。

## 语法
`nslookup [<options>] [<name> | -] [<server>]`

### 参数

Interactive mode is entered in the following cases:

1.  when no arguments are given (the default name server will be used)

2.  when the first argument is a hyphen (-) and the second argument is the host name or Internet address of a name server.

Non-interactive mode is used when the name or Internet address of the host to be looked up is given as the first argument. The optional second argument
specifies the host name or address of a name server.

Options can also be specified on the command line if they precede the arguments and are prefixed with a hyphen. For example, to change the default query type to host information, and the initial timeout to 10 seconds, type:

   nslookup -query=hinfo  -timeout=10

The -version option causes nslookup to print the version number and immediately exits.

### 描述
