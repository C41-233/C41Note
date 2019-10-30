# 字节码

参考资料：http://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html

## 数据类型

`u1`、`u2`、`u4`、`u8`分别代表1个、2个、4个、8个字节的无符号整数。

所有整型数据类型按照大端序存储，即高位字节在前，低位字节在后。

## 文件结构
<table>
	<tr><td>u4</td><td>magic</td><td>CA FE BA BE</td></tr>
	<tr><td>u2</td><td><a href="#版本号">minor_version</a></td><td>次版本号</td></tr>
	<tr><td>u2</td><td><a href="#版本号">major_version</a></td><td>主版本号</td></tr>
	<tr><td>u2</td><td>constant_pool_count</td><td>常量池容量</td></tr>
	<tr><td>cp_info[constant_pool_count-1]</td><td><a href="11.html">constant_pool</a></td><td>常量池</td></tr>
	<tr><td>u2</td><td><a href="#访问标志">access_flags</a></td><td>访问标志</td></tr>
	<tr><td>u2</td><td><a href="#类索引">this_class</a></td><td>类索引</td></tr>
	<tr><td>u2</td><td><a href="#父类索引">super_class</a></td><td>父类索引</td></tr>
	<tr><td>u2</td><td>interfaces_count</td><td>接口表容量</td></tr>
	<tr><td>u2[interfaces_count]</td><td><a href="#接口表">interfaces</a></td><td>接口表</td></tr>
	<tr><td>u2</td><td>fields_count</td><td>字段表容量</td></tr>
	<tr><td>field_info[fields_count]</td><td><a href="15.html">fields</a></td><td>字段表</td></tr>
	<tr><td>u2</td><td>methods_count</td><td>方法表容量</td></tr>
	<tr><td>method_info[methods_count]</td><td><a href="16.html">methods</a></td><td>方法表</td></tr>
	<tr><td>u2</td><td>attributes_count</td><td>属性表容量</td></tr>
	<tr><td>attribute_info[attributes_count]</td><td><a href="17.html">attributes</a></td><td>属性表</td></tr>
</table>

