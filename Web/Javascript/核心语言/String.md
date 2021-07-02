# String

String对象是基本类型string的包装。

当与string对象参与运算时，其他类型总是倾向于隐式转化为string类型。string对象可以通过运算符`+`进行拼接，或使用`+=`运算进行拼接赋值。string对象支持比较运算，`==`、`!=`、`>`、`>=`、`<`、`<=`按照严格字典序进行比较。

对string对象typeof运算的返回值是`"string"`，对String对象typeof运算的返回值是`"object"`。

字符串中的字符指一个16位代码点（code point），某些实际字符可能需要多个代码点来表示。

## 继承

[Object](Object.md) / String


## 对象函数
| 函数 | 描述 |
|---|---|
| fromCharCode | 根据Unicode获得字符串 |
| fromCodePoint | 根据代码点获得字符串 |

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| length | number | 字符串长度 | - | - | - |
| @@iterator | @iterator\<string\> | 返回代码点的迭代器 | - | - | - |

## 原型函数
| 函数 | 描述 |
|---|---|
| charAt | 返回指定位置的字符 |
| charCodeAt | 返回指定位置的Unicode值 |
| codePointAt | 返回指定位置的代码点 |
| concat | 多个字符串拼接 |
| endsWith | 判断是否以对应字符串结尾 |
| includes | 判断是否包含子字符串 |
| indexOf | 子字符串首次出现的位置 |
| lastIndexOf | 子字符串最后出现的位置 |
| localeCompare | 比较字符串 |
| match | 正则匹配 |
| matchAll | 完整正则匹配 |
| normalize | 对字符串正规化 |
| padEnd | 填充右侧 |
| padStart | 填充左侧 |
| repeat | 重复字符串 |
| replace | 替换一次 |
| replaceAll | 替换全部 |
| search | 正则搜索 |
| slice | 提取子串 |
| split | 分割字符串 |
| startsWith | 判断是否以对应字符串开头 |
| substring | 返回子串 |
| toLocaleLowerCase | 转换为本地小写形式 |
| toLocaleUpperCase | 转换为本地大写形式 |
| toLowerCase | 转换为小写形式 |
| toString | 返回基本类型字符串 |
| toUpperCase | 转换为大写形式 |
| trim | 删除两侧空白字符 |
| trimRight | 删除右侧空白字符 |
| trimStart | 删除右左侧空白字符 |
| valueOf | 返回基本类型字符串 |

## 构造函数

```
[new] String(object value)
```

---

##### charAt

```
string String.prototype.charAt(number index)
```

---

##### charCodeAt

```
number String.prototype.charCodeAt(number)
```

---

##### concat

```
string String.prototype.concat(object str...)
```

---

##### endsWith

```
boolean String.prototype.endsWith(string search)
boolean String.prototype.endsWith(string search, number length)
```

- search 要搜索的字符串
- length 指定在this字符串length长度范围内搜索

---

##### fromCharCode

```
string String.fromCharCode(number unicode...)
```

--- 

##### fromCodePoint

```
string String.fromCodePoint(number codePoints...)
```

---

##### includes

```
boolean String.prototype.includes(string search)
boolean String.prototype.includes(string search, number position)
```

---

##### indexOf

```
number String.prototype.indexOf(string search)
number String.prototype.indexOf(string search, number from)
```

在字符串中搜索子串search，返回第一次出现的下标。如果没有找到，则返回-1。

- search 要搜索的子串
- from 搜索开始的下标，默认为0

---

##### lastIndexOf

```
number String.prototype.lastIndexOf(string search)
number String.prototype.lastIndexOf(string search, number from)
```

---

##### localeCompare

```
number String.prototype.localeCompare(string str)
```

---

##### match

```
Array String.prototype.match(Regexp regexp)
```

对字符串进行正则匹配，返回一个匹配数组。

如果使用g修饰符，则返回与完整正则表达式匹配的所有结果，但不包含捕获组。

如果没有使用g修饰符，则仅返回第一个匹配及相关捕获组，匹配数组还包含以下额外的字段：
- groups 捕获组数组
- index 匹配的结果开始位置
- input 搜索的字符串

---

##### matchAll

```
@iterator String.prototype.matchAll(Regexp regexp)
```

对字符串进行完整匹配，返回每个匹配的迭代器。

regexp必须设置g修饰符，否则抛出TypeError。

---

##### padEnd

```
string String.prototype.padEnd(number length)
string String.prototype.padEnd(number length, string pad)
```

对字符串进行右侧填充至指定长度。

---

##### padStart

```
string String.prototype.padStart(number length)
string String.prototype.padStart(number length, string pad)
```

对字符串进行左侧填充至指定长度。

---

##### repeat

```
string String.prototype.repeat(number count)
```

将字符串重复count次。

---

##### replace

```
string String.prototype.replace(Regexp regexp, string newString)
string String.prototype.replace(Regexp regexp, Function replacer)
string String.prototype.replace(string subString, string newString)
string String.prototype.replace(string subString, Function replacer)
```

---

##### replaceAll

```
string String.prototype.replaceAll(Regexp regexp, string newString)
string String.prototype.replaceAll(Regexp regexp, Function replacer)
string String.prototype.replaceAll(string subString, string newString)
string String.prototype.replaceAll(string subString, Function replacer)
```

---

##### search

```
number String.prototype.search(Regexp regexp)
```

---

##### slice

```
string String.prototype.slice(number begin)
string String.prototype.slice(number begin, number end)
```

---

##### split

```
Array<string> String.prototype.split(string separator)
Array<string> String.prototype.split(string separator, number limit)
Array<string> String.prototype.split(Regexp separator)
Array<string> String.prototype.split(Regexp separator, number limit)
```

分割字符串。

---

##### startsWith

```
boolean String.prototype.startsWith(string search)
```

---

##### substring

```
string String.prototype.substring(number begin)
string String.prototype.substring(number begin, number end)
```