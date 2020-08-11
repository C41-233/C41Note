# HTML标签

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

## 一、定义

### 标签类型

- 对称标签：必须以`<tag>`和`</tag>`成对出现的标签，即使没有子内容也不能写成`<tag/>`的形式。
- 空白标签：在HTML中以`<tag>`的形式单独出现，在`XHTML`中以<tag/>的形式出现。

### 属性数据类型

##### 基本类型

| 数据类型 | 描述 |
|---|---|
| bool | 布尔类型。HTML中以`<tag attr>`的形式表示，XHTML中以`<tag attr="attr">`的形式表示。|
| enum | 特定的枚举类型 |
| int | 整数 |
| px | 表示一个长度，用于高度或宽度。值为像素格式、number或者百分比 |

##### 字符串类型

| 数据类型 | 描述 |
|---|---|
| char | 单个字符 |
| id | 引用其他元素的id |
| string | 字符串 |
| url | URL地址 |
| xmlns | xml namespace |

##### 引用类型

| 数据类型 | 描述 |
|---|---|
| charset | 字符集 |
| color | 颜色 |
| corps | 跨域类型 |
| language | 语言 |
| media | 媒体类型 |
| mime | MIME类型 |
| referrer | 请求时所带的referrer，参见[referrer](../参考/referrer.md) |
| rel | 当前文档与目标文档之间的关系 |
| target | 规定如何打开文档，参见[target](../参考/target.md) |

### 内容模型

[Content Model](../参考/content-model.md)

## 二、标签

#### 1、主体
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [html](html.md) | 文档根元素 | 对称标签 | HTMLHtmlElement  |
| [head](head.md) | HTML文档头部 | 对称标签 | HTMLHeadElement  |
| [body](body.md) | HTML文档主体 | 对称标签 | HTMLBodyElement  |
| [meta](meta.md) | 提供有关页面的元信息 | 空白标签 | HTMLMetaElement  |
| [title](title.md) | 文档的标题 | 对称标签 |  HTMLTitleElement |
| base | 为页面上的所有相对路径定义根URL | 空白标签 | HTMLBaseElement |

#### 2、块级标签

| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [address](address.md) | 地址 | 对称标签 |  HTMLElement |
| article | 独立的内容 | 对称标签 |  HTMLElement |
| aside | 侧边栏 | 对称标签 | HTMLElement  |
| [blockquote](blockquote.md) | 块引用 | 对称标签 |  HTMLQuoteElement |
| div | 文档中的一个分隔区块或者一个区域部分 | 对称标签 |  HTMLDivElement |
| footer | 页脚 | 对称标签 |  HTMLElement |
| header | 页眉 | 对称标签 |  HTMLElement |
| hr | 水平分割线 | 空白标签 |  HTMLHRElement |
| [meter](meter.md) | 度量衡 | 对称标签 | HTMLMeterElement  |
| nav | 导航链接区域	 | 对称标签 |  HTMLElement |
| p | 段落	 | 对称标签 |  HTMLParagraphElement |
| [pre](pre.md) | 预格式化文本 | 对称标签 |  HTMLPreElement |

##### details
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [details](details.md) | 用户可见或者隐藏的补充细节 | 对称标签 | HTMLDetailsElement  |
| summary | 为details元素定义可点击标题 | 对称标签 | HTMLElement  |

##### figure
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| figure | 独立的流内容（图像、图表、照片、代码等） | 对称标签 |  HTMLElement |
| figcaption | 定义figure元素的标题 | 对称标签 | HTMLElement  |

##### 标题
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| h1 | 1级标题 | 对称标签 |  HTMLHeadingElement |
| h2 | 2级标题 | 对称标签 |  HTMLHeadingElement |
| h3 | 3级标题 | 对称标签 |  HTMLHeadingElement |
| h4 | 4级标题 | 对称标签 |  HTMLHeadingElement |
| h5 | 5级标题 | 对称标签 |  HTMLHeadingElement |
| h6 | 6级标题 | 对称标签 |  HTMLHeadingElement |
| hgroup | 对标题进行组合 | 对称标签 |  HTMLElement |

