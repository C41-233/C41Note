# fieldset

对表单中的相关元素进行分组，会在相关表单元素周围绘制边框。

legend标签为fieldset元素定义标题。

## 约束

对称标签。

## 属性

##### 可选

<table>
<tr>
    <th>disabled</th>
    <td>bool</td>
    <td>规定该组中的相关表单元素应该被禁用</td>
</tr>
<tr>
    <th>form</th>
    <td>id</td>
    <td>规定fieldset所属的一个或多个表单</td>
</tr>
<tr>
    <th>name</th>
    <td>string</td>
    <td>规定fieldset的名称</td>
</tr>
</table>

## 默认样式

```
fieldset {
    display: block;
    border-width: 2px;
    border-style: groove;
    border-color: threedface;
}
```