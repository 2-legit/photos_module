/**
 * Database initialization file
 * Creates a new database and adds a table to it
 */

// Define constants for use in creating the database and tables
const DB_NAME = 'photo';
const TABLE_NAME = 'photos';
const TABLE = {
  id: 'INT NOT NULL AUTO_INCREMENT',
  list: 'INT NOT NULL',
  roomid: 'INT NOT NULL',
  imageurl: 'VARCHAR(150) NOT NULL',
  imagedesc: 'VARCHAR(150) NOT NULL',
  'PRIMARY KEY': '(id)',
};

// Take both a string name and an object, return a string that is
// used to make a raw query to the database
function createTableQueryString(tableName, table) {
  let queryString = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
  const fields = Object.keys(table);
  for (let i = 0; i < fields.length; i += 1) {
    queryString += `\n  ${fields[i]} ${table[fields[i]]},`;
  }
  queryString = queryString.slice(0, queryString.length - 1);
  queryString += '\n);';
  return queryString;
}

// Database initialization function
function initialize(connection) {
  return connection.authenticate() // Check if the connection to MySQL is ready
    // then, create the database if it does not already exist
    .then(() => connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`))
    // then, use the database
    .then(() => connection.query(`USE ${DB_NAME};`))
    // then, create the table
    .then(() => connection.query(createTableQueryString(TABLE_NAME, TABLE)))
    .catch(error => console.error(error));
}

module.exports = initialize;
