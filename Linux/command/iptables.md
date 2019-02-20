# iptables / ip6tables
防火墙配置，用于IPv4/IPv6包过滤和NAT。

## 语法
```
iptables [options]
ip6tables [options]
```

## 参数

### 主选项
- `-A <chain> <rule-specification>` 等价于`--apend`。
- `-D <chain> <rule-specification | rule-num>` 等价于`--delete`。
- `-I <chain> [rulenum] <rule-specification>` 等价于`--insert`。
- `-L [chain]` 等价于`--list`。

- `--append <chain> <rule-specification>` 添加一条规则。
- `--delete <chain> <rule-specification | rule-num>` 删除一条规则。
- `--insert <chain> [rulenum] <rule-specification>` 在指定位置插入一条规则。
- `--list [chain]` 列出指定链路的所有规则，没有指定链路则列出所有规则。

### 次选项
- `-i <interface>` 等价于`--in-interface`。
- `-j <action>` 等价于`--jump`。
- `-p <protocol>` 等价于`--protocol`。
- `-o <interface>` 等价于`--out-interface`。

- `--dport <port>` 目标端口。
- `--in-interface <interface>` 入网网卡。
- `--jump <action>` 指定匹配规则的动作。
    - `DROP` 丢弃网络包。
- `--out-interface <interface>` 出网网卡。
- `--protocol <protocol>` 规则匹配的网络协议，包括tcp、udp、udplite、icmp、icmpv6、esp、ah、sctp、mh、all。
- `--sport <port>` 源端口。

### chain
- `INPUT` 入网。 
- `OUTPUT` 出网。

## 示例
`iptables -A OUTPUT -p tcp --dport 5553 -j DROP`   
添加一条规则，禁止目标为5553端口的tcp出网连接。

`iptables -A INPUT -p tcp --dport 5553 -j ACCEPT`  
添加一条规则，允许目标为5553端口的tcp入网连接。
