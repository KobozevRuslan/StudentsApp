const path = require('path');

module.exports = {
  dist: path.resolve(__dirname, 'dist'),
  assets: path.resolve(__dirname, '../src/assets'),
  template: { template: './public/index.html' },
};
