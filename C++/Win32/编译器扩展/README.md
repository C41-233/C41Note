# 编译器扩展

## 一、整型扩展
指定位长的扩展整型数据类型，包括各自的signed和unsigned版本。分别为：
- __int8
- __int16
- __int32
- __int64
- __int128

## 二、修饰符扩展

- [__declspec](__declspec.md)
- [__unaligned](__unaligned.md)

## 三、语法扩展

##### __uuidof

获取结构体、接口、指针、引用、变量关联的GUID，返回REFID类型。

##### __ImageBase

指向当前正在运行的模块的基地址。使用时需要如下声明：
``` C
extern "C" const IMAGE_DOS_HEADER __ImageBase;
```

## 四、pragma

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

## 五、预定义宏

#### 1. 函数调用约定

函数调用约定应当在函数声明中，在函数名和函数返回类型之间。

##### APIENTRY
等价于`__stdcall`。

表示应用程序入口，即main、WinMain等。

##### CALLBACK
等价于`__stdcall`。

表示回调函数。

##### NTAPI
等价于`__stdcall`。

##### WINAPI
等价于`__stdcall`。

表示WIN32 API函数。

#### 2. 修饰符
##### CONST
等价于`const`。用于常量定义。

##### UNALIGNED
用于修饰32位指针变量，表明其未对齐。

##### UNALIGNED64
用于修饰64位指针变量，表明其未对齐。

#### 3. 编译器宏
##### UNICODE
如果定义了该宏，则启用UNICODE版本。

##### _WIN32
如果定义了该宏，表示编译环境是windows操作系统。

##### _WIN64
如果定义了该宏，表示编译环境是x64。