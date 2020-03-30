# button

定义一个按钮。

当提交表单时，不同浏览器对button元素提交的值不同。应当改用input元素。

始终为button元素设置type属性，因为不同浏览器对type属性使用不同的默认值。

## 约束

<table>
<tr>
    <th>content</th>
    <td>flow, phrasing, interactive, listed, labelable, form, palpable</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>phrasing content，但不包括interactive content</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持phrasing content的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLButtonElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
	<th>autofocus</th>
	<td>bool</td>
	<td>规定当页面加载时按钮应当自动地获得焦点，在文档中只能有一个元素设置该属性</td>
</tr>
<tr>
	<th>disabled</th>
	<td>bool</td>
	<td>禁用此元素</td>
</tr>
<tr>
	<th>form</th>
	<td>id</td>
	<td>规定按钮属于一个或多个表单</td>
</tr>
<tr>
	<th>formaction</th>
	<td>url</td>
	<td>规定表单提交的url，覆盖form元素的action属性</td>
</tr>
<tr>
	<th>formenctype</th>
	<td>enum</td>
	<td>规定数据编码方式，覆盖form元素的enctype属性
	<br/>application/x-www-form-urlencoded：在发送前编码所有字符
	<br/>multipart/form-data：不对字符编码
	<br/>text/plain：空格转换为加号+，但不对特殊字符编码</td>
</tr>
<tr>
	<th>formmethod</th>
	<td>enum</td>
	<td>规定表单提交的HTTP方法，覆盖form元素的method属性
	<br/>post<br/>get</td>
</tr>
<tr>
	<th>formnovalidate</th>
	<td>bool</td>
	<td>提交表单时不进行验证，覆盖form元素的novalidate属性</td>
</tr>
<tr>
	<th>formtarget</th>
	<td>target</td>
	<td>规定如何打开action url，覆盖form元素的target属性，参见<a href="../参考/target.md">提交目标</a></td>
</tr>
<tr>
	<th>name</th>
	<td>string</td>
	<td>表单名称</td>
</tr>
<tr>
	<th>type</th>
	<td>枚举</td>
	<td>
		规定按钮的类型
		<br/>button：该按钮是可点击的按钮
		<br/>reset：该按钮是重置按钮，用于清除表单数据
		<br/>submit：该按钮是提交按钮
	</td>
</tr>
<tr>
	<th>value</th>
	<td>string</td>
	<td>按钮的初始值</td>
</tr>
</table>

## DOM

HTMLButtonElement

