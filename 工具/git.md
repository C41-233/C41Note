# git

## 概念
#### 版本号
版本号由SHA1计算，命令指定的版本号在没有歧义时可以只提供前几位。

HEAD表示当前版本，HEAD\^表示上一个版本，HEAD\^^表示上上个版本，HEAD~100表示上第100个版本。

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
- `修改文件 -> git add -> 修改文件 -> git commit` 结果只提交了第一次修改
- `修改文件 -> git add -> 修改文件 -> git add -> git commit` 合并了两次修改提交

#### commit
提交文件。
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

#### log
查看历史日志。
``` SHELL
# 查看完整提交历史日志。
$ git log

# 查看简要提交历史记录，每条记录占一行。
$ git log --pretty-online
```

#### reflog
查看所有分支的操作记录。

``` SHELL
$ git reflog
```

#### reset
版本回退。

``` SHELL
$ git reset --hard 104fa
```

## 工作树

#### update-index
把本地所有标记为skip worktree的文件取消标记。
``` SHELL
$ git ls-files -v | grep -i ^S | cut -c 3- | tr '\012' '\000' | xargs -0 git update-index --no-skip-worktree
```
