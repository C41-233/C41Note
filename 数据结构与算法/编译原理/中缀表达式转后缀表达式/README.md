# 中缀表达式转后缀表达式

后缀表达式的计算方式比较方便，可以先将中缀表达式转后缀表达式计算表达式。

## 算法描述

使用一个栈，从左到右扫描中缀表达式，左右括号不属于操作符

- 如果遇到操作数，则直接输出
- 如果遇到左括号，直接压栈
- 如果遇到操作符，连续弹栈并输出，直到栈顶满足条件之一（1）优先级更低，（2）栈顶为左括号，（3）栈为空，再把该操作符压栈
- 如果遇到右括号，连续弹栈并输出，直到弹出一个左括号为止（左括号弹出但不输出）
- 如果扫描到输入末端，则将栈中剩下的操作符连续弹栈并输出

##### 示例

输入：`a+b*c+(d*e+f)*g`

<table>
	<tr><th>栈</th> <th>输入</th> <th>输出</th> <th>说明</th></tr>
	<tr><td></td> <td>a+b*c+(d*e+f)*g</td> <td></td> <td>初始状态</td></tr>
	<tr><td></td> <td>+b*c+(d*e+f)*g</td> <td>a</td> <td>操作数直接输出</td></tr>
	<tr><td>+</td> <td>b*c+(d*e+f)*g</td> <td>a</td> <td>操作符压栈</td></tr>
	<tr><td>+</td> <td>*c+(d*e+f)*g</td> <td>ab</td> <td>操作数直接输出</td></tr>
	<tr><td>+*</td> <td>c+(d*e+f)*g</td> <td>ab</td> <td>*优先级更高，压栈</td></tr>
	<tr><td>+*</td> <td>+(d*e+f)*g</td> <td>abc</td> <td>操作数直接输出</td></tr>
	<tr><td>+</td> <td>(d*e+f)*g</td> <td>abc*+</td> <td>弹出*+，再+压栈</td></tr>
	<tr><td>+(</td> <td>d*e+f)*g</td> <td>abc*+</td> <td>(直接压栈</td></tr>
	<tr><td>+(</td> <td>*e+f)*g</td> <td>abc*+d</td> <td>操作数直接输出</td></tr>
	<tr><td>+(*</td> <td>e+f)*g</td> <td>abc*+d</td> <td>栈顶是(，操作符直接压栈</td></tr>
	<tr><td>+(*</td> <td>+f)*g</td> <td>abc*+de</td> <td>操作数直接输出</td></tr>
	<tr><td>+(+</td> <td>f)*g</td> <td>abc*+de*</td> <td>弹出*，再+压栈</td></tr>
	<tr><td>+(+</td> <td>)*g</td> <td>abc*+de*f</td> <td>操作数直接输出</td></tr>
	<tr><td>+</td> <td>*g</td> <td>abc*+de*f+</td> <td>)连续弹栈并输出直到遇到(</td></tr>
	<tr><td>+*</td> <td>g</td> <td>abc*+de*f+</td> <td>*优先级更高，压栈</td></tr>
	<tr><td>+*</td> <td></td> <td>abc*+de*f+g</td> <td>操作数直接输出</td></tr>
	<tr><td></td> <td></td> <td>abc*+de*f+g*+</td> <td>弹出并输出剩下的操作符</td></tr>
</table>

输出：`abc*+de*f+g*+`。
