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

## 原型属性

| 名称 | 类型 | 描述 | 属性 |
|---|---|---|---|
| prototype | Object | 对象的原型 |

--- 
##### create	
```
object create(object prototype)
```

从原型创建对象。

---
##### defineProperty	
```
object defineProperty(object obj, string attr, object config)	
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
Array getOwnPropertyNames(object obj)
```

获取对象的所有属性名称，包括不可枚举的属性，但不包括Symbol属性。