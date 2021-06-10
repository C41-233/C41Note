# NuGET

`nuget.config`在.sln同级目录中，指定nuget的配置。

``` XML
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <config>
        <add key="repositoryPath" value="packages" />
		<add key="globalPackagesFolder" value="packages" />
    </config>
</configuration>
```