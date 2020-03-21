# form

form标签用于为用户输入创建HTML表单，表单能够包含各种表单元素，用于向服务器传输数据。

## 约束

对称标签。

## 属性

##### 可选

<table>
<tr>
	<th>accept</th>
	<td>mime</td>
	<td>规定通过文件上传来提交的文件的类型</td>
</tr>
<tr>
	<th>accept-charset</th>
	<td>charset</td>
	<td>服务器处理表单数据所接受的字符集</td>
</tr>
<tr>
    <th>action</th>
    <td>url</td>
    <td>规定当提交表单时，向何处发送表单数据</td>
</tr>
<tr>
	<th>autocomplete</th>
	<td>enum</td>
	<td>规定是否启用表单的自动完成功能
	<br/>on / off</td>
</tr>
<tr>
	<th>enctype</th>
	<td>mime</td>
	<td>
		规定在发送到服务器之前应该如何对表单数据进行编码。
		<br/>application/x-www-form-urlencoded：（默认）在发送前编码所有字符
		<br/>multipart/form-data：不对字符编码（如果要上传文件，必须设置为此值）
		<br/>text/plain：空格转换为 "+" 加号，但不对特殊字符编码
	</td>
</tr>
<tr>
	<th>method</th>
	<td>enum</td>
	<td>
		规定如何发送表单数据
		<br/>post / get
	</td>
</tr>
<tr>
	<th>name</th>
	<td>id</td>
	<td>规定表单的名称</td>
</tr>
<tr>
	<th>novalidate</th>
	<td>bool</td>
	<td>如果使用该属性，则提交表单时不进行验证</td>
</tr>
<tr>
	<th>target</th>
	<td>target</td>
	<td>规定在何处打开链接文档，参见<a href="../参考/target.md">提交目标</a></td>
</tr>
</table>
