const readfile = require('./readFile');
const writeFile = require('./writeFile');

function writeTalker(talker) {
  const newTalker = talker;

  const allTalkers = readfile('talker.json');

  newTalker.id = allTalkers.length + 1;

  allTalkers.push(newTalker);

  writeFile('talker.json', JSON.stringify(allTalkers));

  return talker;
}

module.exports = writeTalker;