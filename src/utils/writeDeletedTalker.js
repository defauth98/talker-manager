const readFile = require('./readFile');
const writeFile = require('./writeFile');

function writeDeletedTalker(id) {
  const allTalkers = readFile('talker.json');
  const updatedTalkers = [];

  allTalkers.forEach((item) => {
    if (item.id !== Number(id)) {
      updatedTalkers.push(item);
    }
  });

  writeFile('talker.json', JSON.stringify(updatedTalkers));

  return allTalkers;
}

module.exports = writeDeletedTalker;