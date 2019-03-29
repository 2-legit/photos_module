const DB_PASS = require('./pass.js');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'fec-photo-service',
  password: DB_PASS
});

module.exports = connection;