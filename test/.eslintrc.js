module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": "airbnb-base",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "no-undef": "off",
    "no-unused-vars": "off",
    "import/no-unresolved": "off"
  }
};
