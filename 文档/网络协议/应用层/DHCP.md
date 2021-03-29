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