# sequence

顺序指示器。其指定的子元素必须按照顺序出现。

## 子元素

```
annotation?, 
(any | choice | element | group | sequence)*
```

## 属性

##### id	

ID。

##### maxOccurs	

默认做：1	

规定any元素在父元素中可出现的最大次数。该值可以是大于或等于零的整数。若不想对最大次数设置任何限制，请使用字符串`unbounded`。

##### minOccurs	

默认值：1	

规定any元素在父元素中可出现的最小次数。该值可以是大于或等于零的整数。若要指定该any组是可选的，请将此属性设置为`0`。

