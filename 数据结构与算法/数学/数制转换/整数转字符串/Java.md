# 整数转字符串 - Java

``` Java
/*
 * radix == digits.length
 * radix >= 2
 */
public static String convert(int value, int radix, char[] digits){
    if(radix<2 || radix>digits.length){
        throw new NumberFormatException("Illegal radix");
    }
    if(value==0){
        return String.valueOf(digits[0]);
    }
    
    boolean negative = false;
    if(value<0){
        value = -value;
        negative = true;
    }
    
    StringBuilder characters = new StringBuilder();
    while(value!=0){
        int factor = value / radix;
        int remain = value % radix;
        characters.append(digits[remain]);
        value = factor;
    }
    if(negative){
        builder.append('-');
    }
    characters.reverse();
    return characters.toString();
}

public static String convert2(int value){
    return convert(value, 2, DEFAULT_DIGITS);
}

public static String convert10(int value){
    return convert(value, 10, DEFAULT_DIGITS);
}

public static String convert16(int value){
    return convert(value, 16, DEFAULT_DIGITS);
}
```

该算法要求整数除法必须向0取整。

``` Java
public static String itoa(int value){
    final char[] digits = new char[]{
        '9','8','7','6','5','4','3','2','1','0',
        '1','2','3','4','5','6','7','8','9'
    };
    final int zeroIndex = 9;
    
    StringBuilder buffer = new StringBuilder();
    int i = value;
    do{
        int lsd = i % 10;
        i /= 10;
        buffer.append(digits[zeroIndex+lsd]);
    } while(i != 0);
    if(value < 0){
        buffer.append('-');
    }
    buffer.reverse();
    return buffer.toString();
}
```