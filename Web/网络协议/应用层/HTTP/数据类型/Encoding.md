# Encoding

编码格式，用于`Accept-Encoding`、` Content-Encoding`、`Transfer-Encoding`等首部。

##### br

Brotli压缩。

##### chunked

数据以一系列分块的形式进行发送。`Content-Length`头部在这种情况下不被发送。在每一个分块的开头需要添加当前分块的长度，以十六进制的形式表示，后面紧跟着`\r\n`，之后是分块数据本身，最后也以'\r\n'结尾。终止块是一个常规的分块，不同之处在于其长度为0。终止块后面是一个挂载（trailer），由一系列（或者为空）的实体消息首部构成。

##### compress

UNIX档案压缩格式，采用LZW压缩算法。

##### deflate

采用zlib结构和deflate压缩算法。

##### gzip

gzip压缩，采用LZ77压缩算法。

##### identity

不进行编码。

#### trailers

在采用分块传输编码的响应中使用挂载字段。