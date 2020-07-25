# iframe

iframe元素会创建包含另外一个文档的内联框架（即行内框架）。

可以把需要的文本放置在&lt;iframe&gt;和&lt;/iframe&gt;之间，这样就可以应对无法理解iframe的浏览器。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、文本元素、嵌入元素、交互元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>无</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持嵌入元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLIFrameElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
	<th>allow</th>
	<td>string</td>
	<td>设置策略</td>
</tr>
<tr>
	<th>height</th>
	<td>px</td>
	<td>高度</td>
</tr>
<tr>
	<th>name</th>
	<td>string</td>
	<td>用于定位的名称，与a和form元素的target属于，以及input和button元素的formtarget属性配合使用</td>
</tr>
<tr>
	<th>src</th>
	<td>url</td>
	<td>在框架中显示的文档的URL</td>
</tr>
<tr>
	<th>width</th>
	<td>px</td>
	<td>宽度</td>
</tr>
</table>

