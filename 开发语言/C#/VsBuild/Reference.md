# Reference

指定要引用的库文件。

| 属性 | 描述 | 示例 |
|---|---|---|
| SpecificVersion | 是否限定版本号 | `<SpecificVersion>False</SpecificVersion>` |
| HintPath | 库文件的相对路径，相对于csproj | `<HintPath>..\lib\ThirdParty.dll</HintPath>` |

``` XML
<Reference Include="ThirdParty">
    <SpecificVersion>False</SpecificVersion>
    <HintPath>..\lib\ThirdParty.dll</HintPath>
</Reference>
```