- [版本号（minor_version/major_version）](#版本号)
- [常量池（constant_pool）](#常量池)

## 版本号
<table>
	<thead>
		<tr><th>编译器</th><th>版本号（字节码）</th><th>版本号（十进制）</th></tr>
	</thead>
	<tbody>
    	<tr><td>jdk1.7.0</td><td>00 00 00 32</td><td>51.0</td></tr>
    	<tr><td>jdk1.7.0 -target 1.6</td><td>00 00 00 33</td><td>50.0</td></tr>
    	<tr><td>jdk1.7.0 -target 1.4 -source 1.4</td><td>00 00 00 30</td><td>48.0</td></tr>
    	<tr><td>jdk1.6.0</td><td>00 00 00 32</td><td>50.0</td></tr>
    	<tr><td>jdk1.6.0 -target 1.5</td><td>00 00 00 31</td><td>49.0</td></tr>
    	<tr><td>jdk1.6.0 -target 1.4 -source 1.4</td><td>00 00 00 30</td><td>48.0</td></tr>
    	<tr><td>jdk1.5.0_</td><td>00 00 00 31</td><td>49.0</td></tr>
    	<tr><td>jdk1.5.0 -target 1.4 -source 1.4</td><td>00 00 00 30</td><td>48.0</td></tr>
    	<tr><td>jdk1.4</td><td>00 00 00 30</td><td>48.0</td></tr>
    	<tr><td>jdk1.3</td><td>00 00 00 2F</td><td>47.0</td></tr>
    	<tr><td>jdk1.2</td><td>00 00 00 2E</td><td>46.0</td></tr>
    	<tr><td>jdk1.1</td><td>00 03 00 2D</td><td>45.3</td></tr>
    </tbody>
</table>

## 常量池
常量池由`constant_pool_count`表示容量，常量池实际容量为`constant_pool_count-1`，索引从1开始。

当引用常量池编号0时，表示不引用任何项。

常量池各个类型的结构不同，但都由第一个字节指出其类型。

- [01 CONSTANT_Utf8_info](constant_pool.md#CONSTANT_Utf8_info)
- [03 CONSTANT_Integer_info](constant_pool.md#CONSTANT_Integer_info)
- [04 CONSTANT_Float_info](constant_pool.md#CONSTANT_Float_info)
- [05 CONSTANT_Long_info](constant_pool.md#CONSTANT_Long_info)
- [06 CONSTANT_Double_info](constant_pool.md#CONSTANT_Double_info)
- [07 CONSTANT_Class_info](constant_pool.md#CONSTANT_Class_info)
- [08 CONSTANT_String_info](constant_pool.md#CONSTANT_String_info)
- [09 CONSTANT_Fieldref_info](constant_pool.md#CONSTANT_Fieldref_info)
- [0A CONSTANT_Methodref_info](constant_pool.md#CONSTANT_Methodref_info)
- [0B CONSTANT_InterfaceMethodref_info](constant_pool.md#CONSTANT_InterfaceMethodref_info)
- [0C CONSTANT_NameAndType_info](constant_pool.md#CONSTANT_NameAndType_info)
- [0F CONSTANT_MethodHandle_info](constant_pool.md#CONSTANT_MethodHandle_info)
- [10 CONSTANT_MethodType_info](constant_pool.md#CONSTANT_MethodType_info)
- [12 CONSTANT_InvokeDynamic_info](constant_pool.md#CONSTANT_InvokeDynamic_info)


## 访问标志
表示该类或接口的访问描述符，由掩码组合。

<table>
	<thead>
	<tr><th>名称</th><th>值</th><th>描述</th><th>所属</th></tr>
	</thead>
	<tr><td>ACC_PUBLIC</td><td>00 01</td><td>public</td><td>class interface</td></tr>
	<tr><td>ACC_FINAL</td><td>00 10</td><td>final</td><td>class</td></tr>
	<tr><td>ACC_SUPER</td><td>00 20</td><td>invokespecial</td><td>class interface</td></tr>
	<tr><td>ACC_INTERFACE</td><td>02 00</td><td>interface</td><td>interface</td></tr>
	<tr><td>ACC_ABSTRACT</td><td>04 00</td><td>abstract</td><td>class interface</td></tr>
	<tr><td>ACC_SYNTHETIC</td><td>10 00</td><td>编译器生成</td><td>class interface</td></tr>
	<tr><td>ACC_ANNOTATION</td><td>20 00</td><td>annotation</td><td>annotation</td></tr>
	<tr><td>ACC_ENUM</td><td>40 00</td><td>enum</td><td>enum</td></tr>
</table>

没有设置`ACC_INTERFACE`标志的都被认为是class；设置`ACC_INTERFACE`标志的被认为是接口，同时必须设置`ACC_ABSTRACT`标志。

`ACC_SUPER`标志与Sun的老版本Java编译器向后兼容。Sun当前版本的Java虚拟机中，invokespecial指令的语义比老版本中的更为严格。所有新版本的编译器都必须设置`ACC_SUPER`标志。所有新的Java虚拟机实现都必须实现更新的、更严格的invokespecial语义。Sun的老版本编译器产生class文件时，将`ACC_SUPER`标志设为0，即使设定了这个标志，Sun的老版本Java虚拟机也将忽略它。

在access_flags中所有未使用的位都必须由编译器置0，而且Java虚拟机必须忽略它。

## 类索引
引用常量池中的当前类（CONSTANT_Class_info)。

## 父类索引
引用常量池中的父类（CONSTANT_Class_info)。

java.lang.Object没有父类，其父类常量引用索引为0。

接口的父类是java.lang.Object。

## 接口表
接口表前两个字节指出容量，然后每一项分别引用常量池中的接口（CONSTANT_Class_info）。

这个数组只容纳那些直接出现在类声明的implements子句或者接口声明的extends子句中的父接口。接口按照在implements子句或extends子句中出现的顺序（从左到右）在这个数组存储。