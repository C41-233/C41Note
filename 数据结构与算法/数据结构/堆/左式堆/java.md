# 左式堆 - Java

## 接口

``` Java
public class LeftistHeap<T> {

	private Node<T> root; //根结点
	private final Comparator<T> comparator;
	
	public LeftistHeap(Comparator<T> comparator) {
		this.root = null;
		this.comparator = comparator;
	}
	
	public T findMin() {
		if(this.root == null){
			throw new UnderFlowException();
		}
		return this.root.element;
	}
	
	//结点的左右子树交换
	private static <T> void swapChildren(Node<T> t) {
		Node<T> temp = t.right;
		t.right = t.left;
		t.left = temp;
	}
	
	public boolean isEmpty() {
		return this.root == null;
	}
	
	private static class Node<T> {
		
		T element;
		Node<T> left;
		Node<T> right;
		int npl;
		
		Node(T e) {
			this(e, null, null);
		}
		
		Node(T e, Node<T> left, Node<T> right) {
			this.element = e;
			this.left = left;
			this.right = right;
			this.npl = 0;
		}
	}
}
```

## 合并

``` Java
public void merge(LeftistHeap<T> rhs) {
	if(this == rhs){
		return;
	}
	this.root = merge(root, rhs.root);
	rhs.root = null;
}

private static <T> Node<T> merge(Node<T> h1, Node<T> h2) {
	if(h1 == null) {
		return h2;
	}
	if(h2 == null) {
		return h1;
	}
	
	Node<T> small, big;
	if(comparator.compare(h1.element, h2.element) < 0) {
		small = h1;
		big = h2;
	}
	else {
		small = h2;
		big = h1;
	}
	
	if(small.left == null) {
		small.left = big;
	}
	else {
		small.right = merge(small.right, big);
		if(small.left.npl < small.right.npl){
			swapChildren(small);
		}
		small.npl = small.right.npl + 1;
	}
	return small;
}
```