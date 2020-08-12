# bdo

覆盖默认的文本方向。

一般用于把一段文本的方向规定为与周围文本的自然方向相反的方向。方向由必需属性dir指定。bdo元素很少使用，只用于某些多语言文档。在这种文档中，可能有某一段文本使用的语言的阅读方式与文档中其他部分使用的语言的阅读方式不同。

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
    <td>HTMLElement</td>
</tr>
</table>

## 属性

##### 必须
<table>
<tr>
    <th>dir</th>
    <td>enum</td>
    <td>规定文本方向
        <br/>ltr：从左到右
        <br/>rtl：从右到左
    </td>
</tr>
</table>

## 默认样式

```
bdo {
    display: inline;
    unicode-bidi: bidi-override;
}
```