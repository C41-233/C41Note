# javap
对class文件反编译。

## 用法
`javap [options] [classes]`

## 选项
- `-bootclasspath <filepath>`	指定bootstrap类路径
- `-c`	对指令反编译
- `-classpath <filepath>`	指定类路径
- `-constants`	显示静态final常量
- `-help --help -?`	帮助信息
- `-l`	显示行号和局部变量表
- `-p`	显示内部类型标签
- `-package`	只显示package/protected/public类和成员
- `-public`	只显示public类和成员
- `-protected`	只显示protected/public类和成员
- `-private`	显示所有类和成员
- `-sysinfo`	显示系统信息（路径、大小、日期、MD5）
- `-version`	版本信息
- `-v -verbose`	额外信息