# gcc/g++

## 用法

``` Shell
gcc/g++ [options] <files>...
```

不包含任何选项时将执行预处理、汇编、编译并链接成可执行文件。

## 选项

##### 全局选项
- `-c`	只进行预处理、汇编和编译
- `-E`	只进行预处理，结果默认写入标准输出
- `-S`	只进行预处理和汇编
- `-o` <file>	指定输出文件名称

##### 预处理选项
- `-C`	预处理时不清理注释
- `-D<macro> -D<macro>=<value>` 定义宏
- `-I<directory>`	指定优先查找头文件的目录
- `-include <file>`	在处理常规输入文件之前，首先处理指定文件。功能就相当于在代码中使用`#include`
- `-imacros <file>`	将指定文件的宏扩展到输入文件
- `-M`	输出文件的依赖
- `-MD`	同`-M`，输出信息导入到.d文件中
- `-MM`	输出头文件依赖，但不包括库路径造成的依赖关系
- `-MMD`	同`-MM`，输出信息导入到.d文件中
- `-nostdinc`	不在缺省头文件目录中寻找头文件
- `-undef`	不定义任何非标准宏

##### 语法选项
- `-ansi`	严格按照ANSI C的语法，禁用GNU C的特性
- `-fcond-mismatch`	允许条件表达式第二和第三参数类型不匹配，此时表达式的类型为void
- `-fno-asm`	不把asm，inline，typeof用作关键字
- `-fno-signed-char`	把char当作unsigned char
- `-fno-unsigned-char`	把char当作signed char
- `-fsigned-char`	把char当作signed char
- `-funsigned-char`	把char当作unsigned char

##### 代码生成选项
- `-fno-stack-protector`	不生成堆栈保护的代码
- `-fPIC`	产生与位置无关代码。产生的代码中，没有绝对地址，全部使用相对地址，故而代码可以被加载器加载到内存的任意位置，都可以正确的执行。这正是共享库所要求的
- `-m32`	生成32位目标代码
- `-m64`	生成64位目标代码
- `-mwindows`	生成WIN32应用程序目标代码

##### 链接选项
- `-l<libname>`	指定编译时使用的库，共享库的命名惯例是libxxxx.so或libxxxx.a的形式，其中xxxx是库名
- `-L<directory>`	指定优先查找库的目录
- `-shared`	生成动态链接库
- `-static`	静态编译
- `-Wl`	将后面的参数传递给链接器

##### 调试与优化选项
- `-g`	为目标文件生成调试信息
- `-O0 -O1 -O2 -O3`	编译优化，O0表示没有优化，O1是缺省值，O3最佳优化
- `-Wall`	显示警告信息

##### 扩展选项
- `-fopenmp`	启用OpenMP
