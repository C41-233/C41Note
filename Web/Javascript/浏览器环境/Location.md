# Location

表示链接的对象，通过`window.location`和`document.location`对象。

<table>
    <tr>
        <th>href</th>
        <td>"https://developer.mozilla.org/"</td>
        <td>"https://developer.mozilla.org:8080/doc?q=query#name"</td>
    </tr>
    <tr>
        <th>hash</th>
        <td>""</td>
        <td>"#name"</td>
    </tr>
    <tr>
        <th>host</th>
        <td>"developer.mozilla.org"</td>
        <td>"developer.mozilla.org:8080"</td>
    </tr>
    <tr>
        <th>hostname</th>
        <td>"developer.mozilla.org"</td>
        <td>"developer.mozilla.org"</td>
    </tr>
    <tr>
        <th>port</th>
        <td>""</td>
        <td>"8080"</td>
    </tr>
    <tr>
        <th>protocol</th>
        <td>"https:"</td>
        <td>"https:"</td>
    </tr>
    <tr>
        <th>search</th>
        <td>""</td>
        <td>"?q=query"</td>
    </tr>
</table>

## 继承

Object / Location

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| hash | string | 当前URL的hash部分 | true | true | - |
| host | string | 当前URL的主机部分 | true | true | - |
| hostname | string | 当前URL的域名 | true | true | - |
| port | string | 当前URL的端口 | true | true | - |
| protocol | string | 当前URL的协议部分 | true | true | - |
| search | string | 当前URL的参数部分 | true | true | - |