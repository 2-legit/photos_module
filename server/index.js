const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = function (promptString) {
  return new Promise((resolve, reject) => {
    rl.question(promptString, resolve);
  });
};

(async function () {
  try {
    process.env.DB_USER = await prompt('Username: ');
    process.env.DB_PASS = await prompt('Password: ');

    rl.close();

    require('./app');
  } catch (error) {
    console.error(error);
  }
}());
