# csproj

``` XML
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
    <OutputType>Library</OutputType>
    <Configurations>Debug;Release</Configurations>
    <Platforms>x64</Platforms>
    <OutputPath>..\..\bin\$(Configuration)</OutputPath>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
    <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath>
    <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">
    <DebugType>full</DebugType>
    <DebugSymbols>true</DebugSymbols>
    <DefineConstants>DEBUG;TRACE</DefineConstants>
  </PropertyGroup>
  <Import Project="..\Base.csproj" />
  <ItemGroup>
    <ProjectReference Include="..\BaseLib\BaseLib.csproj" />
    <Reference Include="ThirdParty">
      <SpecificVersion>False</SpecificVersion>
      <HintPath>..\lib\ThirdParty.dll</HintPath>
    </Reference>
  </ItemGroup>
</Project>
```

csproj文件的格式为XML，根元素是Project。

## PropertyGroup


PropertyGroup元素定义Project的属性，Project可以包含多个具有不同Condition的PropertyGroup元素。

```XML
<PropertyGroup Condition="'String A' == 'String B'">
    <Property1>...</Property1>
    <Property2>...</Property2>
</PropertyGroup>
```

| 属性 | 描述 | 示例 |
|---|---|---|
| [AppendRuntimeIdentifierToOutputPath](AppendRuntimeIdentifierToOutputPath.md) | 是否在OutputPath中以子目录的形式包含RID信息 | `false` |
| [AppendTargetFrameworkToOutputPath](AppendTargetFrameworkToOutputPath.md) | 是否在OutputPath中以子目录的形式包含sdk版本信息 | `false` |
| Configurations | 指定支持的配置项 | `Debug;Release` |
| OutputPath | 指定目标文件的输出目录，路径相对于csproj | `..\..\bin\$(Configuration)` |
| [OutputType](OutputType.md) | 输出文件的格式 | `Exe` |
| [Platforms](Platforms.md) | 指定目标平台 | `AnyCPU;x64` |
| SatelliteResourceLanguages | 指定生成的多语言文件 | `en-US` |
| [TargetFramework](TargetFramework.md) | 指定构建使用的SDK版本 | `netstandard2.0` |
| TreatWarningsAsErrors | 是否将warning视为error | `true` |
| DebugType | 编译调试级别<br/>`full`、`pdbonly`、`portable`、`embedded`、`none` | `full` |
| DebugSymbols | 是否生成PDB符号文件 | `true` |
| DefineConstants | 定义条件编译宏 | `DEBUG;TRACE` |

## 宏

csproj中的宏以`$(...)`的形式引用。

| 宏 | 描述 |
|---|---|
| $(Configuration) | 当前的配置 |
| $(Platform) | 当前的平台 |

