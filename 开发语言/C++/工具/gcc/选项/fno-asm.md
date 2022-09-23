# fno-asm

```
-fno-asm
```

不把asm、inline、typeof作为关键字，使得代码可以将它们作为标识符。此种情形下，可以使用__asm__、__inline__、__typeof__。

在C++中和C99中，inline是标准关键字，该选项不影响inline关键字的使用。