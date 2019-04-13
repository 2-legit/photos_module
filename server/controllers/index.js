const Photo = require('../model/photos.js');
const sequelize = require('../database/connection.js');

module.exports = {
  photos: {
    get: (req, res) => {
      sequelize.query('USE photo');
      Photo.findAll({ where: { roomid: req.params.roomid } })
        .then((result) => {
          console.log(`[Sequelize] query made for ${req.params.roomid}`);
          res.set('Access-Control-Allow-Origin', '*');
          res.send({ photos: result });
        })
        .catch((error) => {
          console.error('[Sequelize]', error.SequelizeDatabaseError);
          res.status(500).end();
        });
    },
  },
};
