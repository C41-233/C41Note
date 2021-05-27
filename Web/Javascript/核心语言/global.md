# \<global\>

全局对象依赖于宿主环境，在浏览器下为`window`，在nodejs中为`global`。

## 对象属性

<table>
<tr>
    <td>Infinity</td>
    <td>number</td>
    <td>正无穷大</td>
    <td>-</td>
</tr>
<tr>
    <td>NaN</td>
    <td>number</td>
    <td>NaN值</td>
    <td>-</td>
</tr>
<tr>
    <td>undefined</td>
    <td>undefined</td>
    <td>undefined值</td>
    <td>-</td>
</tr>
</table>

## 对象函数

<table>
<tr>
    <td>decodeURI</td>
    <td>对encodeURI函数编码的URI解码</td>
</tr>
<tr>
    <td>decodeURIComponent</td>
    <td>对encodeURIComponent()函数编码的URI解码</td>
</tr>
<tr>
    <td>encodeURI</td>
    <td>编码完整URI</td>
</tr>
<tr>
    <td>encodeURIComponent</td>
    <td>对字符串进行URI编码</td>
</tr>
</table>

---

##### decodeURI
```
string decodeURI(string uri)
```

##### decodeURIComponent
```
string decodeURIComponent(string uri)
```

##### encodeURI
```
string encodeURI(string uri)
```

encodeURI将参数作为完整的URI进行编码，不会对在URI中有特殊意思的字符进行编码。

##### encodeURIComponent	
```
string encodeURIComponent(string code)
```

对整个字符串进行URI编码。