# datalist

datalist标签定义选项列表。

与input元素的list属性配合使用该元素，来定义input可能的值供用户选择。用input元素的list属性绑定datalist。

datalist的选项由option元素提供。选项不会被显示出来，它仅仅是合法的输入值列表。

```
<form action="demo-form.php" method="get">
    <input list="browsers" name="browser">
    <datalist id="browsers">
      <option value="Internet Explorer">
      <option value="Firefox">
      <option value="Chrome">
      <option value="Opera">
      <option value="Safari">
    </datalist>
    <input type="submit">
</form>
```

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>短语元素 | option*</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持短语元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLDataListElement</td>
</tr>
</table>
