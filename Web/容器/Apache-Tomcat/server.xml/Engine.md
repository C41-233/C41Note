# Engine

```
Realm?, Host+
```

<table>
    <tr><th>backgroundProcessorDelay</th><td>#int</td><td>10</td><td></td></tr>
    <tr><th>className</th><td>CDATA</td><td>Engine is org.apache.catalina.core.StandardEngine</td><td>实现类，必须实现接口org.apache.catalina.Engine</td></tr>
    <tr><th>defaultHost</th><td>#int</td><td>#REQUIRED</td><td>默认使用的Host，必须与其中一个子元素Host的name一致</td></tr>
    <tr><th>jvmRoute</th><td>CDATA</td><td>#IMPLIED</td><td></td></tr>
    <tr><th>name</th><td>CDATA</td><td>#REQUIRED</td><td>Engine名称</td></tr>
    <tr><th>startStopThreads</th><td>#int</td><td>1</td><td>并行启动的线程数，0表示与处理器个数相同</td></tr>
</table>