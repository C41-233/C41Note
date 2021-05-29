# restriction

## 子元素

根据父元素不同，子元素的定义也不同。

##### simpleType

```
annotation?,
simpleType?, 
(enumeration | fractionDigits | length | minExclusive | minInclusive | maxExclusive | maxInclusive | minLength | maxLength | pattern | totalDigits | whiteSpace)*
```

##### simpleContent

```
annotation?,
(
	simpleType?, 
	(enumeration | fractionDigits | length | minExclusive | minInclusive | maxExclusive | maxInclusive | minLength | maxLength | pattern | totalDigits | whiteSpace)*
)?, 
(attribute | attributeGroup)*,
anyAttribute?
```

##### complexContent

```
annotation?,
(all | choice | group | sequence)?,
(attribute | attributeGroup)*,
anyAttribute?
```

对元素的值进行限定。

## 属性

## 必须属性

##### base	

指定了限定类型的基本类型，即默认的匹配模式，更详尽的限定在此基础上展开。

## 可选属性

##### id	

ID。