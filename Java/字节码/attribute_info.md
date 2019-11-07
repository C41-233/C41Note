# 属性表

## AnnotationDefault

记录注解类元素的默认值。用于方法表。

<table>
	<tr><td>u2</td><td>name</td><td>AnnotationDefault（Constant_UTF8_info）</td></tr>
</table>

作用域：method

版本：1.5+

## BootstrapMethods

保存invoke dynamic指令引用的引导方法限定符。用于类。

Java SE 7虚拟机规范规定，如果某个类文件结构的常量池中曾经出现过CONSTANT_InvokeDynamic_info类型的常量，那么这个类文件的属性表中必须存在一个明确的BootstrapMethods属性。

<table>
	<tr><td>u2</td><td>name</td><td>BootstrapMethods（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>bootstrap_method_count</td><td>引导方法限定符数量</td></tr>
	<tr><td>bootstrap_method_info[bootstrap_method_count]</td><td>bootstrap_methods</td><td>引导方法限定符</td></tr>
</table>

bootstrap_method_info格式如下：

<table>
	<tr><td>u2</td><td>bootstrap_method_ref</td><td>引导方法索引（CONSTANT_MethodHandle）</td></tr>
	<tr><td>u2</td><td>bootstrap_argument_count</td><td>引导方法静态参数数量</td></tr>
	<tr><td>u2[bootstrap_argument_count]</td><td>bootstrap_arguments</td><td>引导方法静态参数<br/>CONSTANT_String_info<br/>CONSTANT_Class_info<br/>CONSTANT_Integer_info<br/>CONSTANT_Long_info<br/>CONSTANT_Float_info<br/>CONSTANT_Double_info<br/>CONSTANT_MethodHandle_info<br/>CONSTANT_MethodType_info</td></tr>
</table>

作用域：class

版本：7+

## Code

Java字节码指令序列，用于方法表。

[字节码参考](code.md)

<table>
	<tr><td>u2</td><td>name</td><td>Code（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>max_stack</td><td>操作数栈最大长度（4字节）</td></tr>
	<tr><td>u2</td><td>max_locals</td><td>本地变量长度（this，参数，局部变量）（4字节Slot）</td></tr>
	<tr><td>u4</td><td>code_length</td><td>字节码字节数</td></tr>
	<tr><td>u1[code_length]</td><td>code</td><td>字节码</td></tr>
	<tr><td>u2</td><td>exception_table_count</td><td>异常表长度</td></tr>
	<tr><td>exception_info[exception_table_count]</td><td>exception_table</td><td>异常表</td></tr>
	<tr><td>u2</td><td>attributes_count</td><td>属性表长度</td></tr>
	<tr><td>attribute_info[attributes_count]</td><td>attributes</td><td>属性表，支持的属性有：LineNumberTable，LocalVariableTable，LocalVariableTypeTable，StackMapTable</td></tr>
</table>

exception_info结构如下：

<table>
	<tr><td>u2</td><td>start_pc</td><td>异常捕获起始索引（try子句）</td></tr>
	<tr><td>u2</td><td>end_pc</td><td>异常捕获结束索引（try子句）</td></tr>
	<tr><td>u2</td><td>handler_pc</td><td>异常处理代码索引（catch/finally子句）</td></tr>
	<tr><td>u2</td><td>catch_type</td><td>处理的异常类型（CONSTANT_Class_info）<br/>0表示处理所有异常（finally子句）</td></tr>
</table>

实际异常捕获代码是[start_pc, end_pc)部分，代码索引指从字节码开始的偏移量。

作用域：method

版本：1.0.2+

## ConstantValue

由static final关键字定义的常量值，类型必须为基本类型或String，用于字段表。

<table>
	<tr><td>u2</td><td>name</td><td>ConstantValue（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>00 00 00 02</td></tr>
	<tr><td>u2</td><td>constantvalue_index</td><td>常量索引<br/>CONSTANT_Integer_info<br/>CONSTANT_Long_info<br/>CONSTANT_Float_info<br/>CONSTANT_Double_info<br/>CONSTANT_String_info</td></tr>
</table>

作用域：field

版本：1.0.2+

## Deprecated

被声明为deprecated的类、方法、字段，用于类、方法表、字段表。

