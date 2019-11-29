# 二叉搜索树

二叉搜索树（二叉查找树，二叉排序树）是一棵二叉树，并且满足以下性质：
1. 如果存在左子树，那么左子树上所有节点的值都小于（小于等于）根节点的值；
2. 如果存在右子树，那么右子树上所有节点的值都大于等于（大于）根节点的值；
3. 左右子树也分别是二叉查找树。

一棵有n个节点的二叉搜索树，其平均深度为O(log<sub>2</sub>n)，最大深度是n。

二叉查找树的最大元素是最右叶节点，最小元素是最左叶节点。

二叉搜索树的元素按照中序遍历的方式输出是有序的。

## 查找

时间复杂度为O(logn)。

##### 递归实现
```
TreeSearch(root, e)
    if root == NULL
        return NULL
    if e == root.value
        return root
    if e < root.value
        return TreeSearch(root.left, e)
    else
        return TreeSearch(root.right, e)
```

##### 迭代实现
```
TreeSearch(root, e)
    while x != NULL and e != root.value
        if k < root.value
            root = root.left
        else
            root = root.right
    return root
```

## 查找最大最小元素
```
TreeMin(root, e)
    while root.left != NULL
        root = root.left
    return root
    
TreeMax(root, e)
    while root.right != NULL
        root = root.right
    return root
```