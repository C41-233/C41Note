# imarcos

```
-imacros <file>
```

将指定头文件包含到每个源文件的开始，在`-include`之前执行。

``` C++
//define.h
#define VALUE 123
```

``` C++
//main.cpp
#include <iostream>

int main(){
    std::cout << VALUE << std::endl;
    return 0;
}
```

```
g++ -imacros define.h main.cc
```

