# output

作为计算结果输出显示（比如执行脚本的输出）。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、表单元素、可触摸元素</td>
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
    <td>HTMLOutputElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>for</th>
    <td>id</td>
    <td>描述计算中使用的元素与计算结果之间的关系</td>
</tr>
<tr>
    <th>form</th>
    <td>id</td>
    <td>定义输入字段所属的一个或多个表单</td>
</tr>
<tr>
    <th>name</th>
    <td>string</td>
    <td>定义对象的表单名称</td>
</tr>
</table>

## 默认样式

```
output {
    display: inline;
}
```