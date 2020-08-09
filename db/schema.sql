DROP DATABASE if EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

create TABLE burgers
(
    id int(10)
    AUTO_INCRIMENT not NULLL,
    burger_name VARCHAR
    (30) not null,
    devoured boolean,
    PRIMARY key
    (id)
)
