# ldd

输出依赖的动态库。

## 语法
```
ldd <file>...
```

## 示例

```
> ldd a.out
linux-vdso.so.1 (0x00007ffffb27e000)
libstdc++.so.6 => /lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007f5b7b380000)
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f5b7b150000)
libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f5b7b060000)
/lib64/ld-linux-x86-64.so.2 (0x00007f5b7b5d1000)
libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007f5b7b040000)
```


