const { resolve } = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

const run = promisify(exec);

const move = (from, to) => {
  from = resolve(from);
  to = resolve(to);
  return run(`/bin/mv "${from}"  "${to}"`)
};

module.exports = move;