#### 3、行内标签
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| a | 锚点 | 对称标签 | HTMLAnchorElement |
| abbr | 缩写，简写，缩略语 | 对称标签 |  HTMLElement |
| acronym | 首字母缩写（废弃） | 对称标签 |  HTMLElement |
| cite | 作品的标题 | 对称标签 | HTMLElement  |
| [del](del.md) | 已被删除的文本 | 对称标签 | HTMLModElement  |
| [ins](ins.md) | 插入的文本 | 对称标签 |  HTMLModElement |
| mark | 带有记号的文本，用于突出显示文本 | 对称标签 |  HTMLElement |
| [output](output.md) | 计算结果输出显示 | 对称标签 | HTMLOutputElement  |
| [progress](progress.md) | 进度条 | 对称标签 |  HTMLProgressElement |
| [q](q.md) | 短引用 | 对称标签 |  HTMLQuoteElement |
| s | 不正确的文本 | 对称标签 | HTMLElement |
| span | 行内文本 | 对称标签 | HTMLSpanElement |
| sub | 下标文本 | 对称标签 | HTMLElement |
| sup | 上标文本 | 对称标签 | HTMLElement |
| [time](time.md) | 公历的时间或日期 | 对称标签 | HTMLTimeElement |
| u | 与常规文本风格不同的文本，拼写错误的单词或者专有名词 | 对称标签 | HTMLElement |

##### 样式标签
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| b | 粗体文本 | 对称标签 | HTMLElement  |
|  big | 放大字体（废弃） | 对称标签 |  HTMLElement |
| font | 规定文本的字体、字体尺寸、字体颜色（废弃） | 对称标签 |  HTMLFontElement |
| [i](i.md) | 斜体文本 | 对称标签 |  HTMLElement |
| small | 小型文本和旁注 | 对称标签 | HTMLElement |
| strike | 加删除线的文本（废弃） | 对称标签 | HTMLElement |
| tt | 打字机等宽文本（废弃） | 对称标签 | HTMLElement |

##### 短语标签
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| code | 计算机代码文本 | 对称标签 | HTMLElement  |
| dfn | 定义一个定义项目 | 对称标签 | HTMLElement  |
| em | 强调的内容 | 对称标签 |  HTMLElement |
| kbd | 键盘文本，表示文本是从键盘上键入的 | 对称标签 | HTMLElement  |
| samp | 计算机程序的样本文本 | 对称标签 | HTMLElement |
| strong | 重要的文本 | 对称标签 | HTMLElement |
| var | 变量 | 对称标签 | HTMLElement |

##### 字符控制
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [bdi](bdi.md) | 脱离父元素的文本方向设置 | 对称标签 | HTMLElement  |
| [bdo](bdo.md) | 覆盖默认的文本方向 | 对称标签 |  HTMLElement |
| br | 换行 | 空白标签 | HTMLBRElement  |
| [wbr](wbr.md) | 可被换行的位置 | 空白标签 | HTMLElement |

##### ruby
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [rp](rp.md) | 当浏览器不支持ruby元素时显示的内容 | 对称标签 | HTMLElement  |
| [rt](rt.md) | 提供ruby元素的注音 | 对称标签 | HTMLElement  |
| [ruby](ruby.md) | 字符注音块 | 对称标签 | HTMLElement  |

#### 4、表单
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [button](button.md) | 按钮 | 对称标签 | HTMLButtonElement |
| command | 用户能够调用的命令 | 对称标签 | HTMLElement |
| [datalist](datalist.md) | 定义输入框的选项列表 | 对称标签 | HTMLDataListElement |
| [dialog](dialog.md) | 对话框或窗口 | 对称标签 | HTMLDialogElement |
| [form](form.md) | 表单 | 对称标签 | HTMLFormElement |
| [input](input.md) | 表单输入组件 | 空白标签 | HTMLInputElement |
| [keygen](keygen.md) | 密钥对生成器 | 对称标签 | HTMLKeygenElement |
| [label](label.md) | 控件元素的标签 | 对称标签 | HTMLLabelElement |
| [option](option.md) | select或datalist的选项 | 对称标签 | HTMLOptionElement |
| [optgroup](optgroup.md) | 选项组 | 对称标签 | HTMLOptGroupElement |
| [select](select.md) | 选项菜单 | 对称标签 | HTMLSelectElement |
| [textarea](textarea.md) | 多行的文本输入控件	 | 对称标签 | HTMLTextAreaElement |

