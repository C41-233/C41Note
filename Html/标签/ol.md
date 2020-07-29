# ol

有序列表，使得内部的每个li标签处都自动添加编号并分行，每行都有缩进。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素<br/>可触摸元素，仅当存在至少一个li子元素时</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>(li | script | template)*</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许流元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLOListElement</td>
</tr>
</table>

## 默认样式

```
ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
```