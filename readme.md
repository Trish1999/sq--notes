
UPDATE: Query is used to modify the existing records in a table

update customer set customeraddress = 'Pune' where customerlastname = "ram";
---------------------------------------
WITH: store the result of a query in a temporary table using an alias.

with <temp_name> as select * <table_name> select * from <temp_name> where <column_name> operator value;
----------------------------------------
