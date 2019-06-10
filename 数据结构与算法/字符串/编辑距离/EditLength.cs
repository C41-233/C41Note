public static int Distance(string str1, string str2) {
	var diff = new int[str1.Length+1][str2.Length+1];
	for (var i = 0; i <= str1.Length; i++) {
		diff[i][0] = i;
	}
	for (var i = 0; i <= str2.Length; i++) {
		diff[0][i] = i;
	}
	for (var i = 1; i <= str1.Length; i++) {
		for (var j = 1; j <= str2.Length; j++) {
			if (str1[i-1] == str2[j-1]) {
				diff[i][j] = diff[i-1][j-1];
			} 
			else {
				diff[i][j] = Math.Min(
					diff[i-1][j-1] + 1,
					Math.Min(diff[i-1][j] + 1, diff[i][j-1] + 1)
				);
			}
		}
	}
	return diff[str1.Length][str2.Length];
}