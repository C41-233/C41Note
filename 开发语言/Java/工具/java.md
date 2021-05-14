# java

执行java class文件。

## 格式
`java [options] class [args...]`

`java [options] -jar jarfile [args...]`

## 选项
- `-classpath <path>`   同`-cp`。
- `-client`	客户端模式（32位默认）。
- `-cp <path>`	类文件搜索路径。用`;`分隔目录、jar文件、zip文件。
- `-d32`	使用32位数据模型。
- `-d64`	使用64位数据模型。
- `-D<property>=<value>`	设置系统属性。
- `-javaagent:<agentjar>[=<args>]`	javaagent。
- `-server`	服务器模式（64位默认）。
- `-showversion`	版本与帮助信息。
- `-splash:<path>`	使用指定图像作为启动图像。
- `-verbose:gc`	输出垃圾回收信息。
- `-version`	版本信息。

## 非标准选项
- `-X`		输出所有非标准选项
- `-Xbatch`		关闭后台编译
- `-Xcheck <value>`	检查项
    - `jni`：执行JNI函数检查
- `-Xcomp`		采用编译模式
- `-Xfuture`		执行严格代码检查
- `-Xincgc`		启用增量式垃圾回收
- `-Xint`		仅解释模式执行，不进行JIT编译
- `-Xmixed`		解释模式和编译模式混合执行（默认）
- `-Xmn	<size>`	设置JVM Young大小
- `-Xms	<size>`	设置JVM初始化堆内存大小
- `-Xmx	<size>`	设置JVM最大的堆内存大小
- `-Xnoclassgc`		关闭对Class的垃圾回收
- `-Xprof`		输出CPU概要数据
- `-Xrs`		通过VM减少OS信号的实用
- `-Xshare <value>`	类共享设置。
    - `auto`：自动类共享 
    - `on`：开启类共享 
    - `off`：关闭类共享
- `-Xss	<size>`	设置JVM栈内存大小
- `-Xverify	<value>` 字节码验证设置。  
    - `none`：不进行字节码验证

## 不稳定选项
不稳定选项都以`-XX:`开头，以`-XX<option>=<value>`设置值。

bool类型的选项以`-XX:+<option>`开启，以`-XX:-<option>`关闭。

size类型的选项在数字后可以包含M、K、G（不区分大小写）作为单位。

##### JVM
<table>
	<tr>
		<td>FailOverToOldVerifier</td>
		<td>bool</td>
		<td>字节码类型检验失败时进行旧的类型推导方式进行校验（默认关闭）</td>
	</tr>
	<tr>
		<td>PrintCommandLineFlags</td>
		<td>bool</td>
		<td>输出虚拟机启动时的所有参数</td>
	</tr>
	<tr>
		<td>PrintFlagsFinal</td>
		<td>bool</td>
		<td>输出虚拟机默认值</td>
	</tr>
	<tr>
		<td>PrintFlagsInitial</td>
		<td>bool</td>
		<td>输出虚拟机初始默认值</td>
	</tr>
	<tr>
		<td>TraceClassLoading</td>
		<td>bool</td>
		<td>跟踪类加载</td>
	</tr>
	<tr>
		<td>TraceClassUnLoading</td>
		<td>bool</td>
		<td>跟踪类卸载</td>
	</tr>
	<tr>
		<td>UnlockDiagnosticVMOptions</td>
		<td>bool</td>
		<td>开启虚拟机诊断模式，允许虚拟机调试参数（默认关闭）</td>
	</tr>
	<tr>
		<td>UseSplitVerifier</td>
		<td>bool</td>
		<td>使用StackMapTable验证（默认开启）</td>
	</tr>
</table>

