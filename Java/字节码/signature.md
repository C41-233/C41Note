# 符号签名

## 字段签名

##### 基本类型签名

| 签名 | 类型 |
|---|---|
| B | byte |
| C | char |
| S | short |
| I | int |
| J | long |
| D | double |
| F | float |
| Z | boolean |
| V | void |

##### 类、接口

`L<class>;`

<class>表示完全限定名是以`/`分隔的类型全名。

例如：`Object`表示为`Ljava/lang/Object;`。

##### 数组

每一维数组都在类型前加`[`。例如：
- `long[][]`表示为`[[J`
- `Object[]`表示为`[Ljava/lang/Object;`

## 方法签名

`(<params>)<return>`

例如：

| 方法声明 | 方法签名 |
|---|---|
| int getSize() | ()I |
| String toString() | ()Ljava/lang/String; |
| void main(String[] args) | ([Ljava/lang/String;)V |
| void wait() | ()V |
| int read(byte[] b, int off, int len) | ([BII)I |