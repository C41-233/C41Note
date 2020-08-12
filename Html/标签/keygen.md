# keygen

规定用于表单的密钥对生成器字段。

当提交表单时，私钥存储在本地，公钥发送到服务器。

## 约束

<table>
<tr>
    <th>content</th>
    <td>流元素、短语元素、交互元素、可触摸元素、表单元素、可触摸元素</td>
</tr>
<tr>
    <th>标签</th>
    <td>空白标签</td>
</tr>
<tr>
    <th>父元素</th>
    <td>支持短语元素的元素</td>
</tr>
<tr>
    <th>DOM</th>
    <td>HTMLKeygenElement</td>
</tr>
</table>

## 属性

##### 可选

<table>
<tr>
    <th>autofocus</th>
    <td>bool</td>
    <td>在页面加载时获得焦点</td>
</tr>
<tr>
    <th>challenge</th>
    <td>bool</td>
    <td>如果使用，则将keygen的值设置为在提交时询问</td>
</tr>
<tr>
    <th>disabled</th>
    <td>bool</td>
    <td>禁用keytag字段</td>
</tr>
<tr>
    <th>form</th>
    <td>id</td>
    <td>定义该keygen字段所属的一个或多个表单</td>
</tr>
<tr>
    <th>name</th>
    <td>string</td>
    <td>定义表单提交时的名称</td>
</tr>
</table>
