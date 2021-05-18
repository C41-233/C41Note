# Cookie

Cookie是一段不超过4KB大小的文本数据，在响应报文中由服务端通过`Set-Cookie`响应头部设置，客户端在请求报文中通过`Cookie`请求头部携带。

Cookie的名称不能包含`( ) < > @ , ; : \ " /  [ ] ? = { }.`以及制表符、空格和控制字符。

Cookie的值不能包含`" , ; \`以及空格和控制字符。

## Cookie选项

##### Comment=\<comment\>

注释。

##### Domain=\<domain\>

可以读取该Cookie的域，必须以.开头，尾部匹配。

默认情况下，Domain是当前资源访问地址中的主机部分。

```
Domain=somecompany.co.uk
```

##### Expires=\<date\>

Cookie的有效时间。

没有设置Expires的Cookie的生命周期为会话，即不会被存储。

```
Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

##### HttpOnly

禁止客户端脚本读取该Cookie。

##### Max-Age=\<seconds\>

Cookie的生存时间，单位为秒。如果为0，则该Cookie立即过期。

##### Path=\<path\>

指定访问时需要发送该Cookie的资源路径，必须以/开头，头部匹配。访问不匹配的资源不会发送该Cookie。

##### SameSite=\<value\>

Cookie的同源策略。

- Lax：Cookie允许在同源中发送，并允许在第三方网站发起的GET请求时一起发送（默认）
- Strict：Cookie只能在同源中发送。
- None：Cookie允许在所有上下文中发送。

设置SameSite=None的Cookie，必须同时指定Secure。

##### Secure

仅当采用HTTPS时才发送该Cookie。

##### Version=\<version\>

Cookie版本，0表示通用Netscape规范，1表示标准RFC2109规范。