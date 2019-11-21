# FPU

## 指令集
<table>
	<tr><td>EMMS</td><td>媒体空MMX状态</td></tr>
	<tr><td>F2XM1</td><td>浮点栈顶绝对值</td></tr>
	<tr><td>FADD</td><td>浮点加</td></tr>
	<tr><td>FADDP</td><td>浮点加出栈</td></tr>
	<tr><td>FBLD</td><td>浮点加载十数</td></tr>
	<tr><td>FBSTP</td><td>浮点保存十数出栈</td></tr>
	<tr><td>FCHS</td><td>浮点正负求反</td></tr>
	<tr><td>FCLEX</td><td>浮点检查错误清除</td></tr>
	<tr><td>FCMOVB</td><td>浮点低于传送</td></tr>
	<tr><td>FCMOVBE</td><td>浮点不高于传送</td></tr>
	<tr><td>FCMOVE</td><td>浮点相等传送</td></tr>
	<tr><td>FCMOVNB</td><td>浮点不低于传送</td></tr>
	<tr><td>FCMOVNBE</td><td>浮点高于传送</td></tr>
	<tr><td>FCMOVNE</td><td>浮点不等传送</td></tr>
	<tr><td>FCMOVNU</td><td>浮点有序传送</td></tr>
	<tr><td>FCMOVU</td><td>浮点无序传送</td></tr>
	<tr><td>FCOM</td><td>浮点比较</td></tr>
	<tr><td>FCOMI</td><td>浮点比较加载标志</td></tr>
	<tr><td>FCOMIP</td><td>浮点比较加载标志出栈</td></tr>
	<tr><td>FCOMP</td><td>浮点比较出栈</td></tr>
	<tr><td>FCOMPP</td><td>浮点比较出栈二</td></tr>
	<tr><td>FCOS</td><td>浮点余弦</td></tr>
	<tr><td>FDECSTP</td><td>浮点栈针减一</td></tr>
	<tr><td>FDISI</td><td>浮点检查禁止中断</td></tr>
	<tr><td>FDIV</td><td>浮点除</td></tr>
	<tr><td>FDIVP</td><td>浮点除出栈</td></tr>
	<tr><td>FDIVR</td><td>浮点反除</td></tr>
	<tr><td>FDIVRP</td><td>浮点反除出栈</td></tr>
	<tr><td>FENI</td><td>浮点检查禁止中断二</td></tr>
	<tr><td>FFREE</td><td>浮点释放</td></tr>
	<tr><td>FFREEP</td><td>浮点释放出栈</td></tr>
	<tr><td>FIADD</td><td>浮点加整数</td></tr>
	<tr><td>FICOM</td><td>浮点比较整数</td></tr>
	<tr><td>FICOMP</td><td>浮点比较整数出栈</td></tr>
	<tr><td>FIDIV</td><td>浮点除整数</td></tr>
	<tr><td>FIDIVR</td><td>浮点反除</td></tr>
	<tr><td>FILD</td><td>浮点加载整数</td></tr>
	<tr><td>FIMUL</td><td>浮点乘整数</td></tr>
	<tr><td>FINCSTP</td><td>浮点栈针加一</td></tr>
	<tr><td>FINIT</td><td>浮点检查初始化</td></tr>
	<tr><td>FIST</td><td>浮点保存整数</td></tr>
	<tr><td>FISTP</td><td>浮点保存整数出栈</td></tr>
	<tr><td>FISTTP</td><td>　</td></tr>
	<tr><td>FISUB</td><td>浮点减整数</td></tr>
	<tr><td>FISUBR</td><td>浮点反减整数</td></tr>
	<tr><td>FLD</td><td>浮点加载数</td></tr>
	<tr><td>FLD1</td><td>浮点加载一</td></tr>
	<tr><td>FLDCW</td><td>浮点加载控制器</td></tr>
	<tr><td>FLDENV</td><td>浮点加载环境</td></tr>
	<tr><td>FLDL2E</td><td>浮点加载L2E</td></tr>
	<tr><td>FLDL2T</td><td>浮点加载L2T</td></tr>
	<tr><td>FLDLG2</td><td>浮点加载LG2</td></tr>
	<tr><td>FLDLN2</td><td>浮点加载LN2</td></tr>
	<tr><td>FLDPI</td><td>浮点加载PI</td></tr>
	<tr><td>FLDZ</td><td>浮点加载零</td></tr>
	<tr><td>FMUL</td><td>浮点乘</td></tr>
	<tr><td>FMULP</td><td>浮点乘出栈</td></tr>
	<tr><td>FNCLEX</td><td>浮点不检查错误清除</td></tr>
	<tr><td>FNDISI</td><td>浮点不检查禁止中断</td></tr>
	<tr><td>FNENI</td><td>浮点不检查禁止中断二</td></tr>
	<tr><td>FNINIT</td><td>浮点不检查初始化</td></tr>
	<tr><td>FNOP</td><td>浮点空</td></tr>
	<tr><td>FNSAVE</td><td>浮点不检查保存状态</td></tr>
	<tr><td>FNSTCW</td><td>浮点不检查保存控制器</td></tr>
	<tr><td>FNSTENV</td><td>浮点不检查保存环境</td></tr>
	<tr><td>FNSTSW</td><td>浮点不检查保存状态器</td></tr>
	<tr><td>FPATAN</td><td>浮点部分反正切</td></tr>
	<tr><td>FPREM</td><td>浮点部分余数</td></tr>
	<tr><td>FPREM1</td><td>浮点部分余数二</td></tr>
	<tr><td>FPTAN</td><td>浮点部分正切</td></tr>
	<tr><td>FRNDINT</td><td>浮点舍入求整</td></tr>
	<tr><td>FRSTOR</td><td>浮点恢复状态</td></tr>
	<tr><td>FSAVE</td><td>浮点检查保存状态</td></tr>
	<tr><td>FSCALE</td><td>浮点比例运算</td></tr>
	<tr><td>FSETPM</td><td>浮点设置保护</td></tr>
	<tr><td>FSIN</td><td>浮点正弦</td></tr>
	<tr><td>FSINCOS</td><td>浮点正余弦</td></tr>
	<tr><td>FSQRT</td><td>浮点平方根</td></tr>
	<tr><td>FST</td><td>浮点保存</td></tr>
	<tr><td>FSTCW</td><td>浮点检查保存控制器</td></tr>
	<tr><td>FSTENV</td><td>浮点检查保存环境</td></tr>
	<tr><td>FSTP</td><td>浮点保存出栈</td></tr>
	<tr><td>FSTSW</td><td>浮点检查保存状态器</td></tr>
	<tr><td>FSUB</td><td>浮点减</td></tr>
	<tr><td>FSUBP</td><td>浮点减出栈</td></tr>
	<tr><td>FSUBR</td><td>浮点反减</td></tr>
	<tr><td>FSUBRP</td><td>浮点反减出栈</td></tr>
	<tr><td>FTST</td><td>浮点比零</td></tr>
	<tr><td>FUCOM</td><td>浮点无序比较</td></tr>
	<tr><td>FUCOMI</td><td>浮点反比加载标志</td></tr>
	<tr><td>FUCOMIP</td><td>浮点反比加载标志出栈</td></tr>
	<tr><td>FUCOMP</td><td>浮点无序比较出栈</td></tr>
	<tr><td>FUCOMPP</td><td>浮点无序比较出栈二</td></tr>
	<tr><td>FWAIT</td><td>浮点等</td></tr>
	<tr><td>FXAM</td><td>浮点检查</td></tr>
	<tr><td>FXCH</td><td>浮点交换</td></tr>
	<tr><td>FXTRACT</td><td>浮点分解</td></tr>
	<tr><td>FYL2X</td><td>浮点求L2X</td></tr>
	<tr><td>FYL2XP1</td><td>浮点求L2XP1</td></tr>
	<tr><td>MOVED</td><td>媒体双字传送</td></tr>
	<tr><td>MOVEQ</td><td>媒体四字传送</td></tr>
	<tr><td>PACKSSDW</td><td>媒体符号双字压缩</td></tr>
	<tr><td>PACKSSWB</td><td>媒体符号字压缩</td></tr>
	<tr><td>PACKUSWB</td><td>媒体无符号字压缩</td></tr>
	<tr><td>PADDB</td><td>媒体截断字节加</td></tr>
	<tr><td>PADDD</td><td>媒体截断双字加</td></tr>
	<tr><td>PADDSB</td><td>媒体符号饱和字节加</td></tr>
	<tr><td>PADDSIW</td><td></td></tr>
	<tr><td>PADDSW</td><td>媒体符号饱和字加</td></tr>
	<tr><td>PADDUSB</td><td>媒体无符号饱和字节加</td></tr>
	<tr><td>PADDUSW</td><td>媒体无符号饱和字加</td></tr>
	<tr><td>PADDW</td><td>媒体截断字加</td></tr>
	<tr><td>PAND</td><td>媒体与</td></tr>
	<tr><td>PANDN</td><td>媒体与非</td></tr>
	<tr><td>PAVEB</td><td>　</td></tr>
	<tr><td>PCMPEQB</td><td>媒体字节比等</td></tr>
	<tr><td>PCMPEQD</td><td>媒体双字比等</td></tr>
	<tr><td>PCMPEQW</td><td>媒体字比等</td></tr>
	<tr><td>PCMPGTB</td><td>媒体字节比大</td></tr>
	<tr><td>PCMPGTD</td><td>媒体双字比大</td></tr>
	<tr><td>PCMPGTW</td><td>媒体字比大</td></tr>
	<tr><td>PDISTIB</td><td>　</td></tr>
	<tr><td>PMACHRIW</td><td>　</td></tr>
	<tr><td>PMADDWD</td><td>　</td></tr>
	<tr><td>PMAGW</td><td>　</td></tr>
	<tr><td>PMULHRIW</td><td>　</td></tr>
	<tr><td>PMULHRWC</td><td>　</td></tr>
	<tr><td>PMULHW</td><td>　</td></tr>
	<tr><td>PMVGEZB</td><td>　</td></tr>
	<tr><td>PMVLZB</td><td>　</td></tr>
	<tr><td>PMVNZB</td><td>　</td></tr>
	<tr><td>PMVZB</td><td>　</td></tr>
	<tr><td>POR</td><td>媒体或</td></tr>
	<tr><td>PSLLD</td><td>媒体双字左移</td></tr>
	<tr><td>PSLLQ</td><td>媒体四字左移</td></tr>
	<tr><td>PSLLW</td><td>媒体字左移</td></tr>
	<tr><td>PSRAD</td><td>媒体双字算术右移</td></tr>
	<tr><td>PSRAW</td><td>媒体字算术右移</td></tr>
	<tr><td>PSRLD</td><td>媒体双字右移</td></tr>
	<tr><td>PSRLQ</td><td>媒体四字右移</td></tr>
	<tr><td>PSRLW</td><td>媒体字右移</td></tr>
	<tr><td>PSUBB</td><td>媒体截断字节减</td></tr>
	<tr><td>PSUBSB</td><td>媒体符号饱和字节减</td></tr>
	<tr><td>PSUBSIW</td><td>　</td></tr>
	<tr><td>PSUBSW</td><td>媒体符号饱和字减</td></tr>
	<tr><td>PSUBUSB</td><td>媒体无符号饱和字节减</td></tr>
	<tr><td>PSUBUSW</td><td>媒体无符号饱和字减</td></tr>
	<tr><td>PSUBW</td><td>媒体截断字减</td></tr>
	<tr><td>PUNPCKHBW</td><td>媒体字节高位解压</td></tr>
	<tr><td>PUNPCKHDQ</td><td>媒体双字高位解压</td></tr>
	<tr><td>PUNPCKHWD</td><td>媒体字高位解压</td></tr>
	<tr><td>PUNPCKLBW</td><td>媒体字节低位解压</td></tr>
	<tr><td>PUNPCKLDQ</td><td>媒体双字低位解压
	<tr><td>PUNPCKLWD</td><td>媒体字低位解压</td></tr>
</table>