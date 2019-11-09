# 字符串转整数 - C#

``` C#
private static readonly char[] DEFAULT_DIGITS = {
    '0','1','2','3','4','5','6','7','8','9',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X','Y','Z'
};

public static int ParseInt(string str, int radix, char[] digits)
{
    if (radix < 2 || radix > digits.Length)
    {
        throw new ArgumentException("Illegal radix");
    }
    if (string.IsNullOrEmpty(str))
    {
        throw new ArgumentException("Illegal null string");
    }

    var result = 0;
    bool negative;
    int limit;

    var index = 0;
    var firstChar = str[0];

    if (firstChar == '-')
    {
        negative = true;
        limit = int.MinValue;
        index++;
        if (str.Length == 1)
        {
            throw new ArgumentException(str);
        }
    }
    else
    {
        if (firstChar == '+')
        {
            index++;
            if (str.Length == 1)
            {
                throw new ArgumentException(str);
            }
        }
        negative = false;
        limit = -int.MaxValue;
    }

    var multmin = limit / radix;
    while (index < str.Length)
    {
        if (result < multmin)
        {
            throw new ArgumentException("Overflow");
        }

        var value = Array.IndexOf(digits, str[index++]);
        if (value < 0)
        {
            throw new ArgumentException("Illegal digit");
        }
        result *= radix;
        if (result < limit + value)
        {
            throw new ArgumentException("Overflow");
        }
        result -= value;
    }
    return negative ? result : -result;
}

public static int ParseInt(string str, int radix)
{
    return ParseInt(str, radix, DEFAULT_DIGITS);
}

public static int ParseInt(string str)
{
    return ParseInt(str, 10);
}
```