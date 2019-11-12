# 不相交集 - Java


### 接口
``` Java
//应用程序维护元素与指定索引的映射关系
public class DisjSet{

    public DisjSet(int numElements);
    //添加等价关系
    public void addEquivalence(int x, int y);
    //判断元素是否等价
    public boolean isEquivalent(int x, int y);

    /*
     * 数组表示森林，同一棵树的元素互为等价。
     * 数组的下标是元素索引。对应值表示其父节点的索引。
     * 负值表示根元素，且其绝对值表示树的高度。
     * /
    private int[] set;
    
}
```

### 初始化
``` Java
public DisjSet(int numElements){
    this.set = new int[numElements];
    for(int i = 0; i < this.set.length; i++){
        this.set[i] = -1;
    }
}
```

### 判断是否等价
``` Java
public boolean isEquivalent(int x, int y){
    return find(x) == find(y);
}

/*
 * 找到元素x所属树的根元素
 */
private int find(int x){
    int index = x;
    while(this.set[index] >= 0){
        index = this.set[index];
    }
    return index;
}
```

### 添加等价关系
``` Java
public void addEquivalence(int x, int y){
    union(find(x), find(y));
}

/*
 * 合并两棵等价树。root1和root2必须是根节点
 */
private void union(int root1, int root2){
    if(root1 == root2){
        return;
    }

    if(this.set[root2] < this.set[root1]){ //root2更高
        this.set[root1] = root2; //矮树嫁接到高树上
    }
    else{
        //root1和root2高度相同
        if(this.set[root1] == this.set[root2]){
            this.set[root1]--; //增加高度
        }
        this.set[root2] = root1;
    }
}
```