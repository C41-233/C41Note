# stop

终止指定的容器。首先容器发送SIGTERM新号，过一段时间（默认为10秒）后再发送SIGKILL信号。

- `-t --time=10` 发送SIGKILL的间隔时间。

```
docker stop ce5
```