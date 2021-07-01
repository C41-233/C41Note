# openssl

```
openssl pkcs12 -export -out <file.pfx> -inkey <file.key> -in <file.crt>
```  

根据.crt和.key文件生成.pfx，运行后输入密码。

```
openssl pkcs12 -export -out <file.pfx> -inkey <file.key> -in <file.crt> -password pass:<pwd>
```  

根据.crt和.key文件生成.pfx，命令行参数提供密码。

```
openssl 
```