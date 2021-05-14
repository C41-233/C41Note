# <cond>

##### 标志位
<table>
	<tr>
		<th>C</th><td>进位</td><td>CF=1</td>
		<th>NC</th><td>非进位</td><td>CF=0</td>
	</tr>
	<tr>
		<th>E</th><td>相等</td><td>ZF=1</td>
		<th>NE</th><td>不等于</td><td>ZF=0</td>
	</tr>
	<tr>
		<th>O</th><td>溢出</td><td>OF=1</td>
		<th>NO</th><td>不溢出</td><td>OF=0</td>
	</tr>
	<tr>
		<th>P</th><td>偶数位</td><td>PF=1</td>
		<th>NP</th><td>奇数位</td><td>PF=0</td>
	</tr>
	<tr>
		<th>PE</th><td>偶数位</td><td>PF=1</td>
		<th>PO</th><td>奇数位</td><td>PF=0</td>
	</tr>
	<tr>
		<th>S</th><td>负号</td><td>SF=1</td>
		<th>NS</th><td>非负</td><td>SF=0</td>
	</tr>
	<tr>
		<th>Z</th><td>零</td><td>ZF=1</td>
		<th>NZ</th><td>非零</td><td>ZF=0</td>
	</tr>
</table>

##### 有符号比较
<table>
	<tr>
		<th>G</th><td>大于</td><td>ZF=0，SF=0</td>
		<th>NG</th><td>不大于</td><td>ZF=1或SF=1</td>
	</tr>
	<tr>
		<th>GE</th><td>大于或等于</td><td>SF=1</td>
		<th>NGE</th><td>小于</td><td>SF=0</td>
	</tr>
	<tr>
		<th>L</th><td>小于</td><td>SF=1</td>
		<th>NL</th><td>不小于</td><td>SF=0</td>
	</tr>
	<tr>
		<th>LE</th><td>小于或等于</td><td>SF=1或ZF=1</td>
		<th>NLE</th><td>大于</td><td>ZF=0，SF=0</td>
	</tr>
</table>

##### 无符号比较
<table>
	<tr>
		<th>A</th><td>高于</td><td>CF=0，ZF=0</td>
		<th>NA</th><td>不高于</td><td>CF=1或ZF=1</td>
	</tr>
	<tr>
		<th>AE</th><td>高于或等于</td><td>CF=0</td>
		<th>NAE</th><td>低于</td><td>CF=1</td>
	</tr>
	<tr>
		<th>B</th><td>低于</td><td>CF=1</td>
		<th>NB</th><td>不低于</td><td>CF=0</td>
	</tr>
	<tr>
		<th>BE</th><td>低于或等于</td><td>CF=1或ZF=1</td>
		<th>NBE</th><td>高于</td><td>CF=0，ZF=0</td>
	</tr>
</table>