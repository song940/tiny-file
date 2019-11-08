const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const readJSONFile = (filename, encoding = 'utf8', options) =>
  readFile(filename, Object.assign({
    encoding
  }, options)).then(JSON.parse);

const writeJSONFile = (filename, data, options) =>
  writeFile(filename, JSON.stringify(data), options);


module.exports = {
  readJSONFile,
  writeJSONFile,
};