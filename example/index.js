const { join } = require('path');
const { mkdir, rmdir, writeJSONFile, readJSONFile, move } = require('..');

(async function () {
  const dir = 'A/B/C/D';
  await mkdir(dir);
  const filename = join(dir, 'a.json');
  await writeJSONFile(filename, { name: 'tony' });
  const to = 'E/F';
  await mkdir(to);
  await move(dir, to);
  const data = await readJSONFile(filename);
  console.log(data.name);

  await rmdir(to);
  console.log('Done!');

})();