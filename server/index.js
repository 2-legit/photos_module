const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = function(promptString) {
  return new Promise((resolve, reject) => {
    rl.question(promptString, resolve);
  });
};

const writeFileAsync = function(file, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
};

const secretsTemplate = function(username, password) {
  return ('module.exports = {\n'
  + `  DB_USER: '${username}',\n`
  + `  DB_PASS: '${password}',\n`
  + '};');
};

(async function() {
  try {

    let user = await prompt('Username: ');
    let pass = await prompt('Password: ');

    let dbSecretsPath = path.join(__dirname, '/database/pass.js');
    let dbSecrets = secretsTemplate(user, pass);

    if (await writeFileAsync(dbSecretsPath, dbSecrets)) {
      rl.close();
      require('./app');
    }

  } catch (error) {

    console.error(error);

  }
})();