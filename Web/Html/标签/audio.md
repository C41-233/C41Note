# audio

audio标签定义声音，比如音乐或其他音频流。

可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、嵌入元素<br/>交互元素，如果存在controls属性</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许短语元素的元素</td>
</tr>
<tr>
    <th>子元素</th>
    <td>透明元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLAudioElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
	<th>autoplay</th>
	<td>bool</td>
	<td>音频在就绪后马上播放，不会等待整个音频文件下载完成</td>
</tr>
<tr>
	<th>controls</th>
	<td>bool</td>
	<td>向用户显示交互控件，比如播放按钮</td>
</tr>
<tr>
	<th>crossorigin</th>
	<td>corps</td>
	<td>音频资源是否可以通过CROS加载</td>
</tr>
<tr>
	<th>loop</th>
	<td>bool</td>
	<td>循环播放音频</td>
</tr>
<tr>
	<th>muted</th>
	<td>bool</td>
	<td>初始静音</td>
</tr>
<tr>
	<th>src</th>
	<td>url</td>
	<td>要播放的音频的URL</td>
</tr>
</table>

## 示例

```
<audio controls="controls">
	<source src="audio.mp3" type="audio/mp3" />
	<source src="audio.ogg" type="audio/ogg" />
</audio>
```