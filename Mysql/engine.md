# 存储引擎

一个存储引擎决定了数据如何存储以及如何访问，还有事务如何处理。存储引擎很大程度影响处理SQL语句所需的存储空间和速度。

允许为每张表定义存储引擎，如果没有指定，则使用默认引擎。

| 存储引擎 | 描述 | 默认版本 | 事务 | XA | 保存点 |
|---|---|---|---|---|---|
| InnoDB | 支持事务、外键、行锁定 | 5.0 | YES | YES | YES |
| MyISAM | ISAM引擎扩展 | 3.23 | NO | NO | NO |
| Merge | 合并视图。需要配合UNION和INSERT_METHOD子句 |  | NO | NO | NO |
| MRG_MyISAM |  |  | NO | NO | NO |
| ISAM | 早期MySQL的默认引擎 |  | NO | NO | NO |
| CVS | 使得数据存储在外部文件中，该文件拥有逗号隔开的值 | | NO | NO | NO |
| HEAP | 与MEMORY引擎相同 |  | NO | NO | NO |
| Memory | 数据驻留内存，而不存储在硬盘上，默认使用哈希索引。处理速度非常快，当数据库服务停止时，数据都被删除 |  | NO | NO | NO |

# Merge存储引擎
Merge存储引擎是一组MyISAM表的组合，这些MyISAM表结构必须完全相同。

Merge表本身不包含任何数据，仅是对多张MyISAM表的视图，删除Merge表不会删除这些表的数据。

例如：

``` SQL
CREATE TABLE payment01(
	country_id SMALLINT,
	payment_date DATETIME,
	amount DECIMAL(15,2),
	PRIMARY KEY(country_id)
) ENGINE=MyISAM

CREATE TABLE payment02(
	country_id SMALLINT,
	payment_date DATETIME,
	amount DECIMAL(15,2),
	PRIMARY KEY(country_id)
) ENGINE=MyISAM

CREATE TABLE payment(
	country_id SMALLINT,
	payment_date DATETIME,
	amount DECIMAL(15,2),
	PRIMARY KEY(country_id)
) ENGINE=Merge UNION(payment01, payment02) INSERT_METHOD=LAST
```