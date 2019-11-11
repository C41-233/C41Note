# BigInt - Java

int型数组bits用于存储无符号二进制位，采用大端序（高位字节在数组低索引处）。数组保证是最小长度的，即bits[0]不为0。

signum代表符号，1表示正，-1表示负，0表示零。当signum为0时，bits的长度为0。

``` Java

public class BigInt{
    
    public static final BigInt ZERO = new BigInt(0);
    public static final BigInt ONE = new BigInt(1);
    public static final BigInt MINUES_ONE = new BigInt(-1);
    
    private static final char[] DEFAULT_DIGITS = new char[]{
        '0','1','2','3','4','5','6','7','8','9',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
        'O','P','Q','R','S','T','U','V','W','X','Y','Z'
    };
    
    private final int signum;
    private final int[] bits;
    
    private BigInt(int[] bits, int signum); //私有成员初始化构造
    public static BigInt fromBytes(byte[] val); //根据二进制补码构造
    public static BigInt fromBytes(byte[] magnitude, int signum); //根据无符号二进制和符号构造
    private BigInt(int[] val);
    
    public BigInt(String val, int radix, char[] digits);
    
    public BigInt(String val, int radix){
        this(val, radix, DEFAULT_DIGITS);
    }
    
    public BigInt(String val){
        this(val, 10);
    }
    
    public BigInt(long val);
    
    public BigInt add(BigInt val); //加法 +
    public BigInt subtract(BigInt val); //减法 -
    public BigInt negate(); //一元减 -
    public BigInt abs(); //绝对值
    
    public BigInt multiply(BigInt val); //乘法 *
    public BigInt divide(BigInt val); //除法 /
    public BigInt remainder(BigInt val); //取模 %
    public BigInt (BigInt val); //取非负模 %
    
    public int compareTo(BigInt val);

    public int bitLength(); //位长度，不包括符号位
    public BigInt and(BigInt val); //按位与 &amp;
    public BigInt or(BigInt val); //按位或 |
    public BigInt xor(BigInt val); //按位异或 ^
    public BigInt not(); //按位非 ~
    public boolean getBitAt(int n); //获得二进制位
    public BigInt setBit1At(int n); //设置二进制位
    public BigInt setBit0At(int n); //清除二进制位
    public BigInt flipBitAt(int n); //翻转二进制位
    
    public int shiftLeft(); //左移
    public int shiftRight(); //算术右移
    
    public int intValue();
    public long longValue();
    public byte[] toByteArray();
    
    public String toString(int radix, char[] digits);
    
    public String toString(int radix){
        return toString(radix, DEFAULT_DIGITS);
    }
    
    public String toString(){
        return toString(10);
    }
    
}
```