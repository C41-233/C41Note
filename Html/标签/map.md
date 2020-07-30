# map

定义一个客户端图像映射。图像映射指带有可交互区域的一幅图像。

通过内部的area标签指定图像映射的各个区域。

根据浏览器的不同，支持id属性或支持name属性。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、文本元素、可交互元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>透明元素</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许文本元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLMapElement</td>
</tr>
</table>


## 属性

##### 必须

<table>
<tr>
	<th>name</th>
	<td>id</td>
	<td>用于查询的名称。如果存在id属性，则二者必须相同</td>
</tr>
</table>