//count : returns the number of rows in a table
select count(*) as [Number of Records] from customer where customerfirstname like 'r%".

//sum :return the sum of all the values in that column.
select SUM(Salary) FROM Employee;

//max :return the largest value in the column.
select MAX(Salary) FROM Employee;

//min :return the smallest value in the column.
select MIN(Salary) FROM Employee;

//avarage : return the avarage value of the column.
select AVG(Salary) FROM Employee;

//round: it round the decimal numbers to integer of a column.
select Round(salary, integer) from employee;