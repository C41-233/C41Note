``` C#
public class BTree<T>
{

    private BTreeNode root;

    //B树的阶，元素最少为(m/2)-1个，最多为m-1个。度数最少为m/2，最多为m。
    private readonly int m;

    private readonly Comparer<T> comparer;

    public int Count { get; private set; }

    public BTree(int m, Comparer<T> comparer)
    {
        this.m = m;
        this.comparer = comparer;
        root = new BTreeNode(m, true, 0);
    }

    public BTree(int m) : this(m, Comparer<T>.Default)
    {
    }

    public bool Contains(T value)
    {
        return Search(value, out _, out _);
    }

    /// <summary>
    /// 查找元素
    /// </summary>
    /// <param name="value">待查找的值</param>
    /// <param name="node">元素所在（或所插入）的结点</param>
    /// <param name="index">元素在结点node上所在（或所插入）的位置</param>
    /// <returns>元素是否存在</returns>
    private bool Search(T value, out BTreeNode node, out int index)
    {
        node = root;
        while (true)
        {
            if (SearchInNode(node, value, out index))
            {
                return true;
            }

            if (node.IsLeaf)
            {
                return false;
            }

            node = node.Children[index];
        }
    }

    private bool SearchInNode(BTreeNode node, T value, out int index)
    {
        index = Array.BinarySearch(node.Values, 0, node.Count, value, comparer);
        if (index >= 0)
        {
            return true;
        }

        index = ~index;
        return false;
    }

    public void Insert(T value)
    {
        Search(value, out var node, out var index);
        Insert(node, index, value, null, null);
        Count++;
    }

    private void Insert(BTreeNode node, int index, T value, BTreeNode left, BTreeNode right)
    {
        if (node.Count < m-1)
        {
            Move(node.Values, index, node.Count - index);
            node.Values[index] = value;

            Move(node.Children, index + 1, node.Count - index);

            Plant(node, left, index);
            Plant(node, right, index + 1);

            ++node.Count;
            return;
        }

        //分裂
        var mid = m / 2; //中间结点
        
        var leftCount = mid; //分裂后左子树元素个数
        var rightCount = node.Values.Length - mid; //分裂后右子树元素个数

        node.Count = leftCount;
        var rightNode = new BTreeNode(m, node.IsLeaf, rightCount);

        T toInsert;
        if (index < mid)
        {
            //插入在中间元素左侧，则中间元素从左侧移动而来
            toInsert = node.Values[mid - 1];

            Move(node.Values, mid, rightNode.Values, 0, rightCount);
            Move(node.Values, index, mid - index - 1);
            node.Values[index] = value;

            if (!node.IsLeaf)
            {
                PlantMove(node, mid, rightNode, 0, rightCount + 1);
                Move(node.Children, index + 1, mid - index - 1);
                Plant(node, left, index);
                Plant(node, right, index + 1);
            }
        }
        else if (index > mid)
        {
            //插入在中间元素右侧
            toInsert = node.Values[mid];

            node.Values[mid] = default(T);
            Move(node.Values, mid + 1, rightNode.Values, 0, index - mid - 1);
            rightNode.Values[index - mid - 1] = value;
            Move(node.Values, index, rightNode.Values, index - mid, node.Values.Length - index);

            if (!node.IsLeaf)
            {
                PlantMove(node, mid + 1, rightNode, 0, index - mid);
                Plant(rightNode, left, index - mid - 1);
                Plant(rightNode, right, index - mid);
                PlantMove(node, index + 1, rightNode, index - mid + 1, node.Values.Length - index);
            }
        }
        else
        {
            //插入在中间位置
            toInsert = value;

            Move(node.Values, mid, rightNode.Values, 0, rightCount);

            if (!node.IsLeaf)
            {
                Plant(node, left, leftCount);
                Plant(rightNode, right, 0);
                PlantMove(node, mid + 1, rightNode, 1, rightCount);
            }
        }

        var parent = node.Parent;

        //根节点分裂
        if (node.Parent == null)
        {
            parent = new BTreeNode(m, false, 0);
            root = parent;
        }

        SearchInNode(parent, toInsert, out index);
        Insert(parent, index, toInsert, node, rightNode);
    }

    private static void Move(Array arr, int index, int length)
    {
        Array.Copy(arr, index, arr, index + 1, length);
    }

    private static void Move(Array src, int srcFrom, Array dest, int destFrom, int length)
    {
        Array.Copy(src, srcFrom, dest, destFrom, length);
        Array.Clear(src, srcFrom, length);
    }

    private static void PlantMove(BTreeNode src, int srcFrom, BTreeNode dest, int destFrom, int length)
    {
        Move(src.Children, srcFrom, dest.Children, destFrom, length);
        for (var i=0; i<length; i++)
        {
            dest.Children[destFrom + i].Parent = dest;
        }
    }

    private static void Plant(BTreeNode parent, BTreeNode child, int index)
    {
        parent.Children[index] = child;
        if (child != null)
        {
            child.Parent = parent;
        }
    }

    private class BTreeNode
    {

        //父结点
        public BTreeNode Parent;

        //元素
        public readonly T[] Values;
        //子树
        public readonly BTreeNode[] Children;

        //元素个数，子树个数为Count+1
        public int Count;

        //是否为叶结点，叶结点的Children为空
        public readonly bool IsLeaf;

        public BTreeNode(int m, bool isLeaf, int count)
        {
            Parent = null;
            Values = new T[m-1];
            Children = new BTreeNode[m];
            Count = count;
            IsLeaf = isLeaf;
        }

    }

}
```