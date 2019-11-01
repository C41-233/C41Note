# 字节码

参考资料：http://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html

## 数据类型

`u1`、`u2`、`u4`、`u8`分别代表1个、2个、4个、8个字节的无符号整数。

所有整型数据类型按照大端序存储，即高位字节在前，低位字节在后。

## 文件结构
<table>
	<tr><td>u4</td><td>magic</td><td>CA FE BA BE</td></tr>
	<tr><td>u2</td><td>minor_version</td><td><a href="#版本号">次版本号</a></td></tr>
	<tr><td>u2</td><td>major_version</td><td><a href="#版本号">主版本号</a></td></tr>
	<tr><td>u2</td><td>constant_pool_count</td><td>常量池容量</td></tr>
	<tr><td>cp_info[constant_pool_count-1]</td><td>constant_pool</td><td><a href="11.html">常量池</a></td></tr>
	<tr><td>u2</td><td>access_flags</td><td><a href="#访问标志">访问标志</a></td></tr>
	<tr><td>u2</td><td>this_class</td><td><a href="#类索引">类索引</a></td></tr>
	<tr><td>u2</td><td>super_class</td><td><a href="#父类索引">父类索引</a></td></tr>
	<tr><td>u2</td><td>interfaces_count</td><td>接口表容量</td></tr>
	<tr><td>u2[interfaces_count]</td><td>interfaces</td><td><a href="#接口表">接口表</a></td></tr>
	<tr><td>u2</td><td>fields_count</td><td>字段表容量</td></tr>
	<tr><td>field_info[fields_count]</td><td>fields</td><td><a href="#字段表">字段表</a></td></tr>
	<tr><td>u2</td><td>methods_count</td><td>方法表容量</td></tr>
	<tr><td>method_info[methods_count]</td><td>methods</td><td><a href="#方法表">方法表</a></td></tr>
	<tr><td>u2</td><td>attributes_count</td><td>属性表容量</td></tr>
	<tr><td>attribute_info[attributes_count]</td><td>attributes</td><td><a href="#属性表">属性表</a></td></tr>
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

接口的父类是`java.lang.Object`。

## 接口表
接口表前两个字节指出容量，然后每一项分别引用常量池中的接口（CONSTANT_Class_info）。

这个数组只容纳那些直接出现在类声明的implements子句或者接口声明的extends子句中的父接口。接口按照在implements子句或extends子句中出现的顺序（从左到右）在这个数组存储。

## 字段表

字段表前两个字节指出容量，然后紧跟field_info数组。只有在源代码中由类或者接口声明了的字段才能在fields列表中列出。

在字段表中，不列出从超类或者父接口继承而来的字段。另一方面，字段表可能会包含在对应的Java源文件中没有叙述的字段，这是因为Java编译器可能会在编译时向类或者接口添加字段。

field_info结构如下：
<table>
	<tr><td>u2</td><td>access_flags</td><td>访问标志</td></tr>
	<tr><td>u2</td><td>name_index</td><td>字段名称（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>descriptor_index</td><td>字段签名（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>attributes_count</td><td>属性表容量</td></tr>
	<tr><td>attribute_info[attributes_count]</td><td>attributes</td><td><a href="#属性表">属性表</a></td></tr>
</table>

访问标志由如下掩码组成：
<table>
	<tr><td>ACC_PUBLIC</td><td>00 01</td><td>public</td></tr>
	<tr><td>ACC_PRIVATE</td><td>00 02</td><td>private</td></tr>
	<tr><td>ACC_PROTECTED</td><td>00 04</td><td>protected</td></tr>
	<tr><td>ACC_STATIC</td><td>00 08</td><td>static</td></tr>
	<tr><td>ACC_FINAL</td><td>00 10</td><td>final</td></tr>
	<tr><td>ACC_VOLATILE</td><td>00 40</td><td>volatile</td></tr>
	<tr><td>ACC_TRANSIENT</td><td>00 80</td><td>transient</td></tr>
	<tr><td>ACC_SYNTHETIC</td><td>10 00</td><td>编译器生成</td></tr>
	<tr><td>ACC_ENUM</td><td>40 00</td><td>enum</td></tr>
</table>
	
虚拟机能识别的字段属性有：ConstantValue，Deprecated，RuntimeInvisibleAnnotations，RuntimeVisibleAnnotations，Signature，Synthetic。

## 方法表
方法表由前两个字节指出容量，然后紧跟method_info数组。方法表中只包括类或者接口中显式定义的方法。

method_info结构如下：

<table>
	<tr><td>u2</td><td>access_flags</td><td>访问标志</td></tr>
	<tr><td>u2</td><td>name_index</td><td>方法名称（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>descriptor_index</td><td>方法签名（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>attributes_count</td><td>属性表容量</td></tr>
	<tr><td>attribute_info[attributes_count]</td><td>attributes</td><td><a href="#属性表">属性表</a></td></tr>
</table>

访问标志由如下掩码组成：

<table>
	<tr><td>ACC_PUBLIC</td><td>00 01</td><td>public</td></tr>
	<tr><td>ACC_PRIVATE</td><td>00 02</td><td>private</td></tr>
	<tr><td>ACC_PROTECTED</td><td>00 04</td><td>protected</td></tr>
	<tr><td>ACC_STATIC</td><td>00 08</td><td>static</td></tr>
	<tr><td>ACC_FINAL</td><td>00 10</td><td>final</td></tr>
	<tr><td>ACC_SYNCHRONIZED</td><td>00 20</td><td>synchronized</td></tr>
	<tr><td>ACC_BRIDGE</td><td>00 40</td><td>编译器生成（bridge）</td></tr>
	<tr><td>ACC_VARARGS</td><td>00 80</td><td>方法带有变长参数</td></tr>
	<tr><td>ACC_NATIVE</td><td>01 00</td><td>native</td></tr>
	<tr><td>ACC_ABSTRACT</td><td>04 00</td><td>abstract</td></tr>
	<tr><td>ACC_STRICT</td><td>08 00</td><td>strictfp</td></tr>
	<tr><td>ACC_SYNTHETIC</td><td>10 00</td><td>编译器生成</td></tr>
</table>

编译器会产生的两种方法是`<clinit>`（类初始化方法）和`<init>`（实例构造方法）。

虚拟机能识别的方法属性有：AnnotationDefault，Code，Deprecated，Exception，RuntimeInvisibleAnnotations，RuntimeInvisibleParameterAnnotations，RuntimeVisibleAnnotations，RuntimeVisibleParameterAnnotations，Signature，Synthetic。

## 属性表

属性表在字段表、方法表和Class文件最后都有使用。属性表前两个字节指出容量，然后紧跟attribute_info数组。

attribute_info结构如下：

<table>
	<tr><td>u2</td><td>name</td><td>属性名称（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u4</td><td>length</td><td>属性数据字节数</td></tr>
	<tr><td>u1[length]</td><td>info</td><td>属性数据</td></tr>
</table>

