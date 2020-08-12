# details

规定了用户可见的或者隐藏的需求的补充细节，是一个可以开启或关闭的交互式控件。

details标签中的可点击标题由summary标签定义。

```
<details open>
    <summary>Copyright 1999-2011.</summary>
    <p> - by Refsnes Data. All Rights Reserved.</p>
    <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>
```

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、sectioning root、交互元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>子元素</th>
    <td>summary 流元素*</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持流元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLDetailsElement</td>
</tr>
</table>

## 可选属性

##### open

bool

内容是否可见。