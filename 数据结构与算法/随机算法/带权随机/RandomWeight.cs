public struct SelectItem<T>
{
    public T Item;
    public float Weight;
}

/// <summary>
/// 按照权重随机返回一个元素，元素的权重和小于等于1。
/// </summary>
public static T RandomWeight<T>(IEnumerable<SelectItem<T>> list)
{
    var p = RandomRange(0, 1);
    var total = 0f;
    foreach (var item in list)
    {
        total += item.Weight;
        if (p <= total)
        {
            return item.Item;
        }
    }

    return default(T);
}
