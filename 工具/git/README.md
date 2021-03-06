# git

## 工作区、暂存区
工作区是本地的工作目录。

暂存区（Stage、Index）是用户保存未提交的修改。

仓库目录是`.git`，保存项目的元数据和对象数据库。

文件有以下状态：
- 已修改：文件有修改，但没有进入暂存区。
- 已暂存：文件已进入暂存区，但未提交。
- 已提交：文件已提交，进入版本。
- 未跟踪：文件不在版本控制中。

`git add`将工作区的文件修改添加到暂存区，`git push`将暂存区中的所有内容提交到当前分支。

## 仓库
表示一个远端仓库。支持https、git、ssh等协议。

`git@<server>:<path>/<repositoty>.git`

例如：`git@github.com:c41/test.git`。

## 查看帮助信息

[Git-分支-分支简介](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B)

[Git 内部原理 - 引用规格](https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%BC%95%E7%94%A8%E8%A7%84%E6%A0%BC)

``` SHELL
$ git help <verb>
$ git <verb> --help
```
---

- [配置](配置.md)
- [仓库](仓库.md)
- [远程库](远程库.md)
- [日志](日志.md)
- [分支](分支.md)
- [标签](标签.md)
- [工作树](工作树.md)