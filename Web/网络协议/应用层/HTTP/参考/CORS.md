# CORS

CORS（Cross-Origin Resource Sharing，跨域资源共享），允许浏览器跨域访问服务器，从而突破AJAX的同源限制。

## 同源策略

同源是指URL的protocal、port、host相同，在非同源的情况下，存在以下限制：
1. Cookie、LocalStorage、IndexDB无法读取
2. 无法读取资源内容
3. 不能发送AJAX

link、script、img、embed、video、audio、object、iframe等嵌入式内容允许跨域，但js无法读取script、iframe的内容。