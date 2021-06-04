# AppendTargetFrameworkToOutputPath

是否在OutputPath中以子目录的形式包含sdk版本信息。

假设`OutputPath`为`bin`，`AppendTargetFrameworkToOutputPath`如果为true，输出目录为`bin/net5.0/`；如果为false，输出目录为`bin/`。

``` XML
<AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
```
