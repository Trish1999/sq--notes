//VIEW: CREATES A VIRTUAL TABLE BASED ON RESULT SET OF SQL STATEMENT.
//Syntax
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

//Examples
CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';

//We can query the view as follows:
SELECT * FROM [Brazil Customers];