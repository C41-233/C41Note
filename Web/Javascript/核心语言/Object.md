# Object

object对象的包装类型。

所有对象都继承自Object，因此Object对象中的所有属性和方法都会出现在其他对象中。

Object对象可以通过`{key:value, key:value...}`的形式构造。

## 对象属性
| 名称 | 类型 | 描述 | writable | enumerable | configurable |
|---|---|---|---|---|---|
| length | number | 值为1 | - | - | - |

## 对象函数

| 函数 | 描述 |
|---|---|
| assign | 将属性从一个对象复制到另一个对象 |
| defineProperties | 配置对的多个属性 |
| defineProperty | 配置对象的属性 |
| entries | 返回对象的可枚举属性 |
| getOwnPropertyNames | 获取对象所有的属性 |
| getPrototypeOf | 	获取对象原型 |
| preventExtensions | 使对象不可扩展 |
| seal | 封闭对象 |
| setPrototypeOf | 设置对的原型 |
| values | 返回一个给定对象自身的所有可枚举属性值的数组 |

## 原型属性

| 名称 | 类型 | 描述 | writable | enumerable | configurable |
|---|---|---|---|---|---|
| constructor | Function | 对象的构造函数 | - | - | - |
| prototype | Object | 对象的原型 | - | - | - |

## 原型函数

| 函数 | 描述 |
|---|---|
| hasOwnProperty | 判断对象是否有某个特定的属性 |
| isPrototypeOf | 判断该对象是否为另一个对象的原型 |
| propertyIsEnumerable | 判断指定的属性是否可枚举 |
| toString | 返回对象的字符串表示 |
| toLocaleString | 返回对象特定语言下的字符串表示 |
| valueOf | 返回最适合该对象的基础类型值 |

## 构造函数

```
Object()
new Object()
```

---
##### assign
```
object Object.assign(object target, object sources...)
```

将一个或多个对象sources的所有可枚举属性（包括String属性和Symbol属性）复制到目标对象target中，并返回target。相同名称的属性按照参数顺序从右向左覆盖。

--- 
##### create	
```
Object Object.create(object prototype)
```

从原型创建对象。

---
##### entries
```
<iterator> Object.entries(object obj)
```

返回对象自身的可枚举属性的键值对。

---
##### defineProperty	
```
object Object.defineProperty(object obj, string attr, object config)	
```

配置对象的属性，返回对象本身。

- obj：要配置的对象。
- attr：定义的属性名称。
- config：属性描述符。

属性描述符定义如下：
| 名称 | 类型 | 描述 |
|---|---|---|
| configurable | boolean | 是否可以修改该属性的描述符及删除该属性 |
| enumerable | boolean | 是否可枚举 |
| value | object | 属性的值 |
| writable | boolean | 是否可修改 |
| get | function()->object | getter函数 |
| set | function(object value) | setter函数 |

---

##### getOwnPropertyNames	
```
Array Object.getOwnPropertyNames(object obj)
```

获取对象的所有属性名称，包括不可枚举的属性，但不包括Symbol属性。

---
##### getPrototypeOf	
```
object Object.getPrototypeOf(object obj)
```

获取对象原型。
---
##### hasOwnProperty	
```
boolean Object.prototype.hasOwnProperty(string property)	
```

判断对象是否有某个特定的属性

---
##### isPrototypeOf	
```
boolean Object.prototype.isPrototypeOf(object object)
```

判断该对象是否为另一个对象的原型。

---

##### propertyIsEnumerable	
```
boolean Object.prototype.propertyIsEnumerable(string property)	
boolean Object.prototype.propertyIsEnumerable(number property)	
```

判断给定的属性是否可以枚举。

---
##### preventExtensions	
```
undefined Object.preventExtensions(object obj)
```

使对象不可扩展，永远不能再添加新的属性，但属性仍然可能被删除。

---
##### seal
```
undefined Object.seal(object obj)
```

封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置，但可写属性的值仍然可以修改。

---

##### setPrototypeOf
```
undefined Object.setPrototypeOf(object obj, object prototype)
```

---

##### toString
```
string Object.prototype.toString()
```

返回对象的字符串表示。

子类没有Override的情况下返回`[object Object]`。

---
##### valueOf
```
object Object.prototype.valueOf()
```

返回最适合该对象的基础类型值。

---
##### values
```
Array Object.values(object obj)
```