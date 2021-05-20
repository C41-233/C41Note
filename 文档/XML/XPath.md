# XPath

XPath是对XML文档进行查询的语言。

### 路径表达式

一个**XPath查询**可以包含多条**XPath路径表达式**，表达式之间用`|`分隔，表示逻辑或。

```
//title | //price
/bookstore/book/title | //price
```

### Step

一个**XPath路径表达式**由多个`Step`按照次序组成，每个Step之间用`/`分隔。

Step的基本语法为：`轴::结点[谓词]`，轴和谓词可以省略。

```
# 选取当前结点的所有price孙结点。
child::*/child::price
```

可以使用以下Step缩写：

| 表达式 | 描述 | 等价表达式 |
|---|---|---|
| nodename | 当前节点的所有nodename直接子节点 | child::nodename |
| / | 从根节点开始，即绝对路径 |  |
| // | 当前节点及其所有子孙节点 | descendant-or-self::node() |
| . | 当前节点 | self::node() |
| .. | 当前节点的直接父节点 | parent::node() |
| @attr | 属性 | attribute::attr |

### 结点

| 表达式 | 描述 |
|---|---|
| \<nodename\> | 匹配指定名称的元素结点 |
| comment() | 匹配注释结点 |
| processing-instruction() | 匹配处理指令结点 |
| text() | 匹配文本结点 |
| * | 匹配任何元素结点 |
| @* | 匹配任何属性结点 |
| node() | 匹配任何类型的结点 |

### 轴

