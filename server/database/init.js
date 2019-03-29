const sequelize = require('./connection.js');
const DB_NAME = 'photo';

sequelize.authenticate()
.then(() => {
  console.log('[MySQL] Connection ready, initializing database...');
  // return a call to sequelize query submission function to create database
  return sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
})
.catch((error) => {
  console.error('[MySQL] Cannot connect:\n', error);
})
.then(() => {
  console.log(`[MySQL] Database "${DB_NAME}" created or exists, now using...`);
  // return a call to sequelize query submission function to use database
  return sequelize.query(`USE ${DB_NAME}`);
})
.catch((error) => {
  console.error('[MySQL] Database not created:\n', error);
  // if database could not be created, try using it if it exists
  return sequelize.query(`USE ${DB_NAME} IF EXISTS;`);
})
.then(() => {
  console.log(`[MySQL] Now using database ${DB_NAME}.`);
})
.catch((error) => {
  console.error('[MySQL] Database could not be used:\n', error);
});

module.exports = sequelize;