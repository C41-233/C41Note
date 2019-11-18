using System;
using System.Collections;
using System.Collections.Generic;

/* 最小堆 */
public class PriorityQueue<T> : IEnumerable<T>
{

    private const int DefaultSize = 16;

    private readonly Comparison<T> comparison;

    private T[] buffer; //数组下标从0开始

    public int Count { get; private set; }

    public PriorityQueue(Comparison<T> comparison)
    {
        this.comparison = comparison;
        buffer = new T[DefaultSize];
    }

    public PriorityQueue(T[] data, Comparison<T> comparison)
    {
        this.comparison = comparison;
        Count = data.Length;
        buffer = new T[Count];

        data.CopyTo(buffer, 0);

        if (Count > 0)
        {
            for (var i = (Count - 1) / 2; i >= 0; i--)
            {
                ShiftDown(i);
            }
        }
    }

    public void Enqueue(T value)
    {
        if (Count >= buffer.Length)
        {
            Array.Resize(ref buffer, buffer.Length * 2);
        }

        buffer[Count] = value;
        ShiftUp(Count);
        Count++;
    }

    public T Top => buffer[0];

    public T Dequeue()
    {
        var first = buffer[0];
        buffer[0] = buffer[--Count];
        ShiftDown(0);
        return first;
    }

    private void ShiftUp(int hole)
    {
        var value = buffer[hole];
		var parent = (hole-1) / 2;
        while (hole > 0 && Less(value, buffer[parent]))
        {
            buffer[hole] = buffer[parent];
            hole = parent;
			parent = (hole-1) / 2;
        }

        buffer[hole] = value;
    }

    private void ShiftDown(int hole)
    {
        var tmp = buffer[hole];
        while (hole * 2 + 1 < Count)
        {
            var child = hole * 2 + 1;
            if (child != Count - 1 && Less(buffer[child + 1], buffer[child]))
            {
                child++;
            }

            if (Less(buffer[child], tmp))
            {
                buffer[hole] = buffer[child];
            }
            else
            {
                break;
            }

            hole = child;
        }

        buffer[hole] = tmp;
    }

    private bool Less(T a, T b) => comparison(a, b) < 0;

    public IEnumerator<T> GetEnumerator()
    {
        for (var i = 0; i < Count; i++)
        {
            yield return buffer[i];
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    public void Clear()
    {
        Array.Clear(buffer, 0, buffer.Length);
        Count = 0;
    }

}
