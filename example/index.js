const { join } = require('path');
const { mkdir, rmdir, writeJSONFile, readJSONFile } = require('..');

(async function() {
  const dir = 'A/B/C/D';
  await mkdir(dir);
  const filename = join(dir, 'a.json');
  await writeJSONFile(filename, { name: 'tony' });
  const data = await readJSONFile(filename);
  console.log(data.name);
  await rmdir('A');
  console.log('Done!');

})();