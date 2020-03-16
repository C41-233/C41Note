# bdi

双向隔离元素，允许设置一段文本，使其脱离其父元素的文本方向设置。

虽然可以使用CSS规则`unicode-bidi`达到同样的效果，但是bdi元素传达语义信息。当浏览器忽略CSS样式时，仍然能保证文本正确显示。

## 约束

对称标签。

## 默认样式

```
bdi {
    display: inline;
    unicode-bidi: isolate;
}
```