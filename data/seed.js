const faker = require('faker');
const database = require('../server/database/connection.js');
const initialize = require('../server/database/init.js');
const Photo = require('../server/model/photos.js');

const randomNumber = max => Math.ceil(Math.random() * max);

const seedDatabase = (rooms) => {
  // Drop the database to clear all prior information
  database.query('DROP DATABASE IF EXISTS photo;')
    .then(() => initialize()) // Create the database again and create the table
    .then(() => { // Generate test instances in an array
      const array = [];
      for (let i = 0; i < rooms; i += 1) {
        const numberOfPictures = randomNumber(10) + 4;
        for (let p = 0; p < numberOfPictures; p += 1) {
          array.push({
            list: p,
            roomid: i,
            imageurl: `http://loremflickr.com/640/480/house,room?random=${p}`,
            imagedesc: faker.fake('{{lorem.word}} {{lorem.word}} {{lorem.word}}'),
          });
        }
      }
      Photo.bulkCreate(array) // Create the records on the database
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
};

seedDatabase(100);
