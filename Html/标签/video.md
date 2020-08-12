# video

=定义视频，比如电影片段或其他视频流。

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
    <td>HTMLVideoElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
	<th>autoplay</th>
	<td>bool</td>
	<td>视频在就绪后马上播放</td>
</tr>
<tr>
	<th>controls</th>
	<td>bool</td>
	<td>向用户显示控件，比如播放按钮</td>
</tr>
<tr>
	<th>crossorigin</th>
	<td>corps</td>
	<td>指明抓取相关图片是否必须用到CORS</td>
</tr>
<tr>
	<th>height</th>
	<td>px</td>
	<td>视频区域的高度</td>
</tr>
<tr>
	<th>loop</th>
	<td>bool</td>
	<td>循环播放</td>
</tr>
<tr>
	<th>muted</th>
	<td>bool</td>
	<td>初始静音</td>
</tr>
<tr>
	<th>playsinline</th>
	<td>bool</td>
	<td>在元素的播放区域内播放</td>
</tr>
<tr>
	<th>poster</th>
	<td>url</td>
	<td>指定海报帧的URL</td>
</tr>
<tr>
	<th>src</th>
	<td>url</td>
	<td>播放的视频的URL</td>
</tr>
<tr>
	<th>width</th>
	<td>px</td>
	<td>视频区域的宽度</td>
</tr>
</table>