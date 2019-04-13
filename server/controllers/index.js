const Photo = require('../model/photos.js');
const sequelize = require('../database/connection.js');

module.exports = {
  photos: {
    get: (req, res) => {
      sequelize.query('USE photo')
        .then(() => Photo.findAll({ where: { roomid: req.params.roomid } }))
        .then((result) => {
          console.log(`Query made for ${req.params.roomid}`);
          res.set('Access-Control-Allow-Origin', '*');
          res.send({ photos: result });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).end();
        });
    },
  },
};
