create table dbo.customer (
CustomerID int NOT null primary key,
CustomerFirstName varchar(50) NOT null,
CustomerLastName varchar(50) NOT null,
CustomerAddress varchar(50) NOT null,
CustomerSuburb varchar(50) null,
CustomerCity varchar(50) NOT null,
CustomerPostCode char(4) null,
CustomerPhoneNumber char(12) null,
);

//select: Retrieves data from one or more tables.
select CustomerID, CustomerFirstName, CustomerLastName from customer where CustomerID = 1;

//display all records
select * from customer;

//display particular columns
select CustomerFirstName, CustomerLastName from customer

//TOP:s used to fetch a TOP N number of records.
select top 2 * from customer;

//top 40 percent: also means show the first two rows data
select top 40 percent * from customer;

//ROWNUM: fetch a limited number of records.
select * from customer where rownum<=5;

//limit:Restricts the number of rows returned.
select * from customer limit 5;//shows only 5 rows of data

//GROUP BY: arrange identical data into groups.
select CustomerFirstName count(*) as nameCount from customers group by CustomerID;

//ORDER BY: Sorts results in ascending or descending order.
//sort in  ascending order
select customerfirstname, customerlastname from customer order by customerlastname desc;
//or
select customerfirstname, customerlastname from customer order by 4, 2, 3 desc;
//n column no. without typing column name

//DISTINCT : only show unique value
select distinct customerlastname from customer order by customerlastname;

//Alias query: rename a table or a column temporarily by giving another name
SELECT column_name AS alias_name
FROM table_name
WHERE <condition>;

//save data in another table
select distinct customerlastname into temp from customer order by customerlastname;

//ANY or SOME: Compares a value to any value in a subquery.
//Returns TRUE if the condition is true for at least one value in the subquery.
select customerlastname from customer
where Salary > ANY/SOME (SELECT Salary FROM Employees WHERE Department = 'Sales');

//UNIQUE:same as distinct.
//Returns TRUE if the condition is true for at least one value in the subquery.
SELECT UNIQUE Department FROM Employees;

//ALL: Compares a value to all values in a subquery.
//Returns TRUE if the condition is true for every value in the subquery.
SELECT EmployeeName
FROM Employees
WHERE Salary > ALL (SELECT Salary FROM Employees WHERE Department = 'Sales');
