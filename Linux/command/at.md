# at
在一个指定的时间执行一个指定任务，只能执行一次，且需要开启atd进程。

不提供-f参数时从标准输入读入，以`ctrl+d`结束。

## 语法
`at [options] [time]`

## 参数
- `-f <filename>` 从指定文件读入任务而不是从标准输入读入

## time格式
`time`表示任务启动的时间，允许的格式有：

格式 | 示例
---|---
HH:MM | 04:00
HH:MM YYYY-MM-DD | 04:00 2009-03-17
HH:MM[am&#124;pm] [Month] [Date] | 04pm March 17
HH:MM[am&#124;pm] + number [minutes&#124;hours&#124;days&#124;weeks] | now + 5 minutes<br/>04pm + 3 days

## 示例
`at -f work 16 +3 days `  
在3天后的下午4点执行文件work中的作业。
