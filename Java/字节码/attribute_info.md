# 属性表

## AnnotationDefault

JDK1.5新增的属性，记录注解类元素的默认值。用于方法表。

<table>
	<tr><td>u2</td><td>name</td><td>AnnotationDefault（Constant_UTF8_info）</td></tr>
</table>

## BootstrapMethods

JDK1.7新增的属性，保存invoke dynamic指令引用的引导方法限定符。用于类。

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

## Code

Java字节码指令序列，用于方法表。

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