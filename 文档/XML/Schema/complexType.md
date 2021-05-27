# complexType

定义复合数据类型。复合数据类型是包含其他元素和属性的XML元素。

## 子元素

```
annotation?,
( 
	simpleContent 
	| complexContent 
	| (
		(group | all | choice | sequence)?, 
		(attribute | attributeGroup)*, 
		anyAttribute?
	  ) 
)
```

## 属性

##### abstract	
```
true | false
```	

默认值：false	

规定在实例文档中是否可以使用复杂类型。如果该值为 true，则元素不能直接使用该复杂类型，而是必须使用从该复杂类型派生的复杂类型。

##### block	

防止具有指定派生类型的复杂类型被用来替代该复杂类型。该值可以包含#all或者一个列表，该列表是extension或restriction的子集。

- extension 防止通过扩展派生的复杂类型被用来替代该复杂类型。
- restriction 防止通过限制派生的复杂类型被用来替代该复杂类型。
- #all 防止所有派生的复杂类型被用来替代该复杂类型。

##### final	

防止从该complexType元素派生指定的类型。该值可以包含#all或者一个列表，该列表是extension或restriction的子集。

- extension 防止通过扩展派生。
- restriction 防止通过限制派生。
- #all 防止所有派生（扩展和限制）。

##### id	

ID。

##### name	

规定数据类型的名称，别的元素可以通过type属性引用该名称。

##### mixed	

```
true | false
```	

默认值：false	

规定是否允许字符数据出现在该复杂类型的子元素之间。如果simpleContent元素是子元素，则不允许mixed属性。如果complexContent元素是子元素，则该mixed属性可被complexContent元素的mixed属性重写。