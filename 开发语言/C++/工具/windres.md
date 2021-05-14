# windres
用于将windows资源文件编译成目标文件。

## 用法
`windres [options] [input-file] [output-file]`

## rc文件格式
输入文件是一个.rc资源定义文件。

#### 普通资源
`<name> <type> <option> <param>`

资源类型为：

| type | 描述 | 参数 |
|---|---|---|
| BITMAP | 位图 | <filepath> |
| CURSOR | 光标 | <filepath> |
| FONT | 字体 | <filepath> |
| ICON | 图标 | <filepath> |

### 字符串表
```
STRINGTABLE <option>
BEGIN
	<name1>, <string1>
	<name2>, <string2>
	...
END
```