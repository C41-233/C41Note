# attribute

定义元素的属性。所有的属性均作为简易类型来声明。

简易元素无法拥有属性。假如某个元素拥有属性，它就会被当作某种复合类型。但是属性本身总是作为简易类型被声明的。

## 子元素

```
annotation?, simpleType?
```

## 属性

##### default	

规定属性的默认值。

default和fixed属性不能同时定义。

##### fixed

规定属性的固定值。

default和fixed属性不能同时定义。

##### form	

```
qualified | unqualified
```	

规定属性的格式。默认值是包含该属性的schema元素的attributeFormDefault属性的值。qualified指示必须通过命名空间前缀和该属性的无冒号名称(NCName)来限定此属性。unqualified指示此属性无须由命名空间前缀限定，且无须匹配此属性的无冒号名称(NCName)，即本地名称。

##### id	

ID。

##### name	

规定属性的名称。

name和ref属性不能同时定义。

##### ref	

规定对指定的属性的引用。

name和ref属性不能同时定义。如果定义ref属性，则不能定义simpleType元素、form属性和type属性。

##### type	

规定内建的数据类型或简单类型。type属性只能在内容不包含simpleType元素时定义。

##### use	

默认值：optional	

规定如何使用该属性。

- optional 属性是可选的并且可以具有任何值
- prohibited 不能使用属性
- required 属性的必需的