# run

根据镜像创建并启动容器，等价于先create后start。

```
docker run ubuntu /bin/echo 'Hello world!'
```

run执行了以下操作：
- 检查本地是否存在镜像，如果不存在则从仓库下载。
- 利用镜像创建并启动容器。
- 分配文件系统，并在只读的镜像层外挂载一层可写层。
- 从宿主机配置的网桥接口中为容器桥接一个虚拟接口。
- 为容器配置IP地址。
- 执行指定的命令。
- 执行完毕后容器终止。

## 参数

- `-d` 在后台以守护进程的方式运行。
- `-i` 容器的标准输入保持打开。
- `-p` 端口映射。
- `-t` 分配终端，并绑定到容器的标准输入。
- `-v` 挂载数据卷。
- `-P` 随机端口映射。
- `--name` 容器的名称。

## 数据卷

参数`-v`挂载数据卷。

```
docker run -d -P --name web -v /src/webapp:/opt/webapp python app.py
```

将主机`/src/webapp`目录挂载到容器的`/opt/webapp`目录。如果主机目录不存在，由docker自动创建。

对挂载目录的权限默认为读写（rw），可以显式指定为只读（ro）。

```
docker run -d -P --name web -v /src/webapp:/opt/webapp:ro python app.py
```

## 网络

启动容器时默认外部无法通过网络访问容器，可以通过`-p`或`-P`指定端口映射。

- `-P` 随机映射49000-49900的端口，通过`docker ps`来查看映射的端口。
- `-p` 指定端口映射。在一个指定端口上只能绑定一个容器。格式为`<ip>:<host-port>:<container-port>`、`<ip>:<container-port>`、`<host-port>:<container-port>`

默认情况下是TCP端口，可以显式指定为UDP端口。

```
docker run -d -P python app.py
```

随机映射主机的端口到容器5000端口。

```
docker run -d -p 6000:5000 python app.py
```

将主机的6000端口映射到容器的5000端口。

```
docker run -d -p 127.0.0.1:6000:5000 python app.py
```

将主机的127.0.0.1:6000映射到容器5000端口。

```
docker run -d -p 127.0.0.1::5000 python app.py
```

将主机的127.0.0.1随机分配一个端口映射到容器5000端口。

```
docker run -d -p 127.0.0.1:6000:5000/udp python app.py
```

将主机的127.0.0.1:6000映射到容器5000端口，并指定为udp端口。
