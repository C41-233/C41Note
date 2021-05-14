# ruby

定义字符注音块。

在东亚使用，显示的是东亚字符的发音。例如日语汉字上方标注假名。

在ruby元素内：
- ruby元素的文本用来表示其本身的内容
- rp元素定义当浏览器不支持ruby元素时显示的内容；反之，当浏览器支持ruby元素时不显示rp元素的内容
- rt元素用于标注注音

```
<ruby>
  汉 <rp>(</rp><rt>hàn</rt><rp>)</rp>
  字 <rp>(</rp><rt>zì</rt><rp>)</rp>
</ruby>
```
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

