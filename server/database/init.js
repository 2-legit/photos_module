const sequelize = require('./connection.js');

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

var createTableQueryString = function(tableName, table) {
  var queryString = 'CREATE TABLE IF NOT EXISTS `' + tableName + '` (';

  for (let field in table) {
    queryString += `\n  ${field} ${table[field]},`;
  }

  queryString = queryString.slice(0, queryString.length - 1);

  return queryString += `\n);`;
};

var initialize = function() {

  sequelize.authenticate()

  .then(() => {
    console.log('[Server] MySQL connection ready, initializing database...');
    // return a call to sequelize query submission function to create database
    return sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
  })

  .then(() => {
    console.log(`[Server] Database "${DB_NAME}" created or exists, now using...`);
    // return a call to sequelize query submission function to use database
    return sequelize.query(`USE ${DB_NAME};`);
  })

  .then(() => {
    console.log(`[Server] Now using database ${DB_NAME}, creating table...`);
    // return a call to sequelize query submission function to create the table
    return sequelize.query(createTableQueryString(TABLE_NAME, TABLE));
  })

  .then(() => {
    console.log(`[Server] Table "${TABLE_NAME}" successfully created.`)
  })
  
  .catch((error) => {
    console.error(error);
  });

};

module.exports = initialize;