# C#

``` C#
public void Write7BitEncodedInt(int value)
{
    uint num;
    for (num = (uint) value; num >= 128u; num >>= 7)
    {
        this.Write((byte) (num | 128u));
    }
    this.Write((byte) num);
}

public int Read7BitEncodedInt()
{
    int num1 = 0;
    int num2 = 0;
    while (num2 != 35)
    {
        byte num3 = this.ReadByte();
        num1 |= ((int) num3 & (int) sbyte.MaxValue) << num2;
        num2 += 7;
        if (((int) num3 & 128) == 0)
        {
            return num1;
        }
    }
    throw new FormatException();
}
```