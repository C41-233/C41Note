# Storage

Web Storage API接口，用于浏览器本地存储，通过域名隔离。通过以下两个方式访问：
- `window.sessionStorage`：会话生命周期
- `window.localStorage`：永久存储

## 继承

Object / Storage

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| length | number | 数据项数量 | - | true | - |


## 原型函数

| 函数 | 描述 |
|---|---|
| clear | 清空数据项 |
| getItem | 获取数据项 |
| key | 返回指定下标的数据项键名 |
| removeItem | 删除数据项 |
| setItem | 设置数据项 |

---

##### clear

```
void Storage.prototype.clear()
```

---

##### getItem

```
string Storage.prototype.getItem(string key)
```

---

##### removeItem

```
void Storage.prototype.removeItem(string key)
```

##### setItem

```
void Storage.prototype.setItem(string key, string value)
```