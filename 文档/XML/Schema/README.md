# Schema

参考资料：http://www.w3school.com.cn/schema/index.asp

XML Schema，也叫XSD，是DTD的替代者。它对XML文档的格式进行了约束，并且XML Schema本身也是由XML进行书写的。

引用的Schema的XML文档，必须在根元素声明以下属性：

```
mlns="<default-namspace>"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="<namespace> <schema>..."
```
##### 根结点

- [schema](schema.md) 所有Schema都以schema元素作为根结点。

##### 元素/属性

- [element](element.md) 定义元素。
- [attribute](attribute.md) 定义属性。
- key 指定属性或元素值（或一组值）必须是指定范围内的键。
- keyref 规定属性或元素值（或一组值）对应指定的 key 或 unique 元素的值。
- unique 指定属性或元素值（或者属性或元素值的组合）在指定范围内必须是唯一的。

##### 数据类型

- [complexContent](complexContent.md) 定义对复杂类型（包含混合内容或仅包含元素）的扩展或限制。
- [complexType](complexType.md) 定义复杂类型。
- [extension](extension.md) 扩展已有的simpleType或complexType元素。
- list 把简单类型定义为指定数据类型的值的一个列表。
- redefine 重新定义从外部架构文件中获取的简单和复杂类型、组和属性组。
- [restriction](restriction.md) 定义对simpleType、simpleContent或complexContent的约束。
- [simpleContent](simpleContent.md) 包含对complexType元素的扩展或限制且不包含任何元素。
- [simpleType](simpleType.md) 定义一个简单类型，规定约束以及关于属性或仅含文本的元素的值的信息。
- union 定义多个simpleType定义的集合。

##### 数值限定
- [fractionDigits](fractionDigits.md) 定义所允许的最大的小数位数。
- [maxExclusive](maxExclusive.md) 定义数值的开区间上限。
- [maxInclusive](maxInclusive.md) 定义数值的闭区间上限。
- [minExclusive](minExclusive.md) 定义数值的开区间下限。
- [minInclusive](minInclusive.md) 定义数值的闭区间下限。
totalDigits定义所允许的阿拉伯数字的精确位数。必须大于0。
长度限定
length定义所允许的字符或者列表项目的精确数目。必须大于或等于0。
maxLength定义所允许的字符或者列表项目的最大数目。必须大于或等于0。
minLength定义所允许的字符或者列表项目的最小数目。必须大于或等于0。
模式限定
enumeration定义可接受值的一个列表
whiteSpace定义空白字符（换行、回车、空格以及制表符）的处理方式。
pattern定义可接受的字符的精确序列。
顺序指示器
all规定子元素能够以任意顺序出现，每个子元素可出现零次或一次。
choice仅允许在 声明中包含一个元素出现在包含元素中。
sequence要求子元素必须按顺序出现。每个子元素可出现 0 到任意次数。
组指示器
group定义在复杂类型定义中使用的元素组。
attributeGroup定义在复杂类型定义中使用的属性组。
其它
annotationannotation 元素是一个顶层元素，规定 schema 的注释。
any使创作者可以通过未被 schema 规定的元素来扩展 XML 文档。
anyAttribute使创作者可以通过未被 schema 规定的属性来扩展 XML 文档。
appInfo规定annotation元素中应用程序要使用的信息。
documentation定义schema中的文本注释。
field规定 XPath 表达式，该表达式规定用于定义标识约束的值。
import向一个文档添加带有不同目标命名空间的多个 schema。
include向一个文档添加带有相同目标命名空间的多个 schema。
notation描述XML文档中非XML数据的格式。
selector指定XPath表达式，该表达式为标识约束选择一组元素。