# XML

参考资料：http://www.w3school.com.cn/xml/index.asp

## 注释
以`<--`开头，以`-->`结尾。
``` XML
<!-- 这是注释 -->
```

## 格式

头部指令包含版本和编码信息。
``` XML
<?xml encoding="utf-8" standalone="yes" version="1.0"?>
```

- encoding	编码
- standalone	是否是独立文档，`yes|no`
- version	版本，`1.0`

形式良好的XML文档必须满足：
- 文档必须有唯一根元素
- 文档必须有关闭标签
- 标签对大小写敏感
- 元素必须被正确的嵌套
- 属性必须加引号

## CDATA
CDATA指不应由 XML 解析器进行解析的文本数据。

CDATA 部分由`<![CDATA[`开始，由`]]>`结束。

CDATA 部分不能包含字符串 `]]>`。也不允许嵌套的CDATA部分。

标记 CDATA 部分结尾的 ]]> 不能包含空格或折行。

## 名字空间
元素使用前缀声明所属的名字空间，并通过`xmlns:prefix`属性定义一个与某个命名空间相关联的限定名称。

未显式指定的命名空间是缺省的命名空间，即`xmlns`（而非`xmlns:prefix`）。

除元素外，属性也可以使用前缀声明所属的命名空间。

在一个元素中声明的命名空间，所有子元素中也有效（包括相关属性），一种通常的做法是在XML文档的根元素声明所有命名空间。在子元素中声明的命名空间可以覆盖父元素中的声明。

一个元素的QName是指`prefix:element`。

``` XML
<h:table xmlns:h="http://www.w3.org/TR/html4/">
    <h:tr>
        <h:td>Apples</h:td>
        <h:td>Bananas</h:td>
    </h:tr>
</h:table>
```

以上声明了名字空间`http://www.w3.org/TR/html4/`，它的别名前缀是`h`。