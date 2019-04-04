module.exports = {

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/client/src/**/*.{js,jsx,mjs}'],

  coverageDirectory: '<rootDir>/coverage',

  moduleFileExtensions: ['js', 'json', 'jsx'],

  setupFiles: ['<rootDir>/test/enzyme.config.js'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  
  verbose: true,

};
