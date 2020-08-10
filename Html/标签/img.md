# img

img元素向网页中嵌入一幅图像。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、嵌入元素、可触摸元素<br/>可交互元素，仅当存在usemap属性</td>
</tr>
<tr>
    <th>标签</th>
    <td>空白标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>允许嵌入元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLImageElement</td>
</tr>
</table>

## 属性

##### 必须

<table>
    <tr>
		<th>src</th>
		<td>url</td>
		<td>图像的url</td>
	</tr>
</table>

##### 可选

<table>
    <tr>
		<th>alt</th>
		<td>string</td>
		<td>定义图像的替代文本。用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容</td>
	</tr>
    <tr>
		<th>crossorigin</th>
		<td>corps</td>
		<td>表明是否必须使用CORS完成相关图像的抓取</td>
	</tr>
    <tr>
		<th>decoding</th>
		<td>enum</td>
		<td>为浏览器提供图像解码方式上的提示
		<br/>sync：同步解码图像
		<br/>async：异步解码图像
		<br/>auto：默认值，由平台决定</td>
	</tr>
    <tr>
		<th>height</th>
		<td>px</td>
		<td>图像的高度。可以只指定width和height中的一个，浏览器会自动缩放</td>
	</tr>
    <tr>
		<th>ismap</th>
		<td>bool</td>
		<td>表示图像是否是服务器端map的一部分。如果是，那么点击图片的精准坐标将会被发送到服务器</td>
	</tr>
    <tr>
		<th>width</th>
		<td>px</td>
		<td>图像的宽度。可以只指定width和height中的一个，浏览器会自动缩放</td>
	</tr>
    <tr>
		<th>usemap</th>
		<td>string</td>
		<td>与元素相关联的map元素的锚点，包括#部分</td>
	</tr>
</table>

## 图像map

```
<map name="infographic">
    <area shape="poly" 
          coords="130,147,200,107,254,219,130,228"
          href="https://developer.mozilla.org/docs/Web/HTML"
          target="_blank" alt="HTML" />
    <area shape="poly" 
          coords="130,147,130,228,6,219,59,107"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank" alt="CSS" />
    <area shape="poly" 
          coords="130,147,200,107,130,4,59,107"
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          target="_blank" alt="JavaScript" />
</map>
<img usemap="#infographic" src="/media/examples/mdn-info2.png" alt="MDN infographic" />
```