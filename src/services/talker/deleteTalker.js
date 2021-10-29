const validateToken = require('../../utils/validations/validateToken');
const writeDeletedTalker = require('../../utils/writeDeletedTalker');

function deleteTalker(req, res) {
  const { id } = req.params;
  const token = req.headers.authorization;

  const validationMessage = validateToken(token);

  if (validationMessage) return res.status(401).json({ message: validationMessage });

  writeDeletedTalker(id);

  return res
    .status(200)
    .json({ message: 'Pessoa palestrante deletada com sucesso' });
}

module.exports = deleteTalker;
