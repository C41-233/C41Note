# MD5 - Java

``` Java
public static byte[] digest(byte[] input){
    int length = input.length; //长度（字节）
    int groupCount = length / 64; //完整分组的个数
    long[] group = new long[16]; //每个小组(64字节)再细分后的16个小组(4字节)
    long[] result = {A, B, C, D};
    
    //处理每一个完整分组
    for(int step = 0; step < groupCount; step++){
        fillGroup(group, input,step*64);
        transform(result, group);
    }

    //处理最后一个分组
    int rest = length % 64;
    byte [] tmp = new byte[64];

    for(int i = 0; i < rest; i++) {
        tmp[i] = input[length-rest+i];
    }
    
    if(rest != 56){
        //先填充一个1，其余填充0
        tmp[rest]= (byte)(1 << 7);
    }
    
    //处理不够填充8字节长度的情况
    if(rest > 56) {
        //先处理当前组64字节
        fillGroup(group, tmp, 0);
        transform(result, group);

        //在后面追加一组64字节
        for(int i = 0; i < 56; i++) {
            tmp[i] = 0;
        }
    }

    //最后8字节填充长度
    long len = (long)(length << 3);
    for(int i = 0; i < 8; i++){
        tmp[56+i] = (byte)(len & 0xFF);
        len = len >> 8;
    }
    fillGroup(group, tmp, 0);
    transform(result, group);
    
    //组合ABCD形成128位结果
    byte[] output = new byte[16];
    for(int i = 0, j = 0; i < 16; i+=4, j++) {
        long value = result[j];
        for(int k = 0; k < 4; k++) {
            output[i + k] = (byte) (value & 0xFF);
            value >>= 8;
        }
    }
    return output;
}

private static final long A = 0x67452301;
private static final long B = 0xefcdab89;
private static final long C = 0x98badcfe;
private static final long D = 0x10325476;

private static final int S11 = 7;
private static final int S12 = 12;
private static final int S13 = 17;
private static final int S14 = 22;

private static final int S21 = 5;
private static final int S22 = 9;
private static final int S23 = 14;
private static final int S24 = 20;

private static final int S31 = 4;
private static final int S32 = 11;
private static final int S33 = 16;
private static final int S34 = 23;

private static final int S41 = 6;
private static final int S42 = 10;
private static final int S43 = 15;
private static final int S44 = 21;

/**
 * 用long来表示无符号byte
 */
public static long b2l(byte b){
    return b < 0 ? b & 0x7F + 128 : b;
 }

/**
 * 用long来表示32位，裁剪高32位
 */
private static long clip(long value) {
    return value & 0xFFFFFFFFL;
}

/**
 * 从input的from开始取512位，作为新的分组，将该512位的分组再细分成16个32位表示的long
 */
private static void fillGroup(long[] groups, byte[] input, int from){
    for(int i = 0; i < 16; i++){
        groups[i] = b2l( input[4*i+from] )
           | ( b2l(input[4*i+1+from]) ) << 8
           | ( b2l(input[4*i+2+from]) ) << 16
           | ( b2l(input[4*i+3+from]) ) << 24;
    }
}

/**
 * 四轮循环
 */
private static void transform(long[] result, long[] group) {
    long a = result[0], b = result[1], c = result[2], d = result[3];
    
    a = FF(a, b, c, d, group[0], S11, 0xd76aa478L);
    d = FF(d, a, b, c, group[1], S12, 0xe8c7b756L);
    c = FF(c, d, a, b, group[2], S13, 0x242070dbL);
    b = FF(b, c, d, a, group[3], S14, 0xc1bdceeeL);
    a = FF(a, b, c, d, group[4], S11, 0xf57c0fafL);
    d = FF(d, a, b, c, group[5], S12, 0x4787c62aL);
    c = FF(c, d, a, b, group[6], S13, 0xa8304613L);
    b = FF(b, c, d, a, group[7], S14, 0xfd469501L);
    a = FF(a, b, c, d, group[8], S11, 0x698098d8L);
    d = FF(d, a, b, c, group[9], S12, 0x8b44f7afL);
    c = FF(c, d, a, b, group[10], S13, 0xffff5bb1L);
    b = FF(b, c, d, a, group[11], S14, 0x895cd7beL);
    a = FF(a, b, c, d, group[12], S11, 0x6b901122L);
    d = FF(d, a, b, c, group[13], S12, 0xfd987193L);
    c = FF(c, d, a, b, group[14], S13, 0xa679438eL);
    b = FF(b, c, d, a, group[15], S14, 0x49b40821L);

    a = GG(a, b, c, d, group[1], S21, 0xf61e2562L);
    d = GG(d, a, b, c, group[6], S22, 0xc040b340L);
    c = GG(c, d, a, b, group[11], S23, 0x265e5a51L);
    b = GG(b, c, d, a, group[0], S24, 0xe9b6c7aaL);
    a = GG(a, b, c, d, group[5], S21, 0xd62f105dL);
    d = GG(d, a, b, c, group[10], S22, 0x2441453L);
    c = GG(c, d, a, b, group[15], S23, 0xd8a1e681L);
    b = GG(b, c, d, a, group[4], S24, 0xe7d3fbc8L);
    a = GG(a, b, c, d, group[9], S21, 0x21e1cde6L);
    d = GG(d, a, b, c, group[14], S22, 0xc33707d6L);
    c = GG(c, d, a, b, group[3], S23, 0xf4d50d87L);
    b = GG(b, c, d, a, group[8], S24, 0x455a14edL);
    a = GG(a, b, c, d, group[13], S21, 0xa9e3e905L);
    d = GG(d, a, b, c, group[2], S22, 0xfcefa3f8L);
    c = GG(c, d, a, b, group[7], S23, 0x676f02d9L);
    b = GG(b, c, d, a, group[12], S24, 0x8d2a4c8aL);

    a = HH(a, b, c, d, group[5], S31, 0xfffa3942L);
    d = HH(d, a, b, c, group[8], S32, 0x8771f681L);
    c = HH(c, d, a, b, group[11], S33, 0x6d9d6122L);
    b = HH(b, c, d, a, group[14], S34, 0xfde5380cL);
    a = HH(a, b, c, d, group[1], S31, 0xa4beea44L);
    d = HH(d, a, b, c, group[4], S32, 0x4bdecfa9L);
    c = HH(c, d, a, b, group[7], S33, 0xf6bb4b60L);
    b = HH(b, c, d, a, group[10], S34, 0xbebfbc70L);
    a = HH(a, b, c, d, group[13], S31, 0x289b7ec6L);
    d = HH(d, a, b, c, group[0], S32, 0xeaa127faL);
    c = HH(c, d, a, b, group[3], S33, 0xd4ef3085L);
    b = HH(b, c, d, a, group[6], S34, 0x4881d05L);
    a = HH(a, b, c, d, group[9], S31, 0xd9d4d039L);
    d = HH(d, a, b, c, group[12], S32, 0xe6db99e5L);
    c = HH(c, d, a, b, group[15], S33, 0x1fa27cf8L);
    b = HH(b, c, d, a, group[2], S34, 0xc4ac5665L);

    a = II(a, b, c, d, group[0], S41, 0xf4292244L);
    d = II(d, a, b, c, group[7], S42, 0x432aff97L); 
    c = II(c, d, a, b, group[14], S43, 0xab9423a7L);
    b = II(b, c, d, a, group[5], S44, 0xfc93a039L);
    a = II(a, b, c, d, group[12], S41, 0x655b59c3L);
    d = II(d, a, b, c, group[3], S42, 0x8f0ccc92L);
    c = II(c, d, a, b, group[10], S43, 0xffeff47dL);
    b = II(b, c, d, a, group[1], S44, 0x85845dd1L);
    a = II(a, b, c, d, group[8], S41, 0x6fa87e4fL);
    d = II(d, a, b, c, group[15], S42, 0xfe2ce6e0L);
    c = II(c, d, a, b, group[6], S43, 0xa3014314L);
    b = II(b, c, d, a, group[13], S44, 0x4e0811a1L);
    a = II(a, b, c, d, group[4], S41, 0xf7537e82L);
    d = II(d, a, b, c, group[11], S42, 0xbd3af235L);
    c = II(c, d, a, b, group[2], S43, 0x2ad7d2bbL);
    b = II(b, c, d, a, group[9], S44, 0xeb86d391L);

    result[0] = clip(result[0] + a);
    result[1] = clip(result[1] + b);
    result[2] = clip(result[2] + c);
    result[3] = clip(result[3] + d);
}

@FunctionalInterface
private static interface Delegate{
    
    public long call(long a, long b, long c);

    public static long F(long x, long y, long z) {
        return (x & y) | ((~x) & z);
    }

    public static long G(long x, long y, long z) {
        return (x & z) | (y & (~z));
    }

    public static long H(long x, long y, long z) {
        return x ^ y ^ z;
    }

    public static long I(long x, long y, long z) {
        return y ^ (x | (~z));
    }

}

private static long roundOnce(long a, long b, long c, long d, long m, long s, long t, Delegate delegate) {
    long tmp = clip(delegate.call(b, c, d));
    tmp = clip(tmp + a + m + t);
    tmp = (tmp << s) | (tmp >>> (32 - s));
    tmp = clip(tmp + b);
    return tmp;
}

private static long FF(long a, long b, long c, long d, long m, long s, long t) {
    return roundOnce(a, b, c, d, m, s, t, Delegate::F);
}

private static long GG(long a, long b, long c, long d, long m, long s, long t) {
    return roundOnce(a, b, c, d, m, s, t, Delegate::G);
}

private static long HH(long a, long b, long c, long d, long m, long s, long t) {
    return roundOnce(a, b, c, d, m, s, t, Delegate::H);
}

private static long II(long a, long b, long c, long d, long m, long s, long t) {
    return roundOnce(a, b, c, d, m, s, t, Delegate::I);
}
```