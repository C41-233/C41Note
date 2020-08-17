``` C#
public static string NumberToChinese(int num)
{
    if (num < 0)
    {
        return '负' + NumberToChinese(-num);
    }

    var sb = new StringBuilder();
    NumberToChineseInternal(sb, num);
    return sb.ToString();
}

private struct CarryPair
{
    public readonly int Value;
    public readonly char Name;

    public CarryPair(int value, char name)
    {
        Value = value;
        Name = name;
    }
}

private static readonly CarryPair[] MinorCarries = {
    new CarryPair(1000, '千'),
    new CarryPair(100, '百'),
    new CarryPair(10, '十')
};

private static readonly CarryPair[] MajorCarries =
{
    new CarryPair(100000000, '亿'),
    new CarryPair(10000, '万'),
};

private static readonly char[] Digits = {'零', '一', '二', '三', '四', '五', '六', '七', '八', '九',};

private static void NumberToChineseInternal(StringBuilder sb, int num)
{
    if (num == 0)
    {
        sb.Append(Digits[0]);
        return;
    }

    var major = false;
    foreach (var carry in MajorCarries)
    {
        var div = num / carry.Value;
        num %= carry.Value;

        if (div == 0)
        {
            continue;
        }
        NumberToChineseInternal(sb, div);
        sb.Append(carry.Name);
        major = true;
    }

    if (major)
    {
        if (num == 0)
        {
            return;
        }

        if (num < MinorCarries[0].Value)
        {
            sb.Append(Digits[0]);
        }
    }

    for (var i = 0; i < MinorCarries.Length; i++)
    {
        var carry = MinorCarries[i];
        var div = num / carry.Value;
        num %= carry.Value;
        if (div == 0)
        {
            continue;
        }

        //十几而不是一十几
        if (!(carry.Value == 10 && div == 1))
        {
            sb.Append(Digits[div]);
        }

        sb.Append(carry.Name);

        //缺位补零
        if (num != 0 && i < MinorCarries.Length - 1 && num < MinorCarries[i + 1].Value)
        {
            sb.Append(Digits[0]);
        }

    }

    //最后一部分零不补
    if (num != 0)
    {
        sb.Append(Digits[num]);
    }
}
```
