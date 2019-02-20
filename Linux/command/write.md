# write
向其他用户发送消息。

## 语法
`write <user> [<tty>]`

发送的消息从标准输入读取，以EOF（Ctrl+D）结尾。

\<tty\>指定了要发送的终端，可以通过`who`命令查看其他用户所在的终端。

## 示例
```shell
>> write hazel pts/3
hello world
<ctrl+d>
```   
向位于终端pts/3的用户hazel发送消息“hello world”。
