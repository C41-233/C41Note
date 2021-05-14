# mysqldump

mysqldump用于数据库逻辑备份，将备份数据向标准输出，可通过重定向至文件。

## 参数

``` Shell
mysql [<options>] [<databtase>] [<table>]
```

#### 基本模式
- `-?, --help`          Display this help message and exit.
- `-v, --verbose`       Print info about the various stages.
- `-V, --version`       Output version information and exit.
- `--print-defaults`        Print the program argument list and exit.

#### 连接
- `-h, --host=name`     Connect to host.
- `-p, --password[=name]`  Password to use when connecting to server. If password is not given it's solicited on the tty.
- `-u, --user=name`     User for login if not current user.
- `-C, --compress`      Use compression in server/client protocol.
- `-P, --port=#`        Port number to use for connection.
- `-S, --socket=nam`   The socket file to use for connection.
- `--bind-address=name` IP address to bind to.
- `--default-auth=name` Default authentication client-side plugin to use.
- `--max-allowed-packet=#`  The maximum packet length to send to or receive from server.
- `--net-buffer-length=#`  The buffer size for TCP/IP and socket communication.
- `--protocol=name`     The protocol to use for connection (tcp, socket, pipe, memory).
- `--secure-auth`       Refuse client connecting to server if it uses old (pre-4.1.1) protocol. Deprecated. Always TRUE
- `--ssl`               Deprecated. Use --ssl-mode instead. (Defaults to on; use --skip-ssl to disable.)
- `--ssl-ca=name`       CA file in PEM format.
- `--ssl-capath=name`   CA directory.
- `--ssl-cert=name`     X509 cert in PEM format.
- `--ssl-cipher=name`   SSL cipher to use.
- `--ssl-crl=name`      Certificate revocation list.
- `--ssl-crlpath=name`  Certificate revocation list path.
- `--ssl-key=name`      X509 key in PEM format.
- `--ssl-mode=name`     SSL connection mode.
- `--ssl-verify-server-cert`  Deprecated. Use --ssl-mode=VERIFY_IDENTITY instead.
- `--tls-version=name`  TLS version to use, permitted values are: TLSv1, TLSv1.1

#### 配置
- `--defaults-file=<file>`       Only read default options from the given file #.
- `--defaults-extra-file=<file>` Read this file after the global files are read.
- `--defaults-group-suffix=<value>`    Also read groups with concat(group, suffix)
- `--enable-cleartext-plugin`  Enable/disable the clear text authentication plugin.
- `--login-path=#`          Read this path from the login file.
- `--no-defaults`           Don't read default options from any option file, except for login file.
- `--plugin-dir=name`   Directory for client-side plugins.