##### JIT
<table>
	<tr>
		<td>BackgroundCompilation</td>
		<td>bool</td>
		<td>JIT编译是否在后台进行（默认开启）</td>
	</tr>
	<tr>
		<td>CICompilerCount</td>
		<td>int</td>
		<td>JIT最大并发编译数</td>
	</tr>
	<tr>
		<td>CompileCommand</td>
		<td>string</td>
		<td>编译选项</td>
	</tr>
	<tr>
		<td>CompileThreshold</td>
		<td>int</td>
		<td>方法被调用n次后进行JIT编译<br/>client模式下默认为1500，server模式下默认为10000</td>
	</tr>
	<tr>
		<td>CounterHalfLifeTime</td>
		<td>int</td>
		<td>JIT热度半衰周期（秒）</td>
	</tr>
	<tr>
		<td>DoEscapeAnalysis</td>
		<td>bool</td>
		<td>开启逃逸分析优化</td>
	</tr>
	<tr>
		<td>EliminateAllocations</td>
		<td>bool</td>
		<td>开启标量替换优化</td>
	</tr>
	<tr>
		<td>EliminateLocks</td>
		<td>bool</td>
		<td>开启同步消除优化</td>
	</tr>
	<tr>
		<td>PrintEliminateAllocations</td>
		<td>bool</td>
		<td>输出标量替换优化结果</td>
	</tr>
	<tr>
		<td>PrintAssembly</td>
		<td>bool</td>
		<td>将动态生成的本地代码还原为汇编代码输出</td>
	</tr>
	<tr>
		<td>PrintCompilation</td>
		<td>bool</td>
		<td>在JIT编译时将被编译成本地代码的方法名输出</td>
	</tr>
	<tr>
		<td>PrintEscapeAnalysis</td>
		<td>bool</td>
		<td>输出逃逸分析优化结果</td>
	</tr>
	<tr>
		<td>PrintInlining</td>
		<td>bool</td>
		<td>输出内联方法信息</td>
	</tr>
	<tr>
		<td>PrintLIR</td>
		<td>bool</td>
		<td>输出中间代码（client模式）</td>
	</tr>
	<tr>
		<td>PrintOptoAssembly</td>
		<td>bool</td>
		<td>输出中间代码（server模式）</td>
	</tr>
	<tr>
		<td>OnStackReplacePercentage</td>
		<td>int</td>
		<td>OSR比率<br/>client模式默认为933，server模式默认为140</td>
	</tr>
	<tr>
		<td>UseCounterDecay</td>
		<td>bool</td>
		<td>是否开启JIT热度衰减。即当超过一定时间限度，如果方法的调用次数仍然不足以让它提交给即使编译器，则调用计数器次数减半（默认开启）</td>
	</tr>
</table>

##### 内存布局
<table>
	<tr>
		<td>FieldAllocationStyle</td>
		<td>int</td>
		<td>0：对象引用在对象内存布局最前
		<br/>1：对象引用在对象内存布局最后（默认）</td>
	</tr>
	<tr>
		<td>UseCompressedOOPS</td>
		<td>bool</td>
		<td>开启指针压缩（JVM小于32GB下默认开启）</td>
	</tr>
</table>

##### 多线程
<table>
	<tr>
		<td>PreBlockSpin</td>
		<td>int</td>
		<td>自旋锁尝试次数（默认为10）</td>
	</tr>
	<tr>
		<td>UseSpinning</td>
		<td>bool</td>
		<td>开启自旋锁（默认开启）</td>
	</tr>
</table>

##### GC分代
<table>
	<tr>
		<td>AlwaysTenure</td>
		<td>bool</td>
		<td>所有对象在第一次GC时进入Old区</td>
	</tr>
	<tr>
		<td>InitialTenuringThreshold</td>
		<td>int</td>
		<td>初始时对象经过n次Minor GC后进入Old区</td>
	</tr>
	<tr>
		<td>MaxTenuringThreshold</td>
		<td>int</td>
		<td>对象最多经过n次Minor GC后进入Old区（默认为15）</td>
	</tr>
	<tr>
		<td>PretenureSizeThreshold</td>
		<td>size</td>
		<td>新建对象超过指定大小时直接进入Old</td>
	</tr>
	<tr>
		<td>NeverTenure</td>
		<td>bool</td>
		<td>对象永远不会进入Old区</td>
	</tr>
	<tr>
		<td>PrintTenuringDistribution</td>
		<td>bool</td>
		<td>在Young区GC时输出Young中对象年代分布</td>
	</tr>
