var require = require("mysql")
var express = require("express")
var exphbs = require("express-handlebars");
var schema = require("./db/schema.sql")
var seeds = require("./db/seeds.sql")

// Run the schema.sql and seeds.sql files into the mysql server from the command line

// Make sure you're in the db folder of your app.
// Start MySQL command line tool and login: mysql - u root - p.
// With the mysql > command line tool running, enter the command source schema.sql.This will run your schema file and all of the queries in it-- in other words, you'll be creating your database.

// Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

// Close out of the MySQL command line tool: exit.