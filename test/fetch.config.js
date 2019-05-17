global.fetch = require('jest-fetch-mock');

global.fetch.mockResponse(JSON.stringify({
  photos: [],
}));