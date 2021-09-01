const fs = require('fs');

function readFile(filename) {
  const fileContent = fs.readFileSync(filename, 'utf-8');

  return JSON.parse(fileContent);
}

function getAllTalkers(req, res) {
  const allTalkers = readFile('talker.json');

  return res.status(200).json(allTalkers);
}

module.exports = getAllTalkers;