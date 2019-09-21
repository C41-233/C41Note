# 分布式事务

###### xa-start-statement
> **XA** {**START** | **BEGIN**} *xid* [**JOIN** | **RESUME**]

XA语句用于启动一个带有指定xid值的XA事务。

###### xa-prepare-statement
> **XA PREPARE** *xid*

###### xa-commit-statement
> **XA COMMIT** *xid* [**ONE PHASE**]

###### xa-end-statement
> **XA END** *xid* [**SUSPEND** [**FOR** **MIGRATE**]]

###### xa-recover-statement
> **XA RECOVER**

###### xa-rollback-statement
> **XA ROLLBACK** *xid*

###### xid
> *gtrid* [**,** *bqual* [**,** *format*]]
