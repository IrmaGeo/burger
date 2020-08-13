-- In the db
-- folder,
-- create a file named schema.sql. Write SQL queries this file that do the
-- following:

-- Create the burgers_db.
-- Switch to or
-- use the
-- burgers_db.
-- Create a burgers table
-- with these
-- fields:
-- id:
-- an auto incrementing int that serves as the primary key.
-- burger_name:
-- a string.
-- devoured:
-- a boolean.

DROP DATABASE if EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

create TABLE burgers
(
    id int(10)
    auto_increment not null,
    burger_name VARCHAR
    (50) not null,
    devoured boolean DEFAULT false,
    PRIMARY key
    (id)
);

