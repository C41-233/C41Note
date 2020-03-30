# address

定义一个地址。使用它来定义地址、签名或者文档的作者身份。

如果address元素位于body元素内，则它表示文档联系信息。

如果address元素位于article元素内，则它表示文章的联系信息。

## 约束

<table>
<tr>
    <th>content</th>
    <td>flow, palpable</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>flow content，但不包括address、heading content、sectioning content、header、footer</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持flow content的元素，但不包括address</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLElement</td>
</tr>
</table>

## 默认样式

```
address {
    display: block;
    font-style: italic;
}
```

## DOM

HTMLElement