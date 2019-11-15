# 中缀表达式转后缀表达式 - C#

输入表达式已经过词法分析切割，运算符按照优先级从高到低的顺序在数组operators中表示。
``` C#
public static List<string> Transform(List<string> input, string[] operators)
{
    var output = new List<string>(input.Count);
    var stack = new Stack<Operator>();
    foreach (var value in input)
    {
        switch (value)
        {
            //操作数
            case "(":
                stack.Push(new Operator
                {
                    Weight = -1,
                    Value = value,
                });
                break;
            case ")":
                PopUtil(output, stack, "(");
                break;
            default:
            {
                var i = Array.IndexOf(operators, value);
                if (i < 0)
                {
                    output.Add(value);
                }
                else
                {
                    PopUtil(output, stack, i);
                    stack.Push(new Operator
                    {
                        Weight = i,
                        Value = value,
                    });
                }
                break;
            }
        }
    }

    PopUtil(output, stack, null);

    return output;
}

private struct Operator
{
    public int Weight;
    public string Value;
}

private static void PopUtil(List<string> output, Stack<Operator> stack, int weight)
{
    while (stack.Count > 0)
    {
        var top = stack.Peek();
        if (top.Weight > weight || top.Weight < 0)
        {
            break;
        }

        stack.Pop();
        output.Add(top.Value);
    }
}

private static void PopUtil(List<string> output, Stack<Operator> stack, string value)
{
    while (stack.Count > 0)
    {
        var top = stack.Pop();
        if (top.Value == value)
        {
            break;
        }
        output.Add(top.Value);
    }
}
```