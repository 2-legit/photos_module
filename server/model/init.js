const sequelize = require('../database/init.js');

const TABLE_NAME = 'photos';
const TABLE = {
  'id': 'INT NOT NULL AUTO_INCREMENT',
  'order': 'INT NOT NULL',
  'roomId': 'INT NOT NULL',
  'imageUrl': 'VARCHAR',
  'imageDescription': 'VARCHAR(150)',
  'PRIMARY KEY': '(id)'
}

var createTableQueryString = function(tableName, table) {
  var queryString = `CREATE TABLE IF NOT EXISTS ${tableName} (`;

  for (let field in table) {
    queryString += `\n  ${field} ${table[field]},`;
  }

  return queryString += `\n);`;
};

sequelize.query(createTableQueryString(TABLE_NAME, TABLE))
.then(() => {
  console.log(`[MySQL] Table "${TABLE_NAME}" created successfully.`);
})
.catch((error) => {
  console.error(`[MySQL] Could not create table:\n`, error);
});

module.exports = sequelize;