# Connector

```
EMPTY
```

<table>
    <tr><th>allowTrace</th><td>#boolean</td><td>false</td><td>是否允许HTTP TRACE</td></tr>
    <tr><th>asyncTimeout</th><td>#int</td><td>10000</td><td>异步请求的超时毫秒数</td></tr>
    <tr><th>enableLookups</th><td>#boolean</td><td>false</td><td>调用request.getRemoteHost()时是否执行DNS查询从而返回主机名，false时仅返回IP地址</td></tr>
    <tr><th>maxHeaderCount</th><td>#int</td><td>100</td><td>一次请求允许携带的Header最大个数，&lt;0表示无限制</td></tr>
    <tr><th>maxParameterCount</th><td>#int</td><td>10000</td><td>一次请求允许携带的参数最大个数，&lt;0表示无限制</td></tr>
    <tr><th>maxPostSize</th><td>#int</td><td>2097152</td><td>一次POST请求最大字节数，&lt;=0表示无限制</td></tr>
    <tr><th>maxSavePostSize</th><td>#int</td><td>4096</td><td>一次需要缓存的POST请求最大字节数，-1表示无限制，0表示不要缓存</td></tr>
    <tr><th>parseBodyMethods</th><td>CDATA</td><td>POST</td><td>哪些请求按照POST请求的格式解析body</td></tr>
    <tr><th>port</th><td>#int</td><td>#REQUIRED</td><td>监听的端口号，0表示自动选择</td></tr>
    <tr><th>protocol</th><td>CDATA</td><td>HTTP/1.1</td><td>处理协议</td></tr>
    <tr><th>proxyName</th><td>CDATA</td><td>#IMPLIED</td><td>代理名称，由request.getServerName()获取</td></tr>
    <tr><th>proxyPort</th><td>CDATA</td><td>#IMPLIED</td><td>代理端口，由request.getServerPort()获取</td></tr>
    <tr><th>redirectPort</th><td>#int</td><td>#IMPLIED</td><td>正在处理http请求时收到了一个SSL传输请求后重定向的端口号</td></tr>
    <tr><th>scheme</th><td>CDATA</td><td>http</td><td>协议名称，由request.getScheme()获取</td></tr>
    <tr><th>secure</th><td>#boolean</td><td>false</td><td>是否使用安全连接，由request.isSecure()获取</td></tr>
    <tr><th>URIEncoding</th><td>CDATA</td><td>ISO-8859-1</td><td>解析URI时的字符编码</td></tr>
    <tr><th>useBodyEncodingForURI</th><td>#boolean</td><td>false</td><td>是否按照ContentType解析URI参数</td></tr>
    <tr><th>useIPVHosts</th><td>#boolean</td><td>false</td><td></td></tr>
    <tr><th>xpoweredBy</th><td>#boolean</td><td>false</td><td></td></tr>
</table>