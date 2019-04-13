const Sequelize = require('sequelize');

const { DB_USER, DB_PASS } = require('./pass.js');

const sequelize = new Sequelize(null, DB_USER, DB_PASS, {
  host: '172.17.0.5',
  port: 3306,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  }
});

module.exports = sequelize;
