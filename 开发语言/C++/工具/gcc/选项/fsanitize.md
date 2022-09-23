# fsanitize

生成Sanitizer相关代码，进行部分错误检查。

https://github.com/google/sanitizers/wiki

会隐式链接libasan库。

```
-fsanitize=<value>
```

## 选项

##### address

开启AddressSanitizer，进行内存错误检查。

##### leak

开启LeakSanitizer，进行内存泄漏检查。
