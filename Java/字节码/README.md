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
	<tr><td>u2</td><td><a href="12.html">access_flags</a></td><td>访问标志</td></tr>
	<tr><td>u2</td><td><a href="13.html">this_class</a></td><td>类索引</td></tr>
	<tr><td>u2</td><td><a href="13.html">super_class</a></td><td>父类索引</td></tr>
	<tr><td>u2</td><td>interfaces_count</td><td>接口表容量</td></tr>
	<tr><td>u2[interfaces_count]</td><td><a href="14.html">interfaces</a></td><td>接口表</td></tr>
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
常量池由`constant_pool_count`表示容量，常量池实际容量为`constant_pool_count-1`，编号为`1~constant_pool_count-1`。当引用常量池编号0时，表示不引用任何项。

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