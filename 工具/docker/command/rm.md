# rm

删除处于终止状态的容器。

- `-f --force=true` 强行终止并删除一个运行中的容器。
- `-l --link=true` 删除容器的连接，但保留容器。
- `-v --volumnes=true` 删除容器挂在的数据卷。

```
docker rm ce5
```