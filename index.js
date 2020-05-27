const move = require('./move');
const rmdir = require('./rmdir');
const mkdir = require('./mkdir');
const { readJSONFile, writeJSONFile } = require('./json');

module.exports = {
  move,
  rmdir,
  mkdir,
  readJSONFile,
  writeJSONFile,
};