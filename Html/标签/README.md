# HTML标签

对称标签是必须<tag>和</tag>成对出现的标签，即使没有body内容也不能写成<tag/>的形式。

空白标签在HTML中以<tag>的形式单独出现，在XHTML中以<tag/>的形式出现。

属性如果是bool数据类型，HTML中可以按照<tag attr>的形式出现，XHTML中以<tag attr="attr">的形式出现。

#### 1、主体
- [html](html.md)	文档根元素
- [head](head.md)	HTML文档头部
- [body](body.md)	HTML文档主体
- [meta](meta.md)	提供有关页面的元信息
- [titla](title.md)	文档的标题

#### 2、块级标签
- [address](address.md)	地址
- article	独立的内容
- aside	侧边栏
- [blockquote](blockquote.md)	块引用
- div	文档中的一个分隔区块或者一个区域部分
- footer	页脚
- header	页眉
- hr	水平分割线
- [meter](meter.md)	度量衡
- nav	导航链接区域	
- p	段落	
- [pre](pre.md)	预格式化文本

##### details
- [details](details.md)	用户可见或者隐藏的补充细节
- summary	为details元素定义可点击标题

##### figure
- figure	独立的流内容（图像、图表、照片、代码等）
- figcaption	定义figure元素的标题

##### 标题
- h1	1级标题
- h2	2级标题
- h3	3级标题
- h4	4级标题
- h5	5级标题
- h6	6级标题
- hgroup	对标题进行组合

#### 3、行内标签
- abbr	缩写，简写，缩略语
- acronym	首字母缩写（废弃）
- br	换行
- cite	作品的标题
- [del](del.md)	已被删除的文本
- [ins](ins.md)	插入的文本
- mark	带有记号的文本，用于突出显示文本
- [output](output.md)	计算结果输出显示
- [progress](progress.md)	进度条
- [q](q.md)	短引用

##### 样式标签
- b	粗体文本
- big	放大字体（废弃）
- font	规定文本的字体、字体尺寸、字体颜色（废弃）
- [i](i.md)	斜体文本

##### 短语标签
- code	计算机代码文本
- dfn	定义一个定义项目
- em	强调的内容
- kbd	键盘文本，表示文本是从键盘上键入的

##### unicode双向字符控制
- [bdi](bdi.md)	脱离父元素的文本方向设置
- [bdo](bdo.md)	覆盖默认的文本方向