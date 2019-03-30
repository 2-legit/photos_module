const Photo = require('../model/photos.js');

module.exports = {
  photos: {
    get: (req, res) => {
      Photo.findAll({ where: { roomid: req.params.roomid } })
      .then((result) => {
        res.send({ photos: result });
      });
    }
  }
}