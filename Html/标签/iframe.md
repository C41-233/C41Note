# iframe

iframe元素会创建包含另外一个文档的内联框架（即行内框架）。

可以把需要的文本放置在&lt;iframe&gt;和&lt;/iframe&gt;之间，这样就可以应对无法理解iframe的浏览器。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、嵌入元素、交互元素、可触摸元素</td>
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
	<td>设置特征策略</td>
</tr>
<tr>
	<th>csp</th>
	<td>string</td>
	<td>设置内容安全策略</td>
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
	<th>referrerpolicy</th>
	<td>referrer</td>
	<td>表示获取目标文档时如何发送referrer头部</td>
</tr>
<tr>
	<th>sandbox</th>
	<td>enum</td>
	<td>启用沙盒限制条件。属性值可以为空字符串（这种情况下会启用所有限制），也可以是用空格分隔的一系列指定的字符串。参加<a href="#sandbox">sandbox</a></td>
</tr>
<tr>
	<th>src</th>
	<td>url</td>
	<td>在框架中显示的文档的URL</td>
</tr>
<tr>
	<th>srcdoc</th>
	<td>string</td>
	<td>该属性是一段HTML代码，这些代码会被渲染到iframe中。如果浏览器不支持srcdoc 属性，则会渲染src属性表示的内容。</td>
</tr>
<tr>
	<th>width</th>
	<td>px</td>
	<td>宽度</td>
</tr>
</table>

## sandbox

沙盒限制条件。

- allow-downloads-without-user-activation：允许在没有征求用户同意的情况下下载文件.
- allow-forms：允许嵌入的浏览上下文提交表单。如果没有使用该关键字，则无法提交表单。
- allow-modals：允许嵌入的浏览上下文打开模态窗口。
- allow-orientation-lock：允许嵌入的浏览上下文锁定屏幕方向（译者注：比如智能手机、平板电脑的水平朝向或垂直朝向）。
- allow-pointer-lock：允许嵌入的浏览上下文使用 Pointer Lock API.
- allow-popups：允许弹窗 (例如 window.open, target="_blank", showModalDialog)。如果没有使用该关键字，相应的功能将自动被禁用。
- allow-popups-to-escape-sandbox：允许沙箱化的文档打开新窗口，并且新窗口不会继承沙箱标记。例如，安全地沙箱化一个广告页面，而不会在广告链接到的新页面中启用相同的限制条件。
- >allow-presentation：允许嵌入的浏览上下文开始一个 presentation session。
- allow-same-origin：如果没有使用该关键字，嵌入的浏览上下文将被视为来自一个独立的源，这将使 same-origin policy 同源检查失败。
- allow-scripts：允许嵌入的浏览上下文运行脚本（但不能创建弹窗）。如果没有使用该关键字，就无法运行脚本。
- allow-storage-access-by-user-activation：允许嵌入的浏览上下文通过 Storage Access API 使用父级浏览上下文的存储功能。
- allow-top-navigation：允许嵌入的浏览上下文导航（加载）内容到顶级的浏览上下文。
- allow-top-navigation-by-user-activation：允许嵌入的浏览上下文在经过用户允许后导航（加载）内容到顶级的浏览上下文。


