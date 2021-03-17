# NAPT

Network Address Port Translation

网络端口地址转换

NAPT将多个内部地址映射为一个合法公网地址。与NAT不同，NAPT将不同的协议端口号与不同的内部地址相对应，也就是在`<内部地址+内部端口>`与`<外部地址+外部端口>`之间转换。

NAPT仅限于TCP和UDP。