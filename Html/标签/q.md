# q

定义短的引用。

浏览器通常会在这种引用的周围插入引号。

## 约束

对称标签。

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