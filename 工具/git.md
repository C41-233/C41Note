# git

## 配置

#### config
``` SHELL
$ git config --global user.name "username"
$ git config --global user.email "email"
```

## 仓库

#### init
将目录初始化为仓库，pwd在当前目录中。
``` SHELL
$ git init
```

#### add
添加文件。
``` SHELL
$ git add test.txt
```

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

## 工作树

#### update-index
把本地所有标记为skip worktree的文件取消标记。
``` SHELL
$ git ls-files -v | grep -i ^S | cut -c 3- | tr '\012' '\000' | xargs -0 git update-index --no-skip-worktree
```