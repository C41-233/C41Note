# 最大子数组 - Java

## 迭代

``` Java
public static Result maxSubArray(int[] array) {
    int sum = Integer.MIN_VALUE;
    int from = 0;
    int to = 0;
	
    int current=0;
    int current_from = 0;
    for(int i = 0; i < array.length; i++){
        if(array[i] > current+array[i]){
            current = array[i];
            current_from = i;
        }
        else{
            current = current + array[i];
        }
        if(sum < current){
            sum = current;
            from = current_from;
            to = i;
        }
    }
    return new Result(
        from,
        to,
        sum
    );
}
```
