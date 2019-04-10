const axios = require('axios');
const fs = require('fs');
const path = require('path');

fs.writeFileAsync = function (path, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, options, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

const allPics = [];
let soonToBePic;

for (let i = 0; i < 50; i += 1) {
  soonToBePic = axios.get(`http://loremflickr.com/640/480/house,garden?random=${i}`, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'image/jpeg',
    },
  })
    .then(result => fs.writeFileAsync(path.join(__dirname, `photos/room-${i}.jpg`), result.data))
    .catch(error => console.error('You done goofed!', error));
  allPics.push(soonToBePic);
}

Promise.all(allPics)
  .then(() => console.log('All done!'));
