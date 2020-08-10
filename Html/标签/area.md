# area

定义图像映射中的区域，图像映射指得是带有可点击区域的图像，每个可点击区域关联一个超链接。area元素仅在map元素内使用。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>空白标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>必须存在map作为祖先元素，但不必须是父元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLAreaElement</td>
</tr>
</table>


## 属性

##### 可选

<table>
<tr>
	<th>alt</th>
	<td>string</td>
	<td>在未显示图像的浏览器上显示代替的文本字符串<br/>如果存在href属性，则必需存在alt属性</td>
</tr>
<tr>
	<th>coords</th>
	<td>string</td>
	<td>定义可点击区域的坐标，不同的区域形状坐标格式不同。
    <br/>对于rect，格式为"x1,y1,x2,y2"，分别是左上角和右下角的坐标
    <br/>对于circ，格式为"x,y,r"，分别是圆心坐标和半径长度
    <br/>对于poly，格式为"x1,y1,x2,y2,x3,y3,..."，分别给出每个顶点的坐标，多边形能自动封闭
    </td>
</tr>
<tr>
	<th>download</th>
	<td>string</td>
	<td>表明用于下载一个资源，值为预设的文件名</td>
</tr>
<tr>
	<th>href</th>
	<td>url</td>
	<td>链接的URL</td>
</tr>
<tr>
	<th>hreflang</th>
	<td>language</td>
	<td>指定链接的语言类型</td>
</tr>
<tr>
	<th>media</th>
	<td>media</td>
	<td>指明链接资源的媒体类型，默认全部</td>
</tr>
<tr>
	<th>rel</th>
	<td>rel</td>
	<td>规定当前文档与目标URL之间的关系</td>
</tr>
<tr>
	<th>shape</th>
	<td>enum</td>
	<td>指定区域形状
	<br/>default：（默认）覆盖整个图像
	<br/>rect/rectangle：矩形
    <br/>circ/circle：圆形
    <br/>poly/polygon：多边形
    </td>
</tr>
<tr>
	<th>target</th>
	<td>target</td>
	<td>规定在何处打开指定的目标URL</td>
</tr>
<tr>
	<th>type</th>
	<td>mime</td>
	<td>规定目标URL的MIME类型</td>
</tr>
</table>