##### fieldset
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [fieldset](fieldset.md) | 将表单内的相关元素分组 | 对称标签 | HTMLFieldSetElement |
| legend | 为fieldset元素定义标题 | 对称标签 | HTMLLegendElement |

##### menu
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| menu | 菜单列表 | 对称标签 | HTMLMenuElement |
| menuitem | 菜单列表的项 | 对称标签 | HTMLMenuItemElement |

#### 5、表格
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [table](table.md) | 表格 | 对称标签 | HTMLTableElement |
| thead | 表格的表头内容 | 对称标签 | HTMLTableSectionElement |
| tbody | 表格的主体内容 | 对称标签 | HTMLTableSectionElement |
| tfoot | 表格中的脚注内容  | 对称标签 | HTMLTableSectionElement |
| tr | 表格中的行 | 对称标签 | HTMLTableRowElement |
| [th](th.md) | 表格内的表头单元格 | 对称标签 | HTMLTableDataCellElement |
| [td](td.md) | 表格中的标准单元格 | 对称标签 | HTMLTableDataCellElement |
| [caption](caption.md) | 表格标题 | 对称标签 | HTMLTableCaptionElement |
| [col](col.md) | 为表格中多个列定义属性值 | 空白标签 | HTMLTableColElement |
| [colgroup](colgroup.md) | 对表格中的列进行组合 | 对称标签 | HTMLTableColElement |

#### 6、列表

| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| dd | dl元素中条目的描述部分 | 对称标签 | HTMLElement |
| dl | 定义列表 | 对称标签 | HTMLDListElement |
| dt | dl元素中条目的名称部分 | 对称标签 | HTMLElement |
| [li](li.md) | 定义列表中的项目 | 对称标签 | HTMLLIElement |
| [ol](ol.md) | 定义有序列表 | 对称标签 | HTMLOListElement |
| [ul](ul.md) | 定义无序列表 | 对称标签 | HTMLUListElement |

#### 7、多媒体

##### 框架
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [iframe](iframe.md) | 定义内联框架 | 对称标签 | HTMLIFrameElement |

##### 图像

| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [img](img.md) | 嵌入图像 | 空白标签 | HTMLImageElement |
| [area](area.md) | 图像映射中的区域 | 空白标签 | HTMLAreaElement |
| [map](map.md) | 定义一个客户端图像映射 | 对称标签 | HTMLMapElement |

##### 样式
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [link](link.md) | 定义文档与外部资源的关系 | 空白标签 | HTMLLinkElement |
| [style](style.md) | 定义文档样式 | 对称标签 | HTMLStyleElement |

##### 嵌入式对象
| 标签 | 说明 | 类型 | DOM |
|---|---|---|---|
| [audio](audio.md) | 嵌入式音频 | 对称标签 | HTMLAudioElement |
| [canvas](canvas.md) | 画布 | 对称标签 | HTMLCanvasElement |
| [embed](embed.md) | 嵌入式插件 | 空白标签 | HTMLEmbedElement |
| [object](object.md) | 嵌入式多媒体对象 | 对称标签 | HTMLObjectElement |
| [param](param.md) | 为object设置参数 | 空白标签 | HTMLParamElement |
| source | 为多媒体元素定义资源 | 对称标签 | HTMLSourceElement |
| track | 为多媒体元素定义字幕 | 对称标签 | HTMLTrackElement |
| [video](video.md) | 嵌入式视频 | 对称标签 | HTMLVideoElement |