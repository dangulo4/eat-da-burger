// Import MySQL connection
var connection = require('../config/connection.js');

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL
function objToSql(ob) {
  var arr = [];

  // loop through keys and push key/value as string into array
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string has spaces, add quotes
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  // translate array of strings to single comma-seperated string
  return arr.toString();
}

// Display all burgers
var orm = {
  selectAll: function(table, cb) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Add one burger
  insertBurger: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Updated burger status to devoured
  updateBurger: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Delete burger
  deleteBurger: function(table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
// export module exports
module.exports = orm;