<table>
	<tr><td>u2</td><td>name</td><td>Deprecated（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>00 00 00 00</td></tr>
</table>

作用域：class、method、field

范围：1.1+

## EnclosingMethod

局部类或匿名类，标识类所在的外围方法，用于类。

<table>
	<tr><td>u2</td><td>name</td><td>EnclosingMethod（Constant_UTF8_info）</td></tr>
</table>

作用域：class

版本：5.0+

## Exceptions

描述方法抛出的异常，即throws子句，用于方法表。

<table>
	<tr><td>u2</td><td>name</td><td>Exceptions（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>exception_table_count</td><td>异常表长度</td></tr>
	<tr><td>u2[exception_table_count]</td><td>exception_table</td><td>异常表，列举每一个checked异常（CONSTANT_Class_info）</td></tr>
</table>

作用域：method

版本：1.0.2+

## InnerClasses

记录内部类与外部类之间的关联，用于类。

如果一个类中定义了内部类，则编译器为它以及它包含的内部类生成InnerClasses属性。

<table>
	<thead>
		<tr><th>成员类型</th><th>成员属性</th><th>成员描述</th></tr>
	</thead>
		<tr><td>u2</td><td>name</td><td>InnerClasses（Constant_UTF8_info）</td></tr>
		<tr><td>u4</td><td>length</td><td>长度</td></tr>
		<tr><td>u2</td><td>classes_count</td><td>内部类表长度</td></tr>
		<tr><td>class_info[classes_count]</td><td>classes</td><td>内部类表</td></tr>
</table>

class_info结构如下：

<table>
	<tr><td>u2</td><td>inner_class</td><td>内部类索引（CONSTANT_Class_info）</td></tr>
	<tr><td>u2</td><td>outer_class</td><td>外部类索引（CONSTANT_Class_info）</td></tr>
	<tr><td>u2</td><td>inner_name</td><td>内部类名称（CONSTANT_Utf8_info）<br/>0表示匿名内部类</td></tr>
	<tr><td>u2</td><td>inner_access_flags</td><td>类访问标志</td></tr>
</table>

inner_access_flags掩码如下：

<table>
	<tr><td>ACC_PUBLIC</td><td>00 01</td><td>public</td></tr>
	<tr><td>ACC_PRIVATE</td><td>00 02</td><td>private</td></tr>
	<tr><td>ACC_PROTECTED</td><td>00 04</td><td>protected</td></tr>
	<tr><td>ACC_STATIC</td><td>00 08</td><td>static</td></tr>
	<tr><td>ACC_FINAL</td><td>00 10</td><td>final</td></tr>
	<tr><td>ACC_INTERFACE</td><td>02 00</td><td>interface</td></tr>
	<tr><td>ACC_ABSTRACT</td><td>04 00</td><td>abstract</td></tr>
	<tr><td>ACC_SYNTHETIC</td><td>10 00</td><td>编译器生成</td></tr>
	<tr><td>ACC_ANNOTATION</td><td>20 00</td><td>annotation</td></tr>
	<tr><td>ACC_ENUM</td><td>40 00</td><td>enum</td></tr>
</table>

作用域：class

范围：1.1+

## LineNumberTable

源码行号与字节码指令的对应关系，用于Code属性。

<table>
	<tr><td>u2</td><td>name</td><td>LineNumberTable（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>line_number_table_count</td><td>行号表长度</td></tr>
	<tr><td>line_number_info[line_number_table_count]</td><td>line_number_table</td><td>行号表</td></tr>
</table>

line_number_info结构如下：

<table>
	<tr><td>u2</td><td>start_pc</td><td>字节码索引</td></tr>
	<tr><td>u2</td><td>line_number</td><td>源文件行号</td></tr>
</table>

## LocalVariableTable

局部变量描述，用于Code属性。

<table>
	<tr><td>u2</td><td>name</td><td>LocalVariableTable（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>local_variable_table_count</td><td>局部变量池长度</td></tr>
	<tr><td>local_variable_info[local_variable_table_count]</td><td>local_variable_table</td><td>局部变量池</td></tr>
</table>

local_variable_info结构如下：

