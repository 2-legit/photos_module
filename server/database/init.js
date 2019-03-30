/**
 * Database initialization file
 * Creates a new database and adds a table to it
 */

const sequelize = require('./connection.js');

// Define constants for use in creating the database and tables
const DB_NAME = 'photo';
const TABLE_NAME = 'photos';
const TABLE = {
  'id': 'INT NOT NULL AUTO_INCREMENT',
  'list': 'INT NOT NULL',
  'roomid': 'INT NOT NULL',
  'imageurl': 'VARCHAR(150) NOT NULL',
  'imagedesc': 'VARCHAR(150) NOT NULL',
  'PRIMARY KEY': '(id)'
}

// Take both a string name and an object, return a string that is
// used to make a raw query to the database
var createTableQueryString = function(tableName, table) {
  var queryString = 'CREATE TABLE IF NOT EXISTS `' + tableName + '` (';

  for (let field in table) {
    queryString += `\n  ${field} ${table[field]},`;
  }

  queryString = queryString.slice(0, queryString.length - 1);

  return queryString += `\n);`;
};

// Database initialization function
var initialize = function() {
  
  sequelize.authenticate() // Check if the connection to MySQL is ready

  .then(() => { // then, make the database if it does not already exist
    console.log('[Server] MySQL connection ready, initializing database...');
    return sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
  })

  .then(() => { // then, use the database
    console.log(`[Server] Database "${DB_NAME}" created or exists, now using...`);
    return sequelize.query(`USE ${DB_NAME};`);
  })

  .then(() => { // then, create the table if none already exists
    console.log(`[Server] Now using database ${DB_NAME}, creating table...`);
    return sequelize.query(createTableQueryString(TABLE_NAME, TABLE));
  })

  .then(() => { // log the creation of the table
    console.log(`[Server] Table "${TABLE_NAME}" successfully created.`)
  })
  
  .catch((error) => {
    console.error(error);
  });

};

module.exports = initialize;