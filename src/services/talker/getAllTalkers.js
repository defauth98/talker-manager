const readFile = require('../../utils/readFile');

function getAllTalkers() {
  const allTalkers = readFile('talker.json');

  return allTalkers;
}

module.exports = getAllTalkers;