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