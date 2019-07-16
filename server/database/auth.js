const readlineSync = require('readline-sync');

const auth = function () {
  process.env.DB_USER = process.env.DB_USER || readlineSync.question('Username: ');
  process.env.DB_PASS = process.env.DB_PASS || readlineSync.question('Password: ', {
    hideEchoBack: true,
  });
};

module.exports = auth;
