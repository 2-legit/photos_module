const express = require('express');
const path = require('path');
const compression = require('compression');

const router = require('./router');

const app = express();
const port = process.env.PORT || 3002;

app.use(compression());

app.use('/location/:locationid', express.static(path.join(__dirname, '/../public/')));

app.use('/photos/byroom', router);

app.listen(port, () => console.log('Server listening on port', port));
