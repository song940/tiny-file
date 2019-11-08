const rmdir = require('./rmdir');
const mkdir = require('./mkdir');
const { readJSONFile, writeJSONFile } = require('./json');

module.exports = {
  rmdir,
  mkdir,
  readJSONFile,
  writeJSONFile,
};