# object

定义一个嵌入的对象，比如图像、音频、视频、Java applets、ActiveX、PDF、Flash等。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、嵌入元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>对称标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许嵌入元素的元素</td>
</tr>
<tr>
    <th>子元素</th>
    <td>param*</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLObjectElement</td>
</tr>
</table>


## 属性

##### 可选

<table>
<tr>
	<th>data</th>
	<td>url</td>
	<td>定义引用对象数据的URL</td>
</tr>
<tr>
	<th>form</th>
	<td>id</td>
	<td>规定对象所属的一个或多个表单</td>
</tr>
<tr>
	<th>height</th>
	<td>px</td>
	<td>高度</td>
</tr>
<tr>
	<th>name</th>
	<td>string</td>
	<td>上下文名称</td>
</tr>
<tr>
	<th>type</th>
	<td>mime</td>
	<td>在data属性中指定的文件中出现的数据的MIME类型</td>
</tr>
<tr>
	<th>usemap</th>
	<td>string</td>
	<td>指向一个map元素，格式为#name</td>
</tr>
<tr>
	<th>width</th>
	<td>px</td>
	<td>宽度</td>
</tr>
</table>

## 示例

```
<object data="video.swf" height="200" width="200"></object>
```

##### QucikTime

```
<object width="420" height="360" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab">
	<param name="src" value="video.mp4" />
	<param name="controller" value="true" />
</object>
```

##### SWFlash
```
<object width="400" height="40" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0">
	<param name="SRC" value="flash.swf">
	<embed src="flash.swf" width="400" height="40"></embed>
</object>
```

##### Flash插件
```
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="480" height="270">
	<param name="movie"  value="player.swf"> 
	<param name="allowfullscreen"  value="true"> 
	<param name="allowscriptaccess"  value="always"> 
	<param name="flashvars"  value="file=video.flv&autostart=true"> 
	<embed
		name="player1" 
		src="player.swf" 
		width="480" 
		height="270" 
		allowscriptaccess="always" 
		allowfullscreen="true" 
		flashvars="file=video.flv&autostart=true" 
	/> 
</object>
```

##### Windows Media Player
```
<object width="100%" height="100%" type="video/x-ms-asf" url="video.wmv" data="video.wmv" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6">
	<param name="url" value="video.wmv">
	<param name="filename" value="video.wmv">
	<param name="autostart" value="1">
	<param name="uiMode" value="full" />
	<param name="autosize" value="1">
	<param name="playcount" value="1">
	<embed type="application/x-mplayer2" src="video.wmv" width="100%" height="100%" autostart="true" showcontrols="true" 
		pluginspage="http://www.microsoft.com/Windows/MediaPlayer/"></embed>
</object>
```