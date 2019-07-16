const Sequelize = require('sequelize');
const initialize = require('./init');
const auth = require('./auth.js');

auth();

const { DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(null, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: 3306,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

initialize(sequelize);

module.exports = sequelize;
