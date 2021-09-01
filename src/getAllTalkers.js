const readFile = require('./utils/readFile');

function getAllTalkers(req, res) {
  const allTalkers = readFile('talker.json');

  return res.status(200).json(allTalkers);
}

module.exports = getAllTalkers;