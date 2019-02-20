public static int distance(String str1, String str2) {
	int len1 = str1.length();
	int len2 = str2.length();
	int[][] diff = new int[len1+1][len2+1];
	for (int i = 0; i <= len1; i++) {
		diff[i][0] = i;
	}
	for (int i = 0; i <= len2; i++) {
		diff[0][i] = i;
	}
	for (int i = 1; i <= len1; i++) {
		for (int j = 1; j <= len2; j++) {
			if (str1.charAt(i-1) == str2.charAt(j-1)) {
				diff[i][j] = diff[i-1][j-1];
			} 
			else {
				diff[i][j] = Math.min(
					diff[i-1][j-1] + 1,
					Math.min(diff[i-1][j] + 1, diff[i][j-1] + 1)
				);
			}
		}
	}
	return diff[len1][len2];
}
