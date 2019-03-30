const Sequelize = require('sequelize');
const sequelize = require('../database/connection.js');

const Photo = sequelize.define('photo', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  list: Sequelize.INTEGER,
  roomid: Sequelize.INTEGER,
  imageurl: Sequelize.STRING(150),
  imagedesc: Sequelize.STRING(150)
}, { timestamps: false });

module.exports = Photo;