</table>

##### 堆
<table>
	<tr>
		<td>HandlePromotionFailure</td>
		<td>bool</td>
		<td>允许分配担保失败，即Old区的剩余空间不足以应对新生代整个Eden和Servivor区所有对象都存活的极端情况<br/>JDK1.5-默认关闭，JDK1.6+默认开启</td>
	</tr>
	<tr>
		<td>HeapDumpOnOutOfMemoryError</td>
		<td>bool</td>
		<td>当发生OOM时进行dump</td>
	</tr>
	<tr>
		<td>HeapDumpPath</td>
		<td>filepath</td>
		<td>dump目录</td>
	</tr>
	<tr>
		<td>InitialSurvivorRatio</td>
		<td>int</td>
		<td>Young/S0比例</td>
	</tr>
	<tr>
		<td>MaxDirectMemorySize</td>
		<td>size</td>
		<td>DirectBuffer最大大小</td>
	</tr>
	<tr>
		<td>MaxHeapFreeRatio</td>
		<td>int</td>
		<td>当空闲堆内存占堆内存百分比高于n%时，减少堆内存空间</td>
	</tr>
	<tr>
		<td>MaxNewSize</td>
		<td>size</td>
		<td>Young最大大小</td>
	</tr>
	<tr>
		<td>MaxPermSize</td>
		<td>size</td>
		<td>PermGen最大大小</td>
	</tr>
	<tr>
		<td>MinHeapFreeRatio</td>
		<td>int</td>
		<td>当空闲堆内存占堆内存百分比低于n%时，扩张堆内存空间</td>
	</tr>
	<tr>
		<td>NewRatio</td>
		<td>int</td>
		<td>Old/Young比例</td>
	</tr>
	<tr>
		<td>NewSize</td>
		<td>size</td>
		<td>Young初始大小</td>
	</tr>
	<tr>
		<td>PermSize</td>
		<td>size</td>
		<td>PermGen初始大小</td>
	</tr>
	<tr>
		<td>ReservedCodeCacheSize</td>
		<td>size</td>
		<td>设置代码缓存大小</td>
	</tr>
	<tr>
		<td>StringTableSize</td>
		<td>int</td>
		<td>String常量池Hash Table的大小</td>
	</tr>
	<tr>
		<td>SurvivorRatio</td>
		<td>int</td>
		<td>Eden/S0比例（默认为8）</td>
	</tr>
	<tr>
		<td>UseAdaptiveSizePolicy</td>
		<td>bool</td>
		<td>动态调整Java堆中各区域大小以及进入Old区的对象年龄（默认开启）</td>
	</tr>
</table>

