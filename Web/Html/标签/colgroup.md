# colgroup

用于对表格中的列进行组合，以便对其进行格式化。

## 约束

<table>
<tr>
    <th>content</th>
    <td>无</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>设置span属性：无<br/>未设置span属性：col*</td>
</tr>
<tr>
    <th>父元素</th>
    <td>table</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLTableColElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
    <tr>
		<th>align</th>
		<td>enum</td>
		<td>规定单元格内容的水平对齐方式
		<br/>left：左对齐内容
		<br/>right：右对齐内容
		<br/>center：居中对齐内容
		<br/>justify：对行进行伸展，这样每行都可以有相等的长度
		<br/>char：将内容对准指定字符</td>
	</tr>
	<tr>
		<th>char</th>
		<td>char</td>
		<td>规定根据哪个字符来对齐列组中的内容</td>
	</tr>
	<tr>
		<th>charoff</th>
		<td>int</td>
		<td>规定对齐字符的偏移量</td>
	</tr>
	<tr>
		<th>span</th>
		<td>int</td>
		<td>规定列组应该横跨的列数</td>
	</tr>
	<tr>
		<th>valign</th>
		<td>enum</td>
		<td>规定单元格内容的垂直排列方式
			<br/>top：对内容进行上对齐
			<br/>middle：（默认）对内容进行居中对齐
			<br/>bottom：对内容进行下对齐
			<br/>baseline：与基线对齐
		</td>
	</tr>
	<tr>
		<th>width</th>
		<td>number<br/>percent</td>
		<td>规定表格单元格的宽度</td>
	</tr>
</table>
