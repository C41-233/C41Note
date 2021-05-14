# C/C++

http://www.cplusplus.com/reference/

- [预定义宏](预定义宏.md)
- [三联符](三联符.md)
- [函数调用约定](函数调用约定.md)

## main函数

``` C++
int main() 
int main(int argc, char* argv[]) 
int main(int argc, char* argv[], char* envp[])
```
参数由shell传递。
- argc：argv数组大小 
- argv：命令行参数（第一个是程序名） 
- envp：环境变量（最后一个是0）

返回值表示向操作系统返回的状态。
