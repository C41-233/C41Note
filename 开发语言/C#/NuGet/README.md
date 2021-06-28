# NuGET

`nuget.config`在.sln同级目录中，指定nuget的配置。

``` XML
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <config>
        <!-- 指定nuget包缓存路径 -->
        <add key="repositoryPath" value="packages" />
		<add key="globalPackagesFolder" value="packages" />
    </config>
	<!-- 定义nuget源 -->
    <packageSources>
        <add key="local" value="http://127.0.0.1/v3/index.json" />
    </packageSources>
</configuration>
```