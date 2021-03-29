# DHCP

Dynamic Host Configuration Protocol

动态主机配置协议

DHCP（动态主机配置协议）通常被应用在大型的局域网络环境中，主要作用是集中的管理、分配IP地址，使网络环境中的主机动态的获得IP地址、网关地址、DNS服务器地址等信息，并能够提升地址的使用率。

## 报文格式

DHCP基于UDP传输，服务端端口号为68，客户端端口号为67。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>1</th>
		<th>1</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>op</td>
		<td>htype</td>
		<td>hlen</td>
		<td>hops</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">xid</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="2">2</th>
		<th colspan="2">2</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="2">secs</td>
		<td colspan="2">flags</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">ciaddr</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">yiaddr</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">siaddr</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">giaddr</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">chaddr</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">sname</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">file</td>
	</tr>
	<tr>
		<th>字节</th>
		<th colspan="4">不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="4">options</td>
	</tr>
</table>

##### op

区分客户端包还是服务端包，1表示客户端向服务端发送的包，2表示服务端向客户端发送的包。

##### htype

硬件类别，1表示以太网。

##### hlen

硬件地址长度，以太网为6。

##### hops

若封包需要经过路由器转发，每站加1。若在同一局域网内，为0。

##### xid

DHCP请求时产生的token，作为响应的依据。

##### secs

客户端启动时间（秒）

##### flags

目前仅用第一位，1表示服务端以广播方式传送封包给客户端。

##### ciaddr

客户端希望继续使用的IP地址。

##### yiaddr

服务端返回，分配给客户端的IP地址。

##### siaddr

若客户端需要透过网络开机，从服务端送出的DHCPOFFER、DHCPACK、DHCPNACK封包中，此栏填写开机程序代码所在服务端地址。

##### giaddr

若需跨网域进行DHCP发放，此栏为relay agent的地址，否则为0。

##### chaddr

客户端硬件地址。

##### sname

服务端名称，以0x00结尾。

##### file

若客户端需要透过网络开机，此项指出开机程序名称，稍后以TFTP传送。

## 工作原理

DHCP基于UDP，主机发送请求消息到DHCP服务器的67号端口，DHCP服务器回应应答消息给主机的68号端口。 

1、DHCP Client以广播的方式发出DHCP Discover报文。

2、所有的DHCP Server都能够接收到DHCP Client发送的DHCP Discover报文，所有的DHCP Server都会给出响应，向DHCP Client发送一个DHCP Offer报文。 

DHCP Offer报文中yiaddr字段就是DHCP Server能够提供给DHCP Client使用的IP地址，且DHCP Server会将自己的IP地址放在option字段中以便DHCP Client区分不同的DHCP Server。DHCP Server在发出此报文后会存在一个已分配IP地址的记录。

3、DHCP Client只能处理其中的一个DHCP Offer报文，一般的原则是DHCP Client处理最先收到的DHCP Offer报文。

DHCP Client会发出一个广播的DHCP Request报文，在选项字段中会加入选中的DHCP Server的IP地址和需要的IP地址。

4、DHCP Server收到DHCP Request报文后，判断选项字段中的IP地址是否与自己的地址相同。如果不相同，DHCP Server不做任何处理只清除相应IP地址分配记录；如果相同，DHCP Server就会向DHCP Client响应一个DHCP ACK报文，并在选项字段中增加IP地址的使用租期信息。 

5、DHCP Client接收到DHCP ACK报文后，检查DHCP Server分配的IP地址是否能够使用。如果可以使用，则DHCP Client成功获得IP地址并根据IP地址使用租期自动启动续延过程；如果DHCP Client发现分配的IP地址已经被使用，则DHCP Client向DHCPServer发出DHCP Decline报文，通知DHCP Server禁用这个IP地址，然后DHCP Client开始新的地址申请过程。 

6、DHCP Client在成功获取IP地址后，随时可以通过发送DHCP Release报文释放自己的IP地址，DHCP Server收到DHCP Release报文后，会回收相应的IP地址并重新分配。 

在使用租期超过50%时刻处，DHCP Client会以单播形式向DHCP Server发送DHCPRequest报文来续租IP地址。如果DHCP Client成功收到DHCP Server发送的DHCP ACK报文，则按相应时间延长IP地址租期；如果没有收到DHCP Server发送的DHCP ACK报文，则DHCP Client继续使用这个IP地址。

在使用租期超过87.5%时刻处，DHCP Client会以广播形式向DHCP Server发送DHCPRequest报文来续租IP地址。如果DHCP Client成功收到DHCP Server发送的DHCP ACK报文，则按相应时间延长IP地址租期；如果没有收到DHCP Server发送的DHCP ACK报文，则DHCP Client继续使用这个IP地址，直到IP地址使用租期到期时，DHCP Client才会向DHCP Server发送DHCP Release报文来释放这个IP地址，并开始新的IP地址申请过程。 

需要说明的是：DHCP客户端可以接收到多个DHCP服务器的DHCPOFFER数据包，然后可能接受任何一个DHCPOFFER数据包，但客户端通常只接受收到的第一个DHCPOFFER数据包。另外，DHCP服务器DHCPOFFER中指定的地址不一定为最终分配的地址，通常情况下，DHCP服务器会保留该地址直到客户端发出正式请求。 

正式请求DHCP服务器分配地址DHCPREQUEST采用广播包，是为了让其它所有发送DHCPOFFER数据包的DHCP服务器也能够接收到该数据包，然后释放已经OFFER（预分配）给客户端的IP地址。

如果发送给DHCP客户端的地址已经被其他DHCP客户端使用，客户端会向服务器发送DHCPDECLINE信息包拒绝接受已经分配的地址信息。

在协商过程中，如果DHCP客户端发送的REQUEST消息中的地址信息不正确，如客户端已经迁移到新的子网或者租约已经过期，DHCP服务器会发送DHCPNAK消息给DHCP客户 端，让客户端重新发起地址请求过程。