``` C#
using System;
using System.Collections;
using System.Collections.Generic;

public class BinarySearchTreeSet<T> : IEnumerable<T>
{

    private readonly Comparison<T> comparator;
    private TreeNode root;

    public int Count { get; private set; }

    public BinarySearchTreeSet() : this(Comparer<T>.Default)
    {
    }

    public BinarySearchTreeSet(Comparer<T> comparer) : this(comparer.Compare)
    {
    }

    public BinarySearchTreeSet(Comparison<T> comparator)
    {
        this.comparator = comparator;
    }

    public bool Add(T value)
    {
        if (TrySearchValue(value, out var parent, out var leftChild))
        {
            return false;
        }

        var newNode = new TreeNode(value);
        newNode.Parent = parent;

        if (parent == null)
        {
            root = newNode;
        }
        else if (leftChild)
        {
            parent.Left = newNode;
        }
        else
        {
            parent.Right = newNode;
        }

        ++Count;
        return true;
    }

    public bool Contains(T value)
    {
        return TrySearchValue(value, out _, out _);
    }

    public bool Remove(T value)
    {
        if (!TrySearchValue(value, out var node, out _))
        {
            return false;
        }

        --Count;
        if (node.Left == null)
        {
            Transplant(node, node.Right);
            return true;
        }

        if (node.Right == null)
        {
            Transplant(node, node.Left);
            return true;
        }

        var tmp = FindMin(node.Right);
        if (tmp.Parent != node)
        {
            Transplant(tmp, tmp.Right);
            tmp.Right = node.Right;
            node.Right.Parent = tmp;
        }

        Transplant(node, tmp);
        tmp.Left = node.Left;
        node.Left.Parent = tmp;
        return true;
    }

    /// <summary>
    /// 在树中搜索元素value，
    /// 1 如果找到，则返回true，且node为其结点；
    /// 2 如果没有找到，则返回其插入后的父结点，leftChild表示插入后是左子结点还是右子结点。
    /// </summary>
    private bool TrySearchValue(T value, out TreeNode node, out bool leftChild)
    {
        TreeNode parent = null;
        node = root;
        leftChild = false;
        while (node != null)
        {
            parent = node;
            var c = comparator(value, node.Value);
            if (c == 0)
            {
                return true;
            }

            if (c < 0)
            {
                leftChild = true;
                node = node.Left;
            }
            else
            {
                leftChild = false;
                node = node.Right;
            }
        }

        node = parent;
        return false;
    }

    private void Transplant(TreeNode x, TreeNode y)
    {
        if (x.Parent == null)
        {
            root = y;
        }
        else if (x == x.Parent.Left)
        {
            x.Parent.Left = y;
        }
        else
        {
            x.Parent.Right = y;
        }

        if (y != null)
        {
            y.Parent = x.Parent;
        }
    }

    public T MinValue
    {
        get
        {
            if (root == null)
            {
                throw new InvalidOperationException();
            }
            return FindMin(root).Value;
        }
    }

    public T MaxValue
    {
        get
        {
            if (root == null)
            {
                throw new InvalidOperationException();
            }

            return FindMax(root).Value;
        }
    }

    private static TreeNode FindMax(TreeNode node)
    {
        while (node.Right != null)
        {
            node = node.Right;
        }

        return node;
    }

    private static TreeNode FindMin(TreeNode node)
    {
        while (node.Left != null)
        {
            node = node.Left;
        }

        return node;
    }

    private class TreeNode
    {

        public readonly T Value;
        public TreeNode Parent;
        public TreeNode Left;
        public TreeNode Right;

        public TreeNode(T value)
        {
            Value = value;
        }

    }

    public IEnumerator<T> GetEnumerator()
    {
        //中序遍历，左根右，保证输出元素是有序的
        if (root == null)
        {
            yield break;
        }
        var stack = new Stack<TreeNode>();
        var node = root;
        while (node != null || stack.Count > 0)
        {
            if (node != null)
            {
                if (node.Left != null)
                {
                    stack.Push(node);
                    node = node.Left;
                }
                else
                {
                    yield return node.Value;
                    node = node.Right;
                }

            }
            else
            {
                node = stack.Pop();
                yield return node.Value;
                node = node.Right;
            }
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```