# BigInt - Java

int型数组bits用于存储无符号二进制位，采用大端序（高位字节在数组低索引处）。数组保证是最小长度的，即bits[0]不为0。

signum代表符号，1表示正，-1表示负，0表示零。当signum为0时，bits的长度为0。

## 接口定义
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
    public BigInt and(BigInt val); //按位与 &
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

## BufferedBigInt

BufferedBigInt是一个可变的无符号大整数，用于加速大规模计算。主要协助BigInt进行除法运算。

``` Java
private class BufferedBigInt{
    
    private int[] bits;
    private int intLen;
    private int offset;
    
    public BufferedBigInt();
    public BufferedBigInt(int val);
    public BufferedBigInt(int[] val);
    public BufferedBigInt(BufferedBigInt val);
    
    public void clean();
    public void clean(int val);
    public void clean(int[] val);
    public void clean(BufferedBigInt val);
    
    public int[] bits_array();
    private void normalize();
    
    public void divide(BufferedBigInt b, BufferedBigInt quotient, BufferedBigInt remainder);
    public void leftShift(int n);
    public void rightShift(int n);
    
    public int compare(BufferedBigInt b);
    
}
```

## 基于byte数组构造
``` Java
public static BigInt fromBytes(byte[] val) {
    if (val.length == 0){
        return BigInt.ZERO;
    }

    int[] bits;
    int signum;
    if (val[0] >= 0) {
        bits = strip_leading_zero_bytes(val);
        signum = bits.length == 0 ? 0 : 1;
    } 
    else {
        bits = cast_to_positive_bits(val);
        signum = -1;
    }
    return new BigInt(bits, signum);
}

public static BigInt fromBytes(byte[] val, int signum) {
    int[] bits = strip_leading_zero_bytes(val);
    if (signum < -1 || signum > 1){
        throw new NumberFormatException("Invalid signum value");
    }
    if (bits.length != 0 && signum == 0) {
        throw new NumberFormatException("signum-bits mismatch");
    }
    return new BigInt(bits, signum);
}

//bits是无符号二进制位，可以有前导0，可能不会复制数组bits
private BigInt(int[] bits, int signum) {
    this.bits = strip_leading_zero_bytes_buffer(bits);
    this.signum = bits.length==0?0:signum;
}


//根据一个bits数组构造，可能不会进行数组的复制。bits可以有前导0。
private BigInt(int[] val) {
    if (val.length == 0){
        this.bits = val;
        this.signum = 0;
    }    
    else if (val[0] < 0) {
        this.bits = cast_to_positive_bits(val);
        this.signum = -1;
    } 
    else {
        this.bits = strip_leading_zero_bytes_buffer(val);
        this.signum = this.bits.length==0 ? 0 : 1;
    }
}

//去除前导0，返回一个新数组
private static int[] strip_leading_zero_bytes(byte bits[]) {
    int keep;
    for (keep=0; keep < bits.length && bits[keep]==0; keep++);

    int intLength = (bits.length - keep + 3) >>> 2;
    int[] result = new int[intLength];
    
    for (int i = intLength-1, index = bits.length-1; i >= 0; i--) {
        result[i] = Math.ubyte_to_int(bits[index--]);
        int bytesToTransfer = Math.min(3, index - keep + 1);
        for (int j = 8; j <= (bytesToTransfer<<3); j+=8){
            result[i] |= Math.byte_to_int(bits[index--])<<j;
        }
    }
    return result;
}

//去除前导0，可能返回原数组
private static int[] strip_leading_zero_bytes_buffer(int bits[]) {
    int keep;
    for (keep=0; keep<bits.length && bits[keep]==0; keep++);
    return keep==0 ? bits : Arrays.copyOfRange(bits, keep, bits.length);
}

//把一个负的二进制补码数组转化为无符号数组，返回一个新数组
private static int[] cast_to_positive_bits(byte bits[]) {
    int keep, k;
    
    for (keep=0; keep<bits.length && bits[keep]==-1; keep++);

    for (k=keep; k<bits.length && bits[k]==0; k++);
    int extraByte = (k==bits.length) ? 1 : 0;
    
    int intLength = (bits.length-keep+extraByte+3)/4;
    int result[] = new int[intLength];

    for (int i = intLength-1, index=bits.length-1; i>=0; i--) {
        result[i] = Math.ubyte_to_int(bits[index--]);
        int numBytesToTransfer = Math.min(3, index-keep+1);
        if (numBytesToTransfer < 0){
            numBytesToTransfer = 0;
        }
        for (int j=8; j<=8*numBytesToTransfer; j+=8){
            result[i] |= Math.byte_to_int(bits[index--]) << j;
        }

        int mask = -1 >>> (3-numBytesToTransfer)*8;
        result[i] = ~result[i] & mask;
    }

    for (int i=result.length-1; i>=0; i--) {
        result[i] = (int)(Math.uint_to_long(result[i])+1);
        if (result[i] != 0){
            break;
        }
    }
    return result;
}

//把一个负的二进制补码数组转化为无符号数组，可能返回原数组
private static int[] cast_to_positive_bits_buffer(int bits[]) {
    int keep, index;
    for (keep=0; keep<bits.length && bits[keep]==-1; keep++);
    for (index=keep; index<bits.length && bits[index]==0; index++);
    
    int extraInt = index==bits.length ? 1 : 0;
    int[] result;
    if(keep == extraInt){
        result = bits;
    }
    else{
        result = new int[bits.length-keep+extraInt];
    }
    
    for (int i=keep; i<bits.length; i++){
        result[i-keep+extraInt] = ~bits[i];
    }
    
    for (int i=result.length-1; ++result[i]==0; i--);
    return result;
}
```

