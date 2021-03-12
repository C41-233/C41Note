# ICMP

Internet Control Message Protocol

网际控制报文协议

ICMP用于在IP协议中发送控制消息，报告差错情况和提供有关异常情况的报告，在RFC792中定义。ping和traceroute直接使用ICMP协议。Ipv4中的ICMP称作ICMPv4，IPv6中的ICMP称作ICMPv6。

ICMP报文分为信息报文和差错报文。

以下报文不会产生ICMP差错报文：
1. ICMP差错报文
2. 目的地址是广播地址或多播地址的IP数据报
3. 链路层广播的数据报
4. 非IP分片的第一片
5. 源地址不是单一主机的数据报（零地址，回环地址，多播地址，广播地址）

## ICMP报文

ICMP报文被封装在IP数据报的数据部分。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型</td>
		<td>代码</td>
		<td>检验和</td>
		<td>数据</td>
	</tr>
</table>

##### 类型和代码

类型字段标识ICMP报文的类型。ICMP报文分差错报文和信息报文。

<table>
	<thead>
		<tr><th>类型字段</th><th>代码字段</th><th>描述</th><th>报文类型</th></tr>
	</thead>
	<tr>
		<td>0</td>
		<td>0</td>
		<td>回显应答</td>
		<td>信息</td>
	</tr>
	<tr>
		<td rowspan="16">3</td>
		<td>0</td>
		<td>网络不可达</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>1</td>
		<td>主机不可达</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>2</td>
		<td>协议不可达</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>3</td>
		<td>端口不可达</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>4</td>
		<td>需要进行分片但设置了不分片标志</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>5</td>
		<td>源站选路失败</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>6</td>
		<td>无法识别目的网络</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>7</td>
		<td>无法识别目的主机</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>8</td>
		<td>源主机被隔离</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>9</td>
		<td>目的网络被强制禁止</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>10</td>
		<td>目的主机被强制禁止</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>11</td>
		<td>由于服务类型TOS，网络不可达</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>12</td>
		<td>由于服务类型TOS，主机不可达</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>13</td>
		<td>由于过滤，通信被强制禁止</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>14</td>
		<td>主机越权</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>15</td>
		<td>优先权中止生效</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>4</td>
		<td>0</td>
		<td>源站抑制</td>
		<td>差错</td>
	</tr>
	<tr>
		<td rowspan="4">5</td>
		<td>0</td>
		<td>网络重定向</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>1</td>
		<td>主机重定向</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>2</td>
		<td>服务类型和网络重定向</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>3</td>
		<td>服务类型和主机重定向</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>8</td>
		<td>0</td>
		<td>回显请求</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>9</td>
		<td>0</td>
		<td>路由器通告</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>10</td>
		<td>0</td>
		<td>路由器请求</td>
		<td>信息</td>
	</tr>
	<tr>
		<td rowspan="2">11</td>
		<td>0</td>
		<td>传输期间生存时间为0</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>1</td>
		<td>数据报组装期间生存时间为0</td>
		<td>差错</td>
	</tr>
	<tr>
		<td rowspan="2">12</td>
		<td>0</td>
		<td>IP首部错误</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>1</td>
		<td>缺失选项</td>
		<td>差错</td>
	</tr>
	<tr>
		<td>13</td>
		<td>0</td>
		<td>时间戳请求</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>14</td>
		<td>0</td>
		<td>时间戳应答</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>15</td>
		<td>0</td>
		<td>信息请求</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>16</td>
		<td>0</td>
		<td>信息应答</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>17</td>
		<td>0</td>
		<td>掩码请求</td>
		<td>信息</td>
	</tr>
	<tr>
		<td>18</td>
		<td>0</td>
		<td>掩码应答</td>
		<td>信息</td>
	</tr>
</table>

##### 检验和

检验整个ICMP报文。

##### 数据	

差错报告报文的数据字段，由进行差错报告的IP数据报首部和数据字段前8个字节组成。

询问报文的数据字段格式由类型决定。

## 报文类型

##### 回显报文

