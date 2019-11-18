# 编译器扩展

## 整型扩展
指定位长的扩展整型数据类型，包括各自的signed和unsigned版本。分别为：
- __int8
- __int16
- __int32
- __int64
- __int128

## 修饰符扩展

- [__declspec](__declspec.md)
- [__unaligned](__unaligned.md)

## 语法扩展

##### __uuidof

获取结构体、接口、指针、引用、变量关联的GUID，返回REFID类型。

## pragma

#pragma的作用是设定编译器的状态或者是指示编译器完成一些特定的动作。#pragma指令对每个编译器给出了一个方法，在保持与C和C++语言完全兼容的情况下，给出主机或操作系统专有的特征。依据定义，编译指示是机器或操作系统专有的，且对于每个编译器都是不同的。

##### comment
```
#pragma comment(compiler)
```

将编译器的版本号和名称嵌入目标文件中。

```
#pragma comment(exestr, "<comment>")
```

将comment参数嵌入目标文件中，在链接的时候这个字符串将被嵌入到可执行文件中，当操作系统加载可执行文件的时候，该参数字符串不会被加载到内存中。但是，该字符串可以被dumpbin之类的程序查找出并打印出来，你可以用这个标识符将版本号码之类的信息嵌入到可执行文件中。

``` 
#pragma comment(lib, "<library>")
```

指定优先链接的库。

```
#pragma comment(linker, "<options>")
```

指定链接选项。

##### message
```
#pragma message("<comment>")
```

当编译器遇到这条指令时就在编译输出窗口中将消息文本打印出来。

###### once
```
#pragma once
```

保证头文件只被包含一次。

###### pack
```
#pragma pack(<n>)
```

指定结构体的对齐字节数。

##### warning
```
#pragma warning(push)
```

将当前警告信息压栈。

```
#pragma warning(push，<n>)
```

将指定级别（1-4）的警告信息压栈。

```
#pragma warning(pop)
```

恢复栈顶警告信息。

```
#pragma warning(<warning>...)
```

设定警告信息，选型之间用分号;分隔。

警告选项的格式为：`<type>: <code>...`，多个警告编号之间用空格分隔，type包括： 
- disabled：关闭警告 
- once：警告仅报告一次 
- error：作为一个错误 
- 1-4：设定警告级别