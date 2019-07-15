# 标量函数 - 字符串

## CONCAT	

`CHAR CONCAT(CHAR strings...)`	

字符串合并。

## INET_ATON

`INTEGER INET_ATON(CHAR IP)`	

返回IP地址的数字表示。

## INET_NTOA

`CHAR INET_NTOA(INTEGER IP)`	

返回IP地址的字符串表示。

## INSERT	

`CHAR INSERT(CHAR str, INTEGER x, INTEGER y, CHAR instr)`

将字符串str从位置x开始y个在字符长的子串替换为instr。

## LEFT	

`CHAR LEFT(CHAR string, INTEGER num)	`

返回一个字符串前若干个字符。

## LENGTH	

`INTEGER LENGTH(CHAR string)`	

获得字符串长度。

## LOWER	

`CHAR LOWER(CHAR string)	`

返回字符串的小写形式。

## LPAD	

`CHAR LPAD(CHAR str, INTEGER n, CHAR pad)`	

用字符串pad对str左侧填补，直到str长度达到n。

## LTRIM	
`CHAR LTRIM(CHAR string)`	

去掉左侧空白。

## MD5		
`CHAR MD5(CHAR str)`	

返回字符串str的MD5。

## PASSWORD		
`CHAR PASSWORD(CHAR str)`	

返回字符串str的加密版本。

## REPEAT		
`CHAR REPEAT(CHAR str, INTEGER x)`	

重复str字符串x次。

## REPLACE		
`CHAR REPLACE(CHAR string, CHAR old, CHAR new)`	

字符串替换。

## RIGHT		
`CHAR RIGHT(CHAR string, INTEGER n)`	

截取字符串右边n个字符。

## RPAD		
`CHAR RPAD(CHAR str, INTEGER n, CHAR pad)`	

用字符串pad对str右侧填补，直到str长度达到n。

## RTRIM		
`CHAR RTRIM(CHAR string)`	

去掉右侧空白。

## STRCMP		
`INTEGER STRCMP(CHAR s1, CHAR s2)`	

字符串比较。

## SUBSTR		
`CHAR SUBSTR(CHAR value, INTEGER offset, INTEGER length)`	

获得字符串的子串。

## SUBSTRING		
`CHAR SUBSTRING(CHAR value, INTEGER offset, INTEGER length)`	

获得字符串的子串。

## TRIM		
`CHAR TRIM(CHAR string)`	

去掉字符串两侧空白。

## UPPER		
`CHAR UPPER(CHAR string)`	

返回字符串的大写形式。

## UCASE		
`CHAR UCASE(CHAR string)`	

返回字符串的大写形式。