# git

## 概念

#### 工作区、暂存区
本地工作的目录是工作区。

暂存区是未提交修改，`git add`将工作区的文件修改添加到暂存区，`git push`将暂存区中的所有内容提交到当前分支。

#### 版本号
版本号由SHA1计算，命令指定的版本号在没有歧义时可以只提供前几位。

HEAD表示当前版本，HEAD\^表示上一个版本，HEAD\^^表示上上个版本，HEAD~100表示上第100个版本。

#### repository
表示一个远端仓库。

`git@<server>:<path>/<repositoty>.git`

例如：`git@github.com:c41/test.git`

## 配置

#### config
``` SHELL
$ git config --global user.name "username"
$ git config --global user.email "email"
```

## 仓库

#### init
初始化仓库。

``` SHELL
# 将目录初始化为仓库，pwd在当前目录中。
$ git init
```

#### add
将文件的修改添加到暂存区。
``` SHELL
$ git add test.txt
```

add既可以用于增加文件到暂存区，也可以用于修改文件到暂存区。

add的对象是文件的修改，因此：
- `修改文件 -> git add -> 修改文件 -> git commit` 结果只提交了第一次修改。
- `修改文件 -> git add -> 修改文件 -> git add -> git commit` 合并了两次修改提交。

#### rm
删除文件。

``` SHELL
$ git rm test.txt
```

从目录中删除原始文件后，使用`git add`和`git rm`是一样的。

#### commit
将暂存区的所有内容提交到当前分支。
``` SHELL
$ git commit -m "comment"
```

#### status
查看仓库状态。
``` SHELL
$ git status
```

#### diff
查看本地未提交文件修改。
``` SHELL
$ git diff test.txt
```

#### reset
版本回退。

``` SHELL
$ git reset --hard 104fa
```

#### checkout

撤销文件在工作区的修改，即恢复到最近一次`git commit`或`git add`的状态。

可以用于恢复被误删除的文件。

``` SHELL
# 撤销文件在工作区的修改。
$ git checkout -- test.txt
```

#### stash

保存工作区修改。

``` SHELL
$ git stash
```

查看stash列表。

``` SHELL
$ git stash list
```

以最近stash恢复工作区修改，并删除。

``` SHELL
$ git stash pop
```

指定恢复的stash（不会删除）。

``` SHELL
$ git stash apply stash@{0}
```

删除指定的stash。
``` SHELL
$ git stash drop stash@{0}
```

## 分支

#### branch

查看当前分支。

``` SHELL
$ git branch
```

创建分支。

``` SHELL
$ git branch demo
```

删除分支。

``` SHELL
# 删除已合并分支。
$ git branch -d demo

# 删除未合并分支。
$ git branch -D demo
```

#### checkout

切换分支。
``` SHELL
# 切换到分支demo。
$ git checkout demo

# 创建并切换到分支demo。
$ git checkout -b demo
```

#### merge
合并指定分支到当前分支。

普通方式合并指以一次commit的方式合并。

Fast forward合并指直接修改当前分支指针到目标分支版本，历史记录中没有合并记录。当目标分支版本高于当前分支时适用。

``` SHELL
# 合并分支demo到当前分支。
$ git merge demo

# 以普通方式合并分支，禁用Fast forward。
$ git merge --no-ff -m "comment" demo
```

## 日志

#### log
查看历史日志。
``` SHELL
# 查看完整提交历史日志。
$ git log

# 查看简要提交历史记录，每条记录占一行。
$ git log --pretty=oneline

# 查看分支合并图。
$ git log --graph
```

#### reflog
查看所有分支的操作记录。

``` SHELL
$ git reflog
```

## 远程库

#### remote
查看远程库信息。

``` SHELL
# 查看远程库信息。
$ git remote

# 查看更详细的远程库信息。
$ git remote -v
```

将本地库与远程库关联。

``` SHELL
$ git remote add origin git@github.com:c41/test.git
```

#### push
将本地库的内容推送到远程。

``` SHELL
# 将本地库分支master推送到远程仓库origin。
$ git push origin master

# 第一次推送时需要参数-u，使得本地分支master与远端分支master关联。
$ git push -u origin master
```

#### clone
克隆远程库到本地，当前目录为根目录上一层。

``` SHELL
# 克隆远端库test，本地会创建目录test。
$ git clone git@github.com:c41/test.git
```

## 工作树

#### update-index
把本地所有标记为skip worktree的文件取消标记。
``` SHELL
$ git ls-files -v | grep -i ^S | cut -c 3- | tr '\012' '\000' | xargs -0 git update-index --no-skip-worktree
```
