// Set up MySQL Connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'gege65xsw4iayumg',
  password: 'sq3abd7ijqu36s9s',
  database: 'eoh0d8dgb8hh2exg'
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
