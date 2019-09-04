# 系统变量

> `system-variable`  
**@@**[{**SESSION** | **GLOBAL** | **LOCAL**}**.**] *variable-name*

系统变量由MySQL引入和初始化。

可以指定系统变量的作用域。

- SESSION	（默认）会话系统变量，只适用于当前会话。被改变的会话系统变量只作用于当前会话。
- GLOBAL	全局系统变量，在MySQL启动时初始化，并且应用于每个启动的会话。
- LOCAL	
可以通过SET语句修改可写的系统变量的值。

为了与其它SQL产品保持一致，某些系统变量必须省略@@。