#### 输出
- `-a, --create-options`  Include all MySQL specific create options. (Defaults to on; use --skip-create-options to disable.)
- `-c, --complete-insert`  Use complete insert statements.
- `-d, --no-data`       No row information.
- `-e, --extended-insert`  Use multiple-row INSERT syntax that include several VALUES lists. (Defaults to on; use --skip-extended-insert to disable.)
- `-i, --comments`      Write additional information. (Defaults to on; use --skip-comments to disable.)
- `-t, --no-create-info`  Don't write table creation info.
- `-y, --no-tablespaces` Do not dump any tablespace information.
- `-A, --all-databases` Dump all the databases. This will be same as --databases with all databases selected.
- `-B, --databases`     Dump several databases. Note the difference in usage; in this case no tables are given. All name arguments are regarded as database names. 'USE db_name;' will be included in the output.
- `-E, --events`        Dump events.
- `-K, --disable-keys`  `/*!40000 ALTER TABLE tb_name DISABLE KEYS */;` and `/*!40000 ALTER TABLE tb_name ENABLE KEYS */;` will be put in the output. (Defaults to on; use --skip-disable-keys to disable.)
- `-R, --routines`      Dump stored routines (functions and procedures).
- `-Y, --all-tablespaces`  Dump all the tablespaces.
- `--add-drop-database` Add a DROP DATABASE before each create.
- `--add-drop-table`    Add a DROP TABLE before each create. (Defaults to on; use --skip-add-drop-table to disable.)
- `--add-drop-trigger`  Add a DROP TRIGGER before each create.
- `--add-locks`         Add locks around INSERT statements. (Defaults to on; use --skip-add-locks to disable.)
- `--allow-keywords`    Allow creation of column names that are keywords.
- `--apply-slave-statements`  Adds 'STOP SLAVE' prior to 'CHANGE MASTER' and 'START SLAVE' to bottom of dump.
- `--compact`           Give less verbose output (useful for debugging). Disables structure comments and header/footer constructs.  Enables options --skip-add-drop-table --skip-add-locks --skip-comments --skip-disable-keys --skip-set-charset.
- `--dump-date`         Put a dump date to the end of the output. (Defaults to on; use --skip-dump-date to disable.)
- `--flush-privileges`  Emit a FLUSH PRIVILEGES statement after dumping the mysql database.  This option should be used any time the dump contains the mysql database and any other database that depends on the data in the mysql database for proper restore. 
- `--include-master-host-port`  Adds `MASTER_HOST=<host>, MASTER_PORT=<port>` to 'CHANGE MASTER TO..' in dump produced with --dump-slave.
- `--insert-ignore`     Insert rows with INSERT IGNORE.
- `--log-error=name`    Append warnings and errors to given file.
- `--no-autocommit`     Wrap tables with autocommit/commit statements. -n, --no-create-db  Suppress the CREATE DATABASE ... IF EXISTS statement that normally is output for each dumped database if --all-databases or --databases is given.
- `--opt`               Same as `--add-drop-table --add-locks --create-options --quick --extended-insert --lock-tables --set-charset --disable-keys`. Enabled by default, disable with --skip-opt.
- `--replace`           Use REPLACE INTO instead of INSERT INTO.
- `--set-gtid-purged[=name]`  Add `SET @@GLOBAL.GTID_PURGED` to the output. Possible values for this option are ON, OFF and AUTO. If ON is used and GTIDs are not enabled on the server, an error is generated. If OFF is used, this option does nothing. If AUTO is used and GTIDs are enabled on the server, `SET @@GLOBAL.GTID_PURGED` is added to the output. If GTIDs are disabled, AUTO does nothing. If no value is supplied then the default (AUTO) value will be considered.
- `--skip-opt`          Disable --opt. Disables --add-drop-table, --add-locks, --create-options, --quick, --extended-insert, --lock-tables, --set-charset, and --disable-keys.
- `--tables`            Overrides option --databases (-B).
- `--triggers`          Dump triggers for each dumped table. (Defaults to on; use --skip-triggers to disable.)
- `--tz-utc`            SET TIME_ZONE='+00:00' at top of dump to allow dumping of TIMESTAMP data when a server has data in different time zones or data is being moved between servers with different time zones. (Defaults to on; use --skip-tz-utc to disable.)

