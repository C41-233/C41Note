using System;

public class Queue<T>
{

    private const int DefaultSize = 16;

    private T[] array;
    private int head; //指向第一个元素
    private int tail; //指向下一个插入的位置

    public Queue()
    {
        array = new T[DefaultSize];
    }

    public void Enqueue(T element)
    {
        array[tail++] = element;
        if (tail >= array.Length)
        {
            tail = 0;
        }
        if (head == tail)
        {
            var newArray = new T[array.Length *2];
            Array.Copy(array, head, newArray, 0, array.Length - head);
            Array.Copy(array, 0, newArray, array.Length - head, head);
            head = 0;
            tail = array.Length;
            array = newArray;
        }
    }

    public T Dequeue()
    {
        tail--;
        if (tail < 0)
        {
            tail = array.Length - 1;
        }

        var element = array[tail];
        array[tail] = default;

        if (array.Length > DefaultSize && Count < array.Length / 4)
        {
            var newArray = new T[array.Length / 2];
            var size = Count;
            if (head <= tail)
            {
                Array.Copy(array, head, newArray, 0, tail- head);
            }
            else
            {
                Array.Copy(array, head, newArray, 0, array.Length - head);
                Array.Copy(array, tail, newArray, array.Length - head, tail);
            }

            array = newArray;
            head = 0;
            tail = size;
        }

        return element;
    }

    public T Peek()
    {
        if (head == tail)
        {
            throw new InvalidOperationException("queue");
        }

        if (tail > 0)
        {
            return array[tail - 1];
        }

        return array[array.Length - 1];
    }

    public int Count
    {
        get
        {
            var end = tail;
            if (end < head)
            {
                end += array.Length;
            }

            return end - head;
        }
    }

}
