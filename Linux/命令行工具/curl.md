# curl
curl用于向服务器传输数据，通常用于Http请求。

## 语法
`curl [<options>] [<urls>]`

### 参数

- `--help` 显示帮助信息。

## Http
### 参数
- `-0` 等价于`--http1.0`。

- `-b <cookies>` 等价于`--cookie <cookies>`。
- `-c <filename>` 等价于`--cookie-jar <filename>`。 
- `-d <data>` 等价于`--data`。

- `-A <user-agent>` 等价于`--user-agent`。
- `-F <data>` 等价于`--form`。
- `-G` 等价于`--get`。
- `-H <header>` 等价于`--head`。
- `-I` 等价于`--head`。
- `-X <method>` 等价于`--request`。

- `--cookie <cookies>` 设置Http cookie。  
    - 直接设置cookie的格式为`<name1>=<value1>;<name2>=<value2>...`。  
    - 指定cookie文件的格式为`<filename>`。

- `--cookie-jar <filename>` 指定Http响应cookie的输出文件，`-`表示标准输出。

- `--data <data>` 设置Http的body，可以设置多个。  
如果没有指定`--request`，指定该参数会按照`POST application/x-www-form-urlencoded`的格式依次合并。
    - 直接指定参数，格式为`<name>=<value>`。   
    - 参数从文件读取，格式为`<name>=@<filename>`。

- `--form <data>` 设置Http的body，可以设置多个。  
指定该参数会按照`POST multipart/form-data`的格式依次合并。   
    - 直接指定参数，格式为`<name>=<value>`。   
    - 指定参数从文件读取，格式为`<name>=<<filename>`。  
    - 上传文件，格式为`<name>=@<filename>`。

- `--head <header>` 设置Http header，可以设置多个。  
    - 增加header，格式为`<name>:<value>`。
    - 删除自动加上的header，格式为`<name>:`。
    - 增加空的header，格式为`<name>;`。

- `--http1.0` 指定为Http 1.0。

- `--http1.1` 指定为Http 1.1。

- `--http2` 指定为Http 2。

- `--get` 以Http GET的方式请求，参数`-d`、`--data`、`--data-binary`、`--data-urlencoded`以`GET urlencoded`的形式编码。

- `--head` 以Http HEAD的方式请求。

- `--request <method>` 设置Http method，默认为GET。

- `--user-agent <user-agent>` 设置Http user-agent。

### 示例
```Shell
curl -XPOST http://myurl.com 
-H "Content-type: application/json" 
-d '{"id": "12345", "name": "test"}'
```
Http Post指定content-type。