## 基于String构造

``` Java
public BigInt(String val, int radix, char[] digits) {
    if (radix < 2 || radix > digits.length){
        throw new NumberFormatException("Radix out of range");
    }
    if (val.length() == 0){
        throw new NumberFormatException("Zero length string");
    }

    //符号判断
    int index, sign;
    if(val[0] == '+'){
        index = 1;
        sign = 1;
        if(val.length() == 1){
             throw new NumberFormatException("Illegal string"+val);
        }
    }
    else if(val[0] == '-'){
        index = 1;
        sign = -1;
        if(val.length() == 1){
            throw new NumberFormatException("Illegal string"+val);
        }
    }
    else{
        index = 0;
        sign = 1;
    }
    
    //忽略前导0
    while (index<val.length() && digits[0] == val[index]){
        index++;
    }
    if (index == val.length()) {
        this.signum = 0;
        this.bits = ZERO.bits;
        return;
    }
 
    int numDigits = val.length() - index; //实际有效位数
    this.signum = sign;

    long bits_per_digit = bits_per_digit(radix);
    int numBits = (int)(((numDigits * bits_per_digit) >>> 10) + 1);//存储所需位数
    int numInts = (numBits + 31) >>> 5; //存储所需int数
    int digits_per_int = digits_per_int(radix);
    int targetRadix = int_radix(radix);
    int[] bits = new int[numInts];
    
    int firstGroupLen = numDigits % digits_per_int;
    if (firstGroupLen == 0){
        firstGroupLen = digits_per_int;
    }
    
    String group = val.substring(index, index+firstGroupLen); 
    bits[numInts-1] = parse_int_buffer(group, radix, digits);

    index += firstGroupLen;
    while (index < val.length()) {
        group = val.substring(index, index + digits_per_int);
        int groupVal = parse_int_buffer(group, radix, digits);
        bits_multiply_add_buffer(bits, targetRadix, groupVal);
        index += digits_per_int;
    }
    this.bits = strip_leading_zero_bytes_buffer(bits);
}

//一个radix进制数字需要多少二进制位来表示，乘以1024向上取整以防止损失精度
private static long bits_per_digit(int radix){
    return (long)Math.ceil(Math.log(radix) / Math.log(2) * 1024);
}

//一个int最多能完整容纳多少位radix进制数字
private static int digits_per_int(int radix){
    return (int)Math.floor(Math.log(2) / Math.log(radix) * 31);
}

//最佳存储目标进制
private static int int_radix(int radix){
    if(radix==2){
        return 0x40000000;
    }
    return Math.pow(radix, digits_per_int(radix));
}

//简易的字符串转int，不做任何参数验证，并且始终为正数
//若无法转换，抛出异常
private static int parse_int_buffer(String val, int radix, char[] digits){
    int result = 0;
    for (int i=0; i<val.length(); i++) {
        int digit = digits.find(val[i]);
        if (digit < 0) {
            throw new NumberFormatException("Illegal digit");
        }
        result *= radix;
        result += digit;
    }
    return result;
}


//x = x*y+z
private static void bits_multiply_add_buffer(int[] x, int y, int z) {
    long ylong = Math.uint_to_long(y);
    long zlong = Math.uint_to_long(z);

    long product = 0;
    long carry = 0;
    for (int i = x.length-1; i >= 0; i--) {
        product = ylong * Math.uint_to_long(x[i]) + carry;
        x[i] = (int)product;
        carry = product >>> 32;
    }

    long sum = Math.uint_to_long(x[x.length-1]) + zlong;
    x[x.length-1] = (int)sum;
    carry = sum >>> 32;
    for (int i = x.length - 2; i >= 0; i--) {
        sum = Math.uint_to_long(x[i]) + carry;
        x[i] = (int)sum;
        carry = sum >>> 32;
    }
}
```