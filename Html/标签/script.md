# script

script标签用于定义客户端脚本，比如JavaScript。

script标签既可以直接包含脚本语句，也可以通过src属性指向外部脚本文件。当定义了src属性后，标签内部必须是空的。

## 约束

<table>
<tr>
    <th>content</th>
    <td>元数据、流元素、短语元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>脚本</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许元数据或者短语元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLScriptElement</td>
</tr>
</table>

## 属性

<table>
    <tr>
		<th>async</th>
		<td>bool</td>
		<td>异步执行脚本</td>
	</tr>
    <tr>
		<th>crossorigin</th>
		<td>corps</td>
		<td>CORPS</td>
	</tr>
    <tr>
		<th>defer</th>
		<td>bool</td>
		<td>脚本在文档完成解析后，触发DOMContentLoaded事件前执行</td>
	</tr>
    <tr>
		<th>referrerpolicy</th>
		<td>referrer</td>
		<td>指定referrer头部</td>
	</tr>
    <tr>
		<th>src</th>
		<td>url</td>
		<td>引用外部脚本的URI</td>
	</tr>
    <tr>
		<th>type</th>
		<td>mime</td>
		<td>定义脚本的语言，仅支持text/javascript、text/ecmascript、application/javascript、application/ecmascript、module。如果没有定义，脚本视为javascript。
		<br/>如果值为不支持的类型，则元素所含内容作为数据块而不会被执行。</td>
	</tr>
</table>

