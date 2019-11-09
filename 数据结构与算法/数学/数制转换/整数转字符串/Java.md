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