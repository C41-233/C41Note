# link

link标签定义文档与外部资源的关系。

link标签最常见的用途是定义样式表。

```
<link rel="stylesheet" type="text/css" href="stylesheet.css"/>
```

定义可替换的样式表。

```
<link href="default.css" rel="stylesheet" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" title="Basic">
```

通过媒体查询加载样式表。

```
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="all">
<link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)">
<link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)">
```

定义网站图标。

```
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="favicon57.png">
<!-- basic favicon -->
<link rel="icon" href="favicon32.png">
```

## 约束

<table>
<tr>
    <th>content</th>
    <td>元数据<br/>如果存在itemprop属性，则为流元素、文本元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>空白标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许元数据的元素<br/>如果存在itemdrop属性，允许文本元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLLinkElement</td>
</tr>
</table>

## 属性

##### 基本属性

<table>
    <tr>
		<th>crossorigin</th>
		<td>corps</td>
		<td>表明是否必须使用CORS完成相关图像的抓取</td>
	</tr>
    <tr>
		<th>href</th>
		<td>url</td>
		<td>被链接文档的URL</td>
	</tr>
    <tr>
		<th>hreflang</th>
		<td>language</td>
		<td>定义被链接文档的语言</td>
	</tr>
    <tr>
		<th>media</th>
		<td>media</td>
		<td>规定被链接文档的媒体类型</td>
	</tr>
    <tr>
		<th>rel</th>
		<td>rel</td>
		<td>当前文档与被链接文档之间的关系</td>
	</tr>
    <tr>
		<th>type</th>
		<td>mime</td>
		<td>定义链接的内容的类型</td>
	</tr>
</table>

##### 特殊属性

<table>
    <tr>
		<th>as</th>
		<td>enum</td>
		<td>定义加载的内容类型
		<br/>audio
        <br/>document：iframe和frame元素
        <br/>embed
        <br/>fetch：fetch, XHR，需要crossorigin属性
        <br/>font：CSS @font-face
        <br/>image
        <br/>object
        <br/>script
        <br/>style
        <br/>track
        <br/>video
        <br/>worker：Worker, SharedWorker</td>
        <td>preload</td>
	</tr>
    <tr>
		<th>disabled</th>
		<td>bool</td>
		<td>是否应加载所描述的样式表并将其应用于文档</td>
		<td>stylesheet</td>
	</tr>
    <tr>
		<th>sizes</th>
		<td>string</td>
		<td>包含相应资源的可视化媒体中的icons的大小
		<br/>any：表示图片可以按矢量格式缩放到任意大小
		<br/>空格分隔的尺寸组：指定尺寸，例如"64x64"</td>
		<td>icon</td>
	</tr>
    <tr>
		<th>title</th>
		<td>string</td>
		<td>首选样式表或备用样式表</td>
		<td>stylesheet</td>
	</tr>
</table>
