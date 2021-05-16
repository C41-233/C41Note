# Server

```
(Listener | GlobalNamingResources | Service)*
```

<table>
    <tr><th>address</th><td>CDATA</td><td>localhost</td><td>监听SHUTDOWN指令的IP地址</td></tr>
    <tr><th>className</th><td>CDATA</td><td>org.apache.catalina.core.StandardServer</td><td>实现类，必须实现接口org.apache.catalina.Server</td></tr>
    <tr><th>port</th><td>#int</td><td>#IMPLIED</td><td>监听SHUTDOWN指令的端口</td></tr>
    <tr><th>shutdown</th><td>CDATA</td><td>#IMPLIED</td><td>SHUTDOWN指令的字符串</td></tr>
</table>