# HTML标签

对称标签是必须<tag>和</tag>成对出现的标签，即使没有body内容也不能写成<tag/>的形式。

空白标签在HTML中以<tag>的形式单独出现，在XHTML中以<tag/>的形式出现。

属性如果是bool数据类型，HTML中可以按照<tag attr>的形式出现，XHTML中以<tag attr="attr">的形式出现。

#### 1、主体
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [html](html.md) | 文档根元素 | 对称标签 | HTMLHtmlElement  |
| [head](head.md) | HTML文档头部 | 对称标签 |   |
| [body](body.md) | HTML文档主体 | 对称标签 |   |
| [meta](meta.md) | 提供有关页面的元信息 | 空白标签 |   |
| [title](title.md) | 文档的标题 | 对称标签 |   |

#### 2、块级标签

| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [address](address.md) | 地址 | 对称标签 |   |
| article | 独立的内容 | 对称标签 |   |
| aside | 侧边栏 | 对称标签 |   |
| [blockquote](blockquote.md) | 块引用 | 对称标签 |   |
| div | 文档中的一个分隔区块或者一个区域部分 | 对称标签 |   |
| footer | 页脚 | 对称标签 |   |
| header | 页眉 | 对称标签 |   |
| hr | 水平分割线 | 空白标签 |   |
| [meter](meter.md) | 度量衡 | 对称标签 |   |
| nav | 导航链接区域	 | 对称标签 |   |
| p | 段落	 | 对称标签 |   |
| [pre](pre.md) | 预格式化文本 | 对称标签 |   |

##### details
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [details](details.md) | 用户可见或者隐藏的补充细节 | 对称标签 |   |
| summary | 为details元素定义可点击标题 | 对称标签 |   |

##### figure
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| figure | 独立的流内容（图像、图表、照片、代码等） | 对称标签 |   |
| figcaption | 定义figure元素的标题 | 对称标签 |   |

##### 标题
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| h1 | 1级标题 | 对称标签 |   |
| h2 | 2级标题 | 对称标签 |   |
| h3 | 3级标题 | 对称标签 |   |
| h4 | 4级标题 | 对称标签 |   |
| h5 | 5级标题 | 对称标签 |   |
| h6 | 6级标题 | 对称标签 |   |
| hgroup | 对标题进行组合 | 对称标签 |   |

#### 3、行内标签
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| abbr | 缩写，简写，缩略语 | 对称标签 |   |
| acronym | 首字母缩写（废弃） | 对称标签 |   |
| cite | 作品的标题 | 对称标签 |   |
| [del](del.md) | 已被删除的文本 | 对称标签 |   |
| [ins](ins.md) | 插入的文本 | 对称标签 |   |
| mark | 带有记号的文本，用于突出显示文本 | 对称标签 |   |
| [output](output.md) | 计算结果输出显示 | 对称标签 |   |
| [progress](progress.md) | 进度条 | 对称标签 |   |
| [q](q.md) | 短引用 | 对称标签 |   |
| s | 不正确的文本 | 对称标签 | HTMLElement |
| span | 行内文本 | 对称标签 | HTMLSpanElement |
| sub | 下标文本 | 对称标签 | HTMLElement |
| sup | 上标文本 | 对称标签 | HTMLElement |
| [time](time.md) | 公历的时间或日期 | 对称标签 | HTMLTimeElement |
| u | 与常规文本风格不同的文本，拼写错误的单词或者专有名词 | 对称标签 | HTMLElement |

##### 样式标签
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| b | 粗体文本 | 对称标签 |   |
|  big | 放大字体（废弃） | 对称标签 |   |
| font | 规定文本的字体、字体尺寸、字体颜色（废弃） | 对称标签 |   |
| [i](i.md) | 斜体文本 | 对称标签 |   |
| small | 小型文本和旁注 | 对称标签 | HTMLElement |
| strike | 加删除线的文本（废弃） | 对称标签 | HTMLElement |
| tt | 打字机等宽文本（废弃） | 对称标签 | HTMLElement |

##### 短语标签
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| code | 计算机代码文本 | 对称标签 |   |
| dfn | 定义一个定义项目 | 对称标签 |   |
| em | 强调的内容 | 对称标签 |   |
| kbd | 键盘文本，表示文本是从键盘上键入的 | 对称标签 |   |
| samp | 计算机程序的样本文本 | 对称标签 | HTMLElement |
| strong | 重要的文本 | 对称标签 | HTMLElement |
| var | 变量 | 对称标签 | HTMLElement |

##### 字符控制
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [bdi](bdi.md) | 脱离父元素的文本方向设置 | 对称标签 |   |
| [bdo](bdo.md) | 覆盖默认的文本方向 | 对称标签 |   |
| br | 换行 | 空白标签 |   |
| [wbr](wbr.md) | 可被换行的位置 | 空白标签 | HTMLElement |

##### ruby
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [rp](rp.md) | 当浏览器不支持ruby元素时显示的内容 | 对称标签 |   |
| [rt](rt.md) | 提供ruby元素的注音 | 对称标签 |   |
| [ruby](ruby.md) | 字符注音块 | 对称标签 |   |

#### 4、表单
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [button](button.md) | 按钮 | 对称标签 | HTMLButtonElement |
| command | 用户能够调用的命令 | 对称标签 |  |