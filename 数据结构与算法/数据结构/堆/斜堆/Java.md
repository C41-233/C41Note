# 斜堆 - Java

## 合并

``` Java
private static Node<T> merge(Node<T>lhs, Node<T> rhs){  
	if(lhs == null) {  
		return rhs;  
	}
	if(rhs == null){
		return lhs;
	}
	  
	Node<T> small, big;   
	if(comparator.compare(rhs.element, lhs.element) < 0){  
		small = rhs;  
		big = lhs;  
	}
	else{  
		small = lhs;  
		big = rhs;                  
	}  
	  
	Node<T> tmp = merge(big, small.right);  
	small.right = small.left;  
	small.left = tmp;            		  
	return small;  
}
```