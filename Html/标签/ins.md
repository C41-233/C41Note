# ins

定义已经被插入文档中的文本。

## 约束

对称标签。

## 属性

##### 可选

<table>
<tr>
    <th>cite</th>
    <td>url</td>
    <td>指向另外一个文档的URL，该文档解释了文本被插入的原因</td>
</tr>
    <th>datetime</th>
    <td>datetime</td>
    <td>规定文本被插入的日期和时间
        <br/>YYYY - 年（例如 2009）
        <br/>MM - 月（例如 01 for January）
        <br/>DD - 月中的日 （例如 08）
        <br/>T - 必需的分隔符
        <br/>hh - 小时 （例如 22 for 10.00pm）
        <br/>mm - 分钟 （例如 55）
        <br/>ss - 秒 （例如 03）
        <br/>TZD - 时区标志符（Z 表示祖鲁，同时也是格林威治时间）
    </td>
</tr>
</table>

## 默认样式

```
ins {
    display: inline;
    text-decoration: underline;
}
```