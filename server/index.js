const express = require('express');
const router = require('./router');
const initializeDatabase = require('./database/init.js');

const app = express();

app.use('/', express.static('public'));

app.use('/photos', router);

const port = 3000;

app.listen(port, () => {
  console.log('[Server] Now listening on port', port);
  initializeDatabase().then(() => {});
});
