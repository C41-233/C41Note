# CORS

CORS（Cross-Origin Resource Sharing，跨域资源共享），允许浏览器跨域访问服务器，从而突破AJAX的同源限制。支持跨域访问需要客户端和服务器的支持，目前浏览器都支持。

## 同源策略

同源是指URL的protocal、port、host相同，在非同源的情况下，存在以下限制：
1. Cookie、LocalStorage、IndexDB无法读取
2. 无法读取资源内容
3. 不能发送AJAX

link、script、img、embed、video、audio、object、iframe等嵌入式内容允许跨域，但js无法读取script、iframe的内容。

## 简单请求

满足以下条件的请求属于简单请求：
- 请求方法是HEAD、GET、POST。
- 请求头部仅包含Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type（仅限application/x-www-form-urlencoded、multipart/form-data、text/plain）。

对于简单请求，浏览器直接发出CORS请求，在请求头部中增加`Origin`。

```
GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

Origin表示本次请求来源的域，服务器根据Origin字段决定是否同意跨域请求。无论服务器是否同意跨域请求，都正常返回资源。如果允许跨域返回，需要添加相关CORS响应头部。浏览器根据响应头部是否包含`Access-Control-Allow-Origin`判断服务器是否同意跨域请求。

```
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

## 非简单请求

非简单请求的CORS请求，会在正式发发送请求之前，增加一次HTTP查询请求，称为预检请求（preflight）。

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的AJAX请求，否则就报错。

以下AJAX请求希望以PUT方法发送的请求报文带有自定义头部`X-Custom-Header`，属于非简单请求。

``` Javascript
let url = 'http://api.alice.com/cors';
let xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();
```

浏览器在发送该请求前自动发送预检请求。

```
OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

预检请求的方法必须是OPTIONS，并在`Origin`头部中指定来源的域，通过`Access-Control-Request-Method`指定正式请求的HTTP方法，通过`Access-Control-Request-Headers`指定正式请求发送的请求头部。

随后服务器响应预检请求。

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

浏览器在随后的每次请求中，都应当包含`Origin`请求头部，服务器每次都应当返回`Access-Control-Allow-Origin`响应头部。