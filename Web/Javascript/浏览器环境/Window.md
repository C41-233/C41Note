# Window

Window对象表示DOM文档窗口，是全局属性`window`的类型。

在有标签页功能的浏览器中，每个标签页都有自己的Window对象。

## 继承

Object / [@WindowOrWorkerGlobalScope](WindowOrWorkerGlobalScope.md) / Window  
Object / @AbstractView / Window

## 原型属性

##### 全局对象

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| console | Console | 获取控制台对象 | - | - | - |
| crypto | Crypto | 获取加密服务对象 | - | - | - |
| customElements | CustomElementRegistry | 获取CustomElementRegistry对象 | - | - | - |
| document | Document | 文档对象 | - | - | - |
| history | History | History对象 | - | - | - |
| localStorage | Storage | 浏览器本地存储对象 | - | - | - |
| location | Location | Location对象 | - | - | - |
| navigator | Navigator | 浏览器对象 | - | - | - |

##### 窗口属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| closed | boolean | 窗口是否关闭 | - | - | - | 
| devicePixelRatio | number | 当前显示设备的物理像素分辨率与CSS像素分辨率之比 | - | - | - |
| innerHeight | number | 窗口的视口高度 | - | - | - |
| innerWidth | number | 窗口的视口宽度 | - | - | - |
| length | number | 当前窗口中包含的框架数量 | - | - | - |
| locationbar | object | 地址栏对象 | - | - | - | menubar | object | 菜单栏对象 | - | - | - |
| name | string | 窗口名称 | - | - | - |

---

##### innerHeight

```
number innerHeight
```

获取浏览器的视口（viewport）高度，单位为像素。如果存在水平滚动条，也包括水平滚动条的高度。

---

##### innerWidth

```
number innerWidth
```

获取浏览器的视口（viewport）宽度，单位为像素。如果存在垂直滚动条，也包括垂直滚动条的高度。