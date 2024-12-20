CustomerID  |   CustomerName   |    ContactName    | Country
//----------|------------------|-------------------|-----------
1           |    Alfreds       |  Maria Anders     |  Germany
2           |    Ana           |  Trujillo         |  Mexico
3           |    Antonio       |  Antonio Moreno   |  Mexico


OrderID  |  CustomerID    | OrderDate
//-------|----------------|----------------
10308    |   2            | 1996-09-18
10309    |   37           | 1996-09-19
10310    |   77           | 1996-09-20

//SQL joins are used to combine rows from two or more tables based on a related column. 

//types of joins
//1.Inner join :returns rows when there is a match in both tables.
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

//2.Left (Outer) join:  Return all records from the left table, and the matched records from the right table
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;

//3.Right (Outer) join :Return all records from the right table, and the matched records from the left table
SELECT Orders.OrderID,Customers.CustomerName
FROM Orders
RIGHT JOIN Customers ON Orders.CustomerID=Customers.CustomerID
ORDER BY Orders.OrderID;

//4.Full (Outer) join :Return all records when there is a match in either left or right table
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;

//5.Self join:A self JOIN is a regular join, but the table is joined with itself.
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;

//6.Cross join: Produces the Cartesian product of two tables (i.e., every row from the first table is paired with every row from the second table).
SELECT Users.Username, Tasks.TaskName
FROM Users
CROSS JOIN Tasks;

//7.Natural join:  Automatically joins tables based on columns with the same name and compatible data types. No need to explicitly specify the ON condition.
SELECT * FROM Employees NATURAL JOIN Departments;
