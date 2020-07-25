# a

a标签可定义锚点，可以创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他URL的超链接。

锚点有两种用法：  
  - 通过使用href属性，创建指向另外一个文档的链接（或超链接）
  - 通过使用id属性，创建一个文档内部的书签（也就是说，可以创建指向文档片段的链接，锚点名前要加#）

通过伪类对各种不同状态的链接设置样式：
  - `a:link` 未访问的链接
  - `a:visited` 已访问的链接
  - `a:hover` 鼠标移动到链接上
  - `a:active` 选定的链接

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素, 文本元素, 交互元素, 可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>可见元素，包括流元素（不包括交互元素）和文本元素</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持文本元素或流元素的元素，但不包括a标签</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLAnchorElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
	<th>download</th>
	<td></td>
	<td></td>
</tr>
<tr>
	<th>href</th>
	<td>url</td>
	<td>链接的目标URL</td>
</tr>
<tr>
	<th>hreflang</th>
	<td>language</td>
	<td>规定目标URL的基准语言</td>
</tr>
<tr>
	<th>ping</th>
	<td></td>
	<td></td>
</tr>
<tr>
	<th>referrerpolicy</th>
	<td></td>
	<td></td>
</tr>
<tr>
	<th>rel</th>
	<td></td>
	<td></td>
</tr>
<tr>
	<th>target</th>
	<td></td>
	<td></td>
</tr>
<tr>
	<th>type</th>
	<td></td>
	<td></td>
</tr>
</table>

## 默认样式

```
a {
    cursor: pointer;
    text-decoration: underline;
}
```
