# SLIP

Serial Line Internet Protocol

串行线路网际协议

SLIP是一个在串行线路上对IP分组进行封装的简单的面向字符的协议，用以使用户通过电话线和调制解调器接入Internet 。

SLIP具有以下缺点：
- 没有校验字段，不提供差错检测的功能。当SLIP帧在传输中出差错时 ，只能靠上层协议来进行纠正。
- 通信双方必须事先知道对方的IP地址，SLIP不能将IP地址提供给对方。这对没有固定IP地址的拨号入网的用户来说是不方便的。
- SLIP帧中无协议类型字段，因此仅支持IP协议，而不支持其他的协议。