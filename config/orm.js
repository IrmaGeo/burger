
// Import(require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


var orm = {
    selectAll: function (tableInput, cb) {
        let sql = "SELECT * FROM ??"
        connection.query(sql, [tableInput], function (err, res) {
            if (err) throw err
            cb(res)
        }
        )

    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        console.log(vals);
        connection.query(queryString, vals, function (err, res) {
            if (err) throw err
            cb(res)
        }
        )

    },
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (err, res) {
            if (err) throw err
            cb(res)
        }
        )

    },
    deleteOne: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString)
        connection.query(queryString, function (err, res) {
            if (err) throw err
            cb(res)
        }
        )

    }
}

module.exports = orm