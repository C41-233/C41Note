# 字符串转整数 - Java

``` Java
private static final char[] DEFAULT_DIGITS = new char[]{
	'0','1','2','3','4','5','6','7','8','9',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
	'O','P','Q','R','S','T','U','V','W','X','Y','Z'
};

public static int parseInt(String str, int radix, char[] digits){
	if (radix < 2 || radix > digits.length) {
		throw new NumberFormatException("Illegal radix");
	}
	if(str == null || str.length() == 0){
		throw new NumberFormatException("Illegal null string");
	}
	
	int result = 0;
	boolean negative = false;
	int limit;

	int index = 0;
	char firstChar = str.charAt(0);

	if (firstChar == '-'){
		negative = true;
		limit = Integer.MIN_VALUE;
		index++;
		if(str.length() == 1){
			throw new NumberFormatException(str);
		}
	}
	else{
		if(firstChar == '+'){
			index++;
			if(str.length() == 1){
				throw new NumberFormatException(str);
			}
		}
		negative = false;
		limit = -Integer.MAX_VALUE;
	}
		
	int multmin = limit / radix;
	while (index < str.length()) {
		if (result < multmin) {
			throw new NumberFormatException("Overflow");
		}
		
		int value = digits.find(str.charAt(index++));
		if (value < 0) {
			throw new NumberFormatException("Illegal digit");
		}
		result *= radix;
		if (result < limit+value) {
			throw new NumberFormatException("Overflow");
		}
		result -= value;
	}
	return negative ? result : -result;
}

public static int parseInt(String str, int radix){
	return parseInt(str, radix, DEFAULT_DIGITS);
}

public static int parseInt(String str){
	return parseInt(str, 10);
}
```