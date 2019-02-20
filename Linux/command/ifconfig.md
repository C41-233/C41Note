# ifconfig
显示或配置网络设备（网络接口卡，NIC）。

网络设备的名称，eth0表示第一块网卡，eth1表示第二块网卡，以此类推。eth0:1表示eth0同一块网卡，但配置多IP。

## 语法
`ifconfig [-a]` 
`ifconfig <NIC>`

指定网卡的情况，输出内容包括以下信息： 
- HWaddr：MAC地址 
- inet addr：IP地址 
- Bcast：子网广播地址 
- Mask：子网掩码 
- MTU：数据报最大传输单位，默认为1500B 
- RX：已接受数据报总量 
- TX：已发送数据报总量

不带参数时仅包括当前活跃的网卡，`-a`参数表示所有网络接口。

`ifconfig <NIC> options`

启动或禁用网络设备。

options参数如下：

- `<ip> netmask <subnet-mask>`	配置IP地址
- `up`	启动网络设备
- `down`	禁用网络设备
- `add <ip>`	设置网络设备IPv6的IP地址
- `del <ip>`	删除网络设备IPv6的IP地址
- `hw <网络设备类型> <mac>`	设置网络设备的类型与硬件地址
- `io_addr <I/O地址>`	设置网络设备的I/O地址
- `irq <IRQ地址>`	设置网络设备的IRQ
- `media <网络媒介类型>`	设置网络设备的媒介类型
- `mem_start <内存地址>`	设置网络设备在主内存所占用的起始地址
- `metric <数目>`	指定在计算数据包的转送次数时，所要加上的数目
- `mtu <字节>`	设置网络设备的MTU
- `tunnel <ip>`	建立IPv4与IPv6之间的隧道通信地址
- `-broadcast <ip>`	将要送往指定地址的数据包当成广播数据包来处理
- `-pointopoint <ip>`	与指定地址的网络设备建立直接连线，此模式具有保密功能
- `-promisc`	关闭或启动指定网络设备的promiscuous模式


## 示例
`ifconfig`  
查看主机所有活跃的网络接口的情况。

`ifconfig -a`  
查看主机所有网络接口的情况。

`ifconfig eth0`  
查看eth0的状况。

`ifconfig eth0 down`  
关闭eth0。

`ifconfig eth0 192.168.15.11 netmask 255.255.255.0`  
为eth0配置IP地址192.168.15.11/24。

`ifconfig eth0:1 192.168.15.11 netmask 255.255.255.0`  
为eth0配置IP地址192.168.15.11/24。（单网卡多IP）
