# jstat

虚拟机统计信息监视工具。用于监视虚拟机各种运行状态，可以显示本地或者远程虚拟机进程中的类装载、内存、垃圾收集、JIT编译等运行数据。

## 格式

```
jstat {-help | -options}
jstat -<option> [-t] [-h<lines>] <vmid> [<interval> [<count>]]
```

## <option>

##### `class` 

类加载统计。

- Loaded 加载class的数量
- Bytes 所占用空间大小
- Unloaded 未加载数量
- Bytes 未加载占用空间
- Time 时间

##### `compiler`
编译统计。

- Compiled 编译数量
- Failed 失败数量
- Invalid 不可用数量
- Time 时间
- FailedType 失败类型
- FailedMethod 失败的方法

##### `printcompilation`
编译统计。

- Compiled 最近编译方法的数量
- Size 最近编译方法的字节码数量
- Type 最近编译方法的编译类型
- Method 方法名标识

##### `gc`
垃圾回收统计。

##### `gccapacity`

堆内存统计。

##### `gcnew`

新生代垃圾回收统计。

##### `gcnewcapacity`

新生代内存统计。

##### `gcold`

老年代垃圾回收统计。

##### `gcoldcapacity`

老年代内存统计。

##### `gcmetacapacity`

元数据空间统计。

##### `gcutil`

垃圾回收总统计。

- Survivor区
    - S0C S0的大小
    - S1C S1的大小
    - S0U S0的使用大小
    - S1U S1的使用大小
    - DSS 期望的Survivor区大小
- Eden区
    - EC Eden的大小
    - EU Eden的使用大小
    - E Eden区使用比例
- 新生代
    - NGC 当前新生代容量
    - NGCMN 新生代最小容量
    - NGCMX 新生代最大容量
    - YGC 新生代gc次数
    - YGCT 新生代垃圾回收消耗时间
    - TT 对象在新生代存活的次数
    - MTT 对象在新生代存活的最大次数
- 老年代
    - OC 老年代大小
    - OU 老年代使用大小
    - OGCMN 老年代最小容量
    - OGCMX 老年代最大容量
    - OGC 当前老年代大小
    - OC 当前老年代大小
    - FGC 老年代垃圾回收次数
    - FGCT 老年代垃圾回收消耗时间
    - O 老年代使用比例
- 压缩类空间
    - CCSC 压缩类空间大小
    - CCSU 压缩类空间使用大小
    - CCSMN 最小压缩类空间大小
    - CCSMX 最大压缩类空间大小
    - CCSC 当前压缩类空间大小
    - CCS 压缩使用比例
- 元数据区
    - MCMN 最小元数据容量
    - MCMX 最大元数据容量
    - MC 当前元数据空间大小
    - M 元数据区使用比例
- 其他
    - GCT 垃圾回收消耗总时间

## 示例

`jstat -gcutil 16418 1000 10`  
每秒查询一次进程16418的垃圾收集情况，一共查询10次。