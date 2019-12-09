``` C#
using System;
using System.Collections;
using System.Collections.Generic;

public class BinaryBalancedTreeSet<T> : IEnumerable<T>
{

    private readonly Comparison<T> comparator;
    private TreeNode root;

    public int Count { get; private set; }

    public BinaryBalancedTreeSet() : this(Comparer<T>.Default)
    {
    }

    public BinaryBalancedTreeSet(Comparer<T> comparer) : this(comparer.Compare)
    {
    }

    public BinaryBalancedTreeSet(Comparison<T> comparator)
    {
        this.comparator = comparator;
    }

    public bool Add(T value)
    {
        if (TrySearchValue(value, out var parent, out var leftChild))
        {
            return false;
        }

        ++Count;

        var newNode = new TreeNode(value);
        newNode.Parent = parent;

        if (parent == null)
        {
            root = newNode;
            return true;
        }

        if (leftChild)
        {
            parent.Left = newNode;
        }
        else
        {
            parent.Right = newNode;
        }

        RebuildShiftUp(parent);
        return true;
    }

    public bool Remove(T value)
    {
        if (!TrySearchValue(value, out var node, out _))
        {
            return false;
        }

        --Count;
        var parent = node.Parent;
        if (node.Left == null)
        {
            Transplant(node, node.Right);
        }
        else if (node.Right == null)
        {
            Transplant(node, node.Left);
        }
        else
        {
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
        }

        RebuildShiftUp(parent);
        return true;
    }

    private void RebuildShiftUp(TreeNode node)
    {
        while (node != null)
        {
            var leftHeight = node.LeftHeight;
            var rightHeight = node.RightHeight;

            if (leftHeight - rightHeight > 1)
            {
                if (node.Left.LeftHeight > node.Left.RightHeight)
                {
                    RightRotation(node.Left);
                }
                else
                {
                    var target = node.Left.Right;
                    LeftRotation(target);
                    RightRotation(target);
                }
                break;
            }

            if (rightHeight - leftHeight > 1)
            {
                if (node.Right.RightHeight > node.Right.LeftHeight)
                {
                    LeftRotation(node.Right);
                }
                else
                {
                    var target = node.Right.Left;
                    RightRotation(target);
                    LeftRotation(target);
                }
                break;
            }

            ResetHeight(node);
            node = node.Parent;
        }
    }

    private void LeftRotation(TreeNode node)
    {
        var parent = node.Parent;
        Transplant(parent, node);
        parent.Right = node.Left;
        if (node.Left != null)
        {
            node.Left.Parent = parent;
        }
        node.Left = parent;
        parent.Parent = node;

        ResetHeight(node.Left);
        ResetHeight(node);
    }

    private void RightRotation(TreeNode node)
    {
        var parent = node.Parent;
        Transplant(parent, node);
        parent.Left = node.Right;
        if (node.Right != null)
        {
            node.Right.Parent = parent;
        }
        node.Right = parent;
        parent.Parent = node;

        ResetHeight(node.Right);
        ResetHeight(node);
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

    private static void ResetHeight(TreeNode node)
    {
        node.Height = Math.Max(node.LeftHeight, node.RightHeight) + 1;
    }

    public bool Contain(T value)
    {
        return TrySearchValue(value, out _, out _);
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

    private class TreeNode
    {

        public readonly T Value;
        public TreeNode Parent;
        public TreeNode Left;
        public TreeNode Right;
        public int Height = 1;

        public int LeftHeight => Left?.Height ?? 0;
        public int RightHeight => Right?.Height ?? 0;

        public TreeNode(T value)
        {
            Value = value;
        }

        public override string ToString()
        {
            return Value.ToString();
        }

    }

    public IEnumerator<T> GetEnumerator()
    {
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