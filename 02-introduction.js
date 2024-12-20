//SQL= Standard Query Language
//SQL is a standard language for accessing and manipulating databases.
//SQL works with RDBMS.
//such as MySQL, PostgreSQL, Oracle, and SQL Server

//RDBMS-Relational database Management system.
//it store data in tables organized into rows and columns.

//there are 5 types of SQL commands
//    DDL      DML      DCL      TCL      DQL
//  create    insert    grant   commit    select
//  drop      update    revoke  rollback
//  truncate  delete        
//  alter                          
//                    

//DDL : Data Defination Language
//------------------------------------
//CREATE :It is used to create a new table in the database.
//Syntax: CREATE TABLE TABLE_NAME (COLUMN_NAME DATATYPES[,....]);
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100)
);

//DROP: It is used to delete both the structure and record stored in the table.
//syntax: DROP TABLE ;
DROP TABLE Users;

//TRUNCATE: Deletes all rows in a table but retains the structure.
//syntax: TRUNCATE TABLE <tableName>;
TRUNCATE TABLE Users;

//ALTER :  Modifies an existing database or table.
//syntax: ALTER TABLE <tableName> ADD <newField> datatype(15);
ALTER TABLE Users ADD PhoneNumber VARCHAR(15);

//change datatype of a table 
ALTER TABLE Users ALTER column PhoneNumber INT(11);

//DML: Data Manipulation Language
//--------------------------------------
//INSERT: Adds new records to a table.
//syntax : INSERT INTO <tableName> (field1, field2, ...) VALUES (val1, val2,...);
INSERT INTO Users (UserID, Username, Email) VALUES (1, 'Alex', 'alex@example.com');

//UPDATE: Modifies existing records in a table.
//syntax: UPDATE <tableName> SET fieldName = value WHERE <condition>;
UPDATE Users SET Email = 'alex.new@example.com' WHERE UserID = 1;

//DELETE: Removes records from a table.
//--if not put ‘where’, willdelete all record
//syntax: DELETE FROM <tableName> WHERE <condition>;
DELETE FROM Users WHERE UserID = 1;

//DCL :(data controll language)
//-------------------------------------
//GRANT: Gives user access to the database.
GRANT SELECT, INSERT ON Users TO 'username';

//REVOKE: Removes user access.
REVOKE SELECT ON Users FROM 'username';

//TCL : (Transaction control language)
//--------------------------------------
//COMMIT: Saves changes permanently.
COMMIT;

//ROLLBACK: Reverts changes made during a transaction.
ROLLBACK;

//DQL : (Data query language)
//---------------------------------
//SELECT: Retrieves data from one or more tables.
SELECT Username, Email FROM Users WHERE UserID = 1;

