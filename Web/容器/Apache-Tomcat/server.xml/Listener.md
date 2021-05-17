# Listener

```
EMPTY
```

<table>
    <tr><th>className</th><td>CDATA</td><td>#REQUIRED</td><td>实现类，必须实现接口org.apache.catalina.LifecycleListener</td></tr>
</table>

Listener根据不同的实现拥有不同的属性和允许的嵌套。

##### org.apache.catalina.core.AprLifecycleListener

监听APR/native library。

必须被嵌套在Server元素中。

<table>
    <tr><th>SSLEngine</th><td>CDATA<br/>on<br/>off</td><td>on</td><td>指定使用的SSLEngine名称，off表示不使用SSL，on表示使用默认的SSL</td></tr>
    <tr><th>SSLRandomSeed</th><td>CDATA</td><td>builtin</td><td></td></tr>
    <tr><th>FIPSMode</th><td>on<br/>off</td><td>off</td><td></td></tr>
</table>

##### org.apache.catalina.mbeans.GlobalResourcesLifecycleListener

初始化Global JNDI resources。

必须被嵌套在Server元素中。

##### org.apache.catalina.core.JasperListener

初始化Jasper 2 JSP engine。

必须被嵌套在Server元素中。

##### org.apache.catalina.core.JreMemoryLeakPreventionListener

必须被嵌套在Server元素中。

##### org.apache.catalina.security.SecurityListener

必须被嵌套在Server元素中。

##### org.apache.catalina.core.ThreadLocalLeakPreventionListener

必须被嵌套在Server元素中。

##### org.apache.catalina.startup.UserConfig

必须被嵌套在Host元素中。