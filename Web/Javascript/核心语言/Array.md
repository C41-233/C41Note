# Array

Array对象用于在单个的变量中存储多个值。

Array对象可以通过`[value,value...]`语法构造。

## 继承

[Object](Object.md) / Array

## 构造函数

```
[new] Array(number size)
```

创建大小为size的数组，每个元素都为undefined。

```
[new] Array(object elements...)
```

## 对象函数

| 函数 | 描述 |
|---|---|
| from | 从可迭代对象中创建一个新数组 |
| isArray | 判断对象是否是Array |
| of | 根据给定元素创建数组 |

## 原型属性

| 名称 | 类型 | 描述 | 属性 |
|---|---|---|---|
| length | number | 数组大小 | - |
| @@iterator | \<iterator\> | 迭代器 | - |
| @@species | Function | 构造函数 | - |
| @@unscopable | Array | 被with语句排除的属性名称列表 | configurable |

## 原型函数
| 函数 | 描述 |
|---|---|
| concat | 合并多个数组 |
| copyWithin | 复制数组的一部分到另一个位置 |
| entries | 键值对索引 |
| every | 检测是否每个元素都满足条件 |
| fill | 填充元素 |
| filter | 返回符合条件元素的新数组 |
| find | 返回满足条件的元素 |
| findIndex | 返回满足条件的元素索引 |
| flat | 将嵌套的数组平铺 |
| flatMap | 先flat再map |
| forEach | 对数组的每个元素执行一次给定的函数 |
| includes | 判断一个数组是否包含指定值 |
| indexOf | 返回数组中指定元素的第一个索引 |
| join | 数组中的所有元素合并成字符串 |
| keys | 返回索引键的迭代器 |
| lastIndexOf | 返回指定元素的最后一个索引 |
| map | 对每个元素进行映射后返回新数组 |
| pop | 删除并返回数组的最后一个元素 |
| push | 向数组的末尾添加元素 |
| reduce | 对元素进行聚合 |
| reduceRight | 对元素逆序聚合 |
| reverse | 颠倒数组中元素的顺序 |
| shift | 删除数组的第一个元素并返回该元素 |
| slice | 从数组中返回子数组 |
| sort | 对数组排序 |
| unshift | 向数组的开头添加元素 |
| values | 返回数组每个值的迭代器 |

---
##### concat
```
Array Array.prototype.concat(object/Array... arr)
```
合并多个数组。
---
##### entries
```
<iterator> Array.prototype.entries()
```
---

##### every
```
boolean Array.prototype.every(Function test, object self)
```
检测是否每个元素都满足条件。

- test 测试函数。
```
boolean function(object element, number index, object self)
```

- self 传递给测试函数的self参数。

---
##### fill
```
Array Array.prototype.fill(object value)
Array Array.prototype.fill(object value, number start)
Array Array.prototype.fill(object value, number start, number end)
```
---

##### filter
```
Array Array.prototype.filter(Function test)
Array Array.prototype.filter(Function test, object self)
```

返回符合条件元素的新数组。

- test 测试函数。
```
boolean function(object element, number index, object self)
```

- self 传递给测试函数的self参数。

---

##### find
```
object Array.prototype.find(Function test)
object Array.prototype.find(Function test, object self)
```

```
boolean function(object element, number index, object self)
```

---
##### findIndex
```
number Array.prototype.findIndex(Function test)
number Array.prototype.findIndex(Function test, object self)
```

```
boolean function(object element, number index, object self)
```

---
##### flat
```
Array Array.prototype.flat()
Array Array.prototype.flat(number depth)
```
---
##### flatMap
```
Array Array.prototype.flatMap(Function map)
Array Array.prototype.flatMap(Function map, object self)
```

```
object function(object element)
object function(object element, number index)
object function(object element, number index, object self)
```

---
##### forEach
```
undefined Array.prototype.forEach(Function action)
undefined Array.prototype.forEach(Function action, object self)
```

```
undefined function(object element)
undefined function(object element, number index)
undefined function(object element, number index, object self)
```

---
##### from
```
Array Array.from(<array-like> values)
Array Array.from(<array-like> values, Function map)
Array Array.from(<array-like> values, Function map, object self)
```
---
##### isArray
```
boolean Array.isArray(obj)
```

---
##### join	
```
string Array.prototype.join()	
string Array.prototype.join(string separator)	
```

数组中的所有元素合并成字符串。
---

##### includes
```
boolean Array.prototype.includes(object value)
boolean Array.prototype.includes(object value, number from)
```

---
##### indexOf
```
number Array.prototype.indexOf(object value)
number Array.prototype.indexOf(object value, number from)
```

---
##### of

```
Array Array.of(object values...)
```

---
##### pop	
```
object Array.prototype.pop()	
```

删除并返回数组的最后一个元素。

数组为空时返回undefined。

---
##### push	
```
number Array.prototype.push(object item...)	
```

向数组的末尾添加元素，返回新的数组长度。

---
##### reverse	
```
Array Array.prototype.reverse()	
```

颠倒数组中元素的顺序，返回数组本身。该函数会修改数组本身。

---
##### shift	
```
object Array.prototype.shift()
```	

删除数组的第一个元素并返回该元素。

---
##### slice
```
Array Array.prototype.slice()
Array Array.prototype.slice(number begin)
Array Array.prototype.slice(number bgein, number end)
```

从数组中返回子数组。

begin表示起始下标，负数表示倒数。例如，`slice(-2)`表示返回倒数第二个元素开始的子数组。

end表示终止下标（不包括），负数表示倒数。例如，`slice(-3, -1)`表示返回倒数第三个元素到倒数第一个元素（不包括）的子数组。

如果省略begin和end，则返回原始数组。

---
##### sort	
```
Array Array.prototype.sort()
```
	
对数组的元素进行排序。会修改原数组。

---
##### splice
```
Array Array.prototype.splice(number start, number deleteCount)
Array Array.prototype.splice(number start, number deleteCount, object items...)
```

删除、替换、添加数组的元素，以数组的形式返回被修改的元素。

splice从start开始删除deleteCount个元素，随后在start的位置依次插入items。

- start 修改开始的位置。超出数组长度则从数组末尾开始添加内容；负数表示倒数；负数的绝对值大于数组长度，则表示0。
- deleteCount 要删除的数量，0表示不删除元素。
- items 要添加的元素。

---

##### unshift	
```
number Array.prototype.unshift(object items...)	
```

向数组的开头添加元素，并返回新的长度。