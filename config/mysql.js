var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'superhacker1',
  database: 'poster'
});

connection.connect();

//exports.
