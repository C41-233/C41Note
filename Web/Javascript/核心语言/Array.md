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

## 原型属性

| 名称 | 类型 | 描述 | 属性 |
|---|---|---|---|
| length | number | 数组大小 | - |

## 原型函数
| 函数 | 描述 |
|---|---|
| concat | 合并多个数组 |
| join | 数组中的所有元素合并成字符串 |
| pop | 删除并返回数组的最后一个元素 |
| push | 向数组的末尾添加元素 |
| reverse | 颠倒数组中元素的顺序 |
| shift | 删除数组的第一个元素并返回该元素 |
| slice | 从数组中返回子数组 |
| sort | 对数组排序 |
| unshift | 向数组的开头添加元素 |

---
##### concat
```
Array concat(object/Array... arr)
```
合并多个数组。

---
##### join	
```
string join()	
string join(string separator)	
```

数组中的所有元素合并成字符串。

---
##### pop	
```
object pop()	
```

删除并返回数组的最后一个元素。

数组为空时返回undefined。

---
##### push	
```
number push(object item...)	
```

向数组的末尾添加元素，返回新的数组长度。

---
##### reverse	
```
Array reverse()	
```

颠倒数组中元素的顺序，返回数组本身。该函数会修改数组本身。

---
##### shift	
```
object shift()
```	

删除数组的第一个元素并返回该元素。

---
##### slice
```
Array slice()
Array slice(number begin)
Array slice(number bgein, number end)
```

从数组中返回子数组。

begin表示起始下标，负数表示倒数。例如，`slice(-2)`表示返回倒数第二个元素开始的子数组。

end表示终止下标（不包括），负数表示倒数。例如，`slice(-3, -1)`表示返回倒数第三个元素到倒数第一个元素（不包括）的子数组。

如果省略begin和end，则返回原始数组。

---
##### sort	
```
Array sort()
```
	
对数组的元素进行排序。会修改原数组。

---
##### splice
```
Array splice(number start, number deleteCount)
Array splice(number start, number deleteCount, object items...)
```

删除、替换、添加数组的元素，以数组的形式返回被修改的元素。

splice从start开始删除deleteCount个元素，随后在start的位置依次插入items。

- start 修改开始的位置。超出数组长度则从数组末尾开始添加内容；负数表示倒数；负数的绝对值大于数组长度，则表示0。
- deleteCount 要删除的数量，0表示不删除元素。
- items 要添加的元素。

---

##### unshift	
```
number unshift(object items...)	
```

向数组的开头添加元素，并返回新的长度。