const Sequelize = require('sequelize');
const sequelize = require('../database/connection.js');

const Model = sequelize.define('Model', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  list: Sequelize.INTEGER,
  roomid: Sequelize.INTEGER,
  imageurl: Sequelize.STRING(150),
  imagedesc: Sequelize.STRING(150)
});

class Photo extends Model {}
Photo.init({
  list: Sequelize.INTEGER,
  roomid: Sequelize.INTEGER,
  imageurl: Sequelize.STRING(150),
  imagedesc: Sequelize.STRING(150)
}, { sequelize });

module.exports = Photo;