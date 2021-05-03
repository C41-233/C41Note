# 工作调度 - C++

输入：第一行为工作数N，此后每一行表示每项工作，第一个数表示截止时间，第二个数表示利润。

``` C++
#include <algorithm>
#include <iostream>
#include <queue>

using namespace std;

struct Work {
	long long d; //截止时间
	long long p; //利润
} Works[100005];

bool cmp(const Work& a, const Work& b) {
	return a.d < b.d;
}

int main() {
	long long n;
	cin >> n;
	for (auto i = 1; i <= n; i++) {
		scanf("%lld%lld", &Works[i].d, &Works[i].p);
	}

	//按照截止时间从小到大排序
	sort(Works + 1, Works + n + 1, cmp);

	//从小到大维护当前选择的工作的利润
	priority_queue<long long> queue;

	long long ans = 0;
	for (auto i = 1; i <= n; i++) {
        //这项工作无法满足截止时间
		if (Works[i].d <= queue.size()) {
			//第i项工作利润更高，反悔
			if (Works[i].p > queue.top()) {
				ans += Works[i].p - queue.top();
				queue.pop();
				queue.push(Works[i].p);
			}
			//否则不做
			else {
				continue;
			}
		}
        //贪心，先做这项工作
		else {
			ans += Works[i].p;
			queue.push(Works[i].p);
		}
	}
	cout << ans << endl;
	return 0;
}
```