#### 格式化
- `-N, --no-set-names`  Same as --skip-set-charset.
- `-Q, --quote-names`   Quote table and column names with backticks (`). (Defaults to on; use --skip-quote-names to disable.)
- `-T, --tab=name`      Create tab-separated textfile for each table to given path. (Create .sql and .txt files.) NOTE: This only works if mysqldump is run on the same machine as the mysqld server.
- `-X, --xml`           Dump a database as well formed XML.
- `--character-sets-dir=name` Directory for character set files.
- `--default-character-set=name`  Set the default character set.
- `--hex-blob`          Dump binary strings (BINARY, VARBINARY, BLOB) in hexadecimal format.
- `--fields-enclosed-by=name` Fields in the output file are enclosed by the given character.
- `--fields-escaped-by=name`  Fields in the output file are escaped by the given character.
- `--fields-optionally-enclosed-by=name`  Fields in the output file are optionally enclosed by the given character.
- `--fields-terminated-by=name` Fields in the output file are terminated by the given string.
- `--lines-terminated-by=name`  Lines in the output file are terminated by the given string.
- `--set-charset`       Add `SET NAMES default_character_set` to the output. (Defaults to on; use --skip-set-charset to disable.)

#### 执行
- `-f, --force`         Continue even if we get an SQL error.
- `-l, --lock-tables`   Lock all tables for read. (Defaults to on; use --skip-lock-tables to disable.)
- `-q, --quick`         Don't buffer query, dump directly to stdout. (Defaults to on; use --skip-quick to disable.)
- `-r, --result-file=name`  Direct output to a given file. This option should be used in systems (e.g., DOS, Windows) that use carriage-return linefeed pairs (\r\n) to separate text lines. This option ensures that only a single newline is used.
- `-w, --where=name`    Dump only selected records. Quotes are mandatory.
- `-x, --lock-all-tables`  Locks all tables across all databases. This is achieved by taking a global read lock for the duration of the whole dump. Automatically turns --single-transaction and --lock-tables off.
- `-F, --flush-logs`    Flush logs file in server before starting dump. Note that if you dump many databases at once (using the option --databases= or --all-databases), the logs will be flushed for each database dumped. The exception is when using --lock-all-tables or --master-data: in this case the logs will be flushed only once, corresponding to the moment all tables are locked. So if you want your dump and the log flush to happen at the same exact moment you should use --lock-all-tables or --master-data with --flush-logs.
- `--compatible=name`   Change the dump to be compatible with a given mode. By default tables are dumped in a format optimized for MySQL. Legal modes are: ansi, mysql323, mysql40, postgresql, oracle, mssql, db2, maxdb, no_key_options, no_table_options, no_field_options. One can use several modes separated by commas. Note: Requires MySQL server version 4.1.0 or higher. This option is ignored with earlier server versions.
- `--delete-master-logs`  Delete logs on master after backup. This automatically enables --master-data.
- `--dump-slave[=#]`    This causes the binary log position and filename of the master to be appended to the dumped data output. Setting the value to 1, will printit as a CHANGE MASTER command in the dumped data output; if equal to 2, that command will be prefixed with a comment symbol. This option will turn --lock-all-tables on, unless --single-transaction is specified too (in which case a global read lock is only taken a short time at the beginning of the dump - don't forget to read about --single-transaction below). In all cases any action on logs will happen at the exact moment of the dump.Option automatically turns --lock-tables off.
- `--ignore-error=name` A comma-separated list of error numbers to be ignored if encountered during dump.
- `--ignore-table=name` Do not dump the specified table. To specify more than one table to ignore, use the directive multiple times, once for each table.  Each table must be specified with both database and table names, e.g., --ignore-table=database.table.
- `--master-data[=#]`   This causes the binary log position and filename to be appended to the output. If equal to 1, will print it as a CHANGE MASTER command; if equal to 2, that command will be prefixed with a comment symbol. This option will turn --lock-all-tables on, unless --single-transaction is specified too (in which case a global read lock is only taken a short time at the beginning of the dump; don't forget to read about --single-transaction below). In all cases, any action on logs will happen at the exact moment of the dump. Option automatically turns --lock-tables off.
- `--order-by-primary`  Sorts each table's rows by primary key, or first unique key, if such a key exists.  Useful when dumping a MyISAM table to be loaded into an InnoDB table, but will make the dump itself take considerably longer.
- `--single-transaction`  Creates a consistent snapshot by dumping all tables in a single transaction. Works ONLY for tables stored in storage engines which support multiversioning (currently only InnoDB does); the dump is NOT guaranteed to be consistent for other storage engines. While a --single-transaction dump is in process, to ensure a valid dump file (correct table contents and binary log position), no other connection should use the following statements: ALTER TABLE, DROP TABLE, RENAME TABLE, TRUNCATE TABLE, as consistent snapshot is not isolated from them. Option automatically turns off --lock-tables.

