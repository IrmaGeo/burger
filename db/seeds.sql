-- Still
-- in the db folder,
-- create a seeds.sql file. In this file, write
-- insert queries
-- to populate the burgers table
-- with at least three entries.

USE burgers_db;

insert into burgers
    (burger_name, devoured)
values
    ("Cheese Burger", false),
    ("Double Burger", false)

--     Run the
-- schema.sql and seeds.sql files into the mysql server from the command line
