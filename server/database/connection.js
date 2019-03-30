const Sequelize = require('sequelize');

const DB_USER = 'fec-photo-service';
const DB_PASS = require('./pass.js');

const sequelize = new Sequelize(null, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;