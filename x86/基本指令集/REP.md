# REP REP<cond>

重复执行串指令。

REP当CX/ECX不为0时，执行指定的指令，然后CX/ECX减1。

REP<cond>当CX/ECX不为0且满足条件时，执行指定的指令，然后CX/ECX减1。

<table>
    <caption>&lt;cond&gt;</caption>
	<tr>
		<th>E</th><td>ZF=1</td><td>相等</td>
		<th>NE</th><td>ZF=0</td><td>不等</td>
	</tr>
	<tr>
		<th>Z</th><td>ZF=1</td><td>零</td>
		<th>NZ</th><td>ZF=0</td><td>非零</td>
	</tr>
</table>

该前缀仅支持串指令，非串指令是不允许的。

## 指令格式
```
REP INS<width>
REP MOVS<width>
REP OUTS<width>
REP LOADS<width>
REP STOS<width>
```

```
REP<cond> CMPS<width>
REP<cond> SCAS<width>
```