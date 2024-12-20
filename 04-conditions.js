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

//WHERE: Filters records based on conditions.

//like :Search for a pattern
//(underscore sign) _ is only specific for one character only
//(percent sign) % represents zero, one, or multiple characters
select * from customer where customerlastname like '_r%';
//show the data where customerlastname have r in second letter. one _ means thereis only one letter befor r. % means any number of caracter are present after r.

//IN: search multiple items
select * from customer where customerlastname in ('Brown', ‘Michael’, ’Jim’);

//between :with in a range
select * from customer where CustomerID between 5 and 10 ;
//not include 5 & 10

//not between: display the products outside the range
select * from customer where CustomerID not between 10 and 20;

//= (equal)
select * from customer where customerId = 26 ;

//>(greater then) 
select * from customer where customerId > 2 ;

//>= (Greater than or equal)
select * from customer where customerId >= 2 ;

//<(less then)
select * from customer where customerId < 20 ;

//<= Less than or equal
select * from customer where customerId <= 20 ;

//<> (Not Equal) or != (in some version)
select * from customer where customerlastname <> 'Brown';

//IS NULL(check null values)
select * from customer where customerlastname is null;

// IS NOT NULL
select * from customer where customerlastname is not null;

//HAVING: used to select records used with aggregate function

//where vs having 
//------------------
// WHERE filters on indivisual rows.
// HAVING filters on grouped data.

// WHERE used before grouping.
// HAVING used after grouping.

// WHERE can not Use Aggregate Functions.
// HAVING can Use Aggregate Functions.
