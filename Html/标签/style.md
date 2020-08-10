# style

style标签用于为HTML文档定义样式信息。

## 约束

<table>
<tr>
    <th>content</th>
    <td>元数据</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>与type属性相匹配的文本内容</td>
</tr>
<tr>
    <th>父元素</th>
    <td>任意接受元数据内容的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLStyleElement</td>
</tr>
</table>


## 属性

##### 可选

<table>
<tr>
	<th>type</th>
	<td>mime</td>
	<td>定义样式语言</td>
	<td>text/css</td>
</tr>
<tr>
	<th>media</th>
	<td>media</td>
	<td>定义样式适用的媒体</td>
	<td>all</td>
</tr>
<tr>
	<th>nonce</th>
	<td>string</td>
	<td>一种加密的随机数，用于在style-src Content-Security-Policy中将内联样式列入白名单</td>
	<td></td>
</tr>
<tr>
	<th>title</th>
	<td>string</td>
	<td>指定可选的样式表</td>
	<td></td>
</tr>
</table>