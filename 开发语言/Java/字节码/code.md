# 指令

<const1>表示1字节的常量值，<const2>表示2字节的常量。

<index>表示1字节的常量池索引，<windex>表示2字节的常量池索引。

<slot>表示1字节的局部变量索引。

<int>表示有符号4字节整数，boolean、byte、char、short、int。

<long>表示有符号8字节整数，long。

<float>表示32位浮点数，float。

<double>表示64位浮点数，double。

<table>
	<thead>
    	<tr>
    		<th>字节码</th>
    		<th>助记符</th>
    		<th>描述</th>
    	</tr>
	</thead>
	<tbody>
    	<tr><td>0x00</td><td>nop</td><td>空指令</td></tr>
    	<tr><td>0x01</td><td>aconst_null</td><td>将null推送至栈顶</td></tr>
    	<tr><td>0x02</td><td>iconst_m1</td><td>将int型-1推送至栈顶</td></tr>
    	<tr><td>0x03</td><td>iconst_0</td><td>将int型0推送至栈顶</td></tr>
    	<tr><td>0x04</td><td>iconst_1</td><td>将int型1推送至栈顶</td></tr>
    	<tr><td>0x05</td><td>iconst_2</td><td>将int型2推送至栈顶</td></tr>
    	<tr><td>0x06</td><td>iconst_3</td><td>将int型3推送至栈顶</td></tr>
    	<tr><td>0x07</td><td>iconst_4</td><td>将int型4推送至栈顶</td></tr>
    	<tr><td>0x08</td><td>iconst_5</td><td>将int型5推送至栈顶</td></tr>
    	<tr><td>0x09</td><td>lconst_0</td><td>将long型0推送至栈顶</td></tr>
    	<tr><td>0x0A</td><td>lconst_1</td><td>将long型1推送至栈顶</td></tr>
    	<tr><td>0x0B</td><td>fconst_0</td><td>将float型0推送至栈顶</td></tr>
    	<tr><td>0x0C</td><td>fconst_1</td><td>将float型1推送至栈顶</td></tr>
    	<tr><td>0x0D</td><td>fconst_2</td><td>将float型2推送至栈顶</td></tr>
    	<tr><td>0x0E</td><td>dconst_0</td><td>将double型0推送至栈顶</td></tr>
    	<tr><td>0x0F</td><td>dconst_1</td><td>将double型1推送至栈顶</td></tr>
    	<tr><td>0x10</td><td>bipush &lt;const1&gt;</td><td>将单字节的常量值推送至栈顶</td></tr>
    	<tr><td>0x11</td><td>sipush &lt;const2&gt;</td><td>将双字节的常量值推送至栈顶</td></tr>
    	<tr><td>0x12</td><td>ldc &lt;index&gt;</td><td>将int，float或String型常量值从常量池中推送至栈顶</td></tr>
    	<tr><td>0x13</td><td>ldc_w &lt;windex&gt;</td><td>将int，float或String型常量值从常量池中推送至栈顶（宽索引）</td></tr>
    	<tr><td>0x14</td><td>ldc2_w &lt;windex&gt;</td><td>将long或double型常量值从常量池中推送至栈顶（宽索引）</td></tr>
    	<tr><td>0x15</td><td>iload &lt;slot&gt;</td><td>将指定的int型局部变量推送至栈顶</td></tr>
    	<tr><td>0x16</td><td>lload &lt;slot&gt;</td><td>将指定的long型局部变量推送至栈顶</td></tr>
    	<tr><td>0x17</td><td>fload &lt;slot&gt;</td><td>将指定的float型局部变量推送至栈顶</td></tr>
    	<tr><td>0x18</td><td>dload &lt;slot&gt;</td><td>将指定的double型局部变量推送至栈顶</td></tr>
    	<tr><td>0x19</td><td>aload &lt;slot&gt;</td><td>将指定的引用类型局部变量推送至栈顶</td></tr>
    	<tr><td>0x1A</td><td>iload_0</td><td>将第一个int型局部变量推送至栈顶</td></tr>
    	<tr><td>0x1B</td><td>iload_1</td><td>将第二个int型局部变量推送至栈顶</td></tr>
    	<tr><td>0x1C</td><td>iload_2</td><td>将第三个int型局部变量推送至栈顶</td></tr>
    	<tr><td>0x1D</td><td>iload_3</td><td>将第四个int型局部变量推送至栈顶</td></tr>
    	<tr><td>0x1E</td><td>lload_0</td><td>将第一个long型局部变量推送至栈顶</td></tr>
    	<tr><td>0x1F</td><td>lload_1</td><td>将第二个long型局部变量推送至栈顶</td></tr>
    	<tr><td>0x20</td><td>lload_2</td><td>将第三个long型局部变量推送至栈顶</td></tr>
    	<tr><td>0x21</td><td>lload_3</td><td>将第四个long型局部变量推送至栈顶</td></tr>
    	<tr><td>0x22</td><td>fload_0</td><td>将第一个float型局部变量推送至栈顶</td></tr>
    	<tr><td>0x23</td><td>fload_1</td><td>将第二个float型局部变量推送至栈顶</td></tr>
    	<tr><td>0x24</td><td>fload_2</td><td>将第三个float型局部变量推送至栈顶</td></tr>
    	<tr><td>0x25</td><td>fload_3</td><td>将第四个float型局部变量推送至栈顶</td></tr>
    	<tr><td>0x26</td><td>dload_0</td><td>将第一个double型局部变量推送至栈顶</td></tr>
    	<tr><td>0x27</td><td>dload_1</td><td>将第二个double型局部变量推送至栈顶</td></tr>
    	<tr><td>0x28</td><td>dload_2</td><td>将第三个double型局部变量推送至栈顶</td></tr>
    	<tr><td>0x29</td><td>dload_3</td><td>将第四个double型局部变量推送至栈顶</td></tr>
    	<tr><td>0x2A</td><td>aload_0</td><td>将第一个引用类型局部变量推送至栈顶</td></tr>
    	<tr><td>0x2B</td><td>aload_1</td><td>将第二个引用类型局部变量推送至栈顶</td></tr>
    	<tr><td>0x2C</td><td>aload_2</td><td>将第三个引用类型局部变量推送至栈顶</td></tr>
    	<tr><td>0x2D</td><td>aload_3</td><td>将第四个引用类型局部变量推送至栈顶</td></tr>
    	<tr><td>0x2E</td><td>iaload &lt;int&gt;</td><td>将int型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x2F</td><td>laload &lt;int&gt;</td><td>将long型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x30</td><td>faload &lt;int&gt;</td><td>将float型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x31</td><td>daload &lt;int&gt;</td><td>将double型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x32</td><td>aaload &lt;int&gt;</td><td>将引用型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x33</td><td>baload &lt;int&gt;</td><td>将boolean或byte型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x34</td><td>caload &lt;int&gt;</td><td>将char型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x35</td><td>saload &lt;int&gt;</td><td>将short型数组指定索引的值推送至栈顶</td></tr>
    	<tr><td>0x36</td><td>istore &lt;slot&gt;</td><td>将栈顶int型数值存入指定局部变量</td></tr>
    	<tr><td>0x37</td><td>lstore &lt;slot&gt;</td><td>将栈顶long型数值存入指定局部变量</td></tr>
    	<tr><td>0x38</td><td>fstore &lt;slot&gt;</td><td>将栈顶float型数值存入指定局部变量</td></tr>
    	<tr><td>0x39</td><td>dstore &lt;slot&gt;</td><td>将栈顶double型数值存入指定局部变量</td></tr>
    	<tr><td>0x3A</td><td>astore &lt;slot&gt;</td><td>将栈顶引用型数值存入指定局部变量</td></tr>
    	<tr><td>0x3B</td><td>istore_0</td><td>将栈顶int型数值存入第一个局部变量</td></tr>
    	<tr><td>0x3C</td><td>istore_1</td><td>将栈顶int型数值存入第二个局部变量</td></tr>
    	<tr><td>0x3D</td><td>istore_2</td><td>将栈顶int型数值存入第三个局部变量</td></tr>
    	<tr><td>0x3E</td><td>istore_3</td><td>将栈顶int型数值存入第四个局部变量</td></tr>
    	<tr><td>0x3F</td><td>lstore_0</td><td>将栈顶long型数值存入第一个局部变量</td></tr>
    	<tr><td>0x40</td><td>lstore_1</td><td>将栈顶long型数值存入第二个局部变量</td></tr>
    	<tr><td>0x41</td><td>lstore_2</td><td>将栈顶long型数值存入第三个局部变量</td></tr>
    	<tr><td>0x42</td><td>lstore_3</td><td>将栈顶long型数值存入第四个局部变量</td></tr>
    	<tr><td>0x43</td><td>fstore_0</td><td>将栈顶float型数值存入第一个局部变量</td></tr>
    	<tr><td>0x44</td><td>fstore_1</td><td>将栈顶float型数值存入第二个局部变量</td></tr>
    	<tr><td>0x45</td><td>fstore_2</td><td>将栈顶float型数值存入第三个局部变量</td></tr>
    	<tr><td>0x46</td><td>fstore_3</td><td>将栈顶float型数值存入第四个局部变量</td></tr>
    	<tr><td>0x47</td><td>dstore_0</td><td>将栈顶double型数值存入第一个局部变量</td></tr>
    	<tr><td>0x48</td><td>dstore_1</td><td>将栈顶double型数值存入第二个局部变量</td></tr>
    	<tr><td>0x49</td><td>dstore_2</td><td>将栈顶double型数值存入第三个局部变量</td></tr>
    	<tr><td>0x4A</td><td>dstore_3</td><td>将栈顶double型数值存入第四个局部变量</td></tr>
    	<tr><td>0x4B</td><td>astore_0</td><td>将栈顶引用型数值存入第一个局部变量</td></tr>
    	<tr><td>0x4C</td><td>astore_1</td><td>将栈顶引用型数值存入第二个局部变量</td></tr>
    	<tr><td>0x4D</td><td>astore_2</td><td>将栈顶引用型数值存入第三个局部变量</td></tr>
    	<tr><td>0x4E</td><td>astore_3</td><td>将栈顶引用型数值存入第四个局部变量</td></tr>
    	<tr><td>0x4F</td><td>iastore &lt;int&gt;</td><td>将栈顶int型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x50</td><td>lastore &lt;int&gt;</td><td>将栈顶long型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x51</td><td>fastore &lt;int&gt;</td><td>将栈顶float型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x52</td><td>dastore &lt;int&gt;</td><td>将栈顶double型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x53</td><td>aastore &lt;int&gt;</td><td>将栈顶引用型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x54</td><td>bastore &lt;int&gt;</td><td>将栈顶boolean或byte型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x55</td><td>castore &lt;int&gt;</td><td>将栈顶char型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x56</td><td>sastore &lt;int&gt;</td><td>将栈顶short型数值存入指定数组的指定索引位置</td></tr>
    	<tr><td>0x57</td><td>pop</td><td>将栈顶的一个字弹出</td></tr>
    	<tr><td>0x58</td><td>pop2</td><td>将栈顶的两个字弹出</td></tr>
    	<tr><td>0x59</td><td>dup</td><td>复制栈顶的一个字并将复制值压入栈顶</td></tr>
    	<tr><td>0x5A</td><td>dup_x1</td><td>复制栈顶的一个字，弹出栈顶的一个字，然后将复制值及原来弹出的两个字压入栈顶</td></tr>
    	<tr><td>0x5B</td><td>dup_x2</td><td>复制栈顶的一个字，弹出栈顶的两个字，然后将复制值及原来弹出的三个字压入栈顶</td></tr>
    	<tr><td>0x5C</td><td>dup2</td><td>复制栈顶的两个字并将复制值压入栈顶</td></tr>
    	<tr><td>0x5D</td><td>dup2_x1</td><td>复制栈顶两个字，弹出栈顶的三个字，然后将复制值及原来弹出的三个字压入栈顶</td></tr>
    	<tr><td>0x5E</td><td>dup2_x2</td><td>复制栈顶两个字，弹出栈顶的四个字，然后将复制值及原来弹出的四个字压入栈顶</td></tr>
    	<tr><td>0x5F</td><td>swap</td><td>将栈顶的两个字交换</td></tr>
    	<tr><td>0x60</td><td>iadd</td><td>将栈顶两int型数值相加并将结果压入栈顶</td></tr>
    	<tr><td>0x61</td><td>ladd</td><td>将栈顶两long型数值相加并将结果压入栈顶</td></tr>
    	<tr><td>0x62</td><td>fadd</td><td>将栈顶两float型数值相加并将结果压入栈顶</td></tr>
    	<tr><td>0x63</td><td>dadd</td><td>将栈顶两double型数值相加并将结果压入栈顶</td></tr>
    	<tr><td>0x64</td><td>isub</td><td>将栈顶两int型数值相减并将结果压入栈顶</td></tr>
    	<tr><td>0x65</td><td>lsub</td><td>将栈顶两long型数值相减并将结果压入栈顶</td></tr>
    	<tr><td>0x66</td><td>fsub</td><td>将栈顶两float型数值相减并将结果压入栈顶</td></tr>
    	<tr><td>0x67</td><td>dsub</td><td>将栈顶两double型数值相减并将结果压入栈顶</td></tr>
    	<tr><td>0x68</td><td>imul</td><td>将栈顶两int型数值相乘并将结果压入栈顶</td></tr>
    	<tr><td>0x69</td><td>lmul</td><td>将栈顶两long型数值相乘并将结果压入栈顶</td></tr>
    	<tr><td>0x6A</td><td>fmul</td><td>将栈顶两float型数值相乘并将结果压入栈顶</td></tr>
    	<tr><td>0x6B</td><td>dmul</td><td>将栈顶两double型数值相乘并将结果压入栈顶</td></tr>
    	<tr><td>0x6C</td><td>idiv</td><td>将栈顶两int型数值相除并将结果压入栈顶</td></tr>
    	<tr><td>0x6D</td><td>ldiv</td><td>将栈顶两long型数值相除并将结果压入栈顶</td></tr>
    	<tr><td>0x6E</td><td>fdiv</td><td>将栈顶两float型数值相除并将结果压入栈顶</td></tr>
    	<tr><td>0x6F</td><td>ddiv</td><td>将栈顶两double型数值相除并将结果压入栈顶</td></tr>
    	<tr><td>0x70</td><td>irem</td><td>将栈顶两int型数值作取模运算并将结果压入栈顶</td></tr>
    	<tr><td>0x71</td><td>lrem</td><td>将栈顶两long型数值作取模运算并将结果压入栈顶</td></tr>
    	<tr><td>0x72</td><td>frem</td><td>将栈顶两float型数值作取模运算并将结果压入栈顶</td></tr>
    	<tr><td>0x73</td><td>drem</td><td>将栈顶两double型数值作取模运算并将结果压入栈顶</td></tr>
    	<tr><td>0x74</td><td>ineg</td><td>将栈顶int型数值取负并将结果压入栈顶</td></tr>
    	<tr><td>0x75</td><td>lneg</td><td>将栈顶long型数值取负并将结果压入栈顶</td></tr>
    	<tr><td>0x76</td><td>fneg</td><td>将栈顶float型数值取负并将结果压入栈顶</td></tr>
    	<tr><td>0x77</td><td>dneg</td><td>将栈顶double型数值取负并将结果压入栈顶</td></tr>
    	<tr><td>0x78</td><td>ishl</td><td>将int型数值左移位指定位数并将结果压入栈顶</td></tr>
    	<tr><td>0x79</td><td>lshl</td><td>将long型数值左移位指定位数并将结果压入栈顶</td></tr>
    	<tr><td>0x7A</td><td>ishr</td><td>将int型数值右（有符号）移位指定位数并将结果压入栈顶</td></tr>
    	<tr><td>0x7B</td><td>lshr</td><td>将long型数值右（有符号）移位指定位数并将结果压入栈顶</td></tr>
    	<tr><td>0x7C</td><td>iushr</td><td>将int型数值右（无符号）移位指定位数并将结果压入栈顶</td></tr>
    	<tr><td>0x7D</td><td>lushr</td><td>将long型数值右（无符号）移位指定位数并将结果压入栈顶</td></tr>
    	<tr><td>0x7E</td><td>iand</td><td>将栈顶两int型数值作“按位与”并将结果压入栈顶</td></tr>
    	<tr><td>0x7F</td><td>land</td><td>将栈顶两long型数值作“按位与”并将结果压入栈顶</td></tr>
    	<tr><td>0x80</td><td>ior</td><td>将栈顶两int型数值作“按位或”并将结果压入栈顶</td></tr>
    	<tr><td>0x81</td><td>lor</td><td>将栈顶两long型数值作“按位或”并将结果压入栈顶</td></tr>
    	<tr><td>0x82</td><td>ixor</td><td>将栈顶两int型数值作“按位异或”并将结果压入栈顶</td></tr>
    	<tr><td>0x83</td><td>lxor</td><td>将栈顶两long型数值作“按位异或”并将结果压入栈顶</td></tr>
    	<tr><td>0x84</td><td>iinc</td><td>将指定int型变量增加指定值</td></tr>
    	<tr><td>0x85</td><td>i2l</td><td>将栈顶int型数值强制转换成long型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x86</td><td>i2f</td><td>将栈顶int型数值强制转换成float型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x87</td><td>i2d</td><td>将栈顶int型数值强制转换成double型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x88</td><td>l2i</td><td>将栈顶long型数值强制转换成int型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x89</td><td>l2f</td><td>将栈顶long型数值强制转换成float型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x8A</td><td>l2d</td><td>将栈顶long型数值强制转换成double型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x8B</td><td>f2i</td><td>将栈顶float型数值强制转换成int型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x8C</td><td>f2l</td><td>将栈顶float型数值强制转换成long型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x8D</td><td>f2d</td><td>将栈顶float型数值强制转换成double型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x8E</td><td>d2i</td><td>将栈顶double型数值强制转换成int型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x8F</td><td>d2l</td><td>将栈顶double型数值强制转换成long型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x90</td><td>d2f</td><td>将栈顶double型数值强制转换成float型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x91</td><td>i2b</td><td>将栈顶int型数值强制转换成byte型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x92</td><td>i2c</td><td>将栈顶int型数值强制转换成char型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x93</td><td>i2s</td><td>将栈顶int型数值强制转换成short型数值并将结果压入栈顶</td></tr>
    	<tr><td>0x94</td><td>lcmp</td><td>比较栈顶两long型数值大小，并将结果（1，0，-1）压入栈顶</td></tr>
    	<tr><td>0x95</td><td>fcmpl</td><td>比较栈顶两float型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为“NaN”时，将-1压入栈顶</td></tr>
    	<tr><td>0x96</td><td>fcmpg</td><td>比较栈顶两float型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为“NaN”时，将1压入栈顶</td></tr>
    	<tr><td>0x97</td><td>dcmpl</td><td>比较栈顶两double型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为“NaN”时，将-1压入栈顶</td></tr>
    	<tr><td>0x98</td><td>dcmpg</td><td>比较栈顶两double型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为“NaN”时，将1压入栈顶</td></tr>
    	<tr><td>0x99</td><td>ifeq</td><td>当栈顶int型数值等于0时跳转</td></tr>
    	<tr><td>0x9A</td><td>ifne</td><td>当栈顶int型数值小于0时跳转</td></tr>
    	<tr><td>0x9B</td><td>iflt</td><td>当栈顶int型数值小于0时跳转</td></tr>
    	<tr><td>0x9C</td><td>ifge</td><td>当栈顶int型数值大于等于0时跳转</td></tr>
    	<tr><td>0x9D</td><td>ifgt</td><td>当栈顶int型数值大于0时跳转</td></tr>
    	<tr><td>0x9E</td><td>ifle</td><td>当栈顶int型数值小于等于0时跳转</td></tr>
    	<tr><td>0x9F</td><td>if_icmpeq</td><td>比较栈顶两int型数值大小，当结果等于0时跳转</td></tr>
    	<tr><td>0xA0</td><td>if_icmpne</td><td>比较栈顶两int型数值大小，当结果不等于0时跳转</td></tr>
    	<tr><td>0xA1</td><td>if_icmplt</td><td>比较栈顶两int型数值大小，当结果小于0时跳转</td></tr>
    	<tr><td>0xA2</td><td>if_icmpge</td><td>比较栈顶两int型数值大小，当结果大于等于0时跳转</td></tr>
    	<tr><td>0xA3</td><td>if_icmpgt</td><td>比较栈顶两int型数值大小，当结果大于0时跳转</td></tr>
    	<tr><td>0xA4</td><td>if_icmple</td><td>比较栈顶两int型数值大小，当结果小于等于0时跳转</td></tr>
    	<tr><td>0xA5</td><td>if_acmpeq</td><td>比较栈顶两引用型数值，当结果相等时跳转</td></tr>
    	<tr><td>0xA6</td><td>if_acmpne</td><td>比较栈顶两引用型数值，当结果不相等时跳转</td></tr>
    	<tr><td>0xA7</td><td>goto</td><td>无条件跳转</td></tr>
    	<tr><td>0xA8</td><td>jsr</td><td>跳转至指定16位offset位置，并将jsr下一条指令地址压入栈顶</td></tr>
    	<tr><td>0xA9</td><td>ret</td><td>返回至局部变量指定的index的指令位置（一般与jsr，jsr_w联合使用）</td></tr>
    	<tr><td>0xAA</td><td>tableswitch</td><td>用于switch条件跳转，case值连续（可变长度指令）</td></tr>
    	<tr><td>0xAB</td><td>lookupswitch</td><td>用于switch条件跳转，case值不连续（可变长度指令）</td></tr>
    	<tr><td>0xAC</td><td>ireturn</td><td>从当前方法返回int</td></tr>
    	<tr><td>0xAD</td><td>lreturn</td><td>从当前方法返回long</td></tr>
    	<tr><td>0xAE</td><td>freturn</td><td>从当前方法返回float</td></tr>
    	<tr><td>0xAF</td><td>dreturn</td><td>从当前方法返回double</td></tr>
    	<tr><td>0xB0</td><td>areturn</td><td>从当前方法返回对象引用</td></tr>
    	<tr><td>0xB1</td><td>return</td><td>从当前方法返回void</td></tr>
    	<tr><td>0xB2</td><td>getstatic</td><td>获取指定类的静态域，并将其值压入栈顶</td></tr>
    	<tr><td>0xB3</td><td>putstatic</td><td>为指定的类的静态域赋值</td></tr>
    	<tr><td>0xB4</td><td>getfield</td><td>获取指定类的实例域，并将其值压入栈顶</td></tr>
    	<tr><td>0xB5</td><td>putfield</td><td>为指定的类的实例域赋值</td></tr>
    	<tr><td>0xB6</td><td>invokevirtual</td><td>调用实例方法</td></tr>
    	<tr><td>0xB7</td><td>invokespecial &lt;u2&gt;</td><td>调用父类构造方法，实例初始化方法，私有方法。参数指向被调用方法的符号引用（CONSTANT_Methodref_info）</td></tr>
    	<tr><td>0xB8</td><td>invokestatic</td><td>调用静态方法</td></tr>
    	<tr><td>0xB9</td><td>invokeinterface</td><td>调用接口方法</td></tr>
    	<tr><td>0xBA</td><td>invokedynamic</td><td>调用动态链接方法</td></tr>
    	<tr><td>0xBB</td><td>new</td><td>创建一个对象，并将其引用值压入栈顶</td></tr>
    	<tr><td>0xBC</td><td>newarray</td><td>创建一个指定原始类型（如int、float、char）的数组，并将其引用值压入栈顶</td></tr>
    	<tr><td>0xBD</td><td>anewarray</td><td>创建一个引用型（如类，接口，数组）的数组，并将其引用值压入栈顶</td></tr>
    	<tr><td>0xBE</td><td>arraylength</td><td>获得数组的长度值并压入栈顶</td></tr>
    	<tr><td>0xBF</td><td>athrow</td><td>将栈顶的异常抛出</td></tr>
    	<tr><td>0xC0</td><td>checkcast</td><td>检验类型转换，检验未通过将抛出ClassCastException</td></tr>
    	<tr><td>0xC1</td><td>instanceof</td><td>检验对象是否是指定的类的实例，如果是将1压入栈顶，否则将0压入栈顶</td></tr>
    	<tr><td>0xC2</td><td>monitorenter</td><td>获得对象的monitor，用于同步方法或同步块</td></tr>
    	<tr><td>0xC3</td><td>monitorexit</td><td>释放对象的monitor，用于同步方法或同步块</td></tr>
    	<tr><td>0xC4</td><td>wide</td><td>扩展访问局部变量表的索引宽度</td></tr>
    	<tr><td>0xC5</td><td>multianewarray</td><td>创建指定类型和指定维度的多维数组（执行该指令时，操作栈中必须包含各维度的长度值），并将其引用值压入栈顶</td></tr>
    	<tr><td>0xC6</td><td>ifnull</td><td>为null时跳转</td></tr>
    	<tr><td>0xC7</td><td>ifnonnull</td><td>不为null时跳转</td></tr>
    	<tr><td>0xC8</td><td>goto_w</td><td>无条件跳转（宽索引）</td></tr>
    	<tr><td>0xC9</td><td>jsr_w</td><td>跳转至指定32位地址偏移量位置，并将下一条指令地址压入栈顶</td></tr>
    	<tr><td>0xCA</td><td>breakpoint</td><td>调试时的断点标志</td></tr>
    	<tr><td>0xFE</td><td>impdep1</td><td>用于在特定硬件中使用的语言后门</td></tr>
    	<tr><td>0xFF</td><td>impdep2</td><td>用于在特定硬件中使用的语言后门</td></tr>
    </tbody>
</table>
	