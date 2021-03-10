# 编辑距离

编辑距离，又称Levenshtein距离，是指两个字符串之间，由一个转换成另一个所需的最少编辑操作次数。编辑操作包括将一个字符替换成另一个字符，插入一个字符，删除一个字符。

例如，求字符串"beauty"和"batyu"的编辑距离。

<table>
	<tr><th colspan="2" rowspan="2"></th><th></th><th>b</th><th>a</th><th>t</th><th>y</th><th>u</th></tr>
	<tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
	<tr><th></th><th>0</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
	<tr><th>b</th><th>1</th><td>1</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
	<tr><th>e</th><th>2</th><td>2</td><td>1</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
	<tr><th>a</th><th>3</th><td>3</td><td>2</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
	<tr><th>u</th><th>4</th><td>4</td><td>3</td><td>2</td><td>2</td><td>3</td><td>3</td></tr>
	<tr><th>t</th><th>5</th><td>5</td><td>4</td><td>3</td><td>2</td><td>3</td><td>4</td></tr>
	<tr><th>y</th><th>6</th><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>3</td></tr>
</table>

某一个单元格的值计算如下：若对应的字符相等，则左上格的值不变；否则加1。上格与左格的值分别加1。该单元格的值等于调整后的左格、上格、左上格的最小值。

求得编辑距离为3。
