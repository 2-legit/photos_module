const readlineSync = require('readline-sync');

function auth() {
  process.env.DB_HOST = process.env.DB_HOST || readlineSync.question('Hostname: ');
  process.env.DB_USER = process.env.DB_USER || readlineSync.question('Username: ');
  process.env.DB_PASS = process.env.DB_PASS || readlineSync.question('Password: ', {
    hideEchoBack: true,
  });
}

module.exports = auth;
