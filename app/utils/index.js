'use strict';
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
let fullUtils = {}

fs.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
  let objUtils = require(`./${file}`)
  fullUtils = Object.assign(fullUtils, { ...objUtils });
});


module.exports = fullUtils