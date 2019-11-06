# 常量池

## CONSTANT_Class_info
类或接口的符号引用。
<table>
	<tr><td>u1</td><td>tag</td><td>07</td></tr>
	<tr><td>u2</td><td>name_index</td><td>全限定名字符串索引（CONSTANT_Utf8_info）</td></tr>
</table>

## CONSTANT_Double_info
double常量。

占常量池2个位置。

<table>
	<tr><td>u1</td><td>tag</td><td>06</td></tr>
	<tr><td>u8</td><td>bytes</td><td>double</td></tr>
</table>

## CONSTANT_Fieldref_info
字段的符号引用。

<table>
	<tr><td>u1</td><td>tag</td><td>09</td></tr>
	<tr><td>u2</td><td>class_index</td><td>声明字段的类或接口（CONSTANT_Class_info）</td></tr>
	<tr><td>u2</td><td>name_and_type_index</td><td>描述符（CONSTANT_NameAndType_info）</td></tr>
</table>

## CONSTANT_Float_info
float常量。

<table>
	<tr><td>u1</td><td>tag</td><td>04</td></tr>
	<tr><td>u4</td><td>bytes</td><td>float</td></tr>
</table>

## CONSTANT_Integer_info
int、short、char、byte、boolean常量。

<table>
	<tr><td>u1</td><td>tag</td><td>03</td></tr>
	<tr><td>u4</td><td>bytes</td><td>int</td></tr>
</table>

## CONSTANT_InterfaceMethodref_info
接口方法的符号引用。

<table>
	<tr><td>u1</td><td>tag</td><td>0B</td></tr>
	<tr><td>u2</td><td>class_index</td><td>声明方法的接口（CONSTANT_Class_info）</td></tr>
	<tr><td>u2</td><td>name_and_type_index</td><td>描述符（CONSTANT_NameAndType_info）</td></tr>
</table>

## CONSTANT_InvokeDynamic_info

动态方法调用点。

<table>
	<tr><td>u1</td><td>tag</td><td>12</td></tr>
	<tr><td>u2</td><td>method</td><td>方法表索引</td></tr>
	<tr><td>u2</td><td>index</td><td>方法签名（CONSTANT_NameAndType_info）</td></tr>
</table>

## CONSTANT_Long_info
long常量。

占常量池2个位置。

<table>
	<tr><td>u1</td><td>tag</td><td>05</td></tr>
	<tr><td>u8</td><td>bytes</td><td>long</td></tr>
</table>

## CONSTANT_MethodHandle_info
方法句柄。

<table>
	<tr><td>u1</td><td>tag</td><td>0F</td></tr>
	<tr><td>u2</td><td>kind</td><td>方法句柄类型（1-9）</td></tr>
	<tr><td>u2</td><td>index</td><td>常量池索引</td></tr>
</table>

## CONSTANT_Methodref_info
类方法的符号引用。

<table>
	<tr><td>u1</td><td>tag</td><td>0A</td></tr>
	<tr><td>u2</td><td>class_index</td><td>声明方法的类（CONSTANT_Class_info）</td></tr>
	<tr><td>u2</td><td>name_and_type_index</td><td>描述符（CONSTANT_NameAndType_info）</td></tr>
</table>

## CONSTANT_MethodType_info
方法类型。

<table>
	<tr><td>u1</td><td>tag</td><td>10</td></tr>
	<tr><td>u2</td><td>index</td><td>方法签名（CONSTANT_Utf8_info）</td></tr>
</table>

## CONSTANT_NameAndType_info
对字段或方法的名称和签名的描述。

<table>
	<tr><td>u1</td><td>tag</td><td>0C</td></tr>
	<tr><td>u2</td><td>name_index</td><td>字段或方法名称（CONSTANT_Utf8_info）</td></tr>
	<tr><td>u2</td><td>descriptor_index</td><td>字段或方法签名（CONSTANT_Utf8_info）</td></tr>
</table>

## CONSTANT_String_info
字符串常量引用。本身不包含字符串数据部分，仅指向一个CONSTANT_Utf8_info。

<table>
	<tr><td>u1</td><td>tag</td><td>08</td></tr>
	<tr><td>u2</td><td>string_index</td><td>字符串值（CONSTANT_Utf8_info）</td></tr>
</table>

## CONSTANT_Utf8_info
utf8编码的字符串。

<table>
	<tr><td>u1</td><td>tag</td><td>01</td></tr>
	<tr><td>u2</td><td>length</td><td>字节数</td></tr>
	<tr><td>u1[length]</td><td>bytes</td><td>字符串字节</td></tr>
</table>