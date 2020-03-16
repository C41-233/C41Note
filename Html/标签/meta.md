# meta

提供有关页面的元信息。

```
<meta charset="utf-8">
```

## 约束

必须在<head>标签中。

空白标签。

## 属性

##### 可选

<table>
<tr>
    <th>charset</th>
    <td>charset</td>
    <td>定义文档的字符编码</td>
</tr>
<tr>
    <th>content</th>
    <td>string</td>
    <td>定义与http-equiv或name属性相关的元信息值</td>
</tr>
<tr>
    <th>http-equiv</th>
    <td>string</td>
    <td>把content属性关联到HTTP Header</td>
</tr>
<tr>
    <th>name</th>
    <td>string</td>
    <td>关联content属性</td>
</tr>
</table>

## http-equiv属性

##### cache-control

控制文档缓存机制。

<table>
<tr>
    <th>public</th>
    <th>客户端和代理服务器都缓存</th>
</tr>
<tr>
    <th>private</th>
    <th>仅客户端缓存，代理服务器不缓存</th>
</tr>
<tr>
    <th>no-cache</th>
    <th>不缓存</th>
</tr>
<tr>
    <th>no-store</th>
    <th>缓存但不归档</th>
</tr>
</table>

```
<meta http-equiv="cache-control" content="no-cache">
```

##### content-type

content属性说明所使用的文字以及语言。

```
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

##### default-style

规定要使用的预定义的样式表。

content属性的值必须匹配同一文档中的一个link元素上的title属性的值，或者必须匹配同一文档中的一个 style元素上的title属性的值。

##### expires

设定网页的到期时间。一旦网页过期，必须到服务器上重新传输，采用GMT格式的时间。

```
<meta http-equiv="expires" content="Wed, 20 Jun 2007 22:33:00 GMT"> 
```

##### pragma

设定浏览器本地缓存模式。

```
<meta http-equiv="pragma" content="no-cache">
```

##### refresh

content属性定义文档自动刷新的时间间隔，单位为秒。

```
<meta http-equiv="refresh" content="300">
<meta http-equiv="refresh" content="30; URL=http://www.net.cn/">
```

##### set-cookie

设定Cookie。

```
<meta http-equiv="set-Cookie" content="cookievalue=xxx;expires=Wednesday, 20-Jun-2007 22:33:00 GMT； path=/">
```

##### window-target

窗口设定。

```
<meta http-equiv="window-target" content="_top">
```

## name属性

##### author

向搜索引擎说明作者。

##### description

向搜索引擎说明主要内容。

##### generator

向搜索引擎说明生成工具。

##### keywords

页面关键信息，用于搜索引擎。

```
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
```

##### revised

向搜索引擎说明页面的最新版本。

##### robots

向搜索引擎说明robots协议。

<table>
<tr>
    <th>all</th>
    <td>文件将被检索，且页面上的链接可以被查询</td>
</tr>
<tr>
    <th>none</th>
    <td>文件将不被检索，且页面上的链接不可以被查询</td>
</tr>
<tr>
    <th>index</th>
    <td>文件将被检索</td>
</tr>
<tr>
    <th>follow</th>
    <td>页面上的链接可以被查询</td>
</tr>
<tr>
    <th>noindex</th>
    <td>文件将不被检索，但页面上的链接可以被查询</td>
</tr>
<tr>
    <th>nofollow</th>
    <td>文件将不被检索，页面上的链接可以被查询</td>
</tr>
</table>
	
##### viewport

针对移动设备的优化。

content为以下键值对的一个多个，键值间用等号连接，键值对用逗号分隔。

<table>
	<tr>
		<th>initial-scale</th>
		<td>用于设置Web页面的初始缩放比例
		<br/>1.0表示显示未经缩放的Web文档</td>
	</tr>
	<tr>
		<th>maximum-scale</th>
		<td>设置用户对Web页面缩放比例的最大限制</td>
	</tr>
	<tr>
		<th>minimum-scale</th>
		<td>设置用户对Web页面缩放比例的最小限制</td>
	</tr>
	<tr>
		<th>width</th>
		<td>指定区的逻辑宽度，单位为像素
		<br/>用device-width表示屏幕宽度</td>
	</tr>
	<tr>
		<th>height</th>
		<td>指定视区的逻辑高度，单位为像素
		<br/>用device-height表示屏幕高度</td>
	</tr>
	<tr>
		<th>user-scalable</th>
		<td>指定用户是否可以缩放视区
		<br/>yes | no</td>
	</tr>
</table>