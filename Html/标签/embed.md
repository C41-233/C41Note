# embed

定义嵌入式内容。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、嵌入元素、交互元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>空白标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持嵌入元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLEmbedElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>height</th>
    <td>px</td>
    <td>资源高度</td>
</tr>
<tr>
    <th>src</th>
    <td>url</td>
    <td>资源的url</td>
</tr>
<tr>
    <th>type</th>
    <td>mime</td>
    <td>资源类型</td>
</tr>
<tr>
    <th>width</th>
    <td>px</td>
    <td>资源宽度</td>
</tr>
</table>

## 示例

```
<!-- 视频 -->
<embed src="video.swf" height="200" width="200"/>
```

```
<!-- 音频 -->
<embed height="100" width="100" src="audio.mp3" />
```