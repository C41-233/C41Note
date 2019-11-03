# JDBC

<table>
    <thead>
        <tr>
        	<th>数据库类型</th>
        	<th>驱动类</th>
        	<th>URL</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>DB2</td><td>com.ibm.db2.jcc.DB2Driver</td><td>jdbc:db2://127.0.0.1:50000/dbname</td></tr>
        <tr><td>Informix</td><td>com.informix.jdbc.IfxDriver</td><td>jdbc:informix-sqli://123.45.67.89:1533/myDB:INFORMIXSERVER=myserver;user=testuser;password=testpassword</td></tr>
        <tr><td>MySQL</td><td>com.mysql.jdbc.Driver</td><td>jdbc:mysql://localhost:3306/dbname</td></tr>
        <tr><td>Oracle</td><td>oracle.jdbc.driver.OracleDriver</td><td>jdbc:orcle:thin:@127.0.0.1:1521:dbname</td></tr>
        <tr><td>PostgreSQL</td><td>org.postgresql.Driver</td><td>jdbc:postgresql://localhost/dbname</td></tr>
        <tr><td>SQLite</td><td>org.sqlite.JDBC</td><td>jdbc:sqlite:dbname</td></tr>
        <tr><td>SqlServer2000</td><td>com.microsoft.jdbc.sqlserver.SQLServerDriver</td><td>jdbc:microsoft:sqlserver://localhost:1433;DatabaseName=dbname</td></tr>
        <tr><td>SqlServer2005</td><td>com.microsoft.sqlserver.jdbc.SQLServerDriver</td><td>jdbc:sqlserver://localhost:1433; DatabaseName=dbname</td></tr>
        <tr><td>Sybase</td><td>com.sybase.jdbc.SybDriver</td><td>jdbc:sybase:Tds:localhost:5007/dbname</td></tr>
    </tbody>
</table>