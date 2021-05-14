# progress

定义运行中的任务进度。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、labelable、可触摸元素</td>
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
    <td>HTMLProgressElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>max</th>
    <td>number</td>
    <td>规定需要完成的值</td>
</tr>
<tr>
    <th>value</th>
    <td>number</td>
    <td>规定进度的当前值</td>
</tr>
</table>

## 默认样式

```
progress {
    display: inline-block;
    box-sizing: border-box;
}
```