# Date

Date对象用于处理日期和时间，基于Unix时间戳，单位为毫秒。

当日期时间部分设置的值超过范围后，按照溢出的值自动进位。

## 继承

[Object](Object.md) / Date

## 对象函数

| 函数 | 描述 |
|---|---|
| now | 返回当前时间戳 |
| parse | 解析字符串返回时间戳 |
| UTC | 以UTC时间提供字段返回时间戳 |

## 原型函数

##### 基本功能

| 函数 | 描述 |
|---|---|
| getTime | 获取时间戳 |
| getTimezoneOffset | 获取UTC相对于当前时区的差值，单位为分钟 |
| setTime | 设置时间戳 |
| toDateString | 返回日期部分的字符串描述 |
| toISOString | 返回日期时间的ISO表示 |
| toJSON | 返回JSON格式的字符串 |
| toLocaleDateString | 返回地区相关日期部分的字符串描述 |
| toLocaleTimeString | 返回地区相关的时间部分的字符串描述 |
| toTimeString | 返回时间部分的字符串描述 |
| toUTCString | 返回UTC日期时间的字符串描述 |
| @@toPrimitive | 转换到基本类似 |

##### Local日期时间

| 函数 | 描述 |
|---|---|
| getDate | 获取日期 |
| getDay | 获取星期，0表示周日 |
| getFullYear | 获取年份 |
| getHours | 获取小时 |
| getMilliseconds | 获取毫秒 |
| getMinutes | 获取分钟 |
| getMonth | 获取月份，0表示一月 |
| getSeconds | 获取秒钟 |
| setDate | 设置日期 |
| setFullYear | 设置年份 |
| setHours | 设置小时 |
| setMilliseconds | 设置毫秒 |
| setMinutes | 设置分钟 |
| setMonth | 设置月份，0表示一月 |
| setSeconds | 设置秒数 |

##### UTC日期时间

| 函数 | 描述 |
|---|---|
| getUTCDate | 获取UTC日期 | 
| getUTCDay | 获取UTC星期，0表示周日 |
| getUTCFullYear | 获取UTC年份 |
| getUTCHours | 获取UTC小时 |
| getUTCMilliseconds | 获取UTC毫秒 |
| getUTCMinutes | 获取UTC分钟 |
| getUTCMonth | 获取UTC月份，0表示一月 |
| getUTCSeconds | 获取UTC秒数 |
| setUTCDate | 设置UTC日期 |
| setUTCFullYear | 设置UTC年份 |
| setUTCHours | 设置UTC小时 |
| setUTCMilliseconds | 设置UTC毫秒 |
| setUTCMinutes | 设置UTC分钟 |
| setUTCMonth | 设置UTC月份，0表示一月 |
| setUTCSeconds | 设置UTC秒钟 |

## 构造函数

```
[new] Date()
```

基于当前日期时间创建Date。

```
[new] Date(number timestamp)
```

基于Unix时间戳创建Date，单位为毫秒。

```
[new] Date(string value)
```

基于日期时间字符串创建Date。

```
[new] Date(year, month, day=1, hours=0, minutes=0, seconds=0, milliseconds=0)
```

基于日期时间创建Date。

- year 年份，0-99被映射为1900-1999，其他值表示实际年份。
- month 月份，0（1月）-11（12月）。
- date 一个月的第几日，从1开始。
- hours 小时，24小时制，从0开始。
- minutes 分钟，从0开始。
- seconds 秒钟，从0开始。
- milliseconds 毫秒，从0开始。