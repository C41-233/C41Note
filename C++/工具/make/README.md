# make

## 用法
`make [-f <filename>] [<target>]`

默认查找`Makefile`和`makefile`文件，并执行第一个目标。

## Makefile规则
行尾使用反斜杠来连接下一行。

``` Makefile
<targets>: <prerequisites> 
    <commands>
```

`<targets>`表示目标或目标文件，用空格分隔，对每个目标分别做相同处理。

`<prerequisites>`表示依赖目标或文件，用空格分隔。

`<commands>`表示生成目标需要执行的指令，行首必须添加tab字符。

``` Makefile
<targets>: <target-pattern> : <prereq-pattern> 
    <commands>
```

模式推导。

`%`表示匹配一个或多个任意字符。

``` Makefile
.PHONY: <targes>
```

指定目标是伪目标，从而不会验证文件的存在性。

``` Makefile
<VAR> = <VALUE>
```

定义宏。

``` Makefile
$(<VAR>)
```

引用宏。

``` Makefile
include <filename>
-include <filename>
```

包含文件。

`-include`会忽略文件不存在等错误。

### 预定义变量
- `$*`	目标文件名称，不包括扩展名
- `$+`	所有依赖目标
- `$<`	第一个依赖目标
- `$?`	所有引起更新的依赖目标
- `$@`	目标名称
- `$^`	所有依赖目标，去除重复项
- `$%`	如果目标是归档成员，则表示目标归档的成员名称

### 函数
``` Makefile
$(<function> <arguments>)
${<function> <arguments>}
```

参数用逗号分隔。

<table>
<tr>
    <td>subst from,to,str</td>
    <td>把str中的from替换为to，返回替换后的字符串</td>
</tr>
</table>
