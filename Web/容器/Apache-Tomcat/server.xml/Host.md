# Host

```
Realm?, Context*
```

<table>
    <tr><th>appBase</th><td>CDATA</td><td>webapps</td><td>应用的部署目录，可以使绝对路径，或基于$CATALINA_BASE的相对路径</td></tr>
    <tr><th>autoDeploy</th><td>#boolean</td><td>true</td><td>是否周期性的根据变化自动部署</td></tr>
    <tr><th>backgroundProcessorDelay</th><td>#int</td><td>-1</td><td></td></tr>
    <tr><th>className</th><td>CDATA</td><td>org.apache.catalina.core.StandardHost</td><td>实现类，必须实现接口org.apache.catalina.Host</td></tr>
    <tr><th>createDirs</th><td>#boolean</td><td>true</td><td></td></tr>
    <tr><th>deployIgnore</th><td>CDATA</td><td>#IMPLIED</td><td></td></tr>
    <tr><th>deployOnStartup</th><td>#boolean</td><td>true</td><td></td></tr>
    <tr><th>name</th><td>CDATA</td><td>#REQUIED</td><td>Host的名称</td></tr>
    <tr><th>startStopThreads</th><td>#int</td><td>1</td><td></td></tr>
    <tr><th>undeployOldVersions</th><td>#boolean</td><td>false</td><td></td></tr>
    <tr><th>xmlBase</th><td>CDATA</td><td>conf/&lt;engine_name&gt;/&lt;host_name&gt;</td><td></td></tr>
</table>

### org.apache.catalina.core.StandardHost

默认实现类`org.apache.catalina.core.StandardHost`有如下额外属性。

<table>
    <tr><th>copyXML</th><td>#boolean</td><td>false</td><td></td></tr>
    <tr><th>deployXML</th><td>#boolean</td><td>true</td><td></td></tr>
    <tr><th>errorReportValveClass</th><td>CDATA</td><td>org.apache.catalina.valves.ErrorReportValve</td><td>错误报告的实现类，必须实现接口org.apache.catalina.Valve</td></tr>
    <tr><th>unpackWARs</th><td>#boolean</td><td>#IMPLIED</td><td>如果为true，则tomcat会自动将WAR文件解压，否则不解压，直接从WAR文件中运行应用程序</td></tr>
    <tr><th>workDir</th><td>CDATA</td><td>#IMPLIED</td><td>工作目录</td></tr>
</table>