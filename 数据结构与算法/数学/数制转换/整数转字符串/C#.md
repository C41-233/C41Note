``` C#
private static readonly char[] DEFAULT_DIGITS = {
    '0','1','2','3','4','5','6','7','8','9',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X','Y','Z'
};

/*
 * 2 <= radix <= digits.length
 */
public static string Convert(int value, int radix, char[] digits)
{
    if (radix < 2 || radix > digits.Length)
    {
        throw new ArgumentException("Illegal radix");
    }
    if (value == 0)
    {
        return digits[0].ToString();
    }

    var negative = false;
    if (value < 0)
    {
        value = -value;
        negative = true;
    }

    var characters = new StringBuilder();
    while (value != 0)
    {
        var factor = value / radix;
        var remain = value % radix;
        characters.Append(digits[remain]);
        value = factor;
    }
    if (negative)
    {
        characters.Append('-');
    }
    var result = new char[characters.Length];
    for (int i=characters.Length - 1, j=0; i >= 0; i--, j++)
    {
        result[j] = characters[i];
    }
    return new string(result);
}

public static string Convert2(int value)
{
    return Convert(value, 2, DEFAULT_DIGITS);
}

public static string Convert10(int value)
{
    return Convert(value, 10, DEFAULT_DIGITS);
}

public static string Convert16(int value)
{
    return Convert(value, 16, DEFAULT_DIGITS);
}
```