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

## 辅助方法
``` Java
private static long uint_to_long(int i) {
    return i & 0xFFFFFFFFL;
}

private static int ubyte_to_int(byte b) {
    return b & 0xFF;
}

public static int bitLength(int i) {
    if (i == 0){
        return 0;
    }
    int n = 1;
    if (i >>> 16 == 0) { n += 16; i <<= 16; }
    if (i >>> 24 == 0) { n +=  8; i <<=  8; }
    if (i >>> 28 == 0) { n +=  4; i <<=  4; }
    if (i >>> 30 == 0) { n +=  2; i <<=  2; }
    n -= i >>> 31;
    return 32 - n;
}
```

## 构造

### 基于byte数组构造
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
        result[i] = ubyte_to_int(bits[index--]);
        int bytesToTransfer = Math.min(3, index - keep + 1);
        for (int j = 8; j <= (bytesToTransfer<<3); j+=8){
            result[i] |= ubyte_to_int(bits[index--])<<j;
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
        result[i] = ubyte_to_int(bits[index--]);
        int numBytesToTransfer = Math.min(3, index-keep+1);
        if (numBytesToTransfer < 0){
            numBytesToTransfer = 0;
        }
        for (int j=8; j<=8*numBytesToTransfer; j+=8){
            result[i] |= ubyte_to_int(bits[index--]) << j;
        }

        int mask = -1 >>> (3-numBytesToTransfer)*8;
        result[i] = ~result[i] & mask;
    }

    for (int i=result.length-1; i>=0; i--) {
        result[i] = (int)(uint_to_long(result[i])+1);
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

### 基于String构造

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
    if(radix == 2){
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
    long ylong = uint_to_long(y);
    long zlong = uint_to_long(z);

    long product = 0;
    long carry = 0;
    for (int i = x.length-1; i >= 0; i--) {
        product = ylong * uint_to_long(x[i]) + carry;
        x[i] = (int)product;
        carry = product >>> 32;
    }

    long sum = uint_to_long(x[x.length-1]) + zlong;
    x[x.length-1] = (int)sum;
    carry = sum >>> 32;
    for (int i = x.length - 2; i >= 0; i--) {
        sum = uint_to_long(x[i]) + carry;
        x[i] = (int)sum;
        carry = sum >>> 32;
    }
}
```

### 基于值的构造
``` Java
public BigInt(long val) {
    if (val == 0){
        this.signum = 0;
        this.bits = new int[0];
        return;
    }
    
    if (val < 0) {
        val = -val;
        this.signum = -1;
    } 
    else {
        this.signum = 1;
    }

    int highWord = (int)(val>>>32);
    if (highWord == 0) {
        bits = new int[1];
        bits[0] = (int)val;
    } 
    else {
        bits = new int[2];
        bits[0] = highWord;
        bits[1] = (int)val;
    }
}
```

## 值运算

### 辅助位运算
``` Java
private static int[] bits_plus(int[] x, int[] y) {
    if (x.length < y.length) {
        int[] tmp = x;
        x = y;
        y = tmp;
    }

    int xIndex = x.length;
    int yIndex = y.length;
    int result[] = new int[x.length];
    long sum = 0;

    while (yIndex > 0){
        sum = uint_to_long(x[--xIndex]) + uint_to_long(y[--yIndex]) + (sum>>>32);     
        result[xIndex] = (int)sum;
    }

    boolean carry = sum>>>32 != 0;
    while (xIndex>0 && carry){
        xIndex--;
        result[xIndex] = x[xIndex+1]+1;
        carry = result[xIndex] == 0;
    }
    while (xIndex > 0){
        result[xIndex-1] = x[xIndex];
        xIndex--;
    }

    if (carry) {
        int bigger[] = new int[result.length+1];
        System.arraycopy(result, 0, bigger, 1, result.length);
        bigger[0] = 1;
        return bigger;
    }else{
        return result;
    }
}

private static int[] bits_minus(int[] x, int[] y) {
    int xIndex = x.length;
    int yIndex = y.length;
    int result[] = new int[xIndex];
    long difference = 0;

    while(yIndex > 0) {
        difference = uint_to_long(x[--xIndex]) - uint_to_long(y[--yIndex]) + (difference>>32);
        result[xIndex] = (int)difference;
    }

    boolean borrow = difference>>32 != 0;
    while (xIndex > 0 && borrow){
        xIndex--;
        result[xIndex] = x[xIndex+1]-1;
        borrow =result[xIndex] == -1;
    }

    while (xIndex > 0){
        result[xIndex-1] = x[xIndex];
        xIndex--;
    }
        
    return result;
}
```

### 加法
``` Java
public BigInt add(BigInt val) {
    if (val.signum == 0){
        return this;
    }
    if (this.signum == 0){
        return val;
    }
    if (val.signum == this.signum){
        return new BigInt(bits_plus(bits, val.bits), this.signum);
    }
    
    int cmp = bits_compare(this.bits, val.bits);
    if (cmp == 0){
        return ZERO;
    }
    int[] bits = cmp>0 ? bits_minus(this.bits, val.bits) : bits_minus(val.bits, this.bits);
    return new BigInt(bits, cmp==this.signum ? 1 : -1);
}
```

### 减法
``` Java
public BigInt subtract(BigInt val) {
    if (val.signum == 0){
        return this;
    }
    if (this.signum == 0){
        return val.negate();
    }
    if (val.signum != this.signum){
        return new BigInt(bits_plus(this.bits, val.bits), this.signum);
    }
    
    int cmp = bits_compare(this.bits, val.bits);
    if (cmp == 0){
        return ZERO;
    }
    int[] bits = cmp>0 ? bits_minus(this.bits, val.bits) : bits_minus(val.bits, this.bits);
    return new BigInt(bits, cmp == this.signum ? 1 : -1);
}
```

### 取反
``` Java
public BigInt negate(){
    return new BigInt(this.bits, -this.signum);
}
```

### 绝对值
``` Java
public BigInt abs() {
    return this.signum>=0 ? this : this.negate();
}
```

### 乘法
``` Java
public BigInt multiply(BigInt val) {
    if (val.signum == 0 || this.signum == 0){
        return ZERO;
    }
    int[] result = bits_multiply(this.bits, val.bits);
    return new BigInt(result, this.signum == val.signum ? 1 : -1);
}

private int[] bits_multiply(int[] x, int[] y) {
    int xstart = x.length - 1;
    int ystart = y.length - 1;
    int[] z = new int[x.length + y.length];
    
    long carry = 0;
    for (int i = ystart, j = xstart+ystart+1; i >= 0; i--,j--) {
        long product = uint_to_long(y[i]) * uint_to_long(x[xstart]) + carry;
        z[j] = (int)product;
        carry = product >>> 32;
    }
    z[xstart] = (int)carry;
    for (int i = xstart-1; i >= 0; i--) {
        carry = 0;
        for (int j = ystart, k = ystart+1+i; j >= 0; j--, k--) {
            long product = uint_to_long(y[j]) * uint_to_long(x[i]) + uint_to_long(z[k]) + carry;
            z[k] = (int)product;
            carry = product >>> 32;
        }
        z[i] = (int)carry;
    }
    return z;
}
```

### 除法
``` Java
public BigInt divide(BigInt val) {
    if (val.signum == 0){
        throw new ArithmeticException("Divide by zero");
    }
    BufferedBigInt quotient = new BufferedBigInt();
    BufferedBigInt remainder = new BufferedBigInt();
    BufferedBigInt dividend = new BufferedBigInt(this.bits);
    BufferedBigInt divider = new BufferedBigInt(val.bits);
                      
    dividend.divide(divider, quotient, remainder);
    return new BigInt(quotient.bits_array(), this.signum==val.signum ? 1 : -1);
}
```

### 余数、模
余数是有符号的，模是非负的。

``` Java
public BigInt remainder(BigInt val) {
    BufferedBigInt quotient = new BufferedBigInt();
    BufferedBigInt remainder = new BufferedBigInt();
    BufferedBigInt dividend = new BufferedBigInt(this.bits);
    BufferedBigInt divider = new BufferedBigInt(val.bits);
    
    dividend.divide(divider, quotient, remainder);
    return new BigInt(remainder.bits_array(), this.signum);
}
  
public BigInt mod(BigInt val) {
    if (val.signum <= 0){
        throw new ArithmeticException("BigInteger: modulus not positive");
    }   
    BigInt result = this.remainder(val);
    return result.signum>=0 ? result : result.add(val);
}
```

## 位运算

### 最小位数
二进制补码的最小位数。
``` Java
public int bitLength() {
    if (this.bits.length == 0) {
        return 0;
    } 
    
    int magBitLength = ((this.bits.length-1) << 5) + Integer.bitLength(this.bits[0]);
    if (this.signum >= 0){
        return magBitLength;
    }

    boolean pow2 = Integer.bitCount(this.bits[0]) == 1;
    for (int i = 1; i < this.bits.length && pow2; i++){
        pow2 = this.bits[i]==0;
    }
    return pow2 ? magBitLength-1 : magBitLength;
}
```

### 与
``` Java
public BigInt and(BigInt val) {
    int[] result = new int[Math.max(this.bits.length, val.bits.length)];
    for (int i = 0; i < result.length; i++){
        result[i] = this.get_int_at(result.length-i-1) & val.get_int_at(result.length-i-1);
    }
    return new BigInt(result);
}
```

### 或
``` Java
public BigInt or(BigInt val) {
    int[] result = new int[Math.max(this.bits.length, val.bits.length)];
    for (int i=0; i<result.length; i++){
        result[i] = this.get_int_at(result.length-i-1) | val.get_int_at(result.length-i-1);
    }
    return new BigInt(result);
}
```

### 异或
``` Java
public BigInt xor(BigInt val) {
    int[] result = new int[Math.max(this.bits.length, val.bits.length)];
    for (int i = 0; i < result.length; i++){
        result[i] = this.get_int_at(result.length-i-1) ^ val.get_int_at(result.length-i-1);
    }
    return new BigInt(result);
}
```

### 非
``` Java
public BigInt not() {
    int[] result = new int[this.bits.length];
    for (int i = 0; i < result.length; i++){
        result[i] = ~get_int_at(result.length-i-1);
    }
    return new BigInt(result);
}
```

### 左移
``` Java
public BigInt shiftLeft(int n) {
    if (this.signum == 0){
        return ZERO;
    }
    if (n==0){
        return this;
    }
    if (n<0) {
        if (n == Integer.MIN_VALUE) {
            return shiftRight(Integer.MAX_VALUE).shiftRight(1);
        } else {
            return shiftRight(-n);
        }
    }

    int nInts = n>>>5;
    int nBits = n&0x1F;
    int bits[];

    if (nBits == 0) {
        bits = new int[this.bits.length+nInts];
        for (int i=0; i<this.bits.length; i++){
            bits[i] = this.bits[i];
        }
    } 
    else {
        int i = 0;
        int nBits2 = 32-nBits;
        int highBits = this.bits[0]>>>nBits2;
        if (highBits != 0) {
            bits = new int[this.bits.length+nInts+1];
            bits[i++] = highBits;
        } 
        else {
            bits = new int[this.bits.length+nInts];
        }
        int j=0;
        while (j < this.bits.length-1){
            bits[i++] = this.bits[j]<<nBits | this.bits[j+1]>>>nBits2;
            j++;
        }
        bits[i] = this.bits[j]<<nBits;
    }

    return new BigInt(bits, this.signum);
}

```

### 算术右移
``` Java
public BigInt shiftRight(int n) {
    if (n==0){
        return this;
    }
    if (n<0) {
        if (n == Integer.MIN_VALUE) {
            return  shiftLeft(Integer.MAX_VALUE).shiftLeft(1);
        } 
        else {
            return shiftLeft(-n);
        }
    }

    int nInts = n >>> 5;
    int nBits = n & 0x1F;
    int bits[];

    if (nInts >= this.bits.length){
        return (this.signum >= 0 ? ZERO : MINUS_ONE);
    }
        
    if (nBits == 0) {
        int newMagLen = this.bits.length-nInts;
        bits = new int[newMagLen];
        for (int i = 0; i<newMagLen; i++){
            bits[i] = this.bits[i];
        }
    } 
    else {
        int i = 0;
        int highBits = this.bits[0]>>>nBits;
        if (highBits != 0) {
            bits = new int[this.bits.length-nInts];
            bits[i++] = highBits;
        } 
        else {
            bits = new int[this.bits.length-nInts-1];
        }

        int nBits2 = 32-nBits;
        for (int j=0; j < this.bits.length-nInts-1; j++){
            bits[i++] = this.bits[j]<<nBits2 | this.bits[j+1]>>>nBits;
        }
    }

    if (this.signum < 0) {
        boolean onesLost = false;
        for (int i=this.bits.length-1, j=this.bits.length-nInts; i>=j && !onesLost; i--){
            onesLost = (this.bits[i] != 0);
        }
        if (!onesLost && nBits != 0){
            onesLost = this.bits[this.bits.length-nInts-1]<<(32-nBits) !=0 ;
        }
        if (onesLost){
            bits = bits_expand(bits);
        }
    }
    return new BigInt(bits, this.signum);
}

//有符号扩展
private static int[] bits_expand(int[] val) {
    int lastBit = 0;
    for (int i=val.length-1; i >= 0 && lastBit==0; i--){
        lastBit = (val[i] += 1);
    }
    if (lastBit == 0) {
        val = new int[val.length+1];
        val[0] = 1;
    }
    return val;
}
```

## 其他

### 位访问

``` Java
public boolean getBitAt(int n) {
    if (n<0){
        throw new ArithmeticException("Negative bit address");
    }
    return (get_int_at(n>>>5) & (1<<(n&31))) != 0;
}

public BigInt setBit1At(int n) {
    if (n < 0){
        throw new ArithmeticException("Negative bit address");
    }
        
    int intNum = n>>>5;
    int[] result = new int[Math.max(this.bits.length, intNum+2)];

    for (int i = 0; i < result.length; i++){
        result[result.length-i-1] = get_int_at(i);
    }
    result[result.length-intNum-1] |= 1<<(n&31);
    return new BigInt(result);
}

public BigInt setBit0At(int n) {
    if (n < 0){
        throw new ArithmeticException("Negative bit address");
    }
        
    int intNum = n >>> 5;
    int[] result = new int[Math.max(this.bits.length, ((n+1)>>>5)+1)];

    for (int i = 0; i < result.length; i++){
        result[result.length-i-1] = get_int_at(i);
    }
        
    result[result.length-intNum-1] &= ~(1<<(n&31));
    return new BigInt(result);
}

public BigInt flipBitAt(int n) {
    if (n < 0){
        throw new ArithmeticException("Negative bit address");
    }
        
    int intNum = n >>> 5;
    int[] result = new int[Math.max(this.bits.length, intNum+2)];
    for (int i=0; i<result.length; i++){
        result[result.length-i-1] = get_int_at(i);
    }
    result[result.length-intNum-1] ^= (1 << (n&31));
    return new BigInt(result);
}

//获取bit数组的第n个int，该方法可以返回超出数组大小的符号位
private int get_int_at(int n) {
    if (n >= this.bits.length){
        return signum<0 ? -1 : 0;
    }
    int bit = this.bits[this.bits.length-n-1];
    if (this.signum >= 0){
        return bit;
    }
    else{
        return n==this.bits.length-1 ? ~bit : -bit;
    }
}
```

### 比较
``` Java
public int compareTo(BigInt val) {
    if (this.signum == val.signum) {
        switch (signum) {
        case 1:
            return bits_compare(this.bits, val.bits);
        case -1:
            return bits_compare(val.bits, this.bits);
        default:
            return 0;
        }
    }
    return this.signum > val.signum ? 1 : -1;
}

private static int bits_compare(int[] x, int[] y) {
    if (x.length < y.length){
        return -1;
    }
    if (x.length > y.length){
        return 1;
    }
    for (int i=0; i<x.length; i++) {
        int a = x[i];
        int b = y[i];
        if (a != b){
            return uint_to_long(a) < uint_to_long(b) ? -1 : 1;
        }
    }
    return 0;
}
```

### 转换
``` Java
public int intValue() {
    int result = 0;
    result = get_int_at(0);
    return result;
}

public long longValue() {
    long result = 0;
    for (int i = 1; i >= 0; i--){
        result = (result<<32) + uint_to_long(get_int_at(i));
    }
    return result;
}

public byte[] toByteArray() {
    int byteLen = bitLength()/8 + 1;
    byte[] byteArray = new byte[byteLen];

    for (int i = byteLen-1, bytesCopied = 4, nextInt = 0, intIndex = 0; i >= 0; i--) {
        if (bytesCopied == 4) {
            nextInt = get_int_at(intIndex++);
            bytesCopied = 1;
        } 
        else {
            nextInt >>>= 8;
            bytesCopied++;
        }
        byteArray[i] = (byte)nextInt;
    }
    return byteArray;
}

public String toString(int radix, char[] digits) {
    if (this.signum == 0){
        return String.valueOf(digits[0]);
    }
    if (radix < 2 || radix > digits.length){
        throw new NumberFormatException("Illegal radix");
    }

    ArrayList<String> digitGroup = new ArrayList<>();
    BigInt targetRadix = new BigInt(int_radix(radix));
    int digits_per_int = digits_per_int(radix);
    
    BigInt tmp = this.abs();
    while (tmp.signum != 0) {
        BufferedBigInt quotient = new BufferedBigInt();
        BufferedBigInt remainder = new BufferedBigInt();
        BufferedBigInt divident = new BufferedBigInt(tmp.bits);
        BufferedBigInt divider = new BufferedBigInt(targetRadix.bits);
        divident.divide(divider, quotient, remainder);
           
        BigInt q2 = new BigInt(quotient.bits_array(), tmp.signum*targetRadix.signum);
        BigInt r2 = new BigInt(remainder.bits_array(), tmp.signum*targetRadix.signum);

        digitGroup.append(Long.toString(r2.longValue(), radix, digits));
        tmp = q2;
    }

    StringBuilder buf = new StringBuilder(digitGroup.size()*digits_per_int+1);
    if (this.signum<0){
        buf.append('-');
    }
    buf.append(digitGroup[digitGroup.size()-1]);
    for (int i=digitGroup.size()-2; i>=0; i--) {
        int numLeadingZeros = digits_per_int-digitGroup[i].length();
        for(int k = 0; k < numLeadingZeros; k++){
            buf.append(digits[0]);
        }
        buf.append(digitGroup[i]);
    }
    return buf.toString();
}
```

## BufferedBigInt

BufferedBigInt是一个可变的无符号大整数，用于加速大规模计算。主要协助BigInt进行除法运算。

``` Java
private class BufferedBigInt{
    
    private int[] bits;
    private int intLen;
    private int offset;
    
    public BufferedBigInt(){
        clean();
    }
    
    public BufferedBigInt(int val){
        clean(val);
    }
    
    public BufferedBigInt(int[] val){
        clean(val);
    }
    
    public BufferedBigInt(BufferedBigInt val){
        clean(val);
    }
    
    public void clean(){
        this.bits = new int[1];
        this.intLen = 0;
        this.offset = 0;
    }
    
    public void clean(int val){
        this.bits = new int[1];
        this.intLen = 1;
        this.offset = 0;
        this.bits[0] = val;
    }

    public void clean(int[] val){
        this.bits = val;
        this.intLen = val.length;
        this.offset = 0;
    }
    
    public void clean(BufferedBigInt val){
        this.intLen = val.intLen;
        this.offset = 0;
        this.bits = Arrays.copyOfRange(val.bits, val.offset, val.offset+this.intLen);
    }
    
    public int[] bits_array(){
        if (this.offset != 0 || this.bits.length != this.intLen){
            return Arrays.copyOfRange(this.bits, this.offset, this.offset+this.intLen);
        }
        return this.bits;
    }
    private void normalize();
    
    public int compare(BufferedBigInt b);
    
    public void divide(BufferedBigInt b, BufferedBigInt quotient, BufferedBigInt remainder);
    
    public void leftShift(int n);
    
    public void rightShift(int n);
    
}
```

### normalize
``` Java
//调整成员结构
private void normalize(){
    if (this.intLen == 0) {
        this.offset = 0;
        return;
    }

    int index = this.offset;
    if (this.bits[index] != 0){
        return;
    }

    int indexBound = index+this.intLen;
    do {
        index++;
    } while(index<indexBound && this.bits[index]==0);

    int numZeros = index-this.offset;
    this.intLen -= numZeros;
    this.offset = this.intLen==0 ?  0 : this.offset+numZeros;
}
```

### compare
``` Java
public int compare(BufferedBigInt b){
    if (this.intLen < b.intLen){
        return -1;
    }
    if (this.intLen > b.intLen){
       return 1;
    }

    for (int i = this.offset, j = b.offset; i < this.intLen+this.offset; i++,j++) {
        int b1 = this.bits[i] + 0x80000000;
        int b2 = b.bits[j]  + 0x80000000;
        if (b1 < b2){
            return -1;
        }
        if (b1 > b2){
            return 1;
        }
    }
    return 0;
}
```

### divide
``` Java
public void divide(BufferedBigInt b, BufferedBigInt quotient, BufferedBigInt remainder) {
    if (this.intLen == 0) {
        return;
    }

    int cmp = compareTo(b);
    if (cmp < 0) {
        remainder.clean(this);
        return;
    }
    if (cmp == 0) {
        quotient.bits[0] = 1;
        quotient.intLen = 1;
        quotient.offset = 0;
        return;
    }

    if (b.intLen == 1) {
        int r = divide_one_word(b.bits[b.offset], quotient);
        if (r == 0){
            return;
        }
        remainder.clean(r);
        return;
    }

    int[] div = Arrays.copyOfRange(b.bits, b.offset, b.offset+b.intLen);
    bits_divide(div, quotient, remainder);
}

private void bits_divide(int[] divisor, BufferedBigInt quotient, BufferedBigInt remainder) {
    remainder.clean(new int[this.intLen+1]);
    System.arraycopy(this.bits, this.offset, remainder.bits, 1, this.intLen);
    remainder.intLen = this.intLen;
    remainder.offset = 1;

    final int nlen = remainder.intLen;
    final int dlen = divisor.length;
    
    int limit = nlen - dlen + 1;
    if (quotient.bits.length < limit) {
        quotient.bits = new int[limit];
        quotient.offset = 0;
    }
    quotient.intLen = limit;
    int[] q = quotient.bits;
    int shift = 32 - bitLength(divisor[0]);
    if (shift > 0) {
        primitive_left_shift(divisor, dlen, shift);
        remainder.leftShift(shift);
    }

    if (remainder.intLen == nlen) {
        remainder.offset = 0;
        remainder.bits[0] = 0;
        remainder.intLen++;
    }

    int dh = divisor[0];
    long dhLong = uint_to_long(dh);
    int dl = divisor[1];
    int[] qWord = new int[2];

    for(int j = 0; j < limit; j++) {
        int qhat = 0;
        int qrem = 0;
        boolean skipCorrection = false;
        int nh = remainder.bits[j+remainder.offset];
        int nh2 = nh + 0x80000000;
        int nm = remainder.bits[j+1+remainder.offset];

        if (nh == dh) {
            qhat = ~0;
            qrem = nh + nm;
            skipCorrection = qrem + 0x80000000 < nh2;
        } 
        else {
            long nChunk = ((long)nh)<<32 | uint_to_long(nm);
            if (nChunk >= 0) {
                qhat = (int) (nChunk / dhLong);
                qrem = (int) (nChunk - (qhat * dhLong));
            } 
            else {
                div_word(qWord, nChunk, dh);
                qhat = qWord[0];
                qrem = qWord[1];
            }
        }

        if (qhat == 0){
            continue;
        }

        if (!skipCorrection) {
            long nl = uint_to_long(remainder.bits[j+2+remainder.offset]);
            long rs = uint_to_long(qrem)<<32 | nl;
            long estProduct = uint_to_long(dl ) * uint_to_long(qhat);

            if (estProduct == rs) {
                qhat--;
                qrem = (int)(uint_to_long(qrem)+dhLong);
                if (uint_to_long(qrem) >=  dhLong) {
                    estProduct -= uint_to_long(dl);
                    rs = uint_to_long(qrem)<<32 | nl;
                    if (estProduct == rs){
                        qhat--;
                    }
                }
            }
        }

        remainder.bits[j+remainder.offset] = 0;
        int borrow = bits_muladd(remainder.bits, divisor, qhat, dlen, j+remainder.offset);

        if (borrow+0x80000000 > nh2) {
            bits_divadd(divisor, remainder.bits, j+1+remainder.offset);
            qhat--;
        }
        q[j] = qhat;
    }

    if (shift > 0){
        remainder.rightShift(shift);
    }

    quotient.normalize();
    remainder.normalize();
}

private static int bits_divadd(int[] a, int[] result, int offset) {
    long carry = 0;
    for (int j=a.length-1; j >= 0; j--) {
        long sum = uint_to_long(a[j]) + uint_to_long(result[j+offset]) + carry;
        result[j+offset] = (int)sum;
        carry = sum >>> 32;
    }
    return (int)carry;
}

private static int bits_muladd(int[] q, int[] a, int x, int len, int offset) {
    long xLong = uint_to_long(x);
    long carry = 0;
    offset += len;

    for (int j=len-1; j>= 0; j--) {
        long product = uint_to_long(a[j]) * xLong + carry;
        long difference = q[offset] - product;
        q[offset--] = (int)difference;
        carry = (product >>> 32) 
            + ( (difference&0xFFFFFFFFL) > uint_to_long(~(int)product) ? 1 : 0 );
    }
    return (int)carry;
}

private int divide_one_word(int divisor, BufferedBigInt quotient) {
    long divisorLong = uint_to_long(divisor);
    if (this.intLen == 1) {
        long dividendValue = uint_to_long(this.bits[this.offset]);
        int q = (int)(dividendValue / divisorLong);
        int r = (int)(dividendValue - q * divisorLong);
        quotient.bits[0] = q;
        quotient.intLen = (q==0) ? 0 : 1;
        quotient.offset = 0;
        return r;
    }

    if (quotient.bits.length < this.intLen){
        quotient.bits = new int[this.intLen];
    }
    quotient.offset = 0;
    quotient.intLen = this.intLen;

    int shift = 32 - bitLength(divisor);

    int rem = this.bits[this.offset];
    long remLong = uint_to_long(rem);
    if (remLong < divisorLong) {
        quotient.bits[0] = 0;
    } else {
        quotient.bits[0] = (int)(remLong/divisorLong);
        rem = (int)(remLong-quotient.bits[0]*divisorLong);
        remLong = uint_to_long( rem);
    }

    int xlen = this.intLen;
    int[] qWord = new int[2];
    while (--xlen > 0) {
        long dividendEstimate = (remLong<<32) | (uint_to_long(this.bits[this.offset+this.intLen-xlen]));
        if (dividendEstimate >= 0) {
            qWord[0] = (int)(dividendEstimate / divisorLong);
            qWord[1] = (int)(dividendEstimate - qWord[0] * divisorLong);
        } 
        else {
            div_word(qWord, dividendEstimate, divisor);
        }
        quotient.bits[this.intLen-xlen] = qWord[0];
        rem = qWord[1];
        remLong = uint_to_long(rem);
    }

    quotient.normalize();
    if (shift > 0){
        return rem%divisor;
    }
    else{
        return rem;
    }
}

private void div_word(int[] result, long n, int d) {
    long dLong = uint_to_long(d);

    if (dLong == 1) {
        result[0] = (int)n;
        result[1] = 0;
        return;
    }

    long q = (n >>> 1) / (dLong >>> 1);
    long r = n - q*dLong;

    while (r < 0) {
        r += dLong;
        q--;
    }
    while (r >= dLong) {
        r -= dLong;
        q++;
    }

    result[0] = (int)q;
    result[1] = (int)r;
}
```

### leftShift
``` Java

public void leftShift(int n) {
    if (this.intLen == 0){
       return;
    }
    int nInts = n >>> 5;
    int nBits = n & 0x1F;
    int bitsInHighWord = bitLength(this.bits[this.offset]);

    if (n <= 32-bitsInHighWord) {
        bits_leftshift(nBits);
        return;
    }

    int newLen = this.intLen + nInts + 1;
    if (nBits <= 32 - bitsInHighWord){
        newLen--;
    }
    if (this.bits.length < newLen) {
        int[] result = new int[newLen];
        for (int i=0; i<this.intLen; i++){
            result[i] = this.bits[this.offset+i];
        }
        clean(result);
    } 
    else if (this.bits.length-this.offset >= newLen) {
        for(int i = 0; i < newLen-this.intLen; i++){
            this.bits[this.offset+this.intLen+i] = 0;
        }
    } 
    else {
        for (int i = 0; i < this.intLen; i++){
            this.bits[i] = this.bits[this.offset+i];
        }
        for (int i = this.intLen; i < newLen; i++){
            this.bits[i] = 0;
        }
        this.offset = 0;
    }
    this.intLen = newLen;
    if (nBits == 0){
        return;
    }
    if (nBits <= 32-bitsInHighWord){
        bits_leftshift(nBits);
    }
    else{
        bits_rightshift(32-nBits);
    }
}

//左移不超过32位
private void bits_leftshift(int n) {
    int[] val = this.bits;
    int n2 = 32 - n;
    for (int i = this.offset, c=val[i], m = i+this.intLen-1; i < m; i++) {
        int b = c;
        c = val[i+1];
        val[i] = (b << n) | (c >>> n2);
    }
    val[this.offset+this.intLen-1] <<= n;
}

private static void primitive_left_shift(int[] a, int len, int n) {
    if (len==0 || n==0){
        return;
    }

    int n2 = 32-n;
    for (int i = 0, c = a[i], m = i+len-1; i < m; i++) {
        int b = c;
        c = a[i+1];
        a[i] = (b<<n) | (c>>>n2);
    }
    a[len-1] <<= n;
}
```

### rightShift
``` Java
public void rightShift(int n) {
    if (this.intLen == 0){
        return;
    }
    int nInts = n >>> 5;
    int nBits = n & 0x1F;
    this.intLen -= nInts;
    if (nBits == 0){
        return;
    }
    int bitsInHighWord = bitLength(this.bits[this.offset]);
    if (nBits >= bitsInHighWord) {
        bits_leftshift(32-nBits);
        this.intLen--;
    } 
    else {
        bits_rightshift(nBits);
    }
}

//右移不大于32位
private void bits_rightshift(int n) {
    int[] val = this.bits;
    int n2 = 32 - n;
    for (int i = this.offset+this.intLen-1, c = val[i]; i > this.offset; i--) {
        int b = c;
        c = val[i-1];
        val[i] = (c<<n2) | (b>>>n);
    }
    val[this.offset] >>>= n;
}
```