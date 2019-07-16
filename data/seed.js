const faker = require('faker');
const database = require('../server/database/connection.js');
const initialize = require('../server/database/init.js');
const Photo = require('../server/model/photos.js');

const randomNumber = max => Math.ceil(Math.random() * max);

const seedDatabase = (rooms) => {
  // Drop the database to clear all prior information
  database.query('DROP DATABASE IF EXISTS photo;')
    .then(() => initialize(database)) // Create the database again and create the table
    .then(() => { // Generate test instances in an array
      const array = [];
      for (let i = 0; i < rooms; i += 1) {
        const numberOfPictures = randomNumber(15) + 15;
        for (let p = 0; p < numberOfPictures; p += 1) {
          array.push({
            list: p,
            roomid: i,
            imageurl: `http://loremflickr.com/640/480/house,room?random=${p}`,
            imagedesc: faker.fake('{{lorem.word}} {{lorem.word}} {{lorem.word}}'),
          });
        }
      }
      return array;
    })
    .then(array => Photo.bulkCreate(array))
    .catch(error => console.error(error));
};

module.exports = seedDatabase;
