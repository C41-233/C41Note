# 二叉堆（最大堆、最小堆）

二叉堆是一棵近似的完全二叉树，除了最底层外，结点是完全的，且最底层的结点从左至右填充。

二叉堆有两种：最大堆和最小堆。
- 最大堆：父结点的值总是大于或等于子结点的值，最大值在根结点。
- 最小堆：父结点的值总是小于或等于子结点的值，最小值在根结点。

二叉堆可以用数组来表示：

| 根结点 | 左子结点| 右子结点 | 父结点 |
|---|---|---|---|
| 1 | 2i | 2i+1 | ⌊i/2⌋ |
| 0 | 2i+1 | 2i+2 | ⌊(i-1)/2⌋|

以下讨论基于i=1为根结点的最小堆。

## 下滤调整

如果当前元素大于子结点的值，则与其较小子结点交换，不断进行直到正确的位置。

## 上滤调整

如果父结点小于当前元素，则交换位置，不断进行直到正确的位置。

## 建堆

从一个数组直接构造最小堆，数组范围(1 ... n)。

n为最后一个叶结点，数组范围(⌊n/2⌋+1 ... n)都是叶节点，因此从⌊n/2⌋开始自底向上进行下滤调整（从最后一个非叶结点开始依次向前）。

时间复杂度：O(n)

## 插入

首先，在二叉树的最后一个位置插入新元素，随后将新元素进行上滤调整。

## 删除最小元素

最小元素总是在根结点，删除后，将最后一个元素填补到根结点，随后不断下滤调整。

##### 示例
对以下最小堆做DeleteMin操作。
<table style="text-align:center">
	<tr><td colspan="8">13</td></tr>
	<tr><td colspan="4">14</td><td colspan="4">16</td></tr>
	<tr><td colspan="2">19</td><td colspan="2">21</td><td colspan="2">19</td><td colspan="2">68</td></tr>
	<tr><td>65</td><td>26</td><td>32</td><td>31</td><td></td><td></td><td></td><td></td></tr>
</table>
<p>删除最小元13，最后一个元素31填补到该位置，然后不断下滤。</p>
<table style="text-align:center">
	<tr><td colspan="8"><strong>31</strong></td></tr>
	<tr><td colspan="4">14</td><td colspan="4">16</td></tr>
	<tr><td colspan="2">19</td><td colspan="2">21</td><td colspan="2">19</td><td colspan="2">68</td></tr>
	<tr><td>65</td><td>26</td><td>32</td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<table style="text-align:center">
	<tr><td colspan="8">14</span></td></tr>
	<tr><td colspan="4"><strong>31</strong></td><td colspan="4">16</td></tr>
	<tr><td colspan="2">19</td><td colspan="2">21</td><td colspan="2">19</td><td colspan="2">68</td></tr>
	<tr><td>65</td><td>26</td><td>32</td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<table style="text-align:center">
	<tr><td colspan="8">14</span></td></tr>
	<tr><td colspan="4">19</td><td colspan="4">16</td></tr>
	<tr><td colspan="2"><strong>31</strong></td><td colspan="2">21</td><td colspan="2">19</td><td colspan="2">68</td></tr>
	<tr><td>65</td><td>26</td><td>32</td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<table style="text-align:center">
	<tr><td colspan="8">14</span></td></tr>
	<tr><td colspan="4">19</td><td colspan="4">16</td></tr>
	<tr><td colspan="2">26</td><td colspan="2">21</td><td colspan="2">19</td><td colspan="2">68</td></tr>
	<tr><td>65</td><td><strong>31</strong></td><td>32</td><td></td><td></td><td></td><td></td><td></td></tr>
</table>

## 删除中间元素

删除一个元素，该元素值视为无穷小，不断上滤到根结点，随后按照删除最小元素执行。

## 改变元素值

降低元素值，需要在该元素位置不断上滤。

增加元素值，需要在该元素位置不断下滤。