const faker = require('faker');
const database = require('../server/database/connection.js');
const initialize = require('../server/database/init.js');

const randomNumber = max => Math.ceil(Math.random() * max);

const seedDatabase = (rooms) => {
  // Drop the database to clear all prior information
  database.query('DROP DATABASE IF EXISTS photo;')
    .then(() => // Create the database again and create the table
      initialize())
    .then(() => // Create the database model
      require('../server/model/photos.js'))
    .then((Photo) => { // Generate test instances in an array
      const array = [];
      for (let i = 0; i < rooms; i++) {
        const numberOfPictures = randomNumber(10);
        for (let p = 0; p < numberOfPictures; p++) {
          array.push({
            list: p,
            roomid: i,
            imageurl: faker.image.imageUrl(),
            imagedesc: faker.fake('{{lorem.word}} {{lorem.word}} {{lorem.word}}'),
          });
        }
      }
      Photo.bulkCreate(array) // Create the records on the database
        .then(() => console.log('\n[Server] Test data generated, creating records...\n'))
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
};

seedDatabase(100);
