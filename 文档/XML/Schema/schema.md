# schema

每一个XML Schema文档的根元素。它必须定义所属的名字空间为`"http://www.w3.org/2001/XMLSchema"`（通过xmlns属性）。同样，它的所有子元素也必须使用同一名字空间。

## 子元素

```
(annotation | import | include | redefine)*, 
( 
    ( (attributeGroup | complexType | group | simpleType) | attribute | element | notation ),
    annotation*
)*
```

## 属性

##### attributeFormDefault	

```
qualified | unqualified
```

默认值：unqualified

指定在该schema的目标命名空间中声明的属性的形式
- qualified 表示必须通过命名空间前缀限定目标命名空间的属性
- unqualified表示无须通过命名空间前缀限定目标命名空间的属性

##### blockDefault	

```
CDATA	
```

默认值：#IMPLIED

规定在目标命名空间中element和complexType元素上的block属性的默认值。block属性防止具有指定派生类型的复杂类型（或元素）被用来代替继承的复杂类型（或元素）。该值可以包含#all或者一个列表，该列表是extension、restriction或substitution的子集。
- extension 防止通过扩展派生的复杂类型被用来替代该复杂类型
- restriction 防止通过限制派生的复杂类型被用来替代该复杂类型
- substitution 防止元素的替换
- #all 防止所有派生的复杂类型被用来替代该复杂类型

##### elementFormDefault	

```
qualified | unqualified	
```

默认值：unqualified	

指定在该schema的目标命名空间中声明的元素的形式。

- qualified 表示必须通过命名空间前缀限定目标命名空间的元素
- unqualified 表示无须通过命名空间前缀限定目标命名空间的元素

##### finalDefault	

```
CDATA	
```

默认值：#IMPLIED	

规定在该架构的目标命名空间中element、simpleType和complexType元素的final属性的默认值。

final属性防止element、simpleType或complexType元素的指定的派生类型。对于element和complexType元素，该值可以包含#all或一个列表，该列表是extension或restriction的子集。对于simpleType元素，该值还可以包含list和union。

- extension 默认情况下，该schema中的元素不能通过扩展派生。仅适用于element和complexType元素
- restriction 防止通过限制派生
- list  防止通过列表派生。仅适用于simpleType元素
- union 防止通过联合派生。仅适用于simpleType元素
- #all  默认情况下，该schema中的元素不能通过任何方法派生

##### id	

``` 
ID	
```

默认值：#IMPLIED	

##### targetNamespace	

```
CDATA	
```

默认值：#REQUIRED	

指出了被引用的文档需要使用的名字空间，即由此Schema约束的元素来自的名字空间。还可以分配该命名空间的前缀。如果没有分配任何前缀，则该命名空间的schema组件可以和非限定的引用一起使用。

##### version	

```
CDATA	
```

默认值：#IMPLIED	

规定schema的版本。

##### xmlns	

```
CDATA	
```

默认值：#REQUIRED	

命名空间。