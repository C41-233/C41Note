# object

定义一个嵌入的对象，比如图像、音频、视频、Java applets、ActiveX、PDF、Flash等。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、嵌入元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许嵌入元素的元素</td>
</tr>
<tr>
    <th>子元素</th>
    <td>param*</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLObjectElement</td>
</tr>
</table>


## 属性

##### 可选

<table>
<tr>
	<th>data</th>
	<td>url</td>
	<td>定义引用对象数据的URL</td>
</tr>
<tr>
	<th>form</th>
	<td>id</td>
	<td>规定对象所属的一个或多个表单</td>
</tr>
<tr>
	<th>height</th>
	<td>px</td>
	<td>高度</td>
</tr>
<tr>
	<th>name</th>
	<td>string</td>
	<td>上下文名称</td>
</tr>
<tr>
	<th>type</th>
	<td>mime</td>
	<td>在data属性中指定的文件中出现的数据的MIME类型</td>
</tr>
<tr>
	<th>usemap</th>
	<td>string</td>
	<td>指向一个map元素，格式为#name</td>
</tr>
<tr>
	<th>width</th>
	<td>px</td>
	<td>宽度</td>
</tr>
</table>