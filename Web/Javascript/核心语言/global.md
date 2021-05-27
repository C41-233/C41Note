# \<global\>

全局对象依赖于宿主环境，在浏览器下为`window`，在nodejs中为`global`。

## 对象属性

| 名称 | 类型 | 描述 | 属性 |
|---|---|---|---|
| Infinity | number | 正无穷大 | - |
| NaN | number | NaN值 | - |
| undefined | undefined | undefined值 | - |

## 对象函数

| 函数 | 描述 |
|---|---|
| decodeURI | 对encodeURI函数编码的URI解码 |
| decodeURIComponent | 对encodeURIComponent()函数编码的URI解码 |
| encodeURI | 编码完整URI |
| encodeURIComponent | 对字符串进行URI编码 |
| eval | 动态执行 |
| isFinite | 判断数值是否为有限值 |
| isNaN | 判断数值是否为NaN |
| parseFloat | 字符串解析为浮点数 |
| parseInt | 字符串解析为整数 |

---

##### decodeURI
```
string decodeURI(string uri)
```

对encodeURI函数编码的URI解码。

##### decodeURIComponent
```
string decodeURIComponent(string uri)
```

对encodeURIComponent()函数编码的URI解码。

---

##### encodeURI
```
string encodeURI(string uri)
```

encodeURI将参数作为完整的URI进行编码，不会对在URI中有特殊意思的字符进行编码。

---

##### encodeURIComponent	
```
string encodeURIComponent(string code)
```

对整个字符串进行URI编码。

---

##### eval
```
object eval(string code)
```

动态执行。

如果参数不是字符串，则返回参数本身。

---

##### isFinite
```
boolean isFinite(number x)
```

判断数值是否为有限值，当数值为NaN、正无穷大、负无穷大时返回false。

---

##### isNaN	
```
boolean isNaN(number x)	
```

判断数值是否为NaN。

---

##### parseFloat	
```
number parseFloat(string string)
```

解析一个字符串，并返回一个浮点数。

---

##### parseInt	
```
number parseInt(string string)
number parseInt(string string, number radix)
```

解析一个字符串，并返回一个整数。

radix是基数，范围为2到36。

---
