# 链表 - C#

## 静态链表

``` C#
public class LinkedList<T> : IEnumerable<T>
{

    private const int DefaultSize = 32;

    private struct Entry
    {
        public readonly T Value;
        public int Next;

        public Entry(T value, int next)
        {
            Value = value;
            Next = next;
        }
    }

    private Entry[] entries;
    
    public int Count { get; private set; }

    private int iHead; //头结点，空链表时为-1
    private int iTail; //尾部结点，空链表时为-1
    private int iFree; //空闲链表的头结点

    public LinkedList()
    {
        entries = new Entry[DefaultSize];
        LinkFree(0);

        iHead = -1;
        iTail = -1;
    }

    private void LinkFree(int end)
    {
        for (var i = entries.Length - 1; i > end; i--)
        {
            entries[i].Next = i - 1;
        }

        entries[end].Next = -1;
        iFree = entries.Length - 1;
    }

    public void Add(T value)
    {
        if (iFree < 0)
        {
            Expand();
        }

        var index = iFree;
        var nextFree = entries[index].Next;
        entries[index] = new Entry(value, -1);

        if (iTail < 0)
        {
            iHead = iFree;
        }
        else
        {
            entries[iTail].Next = iFree;
        }

        iTail = iFree;
        iFree = nextFree;
        Count++;
    }

    public bool Contains(T value)
    {
        return Find(value, out _, out _);
    }

    public bool Remove(T value)
    {
        if (Find(value, out var index, out var previous))
        {
            var entry = entries[index];
            entries[previous].Next = entry.Next;

            entries[index] = new Entry(default, iFree);
            iFree = index;
            Count--;
            return true;
        }

        return false;
    }

    private bool Find(T value, out int index, out int previous)
    {
        if (iHead < 0)
        {
            index = -1;
            previous = -1;
            return false;
        }

        var comparer = EqualityComparer<T>.Default;
        previous = -1;
        index = iHead;
        while (index >= 0)
        {
            var entry = entries[index];
            if (comparer.Equals(value, entry.Value))
            {
                return true;
            }

            previous = index;
            index = entry.Next;
        }

        return false;
    }

    public void Clear()
    {
        Count = 0;
        iHead = -1;
        iTail = -1;
        Array.Clear(entries, 0, entries.Length);
        LinkFree(0);
    }

    private void Expand()
    {
        Array.Resize(ref entries, entries.Length * 2);
        LinkFree(Count);
    }

    public struct Enumerator : IEnumerator<T>
    {

        private readonly LinkedList<T> list;
        private Entry entry;

        public Enumerator(LinkedList<T> list)
        {
            this.list = list;
            entry = new Entry(default, list.iHead);
        }

        public void Dispose()
        {
        }

        public bool MoveNext()
        {
            if (entry.Next < 0)
            {
                return false;
            }

            entry = list.entries[entry.Next];
            return true;
        }

        public void Reset()
        {
            entry = new Entry(default, list.iHead);
        }

        public T Current => entry.Value;

        object IEnumerator.Current => entry.Value;
    }

    public Enumerator GetEnumerator()
    {
        return new Enumerator(this);
    }

    IEnumerator<T> IEnumerable<T>.GetEnumerator()
    {
        return GetEnumerator();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```