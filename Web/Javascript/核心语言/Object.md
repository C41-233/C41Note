# Object

object对象的包装类型。

所有对象都继承自Object，因此Object对象中的所有属性和方法都会出现在其他对象中。

Object对象可以通过`{key:value, key:value...}`的形式构造。

## 对象属性
| 名称 | 类型 | 描述 | 属性 |
|---|---|---|---|
| length | number | 值为1 | - |

## 对象函数

| 函数 | 描述 |
|---|---|
| defineProperty | 配置对象的属性 |
| getOwnPropertyNames | 获取对象所有的属性 |
| getPrototypeOf | 	获取对象原型 |
| preventExtensions | 使对象不可扩展 |

## 原型属性

| 名称 | 类型 | 描述 | 属性 |
|---|---|---|---|
| constructor | Function | 对象的构造函数 |
| prototype | Object | 对象的原型 |

## 原型函数

| 函数 | 描述 |
|---|---|
| hasOwnProperty | 判断对象是否有某个特定的属性 |
| isPrototypeOf | 判断该对象是否为另一个对象的原型 |

## 构造函数

```
Object()
new Object()
```

--- 
##### create	
```
object Object.create(object prototype)
```

从原型创建对象。

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
##### preventExtensions	
```
undefined Object.preventExtensions(object obj)
```

使对象不可扩展，永远不能再添加新的属性，但属性仍然可能被删除。