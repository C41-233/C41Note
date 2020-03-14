# details

规定了用户可见的或者隐藏的需求的补充细节，是一个可以开启或关闭的交互式控件。

details标签中的可点击标题由summary标签定义。

```
<details open>
    <summary>Copyright 1999-2011.</summary>
    <p> - by Refsnes Data. All Rights Reserved.</p>
    <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>
```

## 约束

对称标签。

summary元素必须是details元素的第一个子元素。

## 可选属性

##### open

bool

内容是否可见。