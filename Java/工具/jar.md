# jar

在jar包的顶层目录下建立`META-INF`目录，在其中建立`MANIFEST.MF`文件。

会自动对目录文件递归处理。

## 格式

`jar [options] [jar-file] [manifest-file] [entry-point] [-C dir] <files>`

## 选项
- `-c`	创建新的归档文件
- `-C`	更改为指定的目录并包含其中的文件
- `-e`	为捆绑到可执行jar文件的独立应用程序，指定入口点
- `-f`	指定归档文件名
- `-i`	为指定的jar文件生成索引信息
- `-m`	包含指定清单文件中的清单信息
- `-M`	不创建条目的清单文件
- `-t`	列出归档目录
- `-u`	更新现有的归档文件
- `-v`	在标准输出中生成详细输出
- `-x`	从档案中提取指定的（或所有）文件
- `-0`	仅存储，不使用任何ZIP压缩

## MANIFEST.MF

<table>
	<thead>
		<tr><th>属性</th><th>描述</th><th>示例</th></tr>
	</thead>
	<tr>
		<td>Can-Retransform-Classes</td>
		<td>是否可以转换类定义</td>
		<td>true</td>
	</tr>
	<tr>
		<td>Class-Path</td>
		<td>导入其他jar包</td>
		<td>./lib/MyPack1.jar ./lib/MyPack2.jar</td>
	</tr>
	<tr>
		<td>Main-Class</td>
		<td>入口，即main方法所在的类</td>
		<td>myproject.Test</td>
	</tr>
	<tr>
		<td>Manifest-Version</td>
		<td>版本号</td>
		<td>1.0</td>
	</tr>
	<tr>
		<td>Premain-Class</td>
		<td>代理入口，即premain方法所在的类</td>
		<td>myproject.Premain</td>
	</tr>
	<tr>
		<td>SplashScreen-Image:</td>
		<td>闪屏图像</td>
		<td>myimage.gif</td>
	</tr>
</table>
	