# 错误号

<WinError.h>定义了WIN32 API中的错误号，错误号是一个32位整数。

<table>
	<thead><th>位</th><th>描述</th></thead>
	<tbody>
		<tr><td>31</td><td rowspan="2">严重性<br/>0 = 成功<br/>1 = 信息（提示）<br/>2 = 警告<br/>3 = 错误</td></tr>
		<tr><td>30</td></tr>
		<tr><td>29</td><td>系统/用户<br/>0 = 系统代码<br/>1 = 用户定义代码</td></tr>
		<tr><td>28</td><td>保留为0</td></tr>
		<tr><td>27</td><td rowspan="12">Facility代码，前256个值保留</td></tr>
		<tr><td>26</td></tr>
		<tr><td>25</td></tr>
		<tr><td>24</td></tr>
		<tr><td>23</td></tr>
		<tr><td>22</td></tr>
		<tr><td>21</td></tr>
		<tr><td>20</td></tr>
		<tr><td>19</td></tr>
		<tr><td>18</td></tr>
		<tr><td>17</td></tr>
		<tr><td>16</td></tr>
		<tr><td>15</td><td rowspan="16">异常代码</td></tr>
		<tr><td>14</td></tr>
		<tr><td>13</td></tr>
		<tr><td>12</td></tr>
		<tr><td>11</td></tr>
		<tr><td>10</td></tr>
		<tr><td>9</td></tr>
		<tr><td>8</td></tr>
		<tr><td>7</td></tr>
		<tr><td>6</td></tr>
		<tr><td>5</td></tr>
		<tr><td>4</td></tr>
		<tr><td>3</td></tr>
		<tr><td>2</td></tr>
		<tr><td>1</td></tr>
		<tr><td>0</td></tr>
	</tbody>
</table>