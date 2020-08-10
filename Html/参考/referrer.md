#referrer

表示获取目标文档时如何发送referrer头部。

##### no-referrer

不发送 Referer首部。

##### no-referrer-when-downgrade

向不受 TLS (HTTPS) 保护的 origin 发送请求时，不发送Referer 首部。

##### origin

referrer首部中仅包含来源页面的源。换言之，仅包含来源页面的 scheme, host, 以及 port。

##### origin-when-cross-origin

发起跨域请求时，仅在referrer中包含来源页面的源。发起同源请求时，仍然会在 referrer中包含来源页面在服务器上的路径信息。

##### same-origin

对于同源请求，发送referrer首部，否则不发送。

##### strict-origin

仅当被请求页面和来源页面具有相同的协议安全等级时才发送referrer首部（比如从采用HTTPS 协议的页面请求另一个采用 HTTPS 协议的页面）。如果被请求页面的协议安全等级较低，则不会发送referrer 首部（比如从采用 HTTPS 协议的页面请求采用 HTTP 协议的页面）。

##### strict-origin-when-cross-origin

当发起同源请求时，在referrer首部中包含完整的 URL。当被请求页面与来源页面不同源但是有相同协议安全等级时（比如 HTTPS→HTTPS），在referrer 首部中仅包含来源页面的源。当被请求页面的协议安全等级较低时（比如 HTTPS→HTTP），不发送referrer首部。

##### unsafe-url

始终在referrer首部中包含源以及路径（但不包括fragment、密码、用户名）。这个值是不安全的，因为这样做会暴露受TLS保护的资源的源和路径信息。
