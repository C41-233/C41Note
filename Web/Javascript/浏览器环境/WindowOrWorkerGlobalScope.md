# @WindowOrWorkerGlobalScope

## 继承

Object / @WindowOrWorkerGlobalScope

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| indexedDB | IDBFactory | 索引数据库 | - | - | - |

## 原型函数

| 函数 | 描述 |
|---|---|
| atob | Base64解码 |
| btoa | Base64编码 |
| clearInterval | 停止setInterval设置的任务 |
| clearTimeout | 停止clearTimeout设置的任务 |
| createImageBitmap | 创建位图 |
| queueMicrotask | 向微任务队列压入一个微任务 | 
| setInterval | 以指定的周期（单位为毫秒）调用函数或执行代码 |
| setTimeout | 在指定的时间（毫秒）后调用函数或执行代码 |

---

##### atob

```
string atob(string base64)
```

---

##### btoa

```
string btoa(string str)
```

---

##### clearInterval

```
void clearInterval(number id)
```

---

##### clearTimeout

```
void clearTimeout(number id)
```

---

##### createImageBitmap

```
Prmomise<ImageBitmap> createImageBitmap(object src)
Prmomise<ImageBitmap> createImageBitmap(object src, object options)
Prmomise<ImageBitmap> createImageBitmap(object src, number sx, number sy, number sw, number sh, object options)
```

- src 图像源，类型包括`HTMLImageElement`、`SVGImageElement`、`ImageData`、`ImageBitmap`、`HTMLVideoElement`、`HTMLCanvasElement`、`OffscreenCanvas`、` Blob`。
- sx 裁剪横坐标
- sy 裁剪纵坐标
- sw 裁剪宽度
- sh 裁剪高度
- options 选项对象

---

##### setInterval	

```
number setInterval(string code, number millisec)
number setInterval(Function code, number millisec, object args...)	
```

以指定的周期（单位为毫秒）调用函数或执行代码。

函数返回一个handle，之后可以调用`clearInterval`停止。

---

##### setTimeout	
```
number setTimeout(string code, number millisec)
number setTimeout(Function code, number millisec, object args...)
```

在指定的时间（毫秒）后调用函数或执行代码。

函数返回一个handle，之后可以调用`clearTimeout`取消。