##### GC
<table>
	<tr>
		<td>CMSClassUnloadingEnabled</td>
		<td>bool</td>
		<td>CMS GC时回收Class信息</td>
	</tr>
	<tr>
		<td>CMSFullGCsBeforeCompaction</td>
		<td>int</td>
		<td>CMS GC n次后进行内存碎片整理（默认为0）</td>
	</tr>
	<tr>
		<td>CMSIncrementalMode</td>
		<td>bool</td>
		<td>启用增量CMS GC</td>
	</tr>
	<tr>
		<td>CMSInitiatingOccupancyFraction</td>
		<td>int</td>
		<td>Perm空间达到n%时触发CMS GC（默认为92）</td>
	</tr>
	<tr>
		<td>CMSInitiatingPermOccupancyFraction</td>
		<td>int</td>
		<td>Perm空间达到n%时启用CMS GC（默认为92）</td>
	</tr>
	<tr>
		<td>CMSPermGenSweepingEnabled</td>
		<td>bool</td>
		<td>CMS GC时清除Perm区</td>
	</tr>
	<tr>
		<td>CMSScavengeBeforeRemark</td>
		<td>bool</td>
		<td>CMS GC发生remark前先进行一次Minor GC</td>
	</tr>
	<tr>
		<td>DisableExplicitGC</td>
		<td>bool</td>
		<td>关闭显式GC（默认关闭）</td>
	</tr>
	<tr>
		<td>ExplicitGCInvokesConcurrent</td>
		<td>bool</td>
		<td>显式GC时启用CMS</td>
	</tr>
	<tr>
		<td>ExplicitGCInvokesConcurrentAndUnloadsClasses</td>
		<td>bool</td>
		<td>显式GC时启用CMS并回收Class</td>
	</tr>
	<tr>
		<td>G1ReservePercent</td>
		<td>int</td>
		<td>G1 GC保留堆内存百分比（默认为10）</td>
	</tr>
	<tr>
		<td>GCTimeRatio</td>
		<td>int</td>
		<td>Paralle Scavenge GC工作线程运行时间占总时间的比率（默认为99）</td>
	</tr>
	<tr>
		<td>InitiatingHeapOccupancyPercent</td>
		<td>int</td>
		<td>CMS GC堆内存占用百分比（默认为45）</td>
	</tr>
	<tr>
		<td>MaxGCPauseMillis</td>
		<td>int</td>
		<td>Parallel Scavenge GC过程的最大暂停时间（毫秒，默认为200）
		<br/>以牺牲吞吐量和新生代空间来减少暂停时间</td>
	</tr>
	<tr>
		<td>ParallelCMSThreads</td>
		<td>int</td>
		<td>并行CMS线程数（默认与CPU数相同）</td>
	</tr>
	<tr>
		<td>ParallelGCThreads&lt;n&gt;</td>
		<td>int</td>
		<td>并行GC线程数（默认与CPU数相同，但不超过8）</td>
	</tr>
	<tr>
		<td>PrintGCApplicationStoppedTime</td>
		<td>bool</td>
		<td>输出垃圾回收期间程序暂停的时间</td>
	</tr>
	<tr>
		<td>PrintGCDetails</td>
		<td>bool</td>
		<td>输出垃圾回收信息</td>
	</tr>
	<tr>
		<td>PrintGCDateStamps</td>
		<td>bool</td>
		<td>输出垃圾回收信息的时间</td>
	</tr>
	<tr>
		<td>PrintReferenceGC</td>
		<td>bool</td>
		<td>输出垃圾回收时的引用</td>
	</tr>
	<tr>
		<td>UseCMSCompactAtFullCollection</td>
		<td>bool</td>
		<td>CMS GC后进行内存碎片整理（默认开启）</td>
	</tr>
	<tr>
		<td>UseCMSInitiatingOccupancyOnly</td>
		<td>bool</td>
		<td>仅按照设置的比例使用CMS，不要自动调整</td>
	</tr>
	<tr>
		<td>UseConcMarkSweepGC</td>
		<td>bool</td>
		<td>开启ParNew和CMS/Serial Old GC，Serial Old在CMS出现Concurrent Mode Failure时触发（默认关闭）</td>
	</tr>
	<tr>
		<td>UseG1GC</td>
		<td>bool</td>
		<td>开启G1 GC</td>
	</tr>
	<tr>
		<td>UseGCOverheadLimit</td>
		<td>bool</td>
		<td>当GC时间过大时产生OOM（默认）</td>
	</tr>
	<tr>
		<td>UseParallelGC</td>
		<td>bool</td>
		<td>开启Parallel Scavenge和Serial Old GC（server模式默认）</td>
	</tr>
	<tr>
		<td>UseParallelOldGC</td>
		<td>bool</td>
		<td>开启Parallel Scavenge和Parallel Old GC（默认关闭）</td>
	</tr>
	<tr>
		<td>UserParNewGC</td>
		<td>bool</td>
		<td>开启ParNew和Serial Old GC（默认关闭）</td>
	</tr>
	<tr>
		<td>UseSerialGC</td>
		<td>bool</td>
		<td>开启Serial和Serial Old GC（client模式默认）</td>
	</tr>
</table>

## 说明

##### 客户端模式
32位模式下默认选项，使用Serial和Serial Old GC，C1即时编译器。

##### 服务器模式
64位模式下默认选项，使用Parallel Scavenge和Serial Old GC ，C2即时编译器。

