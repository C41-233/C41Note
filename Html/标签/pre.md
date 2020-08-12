# pre

定义预格式化的文本。

被包围在pre元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、可触摸元素</td>
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
    <td>支持流元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLPreElement</td>
</tr>
</table>

## 默认样式

```
pre {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0px;
}
```