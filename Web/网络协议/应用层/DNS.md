# DNS

Domain Name System

域名系统

域名系统（DNS）是一种用于TCP/IP应用程序的分布式数据库，它提供域名和IP地址之间的转换。

DNS是一个树状结构。每个结点有一个至多63个字符长度的标识，但根结点是没有标识的特殊结点。命名标识不区分大小写，结点的域名就是从该结点开始到根结点的标识连起来，中间用点“.”分隔。每一个结点必须有唯一的域名，但不同结点可以使用相同标识。域名总长度不超过253个字符。

DNS的每个结点对应一个域名服务器，根结点对应根域名服务器。

## 顶级域名

域名最右侧一组字符称为顶级域名或一级域名，它们是域名树根结点的子结点。

（1）arpa是一个用作地址到名字转换的特殊域。

（2）14个普通域（组织域）：

- aero  航空运输业
- biz   商务
- com	商业组织
- coop  协作组织
- edu	教育机构
- gov	美国政府部门
- info  其他
- int	国际组织
- museum    博物馆
- name  个人
- mil	美国军事网点
- net	网络
- org	其它组织
- pro   会计师、律师、医师等

（3）国家域（地理域），由两个英文字母组成，例如ae，cn，us，zw。

## 工作原理

DNS查询的过程为：
1. 浏览器检查自身缓存是否解析过对应域名，如果有则返回。
2. 检查操作系统配置，如果有则返回。在Windows中的DNS配置是hosts文件。
3. 请求本地域名服务器（LDNS），如果LDNS中有缓存，则返回。
4. 由LDNS向根域名服务器查询，由根域名服务器返回顶级域名服务器（gTLD）
5. 从gTLD开始，依次访问下一层域名服务器，直到域名解析完毕。
6. LDNS返回解析结果，并缓存结果。

## DNS报文结构

DNS报文封装在UDP或TCP数据报的数据部分。

### 1、基础报文

<table>
	<tr>
		<th>位</th>
		<th colspan="16">16</th>
		<th colspan="1">1</th>
		<th colspan="4">4</th>
		<th colspan="1">1</th>
		<th colspan="1">1</th>
		<th colspan="1">1</th>
		<th colspan="1">1</th>
		<th colspan="3">3</th>
		<th colspan="4">4</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="16">标识</td>
		<td colspan="1">QR</td>
		<td colspan="4">操作</td>
		<td colspan="1">AA</td>
		<td colspan="1">TC</td>
		<td colspan="1">RD</td>
		<td colspan="1">RA</td>
		<td colspan="3">0</td>
		<td colspan="4">返回码</td>
	</tr>
	<tr>
		<th>位</th>
		<th colspan="16">16</th>
		<th colspan="16">16</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="16">问题数</td>
		<td colspan="16">资源记录数</td>
	</tr>
	<tr>
		<th>位</th>
		<th colspan="16">16</th>
		<th colspan="16">16</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="16">授权资源记录数</td>
		<td colspan="16">额外资源记录数</td>
	</tr>
	<tr>
		<th>位</th>
		<th colspan="32">不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="32">查询问题</td>
	</tr>
	<tr>
		<th>位</th>
		<th colspan="32">不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="32">回答</td>
	</tr>
	<tr>
		<th>位</th>
		<th colspan="32">不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="32">授权</td>
	</tr>
	<tr>
		<th>位</th>
		<th colspan="32">不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td colspan="32">额外信息</td>
	</tr>
</table>

##### 标识	

客户程序设置并由服务器返回，用于匹配响应和查询。

##### QR	

- 0：查询报文
- 1：响应报文

##### 操作	

- 0：标准查询
- 1：反向查询
- 2：服务器状态请求

##### AA	

授权回答，即该名字服务器是授权于该域的。

##### TC	

可截断，UDP应答总长度超过512字节时截断，此时应当使用TCP重新查询。

##### RD	

- 1：递归查询，并在响应中返回
- 0：迭代查询，如果服务器没有授权回答，则返回能回答该查询的其他服务器列表

##### RA	

可用递归，如果服务器支持递归查询，则在响应中置1。

##### 返回码	

- 0：没有差错
- 3：名字差错（域名不存在）

### 2、查询问题

<table>
	<tr>
		<th>字节</th>
		<th>不定长</th>
		<th>2</th>
		<th>2</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>域名</td>
		<td>类型</td>
		<td>类</td>
	</tr>
</table>

### 3、资源记录（回答，授权，附加信息）

<table>
	<tr>
		<th>字节</th>
		<th>不定长</th>
		<th>2</th>
		<th>2</th>
		<th>4</th>
		<th>不定长</th>
	</tr>
	<tr>
		<th>字段</th>
		<td>域名</td>
		<td>类型</td>
		<td>类</td>
		<td>生存时间</td>
		<td>资源数据</td>
	</tr>
</table>
	
##### 类型
- 1：A，IP地址
- 2：NS，名字服务器
- 5：CNAME，规范名称
- 12：PTR，指针记录
- 13：HINFO，主机信息
- 15：MX，邮件交换记录
- 252：AXFR，对区域转换的请求
- 255：ANY，对所有记录的请求

##### 类	

- 1：IP地址

##### 生存时间	

客户程序保留该资源记录的描述

##### 资源数据	

首部2字节指明后续数据长度。

资源数据通常是4字节的IP地址

##### 域名

域名字段由一个或多个标识符序列组成，每个标识符以首字节的计数值表示标识符字节长度，查询名最后以0结束。

例如，对gemini.tuc.noao.edu的域名字段为： 
`6	'g'	'e'	'm'	'i'	'n'	'i'	3	't'	'u'	'c'	4	'n'	'o'	'a'	'o'	3	'e'	'd'	'u'	0`。

标识符计数的范围为0-63，长度为0的标识符为根标识符。

标志计数字节的最高两比特设为1用于压缩，此时剩下14位说明在该DNS报文中标识符所在的位置（起始位置由标识字段的第一字节算起）。