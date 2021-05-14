# Content Model

### 1、主分类

##### 元数据（metadata）

base、command、link、meta、noscript, script, style、title

##### 流元素（flow）

文本元素属于flow content。

总是属于flow content的元素有a、abbr、address、article、aside、audio、b、bdo、bdi、blockquote、br、button、canvas、cite、code、command、data、datalist、del、details、dfn、div、dl、em、embed、fieldset、figure、footer、form、h1、h2、h3、h4、h5、h6、header、hgroup、hr、i、iframe、img、input、ins、kbd、keygen、label、main、map、mark、math、menu、meter、nav、noscript、object、ol、output、p、picture、pre、progress、q、ruby、s、samp、script、section、select、small、span、strong、sub、sup、svg、table、template、textarea、time、ul、var、video、wbr

下列元素在满足条件时属于flow content：
- area：作为map的子孙元素
- link：设置itemprop属性
- meta：设置itemprop属性
- style：设置scoped属性

##### 章节元素（sectioning）

article、aside、nav、section

##### 标题元素（heading）

 h1、h2、h3、h4、h5、h6、hgroup

##### 短语元素（phrasing）

abbr、audio、b、bdo、br、button、canvas、cite、code、command、data、datalist、dfn、em、embed、i、iframe、img、input、kbd、keygen、label、mark、math、meter、noscript、object、output、picture、progress、q、ruby、samp、script、select、small、span、strong、sub、sup、svg、textarea、time、var、video、wbr 

下列元素在满足条件时属于文本元素：
- a：仅包含phrasing content
- area：作为map的子孙元素
- del：仅包含phrasing content
- ins：仅包含phrasing content
- link：设置itemprop属性
- map：仅包含phrasing content
- meta：设置itemprop属性

##### 嵌入元素（embedded）

audio、canvas、embed、iframe、img、math、object、picture、svg、video

##### 交互元素（interactive）

a、button、details、embed、iframe、keygen、label、select、textarea

下列元素在满足条件时属于interactive content：
- audio：设置controls属性
- img：设置usemap属性
- input：设置type属性，且值不为hidden
- menu：设置type属性，且值不为toolbar
- object：设置usemap属性
- video：设置controls属性

##### 可触摸元素（palpable）

当元素非空且非隐藏时，属于palpable content。flow content和phrasing content必须至少包含一个palpable结点。

##### 表单元素（form）

listed：button、fieldset、input、keygen、object、output、select、textarea

labelable：button、input、keygen、meter、output、progress、select、textarea

submittable：button、input、keygen、object、select、textarea

resettable：input、keygen、output、select、textarea

### 2、二级分类

##### script

script、template

### 3、透明元素（transparent）

即使将该标签本身删除，由其子元素替代，也是合法的HTML5结构。例如del和ins标签。