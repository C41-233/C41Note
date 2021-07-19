# commit

根据已有容器的环境创建新镜像，容器运行结束时会显示容器的id。

- `-a` 作者
- `-m` 备注
- `-p --pause=true` 提交时暂停容器运行

```
docker commit -m "Add a new file" -a "Docker Newbee" a925cb40b3f0 test
```