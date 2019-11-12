# MD5

MD5信息摘要算法，一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。

## 字符串表示

将一个已经经过MD5编码后的字节数组，转换为字符串表示。

### 实现
##### C#
``` C#
public static string Convert(byte[] md5Data)
{
    var str = new StringBuilder();
    foreach (var b in md5Data)
    {
        str.Append(b.ToString("x").PadLeft(2, '0'));
    }
    return str.ToString();
}
```