<table>
	<tr><td>u2</td><td>start_pc</td><td>局部变量有效起始位置代码索引</td></tr>
	<tr><td>u2</td><td>length</td><td>有效代码长度</td></tr>
	<tr><td>u2</td><td>name</td><td>局部变量名（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>descriptor</td><td>局部变量签名（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>index</td><td>在本地变量表中的索引（4字节索引）</td></tr>
</table>

局部变量的有效范围是[start_pc, start_pc+length)。

## LocalVariableTypeTable

使用特征签名代替描述符，为了引入泛型语法之后能描述泛型局部变量而添加。用于Code属性。

<table>
	<tr><td>u2</td><td>name</td><td>LocalVariableTable（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>local_variable_table_count</td><td>泛型局部变量池长度</td></tr>
	<tr><td>local_variable_info[local_variable_table_count]</td><td>local_variable_table</td><td>泛型局部变量池</td></tr>
</table>

local_variable_info结构如下：

<table>
	<tr><td>u2</td><td>start_pc</td><td>泛型局部变量有效起始位置代码索引</td></tr>
	<tr><td>u2</td><td>length</td><td>有效代码长度</td></tr>
	<tr><td>u2</td><td>name</td><td>泛型局部变量名（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>descriptor</td><td>泛型局部变量签名（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>index</td><td>在本地变量表中的索引（4字节索引）</td></tr>
</table>

泛型局部变量的有效范围是[start_pc, start_pc+length)。

JDK1.5+

## RuntimeInvisibleAnnotations

指定运行时不可见的注解。用于类、方法表、字段表。


<table>
	<tr><td>u2</td><td>name</td><td>RuntimeInvisibleAnnotations（Constant_UTF8_info）</td></tr>
</table>

JDK1.5+

## RuntimeInvisibleParameterAnnotations

指定运行时不可见的参数注解。用于方法表。

<table>
	<tr><td>u2</td><td>name</td><td>RuntimeInvisibleParameterAnnotations（Constant_UTF8_info）</td></tr>
</table>

JDK1.5+

## RuntimeVisibleAnnotations

指定运行时可见的注解。用于类、方法表、字段表。

<table>
	<tr><td>u2</td><td>name</td><td>RuntimeVisibleAnnotations（Constant_UTF8_info）</td></tr>
</table>

JDK1.5+

## RuntimeVisibleParameterAnnotations

指定运行时可见的参数注解。用于方法表。

<table>
	<tr><td>u2</td><td>name</td><td>RuntimeVisibleParameterAnnotations（Constant_UTF8_info）</td></tr>
</table>

JDK1.5+

## Signature

支持泛型情况下的方法签名。用于类、方法表、字段表。

<table>
	<tr><td>u2</td><td>name</td><td>Signature（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>00 00 00 02</td></tr>
	<tr><td>u2</td><td>signature_index</td><td>泛型签名（CONSTANT_Utf8_info）</td></tr>
</table>

JDK1.5+

## SourceDebugExtension

存储额外的调试信息。用于类。

<table>
	<tr><td>u2</td><td>name</td><td>SourceDebugExtension（Constant_UTF8_info）</td></tr>
</table>

JDK1.6+

## SourceFile

记录源文件名称，用于类。

<table>
	<tr><td>u2</td><td>name</td><td>SourceFile（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>00 00 00 02</td></tr>
	<tr><td>u2</td><td>sourcefile_index</td><td>源文件名（Constant_UTF8_info）</td></tr>
</table>

## StackMapTable

供新的类型检查验证器检查和处理目标方法的局部变量和操作数栈所需要的类型是否匹配，用于Code属性。

<table>
	<tr><td>u2</td><td>name</td><td>StackMapTable（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>长度</td></tr>
	<tr><td>u2</td><td>stack_map_frame_count</td><td>栈映射帧表长度</td></tr>
	<tr><td>stack_map_frame_info[stack_map_frame_count]</td><td>stack_map_frame</td><td>栈映射帧表</td></tr>
</table>

JDK1.6+

## Synthetic
标识类、方法或字段为编译器自动生成的，用于类、方法表、字段表。

<table>
	<tr><td>u2</td><td>name</td><td>Synthetic（Constant_UTF8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>00 00 00 00</td></tr>
</table>