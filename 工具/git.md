# git

## 概念

#### 工作区、暂存区
工作区是本地的工作目录。

暂存区（Stage、Index）是用户保存未提交的修改。

仓库目录是`.git`，保存项目的元数据和对象数据库。

文件有以下状态：
- 已修改：文件有修改，但没有进入暂存区。
- 已暂存：文件已进入暂存区，但未提交。
- 已提交：文件已提交，进入版本。
- 未跟踪：文件不在版本控制中。

`git add`将工作区的文件修改添加到暂存区，`git push`将暂存区中的所有内容提交到当前分支。

#### 版本号
版本号由SHA1计算，命令指定的版本号在没有歧义时可以只提供前几位。

HEAD表示当前版本，HEAD\^表示上一个版本，HEAD\^^表示上上个版本，HEAD~100表示上第100个版本。

#### repository
表示一个远端仓库。

`git@<server>:<path>/<repositoty>.git`

例如：`git@github.com:c41/test.git`

## 配置

配置文件有三个级别：
1. 系统配置，git全局的配置，整个系统有效。位于`/etc/gitconfig`，通过`--system`选项配置。
1. 全局配置，针对每个用户的配置，位于`~/.gitconfig`或`~/.config/git/config`，通过`--global`选项配置。
1. 仓库配置，针对每个仓库的配置。位于`<repo>/.git/config`。

| 配置 | 描述 |
|---|---|
| core.editor | 文本编辑器 |
| user.name | 用户名 |
| user.email | 邮箱 |

#### config

初始配置账户信息。

``` SHELL
$ git config --global user.name c41
$ git config --global user.email c41@example.com
```

查看配置。
``` SHELL
# 查看所有配置列表。
$ git config --list

# 查看指定配置。
$ git config user.name
```

查看帮助信息。
``` SHELL
$ git help <verb>
$ git <verb> --help
```

#### .gitignore

正则模式：
- `*` 匹配0个或多个任意字符
- `[abc] [a-z]` 匹配任意一个范围内的字符
- `?` 匹配一个任意字符

``` gitignore
# 忽略所有以.a结尾的文件
*.a

# 不忽略lib.a文件
!lib.a

# 忽略当前目录下的TODO文件，不包含子目录
/TODO

# 忽略build目录下的所有文件
build/

# 忽略doc目录下所有以.txt结尾的直接子文件
doc/*.txt

# 递归忽略doc目录下所有以.pdf结尾的文件
doc/**/*.pdf
```

## 仓库

#### init
初始化仓库。

``` SHELL
# 将目录初始化为仓库，pwd在当前目录中。
$ git init
```

#### add
- 将已修改文件添加到暂存区。
- 将未跟踪文件添加到暂存区并标记为已跟踪。
``` SHELL
$ git add test.txt
```

add的对象是文件的修改，因此：
- `修改文件 -> git add -> 修改文件 -> git commit` 结果只提交了第一次修改。
- `修改文件 -> git add -> 修改文件 -> git add -> git commit` 合并了两次修改提交。

#### rm
删除文件，即从已跟踪文件列表中删除。

``` SHELL
# 删除文件，同时会删除本地目录的文件。
$ git rm test.txt

# 如果文件已暂存，必须用-f参数。
$ git rm -f test.txt
```

从目录中删除原始文件后，使用`git add`和`git rm`是一样的。

删除多个文件，*需要转义防止shell展开。
``` SHELL
$ git rm log/\*.log
```

删除已跟踪的文件，但不删除本地文件。

``` SHELL
$ git rm --cached README
```

#### mv
重命名（移动）文件。
``` SHELL
# 将README.md重命名为README。
$ git README.md README
```

#### commit
将暂存区的所有内容提交到当前分支。

``` SHELL
# 启动文本编辑器输入注释。
$ git commit

# 指定注释内容。
$ git commit -m "comment"
```

可以跳过`git add`一次性提交已修改文件。

``` SHELL
$ git commit -a -m "comment"
```

补充提交，即将暂存区的文件重新提交，代替第一次提交。用于弥补遗漏的暂存文件。
``` SHELL
$ git commit -m "old commit"
$ git add a_file
$ git commit -m "new commit" --amend
```

#### status
查看仓库状态。包括已修改文件、未跟踪文件、当前分支。

- `-s --short` 使用更紧凑的格式。

``` SHELL
$ git status
```

