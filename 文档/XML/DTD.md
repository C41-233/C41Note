# DTD
参考资料：http://www.w3school.com.cn/dtd/index.asp

通过DTD，XML可以描述自己的格式。

## 内联DTD
XML内联的DTD，必须在DOCTYPE声明中指定DTD规则。

``` XML
<!DOCTYPE 根元素 [元素声明]>
```
例如：
``` XML
<!DOCTYPE note [
  <!ELEMENT note (to,from,heading,body)>
  <!ELEMENT to      (#PCDATA)>
  <!ELEMENT from    (#PCDATA)>
  <!ELEMENT heading (#PCDATA)>
  <!ELEMENT body    (#PCDATA)>
]>
```

## 外联DTD
##### 引用本地DTD文件

``` XML
<!DOCTYPE 根元素 SYSTEM "文档位置">
```

例如：
```
<!DOCTYPE note SYSTEM "note.dtd">
```

##### 引用DTD URI

``` XML
<!DOCTYPE 根元素 PUBLIC "注册标签" "文档位置">
```
例如：
``` XML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

## 元素声明
``` XML
<!ELEMENT 元素名称 元素类别>
```

``` XML
<!ELEMENT 元素名称 (元素定义)>
```

##### 元素类别

- `EMPTY`	空白元素
- `ANY`	可包含任何可解析数据的组合

##### 元素定义

- `#PCDATA`	被解析的字符数据
- `#CDATA`	不被解析的字符数据
- `子元素1, 子元素2, ...`	当子元素按照由逗号分隔开的序列进行声明时，这些子元素必须按照相同的顺序出现在文档中

元素定义的正则匹配
- `+`	至少出现一次的元素
- `*`	零次或多次的元素
- `?`	零次或多次的元素
- `|`	两个个元素之一

## 属性声明
``` XML
<!ATTLIST 元素名称 属性名称 属性类型 默认值>
```

##### 属性类型

- `(值1 | 值2 | ...)`	枚举值
- `CDATA`	字符数据
- `ID`	唯一的id
- `IDREF`	另外一个元素的id
- `IDREFS`	其他元素id的列表
- `NMTOKEN`	XML名称
- `NMTOKENS`	XML名称的列表
- `ENTITY`	实体
- `ENTITIES`	实体列表
- `NOTATION`	符号的名称
- `xml:`	一个预定义的XML值

##### 默认值

- `值`	默认值
- `#REQUIRED`	属性值是必需的
- `#IMPLIED`	属性不是必需的
- `#FIXED` 值	属性值是固定的

##### 实体声明

实体是用于定义引用普通文本或特殊字符的快捷方式的变量。实体引用是对实体的引用。

一个实体由三部分构成: `&`、 `实体名称`、`;`。

##### 内部实体声明

``` XML
<!ENTITY 实体名 "实体值">
```

##### 外部实体声明

``` XML
<!ENTITY 实体名 SYSTEM "文档位置">
```