# table

定义HTML表格。

简单的HTML表格由table元素以及一个或多个tr、th或td元素组成。

tr元素定义表格行，th元素定义表头，td元素定义表格单元。

更复杂的HTML表格也可能包括caption、col、colgroup、thead、tfoot、tbody元素。

## 约束

<table>
<tr>
    <th>content</th>
    <td>flow</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>`caption? colgroup* thead? (tbody* | tr*) tfoot?`</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持flow的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLTableElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
    <tr>
		<th>align</th>
		<td>enum</td>
		<td>内容的对齐方式
		<br/>left：左对齐内容
		<br/>right：右对齐内容
		<br/>center：居中对齐内容
		<br/>justify：对行进行伸展，这样每行都可以有相等的长度</td>
	</tr>
	<tr>
		<th>bgcolor</th>
		<td>color</td>
		<td>规定表格的背景颜色</td>
	</tr>
	<tr>
		<th>border</th>
		<td>number</td>
		<td>表格的边框宽度</td>
	</tr>
	<tr>
		<th>cellpadding</th>
		<td>number<br/>percent</td>
		<td>规定单元格内边距</td>
	</tr>
	<tr>
		<th>cellspacing</th>
		<td>number<br/>percent</td>
		<td>规定单元格之间的距离</td>
	</tr>
	<tr>
		<th>frame</th>
		<td>enum</td>
		<td>规定外侧边框的哪个部分是可见的
		<br/>void：不显示外侧边框
		<br/>above：显示上部的外侧边框
		<br/>below：显示下部的外侧边框
		<br/>hsides：显示上部和下部的外侧边框
		<br/>vsides：显示左边和右边的外侧边框
		<br/>lhs：显示左边的外侧边框
		<br/>rhs：显示右边的外侧边框
		<br/>box：在所有四个边上显示外侧边框
		<br/>border：在所有四个边上显示外侧边框</td>
	</tr>
	<tr>
		<th>rules</th>
		<td>enum</td>
		<td>规定内侧边框的哪个部分是可见的
		<br/>none：没有线条
		<br/>groups：位于行组和列组之间的线条
		<br/>rows：位于行之间的线条
		<br/>cols：位于列之间的线条
		<br/>all：位于行和列之间的线条</td>
		</td>
	</tr>
	<tr>
		<th>summary</th>
		<td>string</td>
		<td>规定表格的摘要
		<br/>摘要不影响任何视觉效果，用于屏幕阅读器</td>
	</tr>
	<tr>
		<th>width</th>
		<td>number<br/>percent</td>
		<td>表格的宽度</td>
	</tr>
</table>
