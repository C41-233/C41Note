# ansi

```
-ansi
```

严格按照ANSI C的语法，禁用GNU C的特性（如asm、typeof关键字）。

对于C，等价于`-std=c90`，并隐式包含`-fno-asm`选项。对于C++，等价于`-std=c++98`。

当启用`-ansi`选项时，会提供`__STRICT_ANSI__ `预定义宏。