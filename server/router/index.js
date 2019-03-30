const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.get('/byroom/:roomid/all', controllers.photos.get);

module.exports = router;