const express = require('express');
const path = require('path');
const router = require('./router');
const initializeDatabase = require('./database/init.js');
const sequelize = require('./database/connection.js');

const app = express();

app.use('/:locationid', express.static(path.join(__dirname, '/../public')));

app.use('/photos', router);

const port = 3002;

app.listen(port, () => {
  console.log('[Server] Now listening on port', port);
  initializeDatabase().then(() => {
    sequelize.query('USE photo');
  });
});
