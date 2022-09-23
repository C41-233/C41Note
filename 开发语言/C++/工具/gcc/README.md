# gcc/g++

## 用法

``` Shell
gcc/g++ [options] <files>...
```

不包含任何选项时将执行预处理、汇编、编译并链接成可执行文件。

## 选项

[https://gcc.gnu.org/onlinedocs/gcc/Option-Index.html](https://gcc.gnu.org/onlinedocs/gcc/Option-Index.html)

##### 全局选项

- `-c`	只进行预处理、汇编和编译。
- `-o` <path>	指定输出文件。
- `-E`	只进行预处理，默认输出到标准输出。
- `-S`	只进行预处理和汇编。

##### 预处理选项

- `-imacros <file>` 将指定头文件包含到每个源文件的开始，在`-include`之前执行。
- `-include <file>` 将指定头文件包含到每个源文件的开始，相当于在代码的第一行指定`#include`。
- `-nostdinc` 不在系统头文件目录中搜寻头文件。- `-nostdinc++` 不在系统C++头文件目录中查找头文件。
- `-undef`	不定义任何系统和编译器提供的非标准预定义宏，只保留语言标准规定的预定义宏。
- `-C`	预处理时不删除注释。
- `-D<macro> -D<macro>=<value>` 定义宏。
- `-I<directory>`	指定优先查找头文件的目录。
- `-M`	不进行预处理，仅输出文件依赖。默认输出到标准输出。
- `-MD`	同`-M`，输出信息导入到.d文件中。
- `-MM`	输出头文件依赖，但不包括库路径造成的依赖关系
- `-MMD`	同`-MM`，输出信息导入到.d文件中

##### 语言选项
- `-ansi`	严格按照ANSI C的语法，禁用GNU C的特性。
- `-fcond-mismatch`	允许条件表达式第二和第三参数类型不匹配，此时表达式的类型为void。（C++不支持该选项）
- `-fno-asm`	不把asm，inline，typeof用作关键字。
- `-fno-signed-char`	把char当作unsigned char。
- `-fno-unsigned-char`	把char当作signed char。
- `-fsigned-char`	把char当作signed char。
- `-funsigned-char`	把char当作unsigned char。
- `-std=<value>`    指定语言标准。

##### 代码生成选项
- `-fomit-frame-pointer -fno-omit-frame-pointer`    开关优化函数调用时的栈帧指针。
- `-fno-builtin -fno-builtin-<function>`    不将非以__builtin_为前缀的函数作为内置函数优化。
- `-fstack-protector -fno-stack-protector`	开关生成堆栈保护的代码。
- `-fsanitize=<value>`  生成Sanitizer代码。
- `-fsanitize-recover=<value>`  从特定Sanitizer错误中恢复。
- `-fPIC`	产生与位置无关代码。产生的代码中，不使用绝对地址，全部使用相对地址。

##### x86选项
- `-m16 -m32 -64`    生成指定位数的目标代码。

##### Windows选项
- `-mwindows`	生成WIN32应用程序目标代码。

##### 链接选项
- `-l<libname>`	指定要链接的库。
- `-L<path>`	指定优先查找库的目录。
- `-shared`	生成动态链接库。
- `-static`	生成静态库。
- `-Wl`	将后面的参数传递给链接器。

##### 调试与优化选项
- `-g`	为目标文件生成调试信息。
- `-O0 -O1 -O2 -O3`	编译优化，O0表示没有优化，O1是缺省值，O3最佳优化。
- `-Wall`	显示警告信息。

##### 扩展选项
- `-fopenacc`   启用OpenACC库。
- `-fopenmp`    启用OpenMP库。
- `-pthread`    启用pthread库。