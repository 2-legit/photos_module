const database = require('../server/database/connection.js');
const initialize = require('../server/database/init.js');
const faker = require('faker');

var randomNumber = max => Math.ceil(Math.random() * max);

var seedDatabase = (rooms) => {

  database.query('DROP DATABASE IF EXISTS photo;')

  .then(() => {

    return initialize();
    
  })

  .then(() => {

    return require('../server/model/photos.js');

  })

  .then((Photo) => {

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

    Photo.bulkCreate(array)
    .then(() => console.log(`\nDatabase seeded.\n`))
    .catch((error) => console.error(error));

  })

  .catch(error => console.error(error));

}

seedDatabase(100);