# multipart/form-data

POST提交表单时包含上传文件时使用该格式，请求头部需指定`Content-Type:multipart/form-data;boundary=<boundary>`。其中boundary是自定义定界符，实际使用时定界符前还会添加额外的`--`。

POST主体格式第一行和最后一行均为定界符，每一个参数之间用定界符分隔。参数本身可以带有头部信息，其中Content-Disposition描述参数元信息，参数值与头部空一行。

```
--<boundary>
Content-Disposition: form-data; name=<name>; filename=<filename> 

<data>
--<boundary>
```

```
POST http://removed/ HTTP/1.1
Content-Type: multipart/form-data; boundary=-------------------------8cf5a569f9a4d4a
Host: removed
Content-Length: 15600
Expect: 100-continue
Proxy-Connection: Keep-Alive

---------------------------8cf5a569f9a4d4a
Content-Disposition: form-data; name="realname"

james
---------------------------8cf5a569f9a4d4a
Content-Disposition: form-data; name="username"

jrb1978
---------------------------8cf5a569f9a4d4a
Content-Disposition: form-data; name="password"

password
---------------------------8cf5a569f9a4d4a
Content-Disposition: form-data; name="public"

0
---------------------------8cf5a569f9a4d4a
Content-Disposition: form-data; name="group"

0
---------------------------8cf5a569f9a4d4a
Content-Disposition: form-data; name="avatar"; filename="Untitled.png"
Content-Type: image/png

<?PNG>
---------------------------8cf5a569f9a4d4a
```