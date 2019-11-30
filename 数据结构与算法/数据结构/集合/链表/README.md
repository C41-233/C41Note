# 链表

## 单向链表

```
Node<T>{
    T value;
    Node<T> next;
}

InsertAfter(Node<T> before, Node<T> newNode)
    newNode.next = before.next
    before.next = newNode


RemoveAfter(Node<T> before)
    before.next = before.next.next 
```

## 双向链表

```
Node<T>{
    T value
    Node<T> next
    Node<T> previous
}

InsertAfter(Node<T> before, Node<T> newNode)
    newNode.next = before.next
    newNode.previous = before
    before.next = newNode
    if(newNode.next != NULL)
        newNode.next.previous = newNode

InsertBefore(Node<T> after, Node<T> newNode)
    newNode.next = after
    newNode.previous = after.previous
    after.previous = newNode
    if(newNode.previous != NULL)
        newNode.previous.next = newNode      

```

## 静态链表

链表由一个数组实现，数组的每个元素都由data和next组成，其中data存储了数据，next指向了链表下一个元素的下标。

在这样的结构中，本质上存在两个链表，即数据链表与备用链表。备用链表是将数组未分配位置按链表串联起来，利于新数据插入时分配新的结点。

数组第一个元素作为数据链表的头部结点，数组最后一个元素作为备用链表的头部结点。