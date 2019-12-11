``` C#
using System;
using System.Collections;
using System.Collections.Generic;

public class BinarySplayTreeDictionary<K, V> : IEnumerable<KeyValuePair<K, V>>
{

    private readonly Comparison<K> comparator;
    private TreeNode root;

    public int Count { get; private set; }

    public BinarySplayTreeDictionary() : this(Comparer<K>.Default)
    {
    }

    public BinarySplayTreeDictionary(Comparer<K> comparer) : this(comparer.Compare)
    {
    }

    public BinarySplayTreeDictionary(Comparison<K> comparator)
    {
        this.comparator = comparator;
    }

    public void Add(K key, V value)
    {
        if (TrySearchValue(key, out var parent, out var leftChild))
        {
            throw new ArgumentNullException($"key already exist");
        }
        AddInternal(key, value, parent, leftChild);
    }

    private void AddInternal(K key, V value, TreeNode parent, bool leftChild)
    {
        ++Count;

        var newNode = new TreeNode(key, value);
        newNode.Parent = parent;

        if (parent == null)
        {
            root = newNode;
            return;
        }

        if (leftChild)
        {
            parent.Left = newNode;
        }
        else
        {
            parent.Right = newNode;
        }
    }

    public V this[K key]
    {
        get
        {
            if (TryGetValue(key, out var value))
            {
                return value;
            }
            throw new KeyNotFoundException();
        }
        set
        {
            if (TrySearchValue(key, out var node, out var leftChild))
            {
                node.KeyValue = new KeyValuePair<K, V>(key, value);
                return;
            }
            AddInternal(key, value, node, leftChild);
        }
    }

    public bool Remove(K key)
    {
        if (!TrySearchValue(key, out var node, out _))
        {
            return false;
        }

        --Count;
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

        return true;
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

    public bool Contains(K key)
    {
        if (!TrySearchValue(key, out var node, out _))
        {
            return false;
        }

        ShiftUp(node);
        return true;
    }

    public bool TryGetValue(K key, out V value)
    {
        if (!TrySearchValue(key, out var node, out _))
        {
            value = default;
            return false;
        }

        ShiftUp(node);
        value = node.Value;
        return true;
    }

    public K MinKey
    {
        get
        {
            if (root == null)
            {
                throw new InvalidOperationException();
            }
            return FindMin(root).Key;
        }
    }

    public K MaxKey
    {
        get
        {
            if (root == null)
            {
                throw new InvalidOperationException();
            }

            return FindMax(root).Key;
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

    private void ShiftUp(TreeNode node)
    {
        if (node.Parent?.Parent == null)
        {
            return;
        }
        if (node == node.Parent.Left)
        {
            if (node.Parent == node.Parent.Parent.Left)
            {
                RightRotation(node.Parent);
                RightRotation(node);
            }
            else
            {
                RightRotation(node);
                LeftRotation(node);
            }
        }
        else
        {
            if (node.Parent == node.Parent.Parent.Right)
            {
                LeftRotation(node.Parent);
                LeftRotation(node);
            }
            else
            {
                LeftRotation(node);
                RightRotation(node);
            }
        }
    }

    private bool TrySearchValue(K key, out TreeNode node, out bool leftChild)
    {
        TreeNode parent = null;
        node = root;
        leftChild = false;
        while (node != null)
        {
            parent = node;
            var c = comparator(key, node.Key);
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

        public K Key => KeyValue.Key;
        public V Value => KeyValue.Value;

        public KeyValuePair<K, V> KeyValue;

        public TreeNode Parent;
        public TreeNode Left;
        public TreeNode Right;

        public TreeNode(K key, V value)
        {
            KeyValue = new KeyValuePair<K, V>(key, value);
        }

        public override string ToString()
        {
            return $"<{Key},{Value}>";
        }

    }

    public IEnumerator<KeyValuePair<K, V>> GetEnumerator()
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
                    yield return node.KeyValue;
                    node = node.Right;
                }

            }
            else
            {
                node = stack.Pop();
                yield return node.KeyValue;
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