# mysql

mysql客户端程序。

## 参数

``` Shell
mysql [<options>] [<databtase>]
```

#### 基本模式
- `-?, --help` 显示帮助信息并退出。
- `-e, --execute=<sql>` 执行SQL语句并退出。
- `-V, --version`       Output version information and exit.

#### 连接
- `-h, --host=<host>` 服务器地址。默认为`localhost`。
- `-p<pwd>, --password[=<pwd>]` 登录密码。如果不提供\<pwd\>，则在登录时从终端输入。如果不提供该参数，则无密码。
- `-u, --user=<username>` 用户名。默认为当前机器用户名。
- `-w, --wait`          Wait and retry if connection is down.
- `-D, --database=name` 默认选择的database。
- `-P, --port=<port>`	服务器端口。
- `-S, --socket=name`   The socket file to use for connection.
- `--connect-timeout=<timeout>` Number of seconds before connection timeout.
- `--default-auth=name` Default authentication client-side plugin to use.
- `--max-allowed-packet=<n>` The maximum packet length to send to or receive from server.
- `--net-buffer-length=<n>` The buffer size for TCP/IP and socket communication.
- `--protocol=<value>`     使用的连接协议 (tcp, socket, pipe, memory)。
- `--reconnect`         Reconnect if the connection is lost. Disable with --disable-reconnect. This option is enabled by default.        
- `--secure-auth`       Refuse client connecting to server if it uses old (pre-4.1.1) protocol.
- `--ssl`               Enable SSL for connection (automatically enabled with other flags).
- `--ssl-ca=name`       CA file in PEM format (check OpenSSL docs, implies --ssl).
- `--ssl-capath=name`   CA directory (check OpenSSL docs, implies --ssl).
- `--ssl-cert=name`     X509 cert in PEM format (implies --ssl).
- `--ssl-cipher=name`   SSL cipher to use (implies --ssl).
- `--ssl-key=name`      X509 key in PEM format (implies --ssl).
- `--ssl-crl=name`      Certificate revocation list (implies --ssl).
- `--ssl-crlpath=name`  Certificate revocation list path (implies --ssl).
- `--ssl-verify-server-cert` Verify server's "Common Name" in its cert against hostname used when connecting. This option is disabled by default.

#### 执行     
- `-b, --no-beep` 关闭执行错误时的蜂鸣。
- `-c, --comments` 保留注释信息。默认情况下（`--skip-comments`）注释信息不向服务器发送。     
- `-n, --unbuffered`    Flush buffer after each query.
- `-o, --one-database`  Ignore statements except those that occur while the default database is the one named at the command line.
- `-q, --quick`         Don't cache result, print it row by row. This may slow down the server if the output is suspended. Doesn't use history file.
- `-B, --batch` Don't use history file. Disable interactive behavior. (Enables --silent.)
- `-C, --compress` 客户端与服务器之间传输时压缩数据。
- `-G, --named-commands` Enable named commands. Named commands mean this program's internal commands; see mysql> help . When enabled, the named commands can be used from any line of the query, otherwise only from the first line, before an enter. Disable with --disable-named-commands. This option is disabled by default.
- `-U, --safe-updates, --i-am-a-dummy`  Only allow UPDATE and DELETE that uses keys.
- `--binary-mode`       By default, ASCII '\0' is disallowed and '\r\n' is translated to '\n'. This switch turns off both features, and also turns off parsing of all clientcommands except \C and DELIMITER, in non-interactive mode (for input piped to mysql or loaded using the 'source' command). This is necessary when processing output from mysqlbinlog that may contain blobs.
- `--init-command=<sql>` 当连接上服务器后自动执行的SQL语句，重连后会自动再次执行。
- `--local-infile` 开启或关闭`LOAD DATA LOCAL INFILE`.
- `--max-join-size=#`   Automatic limit for rows in a join when using --safe-updates.
- `--select-limit=<n>`    Automatic limit for SELECT when using --safe-updates.
- `--show-warnings`     Show warnings after every statement.
- `--sigint-ignore` Ignore SIGINT (CTRL-C).
- `--tee=name`          Append everything into outfile. See interactive help (\h) also. Does not work in batch mode. Disable with --disable-tee. This option is disabled by default.

#### 格式化
- `-i, --ignore-spaces` Ignore space after function names.
- `-r, --raw`           Write fields without conversion. Used with --batch.
- `-s, --silent` 去掉线条框显示，以tab分隔字段，每一条数据占一行。
- `-t, --table`         Output in table format.
- `-E, --vertical` 将输出方式按照字段顺序竖着显示。
- `-H, --html`          Produce HTML output.
- `-N, --skip-column-names` Don't write column names in results.
- `-X, --xml`           Produce XML output.
- `--auto-vertical-output` 如果输出宽度大于终端宽度，自动切换为垂直输出模式。
- `--binary-as-hex` 以十六进制方式输出binary数据。
- `--column-names`      Write column names in results. (Defaults to on; use --skip-column-names to disable.)
- `--column-type-info`  显示列的类型信息。
- `--delimiter=<var>` 分隔符。
- `--pager[=<name>]` Pager to use to display results. If you don't supply an option, the default pager is taken from your ENV variable PAGER. Valid pagers are less, more, cat [> filename], etc. See interactive help (\h) also. This option does not work in batch mode. Disable with --disable-pager. This option is disabled by default.
- `--prompt=name`       Set the mysql prompt to this value.

#### 字符集
- `--character-sets-dir=name` Directory for character set files.
- `--default-character-set=<charset>` 客户端默认字符集。

#### 调试信息
- `-v, --verbose`	显示更多信息。
- `-T, --debug-info`    Print some debug info at exit.
- `--debug-check`       Check memory and open file usage at exit.
- `--progress-reports`  Get progress reports for long running commands (like ALTER TABLE) (Defaults to on; use --skip-progress-reports to disable.)
- `--show-warnings`	显示警告信息。

#### 错误处理
- `-f, --force` 执行SQL时遇到错误不中断。
- `-L, --skip-line-numbers` Don't write line number for errors.
- `--abort-source-on-error` 在执行`source <filename>`语句时，遇到错误就中断。
- `--line-numbers` Write line numbers for errors. (Defaults to on; use --skip-line-numbers to disable.)

#### 其它
- `--auto-rehash`       Enable automatic rehashing. One doesn't need to use 'rehash' to get table and field completion, but startup and reconnecting may take a longer time. Disable with --disable-auto-rehash. (Defaults to on; use --skip-auto-rehash to disable.)
- `-A, --no-auto-rehash` No automatic rehashing. One has to use 'rehash' to get table and field completion. This gives a quicker start of mysql and disables rehashing on reconnect. (Defaults to on; use --skip-reconnect to disable.)
- `--plugin-dir=<name>`   Directory for client-side plugins.
- `--server-arg=<name>`   Send embedded server this as a parameter.
              
