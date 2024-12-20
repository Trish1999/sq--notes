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

//AND : used to combine multiple conditions to narrow data.
SELECT CustomerFirstName, CustomerPhoneNumber FROM CUSTOMER
WHERE CustomerFirstName="ram" AND  CustomerCity="pune";

//OR: filters the result set to only include rows where either condition is true.
SELECT CustomerFirstName, CustomerPhoneNumber FROM CUSTOMER
WHERE CustomerFirstName="ram" OR  CustomerCity="pune";

//NOT: display all the condition axcept other conditions.
SELECT * FROM CUSTOMER WHERE NOT CustomerFirstName = 'ram';