# XPath

参考文档：http://www.w3school.com.cn/xpath/index.asp

XPath验证器：https://c41-233.github.io/C41Note/XPath/

XPath是对XML文档进行查询的语言。

### 一、路径表达式

一个**XPath查询**可以包含多条**XPath路径表达式**，表达式之间用`|`分隔，表示逻辑或。

```
//title | //price
/bookstore/book/title | //price
```

### 二、Step

一个**XPath路径表达式**由多个`Step`按照次序组成，每个Step之间用`/`分隔。

Step的基本语法为：`轴::结点[谓词]`，轴和谓词可以省略。

```
# 选取当前结点的所有price孙结点。
child::*/child::price
```

可以使用以下Step缩写：

| 表达式 | 描述 | 等价表达式 |
|---|---|---|
| \<nodename\> | 当前结点的所有名称为nodename的直接子元素结点 | child::nodename |
| / | 从根结点开始，即绝对路径 |  |
| // | 当前结点及其所有子孙结点 | descendant-or-self::node() |
| . | 当前结点 | self::node() |
| .. | 当前结点的父结点 | parent::node() |
| @\<attr\> | 当前结点的属性结点 | attribute::\<attr\> |

### 三、结点

| 表达式 | 描述 |
|---|---|
| \<nodename\> | 匹配指定名称的元素结点 |
| comment() | 匹配注释结点 |
| processing-instruction() | 匹配处理指令结点 |
| text() | 匹配文本结点 |
| * | 匹配任何元素结点 |
| @* | 匹配任何属性结点 |
| node() | 匹配任何类型的结点 |

### 四、轴

| 表达式 | 描述 |
|---|---|
| ancestor | 当前结点的所有祖先结点 |
| ancestor-or-self | 当前结点及其所有祖先结点 |
| attribute | 当前结点的所有属性结点 |
| child | 当前结点的所有子元素结点 |
| descendant | 当前结点的所有子孙元素结点 |
| descendant-or-self | 当前结点及其所有子孙元素结点 |
| following | 当前结点的结束标签之后的所有结点 |
| following-sibling | 当前结点之后的所有兄弟结点 |
| namespace | 当前结点的命名空间 |
| parent | 当前结点的父结点 |
| preceding | 当前结点的开始标签之前的所有结点 |
| preceding-sibling | 当前结点之前的所有兄弟结点 |
| self | 当前结点 |

### 五、谓词

谓词用来查找某个特定的结点集合，谓词嵌套在方括号中。

谓词可以是一个下标，也可以是一个测试表达式。

``` XML
<bookstore>

<book category="COOKING">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>

<book category="CHILDREN">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>

<book category="WEB">
  <title lang="en">XQuery Kick Start</title>
  <author>James McGovern</author>
  <author>Per Bothner</author>
  <author>Kurt Cagle</author>
  <author>James Linn</author>
  <author>Vaidyanathan Nagarajan</author>
  <year>2003</year>
  <price>49.99</price>
</book>

<book category="WEB">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>

</bookstore>
```

#### 1、谓词下标

谓词为一个整数时表示匹配元素在父结点中的下标，下标从1开始（IE浏览器中下标从0开始）。

```
# 选择第二个book结点
/bookstore/book[2]
```

#### 2、谓词测试表达式

测试表达式用于从集合中筛选符合条件的结点。

测试表达式中的结点名\<nodename\>，表示其子结点的文本结点。

```
# 选择价格高于35的所有book的price
/bookstore/book[price>35]/price
```

##### 下标

| 表达式 | 描述 |
|---|---|
| last() | 父结点中的最后一个匹配结点的下标 |
| position() | 当前结点在父结点中的下标 |

```
# 选择最后一个book结点
/bookstore/book[last()]
```

##### 运算符

- 算数运算符：`+`、`-`、`*`、`div`、`mode`
- 比较运算符：`=`、`!=`、`<`、`<=`、`>`、`>=`
- 逻辑运算符：`or`、`and`