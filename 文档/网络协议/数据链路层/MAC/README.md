# MAC

Media Access Control

媒体访问控制

数据链路层实现相邻网络逻辑结点之间的数据传输，将网络层的IP数据报组装成帧，相邻结点的链路上传送帧。

## MAC地址

MAC地址用于标识以太网物理设备，每个网卡都有唯一的MAC地址，由网络设备制造商在生产时写入硬件中。MAC地址共48位，通常表示为6个16进制字节，例如00-16-EA-AE-3C-40。

IEEE的注册管理机构（RA）是局域网全球地址的法定管理机构，负责分配MAC地址字段的前三个字节（高24位），作为组织唯一标识符（OUI）。后三个字节（低24位）由厂家自行分配，作为扩展标识符。

MAC地址第一位（第一字节的最低位）是I/G位，0表示单个站地址；1表示组地址，用于多播。

MAC地址第二位（第一字节的第二最低位）是G/L位，1表示全球管理，0表示本地管理。

![](1.png)

多播MAC地址范围为01-00-5e-00-00-00至01-00-5e-7f-ff-ff，多播MAC地址的低23位与多播IP地址的低23位相同。由于IP多播组ID有28位，因此多播MAC地址可能对应多个多播IP地址。

广播MAC地址位全为1，即ff-ff-ff-ff-ff-ff。

## MAC帧格式

##### 以太网封装格式（RFC 894）

<table>
    <tr>
        <th>字节</th>
        <th>7</th>
        <th>1</th>
        <th>6</th>
        <th>6</th>
        <th>2</th>
        <th>46—1500</th>
        <th>4</th>
    </tr>
    <tr>
        <th>字段</th>
        <td>前同步码<br/>0xAAAAAAAAAAAAAA</td>
        <td>帧开始定界符<br/>0xAB</td>
	    <td>目的MAC地址</td>
	    <td>源MAC地址</td>
	    <td>类型</td>
	    <td>数据</td>
	    <td>FCS</td>
    </tr>
</table>

- 类型：标识上层协议。
- 数据：最小46字节。小于46字节时，在数据字段后插入填充字段。
- FCS：帧检验序列，使用CRC检验。


##### IEEE 802.2/802.3封装格式（RFC 1042）

<table>
    <tr>
        <th>字节</th>
        <th>7</th>
        <th>1</th>
        <th>6</th>
        <th>6</th>
        <th>2</th>
        <th>1</th>
        <th>1</th>
        <th>1</th>
        <th>3</th>
        <th>2</th>
        <th>38-1492</th>
        <th>4</th>
    </tr>
    <tr>
        <th>字段</th>
        <td>前同步码<br/>0xAAAAAAAAAAAAAA</td>
        <td>帧开始定界符<br/>0xAB</td>
        <td>目的MAC地址</td>
        <td>源MAC地址</td>
        <td>长度</td>
        <td>DSAP<br/>0xAA</td>
        <td>SSAP<br/>0xAA</td>
        <td>Ctrl<br/>0x03</td>
        <td>Org Code<br/>0x000000</td>
        <td>类型</td>
        <td>数据</td>
        <td>FCS</td>
    </tr>
</table>

- 类型：标识上层协议。
- 长度	指后续字节数，不包括FCS。
- 数据	小于38字节时，在数据字段后插入填充字段。
- FCS	帧检验序列，使用CRC检验。

## 帧协议类型

- 0x0800	IP数据报
- 0x0806	ARP
- 0x8035	RARP
- 0x8137	Novell IPX