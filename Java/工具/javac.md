# javac

用于编译java源代码

## 用法
`javac [options] source-file ...`

## 选项
- `-classpath` 路径	指定查找用户类文件和注释处理程序的位置
- `-cp <filepath>`	指定查找用户类文件和注释处理程序的位置
- `-d <directory>`	指定放置生成的类文件的位置
- `-encoding <encode>`	指定源文件使用的字符编码
- `-g`	生成所有调试信息
- `-g:none`	不生成任何调试信息
- `-g:{<entries>}`	生成部分调试信息，用逗号分隔
    - `lines` 行号（LineNumberTable）
    - `vars`  局部变量（LocalVariableTable，LocalVariableTypeTable）
    - `source` 源文件（SourceFile）
- `-nowarn`	不生成任何警告
- `-verbose`	输出有关编译器正在执行的操作的消息
- `-version`	版本信息