# unicode双向字符控制

unicode双向算法用于控制文字的阅读顺序。

### 双向字符类型

##### 强类型

| 类型 | 说明 | 范围 |
|---|---|---|
| L | Left-to-Right | LRM，大部分字母，音节，汉字，非欧洲或非阿拉伯数字，... |
| R | Right-to-Left | RLM，希伯来字母和相关的标点 |
| AL | Right-to-Left Arabic | ALM，阿拉伯语，它拿字母，和叙利亚字母，这些文字的特定标点，... |

##### 弱类型

| 类型 | 说明 | 范围 |
|---|---|---|
| EN | 欧洲数字(European Number) | 欧洲数字，东阿拉伯-印度数字，... |
| ES | 欧洲数字分隔符(European Number Separator) | 加号，减号 |
| ET | 欧洲数字终止符(European Number Terminator) | 度的标志，货币符号 |
| AN | 阿拉伯数字(Arabic Number) | 阿拉伯-印度数字，阿拉伯小数和千位分隔符，… |
| CS | 常见的数字分隔符(Common Number Separator) | 冒号，逗号，句号，不换行空格(no-break space)，... |
| NSM | Nonspacing Mark | 普通类值(General_Category)的字符：Mn(Nonspacing_Mark)和Me (Enclosing_Mark) |
| BN | 中性边界(Boundary Neutral) | 除了明确给出的其他类型，可忽略的默认值，非字符和控制字符 |

##### 中性

| 类型 | 说明 | 范围 |
|---|---|---|
| B | 段落分隔符(Paragraph Separator) | 段落分隔符，适当的换行符函数，更高级别的协议确定段 |
| S | 部分分隔符(Segment Separator) | Tab
| WS | 空格(Whitespace) | 空格，图形空格，线分隔符，换页符，一般标点符号，… |
| ON | Other Neutrals | 所有其他字符，包括对象替换字符 |

### 显式格式化

<table>
<thead>
<tr>
    <th>显式格式化方式</th>
    <th>等价标记</th>
    <th>说明</th>
</tr>
</thead>
<tbody>
<tr>
    <td>RLI</td>
    <td>&lt;bdi dir="rtl"&gt;</td>
    <td>Right-to-Left Isolate</td>
</tr>
<tr>
    <td>LRI</td>
    <td>&lt;bdi dir="ltr"&gt;</td>
    <td>Left-to-Right Isolate</td>
</tr>
<tr>
    <td>FSI</td>
    <td>&lt;bdi&gt;
    <br/>&lt;bdi dir="auto"&gt;</td>
    <td>First Strong Isolate</td>
</tr>
<tr>
    <td>RLO</td>
    <td>&lt;bdo dir="rtl"&gt;
    <br/>&lt;bdo dir="auto"&gt;</td>
    <td>Right-to-Left Override</td>
</tr>
<tr>
    <td>LRO</td>
    <td>&lt;bdo dir="ltr"&gt;</td>
    <td>Left-to-Right Override</td>
</tr>
<tr>
    <td>RLE</td>
    <td>[dir="rtl"]</td>
    <td>Right-to-Left Embedding</td>
</tr>
<tr>
    <td>LRE</td>
    <td>[dir="ltr"]</td>
    <td>Left-to-Right Embedding</td>
</tr>
<tr>
    <td>PDF</td>
    <td>终结标记</td>
    <td>Pop Directional Format</td>
</tr>
<tr>
    <td>PDI</td>
    <td>终结标记</td>
    <td>Pop Directional Isolate</td>
</tr>
</tbody>
</table>

##### [dir]

dir属性只是让被包裹的片段从浏览器左面开始或从右面开始，影响范围为整个标签。

当「嵌入」作用于一些显式格式化字符时，嵌入格式化字符内的文本范围并不与周围的文本相互独立。即在「嵌入」范围内的字符可以影响到外部的字符排序，反之亦然。

```
<p dir="ltr">This is an apple.</p>
This is an apple.

<p dir="rtl">This is an apple.</p>
.This is an apple
```

##### &lt;bdo&gt;

把标签包裹的全部内容进行排序。

```
<p>This <bdo dir="ltr">is</bdo> an apple.</p>
This is an apple.

<p>This <bdo dir="rtl">is</bdo> an apple.</p>
This si an apple.

<p dir="ltr">This <bdo dir="rtl">is</bdo> an apple dfe3 fdfgg 1.</p>
This si an apple dfe3 fdfgg 1.

<p dir="rtl">This <bdo dir="rtl">is</bdo> an apple dfe3 fdfgg 1.</p>
.an apple dfe3 fdfgg 1 si This
```

##### &lt;bdi&gt;

bdi和bdo不同点在于不会对隔离外的文本产生影响，所以并不会产生新的方向串。

```
<p dir="rtl">This an <bdi dir="rtl">apple <bdo dir="rtl">dfe3</bdo> fdfgg</bdi> 1.</p>
.This an fdfgg 3efd apple 1
```