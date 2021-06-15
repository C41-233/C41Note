# JSON

提供JSON相关的工具方法。

## 对象函数

| 函数 | 描述 |
|---|---|
| parse | JSON字符串转换为JS对象 |
| stringify | JS对象转换为JSON字符串 |

---

##### parse

```
object JSON.parse(string text)
object JSON.parse(string text, Function reviver)
```

JSON字符串转换为JS对象。

- text JSON字符串。
- reviver 用于在解析过程中对值进行一次转换，值按照从里到外的顺序一次调用reviver。

    ```
    object function(string key, object value)
    ```

    - this 指向当前属性所属的对象。
    - key 表示当前属性名，如果是顶层对象，key的值为`''`。
    - value 表示当前属性值。reviver返回的值作为转换后该属性的值；如果返回undefined，则表示删除当前属性。

若传入的字符串不符合JSON规范，抛出SyntaxError异常。

---

##### stringify

```
string JSON.stringify(
    object value,
    Array<string>/Function replacer = null,
    number/string space = null
)
```

JS对象转换为JSON字符串。

- value 要转换的JS对象。
- replacer 如果是Array，则只有包含在数组中的属性名才会被序列化；如果是Function，则对每个值进行转换；如果是null，则所有属性都会以默认方式序列化。
- space 缩进用的空白字符。如果是number，表示空格的个数；如果是字符串，以该字符串进行缩进；如果为null，则不缩进。