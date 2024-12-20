// 1. Union
// allow you to combine two tables
// together (but the no. of columns &
// each column’s data types for 2 tables
// must be match)
// don't need common key, only need
// common attributes
// merge, not showing duplicate record
select lname,fname from customer union select lname,fname from customer_2;

// 2. Union all
// merge, but show you everything, even the duplicate record
select lname,fname from customer
union all
select lname,fname from customer_2;

// 3.Intersect
// keep only the rows in common to both query
//not showing duplicate record
select lname,fname from customer
intersect
select lname,fname from customer_2;

// 4.Except
// generate only the records that are unique to the CUSTOMER table
select lname,fname from customer
except
select lname,fname from customer_2;