文件状态标记如下：
- `??` 未跟踪
- `A` 新添加到暂存区
- `M` 已修改，左侧表示已暂存，右侧表示未暂存

``` SHELL
$ git status -s
```

#### diff
查看本地已修改文件的修改差异。
``` SHELL
# 查看所有已修改文件的差异。
$ git diff

# 查看指定文件的差异。
$ git diff test.txt

# 查看所有已暂存文件的差异。
$ git diff --cached
$ git diff --staged
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

将本地分支与远程分支关联。
``` SHELL
$ git branch --set-upstream-to=origin/demo demo
```

#### checkout

切换分支。
``` SHELL
# 切换到分支demo。
$ git checkout demo

# 创建并切换到分支demo。
$ git checkout -b demo

# 拉取远程分支demo，创建并切换到本地分支demo（这一步不会关联本地分支与远程分支）
$ git checkout -b demo origin/demo
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

#### rebase

``` SHELL
$ git rebase
```

## 日志

#### log
查看历史日志。

不带参数时，按照提交时间列出所有的更新，最近的更新排在最上面，包含完整版本号、Author、Date、注释。

- `-<n>` 仅显示最近的n次提交。
- `-p` 按补丁格式显示每个更新之间的差异。
- `--abbrev-commit` 仅显示摘要版本号。
- `--after=<time>` 同`--since`。
- `--author=<author>` 限制指定author的提交。
- `--before=<time>` 同`--util`。
- `--committer=<committer>` 限制指定committer的提交。
- `--graph` 显示分支合并图。
- `--grep` 仅显示指定关键字的提交。
- `--name-only` 仅在提交信息后显示已修改的文件清单。
- `--name-status` 显示新增、修改、删除的文件清单。
- `--pretty=<type>` 显示格式。
    - `format:"<format>"` 格式化显示。
        - `%H` 完整版本号
        - `%h` 摘要版本号 
        - `%T` tree的完整版本号 
        - `%t` tree的摘要版本号 
        - `%P` parent的完整版本号 
        - `%p` parent的摘要版本号 
        - `%an` author 
        - `%ae` author的邮箱 
        - `%ad` author修订日期 
        - `%ar` author修订日期，按多久以前的方式显示 
        - `%cn` committer 
        - `%ce` committer的邮箱 
        - `%cd` committer提交日期 
        - `%cr` committer提交日期，按多久以前的方式显示 
        - `%s` 注释 
    - `oneline` 每个提交在一行显示。
- `--relative-date` 使用较短的相对时间显示。
- `--shortstat` 只显示行数修改统计。
- `--since=<time>` 限制指定时间之后的日志。
- `--stat` 显示每次更新的文件修改统计信息。
- `--util=<time>` 限制指定时间之前的日志。

``` SHELL
$ git log --pretty=oneline --graph --abbrev-commit
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

#### pull
拉取远程内容到本地库。

``` SHELL
git pull
```

#### clone
克隆远程库到本地，当前目录为根目录上一层。支持https、git、ssh等协议。

``` SHELL
# 克隆远端库test，本地会创建目录test。
$ git clone https://github.com/c41/test.git

# 克隆远端库test，指定本地目录。
$git clone https://github.com/c41/test.git work
```

## 标签

标签与某个commit关联。如果关联的commit在多个分支中，则每个分支都可以看到该标签。

#### tag
查看当前所有标签列表。
``` SHELL
$ git tag
```

在当前分支创建标签。创建的标签在本地库中，需要主动推送到远程库。

``` SHELL
# 在当前分支的当前版本创建标签。
$ git tag v1.0

# 在当前分支的指定版本创建标签。
$ git tag v1.0 f13c522

# 在当前分支的指定版本创建标签，包含说明。
$ git tag -a v1.0 -m "comment" f13c522
```

推送本地标签到远程库。

``` SHELL
# 推送指定标签
$ git push origin v1.0

# 推送所有标签
$ git push origin --tags
```

删除标签。
``` SHELL
$ git tag -d v1.0
```

删除远程库标签。

``` SHELL
# 先删除本地标签，然后推送到远程
$ git tag -d v1.0
$ git push origin :refs/tags/v1.0
```

#### show
查看标签信息。
``` SHELL
$ git show v1.0
```

## 工作树

#### update-index
把本地所有标记为skip worktree的文件取消标记。
``` SHELL
$ git ls-files -v | grep -i ^S | cut -c 3- | tr '\012' '\000' | xargs -0 git update-index --no-skip-worktree
```
