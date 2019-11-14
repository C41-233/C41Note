# 检测链表循环

检测一个链表是否存在循环的部分，如果有则返回循环开始的结点。

循环链表指的是存在某一个结点，向后遍历可以回到该结点。

## 算法描述

使用两个指针：fast和slow。fast指针每次前进两步，slow指针每次前进一步，当fast指针和slow指针相遇时，即存在循环。

此时，设置两个slow指针分别从头部和相遇的位置开始前进，再次相遇的位置即循环开始的结点。

##### 伪码
```
public ListNode DetectCycle(ListNode head) {
    if(head == null || head.next == null){
        return null;
    }
    ListNode fast = head.next.next;
    ListNode slow = head.next;
    while(fast != null && fast.next != null && fast != slow){
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast != slow){
        return null;
    }
    slow = head;
    while(fast != slow){
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}
```