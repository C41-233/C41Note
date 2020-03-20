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

对称标签。
