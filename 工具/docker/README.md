# docker

## 命令

- images 列出本地镜像
- inspect 查看镜像详细信息
- pull 下载镜像
- rmi 删除镜像
- search 搜索远端镜像

### pull

下载镜像。

```
docker pull ubuntu
docker pull ubuntu:14.04
docker pull dl.dockerpool.com:5000/ubuntu
```

没有指定仓库时，从默认仓库下载镜像。

没有指定TAG时，默认下载最新版。

### rmi

删除本地镜像。

```
docker rmi dl.dockerpool.com:5000/ubuntu
```

### images

列出本地已有的镜像。

```
docker images
```

### inspect

查看镜像的详细信息。

```
docker inspect 5506de2b643b
```

### search

在远端仓库中搜索镜像。

- `--automated=false` 仅显示自动创建的镜像
- `--no-trunc=false` 输出信息不截断
- `-s, --stars=<n>` 仅显示评价为指定星级以上的镜像

```
docker search mysql
```