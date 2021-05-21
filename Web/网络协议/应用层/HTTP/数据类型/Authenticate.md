# Authenticate

HTTP身份验证机制，在`Authorization`、`Proxy-Authenticate`、`Proxy-Authorization`等头部中使用。

支持验证类型包括：
- Basic：RFC7617
- Bearer：RFC6750
- Digest：RFC7616	
- HOBA：RFC7486
- Mutual：RFC8120	
- Negotiate：RFC4559
- OAuth：RFC5849
- SCRAM-SHA-1：RFC7804	
- SCRAM-SHA-256：RFC7804
- vapid：RFC8292

常见的验证类型是基本验证（Basic），对应的验证信息是`Base64(username:password)`。