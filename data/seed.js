const database = require('../server/database/connection.js');
const initialize = require('../server/database/init.js');
const faker = require('faker');

var randomNumber = max => Math.ceil(Math.random() * max);

var seedDatabase = (rooms) => {
  // Drop the database to clear all prior information
  database.query('DROP DATABASE IF EXISTS photo;')
  .then(() => { // Create the database again and create the table
    return initialize();
  })
  .then(() => { // Create the database model
    return require('../server/model/photos.js');
  })
  .then((Photo) => { // Generate test instances in an array
    var array = [];
    for (var i = 0; i < rooms; i++) {
      var numberOfPictures = randomNumber(10);
      for (var p = 0; p < numberOfPictures; p++) {
        array.push({
          list: p,
          roomid: i,
          imageurl: faker.image.imageUrl(),
          imagedesc: faker.fake('{{lorem.word}} {{lorem.word}} {{lorem.word}}')
        });
      }
    }
    Photo.bulkCreate(array) // Create the records on the database
    .then(() => console.log('\n[Server] Test data generated, creating records...\n'))
    .catch((error) => console.error(error));
  })
  .catch(error => console.error(error));
}

seedDatabase(100);