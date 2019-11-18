# javadoc

生成javadoc文档。在代码中使用`/**`和`*/`注释对作为javadoc文档注释。

## 用法
`javadoc [options] [packagenames] [sourcefiles] [@files]`

## 选项
- `-charset` 编码    目标HTML的编码
- `-d` 目录    输出文件的目标目录
- `-encoding` 编码    源文件的编码
- `-package`    显示package/protected/public类和成员
- `-public`    仅显示public类和成员
- `-protected`    显示protected/public类和成员(默认值)
- `-private`    显示所有类和成员
- `-subpackages`    指定要递归加载的子程序包

## javadoc标签
<table>
    <thead>
    <tr>
        <th>标签</th>
        <th>说明</th>
        <th>示例</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <th>@author</th>
            <td>作者</td>
            <td>@author C41</td>
        </tr>
        <tr>
            <th>@param</th>
            <td>参数</td>
            <td>@parameter name 名字</td>
        </tr>
        <tr>
            <th>@since</th>
            <td>最早使用该的JDK版本</td>
            <td>@since JDK1.6</td>
        </tr>
        <tr>
            <th>@version</th>
            <td>版本号</td>
            <td>@version 1.0</td>
        </tr>
        <tr>
            <th>@return</th>
            <td>返回值描述</td>
            <td>@return 计算的结果</td>
        </tr>
        <tr>
            <th>@throws</th>
            <td>异常描述</td>
            <td>@throws IllegalArgumentException 如果n<=0</td>
        </tr>
        <tr>
            <th>@exception</th>
            <td>异常描述</td>
            <td>@exception IllegalArgumentException 如果n<=0</td>
        </tr>
        <tr>
            <th>@deprecated</th>
            <td>引起不推荐使用的警告</td>
            <td>@deprecated 该方法不精确，已经被取代</td>
        </tr>
        <tr>
            <th>@see</th>
            <td>引用参见</td>
            <td>@see ch.tool.Image#getImage(String)</td>
        </tr>
        <tr>
            <th>@override</th>
            <td>覆盖</td>
            <td>@override</td>
        </tr>
        <tr>
            <th>@link</th>
            <td>超链接，对于域分割使用#而不是.</td>
            <td>{@link #move(int, Object, Object) move}</td>
        </tr>
        <tr>
            <th>@code</th>
            <td>代码标记</td>
            <td>{@code Math}</td>
        </tr>
    </tbody>
</table>