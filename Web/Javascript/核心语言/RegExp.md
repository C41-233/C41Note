# RegExp

RegExp对象表示正则表达式，是正则表达式字面量的类型。

## 正则表达式语法

```
/<pattern>/<attributes>
```

##### 修饰符

修饰符在正则表达式的最后，由单个字母任意组合。
- `g` 全局匹配（默认情况下在第一个匹配后停止）
- `i` 大小写不敏感（默认情况下的匹配是大小写敏感的）
- `m` 多行匹配
- `s` 允许`.`匹配换行符
- `u` 使用Unicode的模式进行匹配
- `y` 粘性匹配，从目标字符串的当前位置开始

## 继承

[Object](Object.md) / RegExp

## 构造函数

```
[new] RegExp(string pattern)
[new] RegExp(string pattern, string modifier)
```

根据给定字符串和修饰符创建正则表达式。

```
[new] Regex(Regex regex)
```

用于从字面量创建正则表达式。