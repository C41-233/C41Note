# Context

```
Empty
```

<table>
    <tr><th>docBase</th><td>CDATA</td><td>#REQUIRED</td><td>指定Web应用的文件路径，可以给定绝对路径，也可以给定相对于Host的appBase属性的相对路径。如果Web应用采用开放目录结构，则指定Web应用的根目录；如果Web应用是个war文件，则指定war文件的路径</td></tr>
    <tr><th>path</th><td>CDATA</td><td>#IMPLIED</td><td>上下文路径，它表示此web应用程序的URL的前缀，""表示根路径</td></tr>
    <tr><th>reloadable</th><td>#boolean</td><td>false</td><td>如果这个属性设为true，tomcat服务器在运行状态下会监视在WEB-INF/classes和WEB-INF/lib目录下class文件的改动，如果监测到有class文件被更新的，服务器会自动重新加载Web应用</td></tr>
</table>