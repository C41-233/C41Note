# CREATE TRIGGER语句

###### create-trigger-statement
> **CREATE**  
[ **DEFINER** **=** {*user* | **CURRENT_USER**} ]  
**TRIGGER** *trigger-name*  
{**BEFORE** | **AFTER**} {**INSERT** | **DELETE** | **UPDATE**} **ON** *table-reference* **FOR EACH ROW**  
*routine-body*

###### user
> <*username* [**@** *hostname*]>

###### table-reference
> <[*database-name* **.**] *table-name*>

CREATE TRIGGER语句用于创建触发器。触发器是满足一定条件后自动执行的过程，不能由用户主动调用。

触发时机BEFORE指定触发器动作在相应语句之前执行，AFTER指定触发器动作在相应语句之后执行。

触发语句与触发表指定了触发的条件，一旦满足触发条件，触发器一定会执行。

FOR EACH ROW指明了对于发生变化的每一行都要触发一次，例如一次INSERT多行，则会对每一行都触发。目前MySQL只支持这种模式。

对于同一张数据库表，不能定义同一触发条件和触发时机的两个不同触发器。

可以为触发器指定定义者。

在触发器执行体中，OLD指代了被删除的一行，NEW指代了新插入的一行。