回显报文包括回显请求报文（类型为8）和回显应答报文（类型为0）。主机向节点发送回显请求报文，如果能够到达目标节点（途中没有被路由丢弃、目标不回应或者传输失败等），目标节点返回回显应答报文，说明目标主机存在。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>2</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型<br/>0：应答<br/>8：请求</td>
		<td>代码（0）</td>
		<td>标识符</td>
		<td>序列号</td>
		<td>回显数据</td>
	</tr>
</table>

##### 不可达报文

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>4</th>
		<th>不定长</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（3）</td>
		<td>代码（0-15）</td>
		<td>检验和</td>
		<td>0</td>
		<td>IP首部</td>
		<td>IP数据前几个字节</td>
	</tr>
</table>

##### 不可达报文（需要分片）

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>2</th>
		<th>2</th>
		<th>不定长</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（3）</td>
		<td>代码（4）</td>
		<td>检验和</td>
		<td>0</td>
		<td>MTU</td>
		<td>IP首部</td>
		<td>IP数据前几个字节</td>
	</tr>
</table>

##### 源站抑制报文

当系统接收数据报的速度比处理速度快时，发送ICMP源站抑制报文。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>4</th>
		<th>不定长</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（4）</td>
		<td>代码（0）</td>
		<td>检验和</td>
		<td>0</td>
		<td>IP首部</td>
		<td>IP数据前几个字节</td>
	</tr>
</table>

##### 重定向报文

路由器接收的数据报满足以下条件时，发送ICMP重定向报文：
1. 出接口等于入接口（即数据报发送端可以直接发送至下一个目的端）
2. 用于向外传送数据报的路由不能被ICMP重定向报文创建或修改过，不能是路由器的默认路由
3. 数据报不能用源站路由转发
4. 内核必须配置成可以发送重定向报文

主机收到ICMP重定向报文后，应当执行以下检查后修改路由表：
1. 新的路由器必须直接与网络相连
2. 重定向报文必须来自当前到目的端所选择的路由器
3. 重定向报文不能让主机本身作为路由器
4. 被修改的路由必须是一个间接路由

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>4</th>
		<th>不定长</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（5）</td>
		<td>代码（0-3）</td>
		<td>检验和</td>
		<td>应该使用的路由器IP地址</td>
		<td>IP首部</td>
		<td>IP数据前几个字节</td>
	</tr>
</table>

##### 路由器通告报文

在一份报文里可以通告多个地址，地址数指报文中所含的地址数，生存期指通告地址有效时间（秒）。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（9）</td>
		<td>代码（0）</td>
		<td>检验和</td>
		<td>地址数</td>
		<td>地址项长度（2）</td>
		<td>生存时间</td>
		<td>&lt;路由器地址，优先级&gt;列表</td>
	</tr>
</table>

##### 路由器请求报文

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（10）</td>
		<td>代码（0）</td>
		<td>检验和</td>
		<td>0</td>
	</tr>
</table>

##### 超时报文

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>4</th>
		<th>不定长</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（11）</td>
		<td>代码（0或1）</td>
		<td>检验和</td>
		<td>0</td>
		<td>IP首部</td>
		<td>IP数据前几个字节</td>
	</tr>
</table>

##### 时间戳请求/应答报文

系统向另一个系统查询当前时间。返回UTC时间戳。

请求端填写发起时间戳，然后发送请求报文。应答端收到请求报文后，填写接收时间戳和传送时间戳，然后发送响应报文。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>2</th>
		<th>2</th>
		<th>4</th>
		<th>4</th>
		<th>4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（13或14）</td>
		<td>代码（0）</td>
		<td>检验和</td>
		<td>标识符</td>
		<td>序列号</td>
		<td>发起时间戳</td>
		<td>接收时间戳</td>
		<td>传送时间戳</td>
	</tr>
</table>

##### 子网掩码请求/应答报文

标识符字段和序列号字段由发送方任意设定，这些值由应答报文返回。

<table>
	<tr>
		<th>字节</th>
		<th>1</th>
		<th>1</th>
		<th>2</th>
		<th>2</th>
		<th>2</th>
		<th>4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>类型（17或18）</td>
		<td>代码（0）</td>
		<td>检验和</td>
		<td>标识符</td>
		<td>序列号</td>
		<td>子网掩码</td>
	</tr>
</table>
