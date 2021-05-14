# label

label元素为控件元素定义标签。

label元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果在label元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

label标签的for属性指定关联控件的id。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、交互元素、表单元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>短语元素</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持短语元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLLabelElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>for</th>
    <td>id</td>
    <td>绑定的控件元素</td>
</tr>
<tr>
    <th>form</th>
    <td>id</td>
    <td>规定label字段所属的一个或多个表单</td>
</tr>
</table>
