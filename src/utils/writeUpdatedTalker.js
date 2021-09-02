const readFile = require('./readFile');
const writeFile = require('./writeFile');

function writeUpdatedTalker(talker, id) {
  const allTalkers = readFile('talker.json');
  const updatedTalker = {
     name: talker.name, age: talker.age, id: Number(id), talk: talker.talk,
  };
  const updatedTalkers = [];

  allTalkers.forEach((item) => {
    if (item.id === Number(id)) {
      updatedTalkers.push(updatedTalker);
    } else {
      updatedTalkers.push(item);
    }
  });

  writeFile('talker.json', JSON.stringify(updatedTalkers));

  return updatedTalker;
}

module.exports = writeUpdatedTalker;