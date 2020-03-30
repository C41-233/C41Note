# bdi

双向隔离元素，允许设置一段文本，使其脱离其父元素的文本方向（unicode双向字符控制）设置。

## 约束

<table>
<tr>
    <th>content</th>
    <td>flow, phrasing, palpable</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>phrasing content</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持phrasing content的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLElement</td>
</tr>
</table>

## 属性

##### 可选
<table>
<tr>
    <th>dir</th>
    <td>enum</td>
    <td>规定文本方向
		<br/>auto：默认值
        <br/>ltr：从左到右
        <br/>rtl：从右到左
    </td>
</tr>
</table>

## 默认样式

```
bdi {
    display: inline;
    unicode-bidi: isolate;
}
```