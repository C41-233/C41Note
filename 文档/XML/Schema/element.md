# element

定义可以出现的元素。

## 子元素

```
annotation?,
(simpleType | complexType)?, 
(key | keyref | unique)*
```

## 属性

##### abstract	

默认值：false	

指示元素是否可以在实例文档中使用。如果该值为true，则元素不能出现在实例文档中。相反，substitutionGroup属性包含该元素的QName的其他元素必须出现在该元素的位置。多个元素可以在其 substitutionGroup属性中引用该元素。

##### block	

防止具有指定派生类型的元素被用于替代该元素。该值可以包含#all或者一个列表，该列表是extension、restriction或substitution的子集。

- extension 防止通过扩展派生的元素被用来替代该元素
- restriction 防止通过限制派生的元素被用来替代该元素
- substitution 防止通过替换派生的元素被用来替代该元素
- #all 防止所有派生的元素被用来替代该元素

##### default

指定元素的默认值，当没有其他的值被规定时，默认值就会自动分配给元素。

仅当元素内容是简单类型或textOnly时使用。

##### final	

设置element元素上final属性的默认值。如果父元素不是schema元素，则不能使用该属性。该值可以包含 #all或者一个列表，该列表是extension或restriction的子集。

- extension 防止通过扩展派生的元素被用来替代该元素。
- restriction 防止通过限制派生的元素被用来替代该元素。
- #all 防止所有派生的元素被用来替代该元素。

##### fixed	

指定元素的固定值，固定值会自动分配给元素，并且无法规定另外一个值（仅当元素内容是简单类型或textOnly时使用）。

form	qualified
unqualified	#IMPLIED	规定该元素的形式。默认值是包含该属性的schema元素的elementFormDefault属性的值。
如果该值是 “unqualified”，则无须通过命名空间前缀限定该元素。
如果该值是“qualified”，则必须通过命名空间前缀限定该元素。
如果父元素是schema元素，则不能使用该属性。
id	ID	#IMPLIED	ID
maxOccurs	CDATA	1	规定element 元素在父元素中可出现的最大次数。该值可以是大于或等于零的整数。若不想对最大次数设置任何限制，请使用字符串"unbounded"
minOccurs	CDATA	1	规定element 元素在父元素中可出现的最小次数。该值可以是大于或等于零的整数。若不想对最大次数设置任何限制，请使用字符串"unbounded"
name	CDATA		指定元素的名称
如果父元素是schema元素，则此属性是必需的
nillable	true
false	false	指示是否可以将显式的零值分配给该元素
此项应用于元素内容并且不是该元素的属性
ref	CDATA	#IMPLIED	规定对另一个元素的引用。ref属性可包含一个命名空间前缀
如果父元素是schema元素，则不使用该属性
substitutionGroup	CDATA	#IMPLIED	规定可用来替代该元素的元素的名称。该元素必须具有相同的类型或从指定元素类型派生的类型
如果父元素不是 schema 元素，则不使用该属性
type	CDATA	#IMPLIED	指定元素的数据类型，你必须同时指出这些类型所属的名字空间，它与schema属性声明所在的名字空间一致。