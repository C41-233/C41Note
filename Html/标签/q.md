# q

定义短的引用。

浏览器通常会在这种引用的周围插入引号。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、可触摸元素</td>
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
    <td>HTMLQuoteElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>cite</th>
    <td>url</td>
    <td>规定引用的源URL</td>
</tr>
</table>

## 默认样式

```
q {
    display: inline;
}
q:before {
    content: open-quote;
}
q:after {
    content: close-quote;
}
```