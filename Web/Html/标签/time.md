# time

定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。

该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。

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
    <td>HTMLTimeElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>datetime</th>
    <td>datetime</td>
    <td>规定日期/时间。如果没有提供，则是由元素的内容给定日期/时间</td>
</tr>
</table>
