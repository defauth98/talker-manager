const readFile = require('./utils/readFile');
const { validateToken } = require('./utils/validate');

function searchTalker(req, res) {
  const { q } = req.query;

  const token = req.headers.authorization;

  const tokenValidationMessage = validateToken(token);

  if (tokenValidationMessage) {
    return res.status(401).json({ message: tokenValidationMessage });
  }
  const talkers = readFile('talker.json');
  const result = talkers.filter((talker) => talker.name.includes(q));
  res.status(200).json(result);
}

module.exports = searchTalker;
