public class SwapQueue<T>
{

    private Queue<T> inQueue = new Queue<T>();
    private Queue<T> outQueue = new Queue<T>();

    private object syncRoot;

    public void Enqueue(T value)
    {
        lock (syncRoot)
        {
            inQueue.Enqueue(value);
        }
    }

    public bool TryDequeue(out T value)
    {
        if (outQueue.Count > 0)
        {
            value = outQueue.Dequeue();
            return true;
        }

        Swap();

        if (outQueue.Count > 0)
        {
            value = outQueue.Dequeue();
            return true;
        }

        value = default;
        return false;
    }

    private void Swap()
    {
        lock (syncRoot)
        {
            var temp = inQueue;
            inQueue = outQueue;
            outQueue = temp;
        }
    }

}