const writeDeletedTalker = require('./utils/writeDeletedTalker');

function validateToken(token) {
  if (!token) {
    return 'Token não encontrado';
  }

  if (token.length < 16) {
    return 'Token inválido';
  }
}

function deleteTalker(req, res) {
  const token = req.headers.authorization;
  const { id } = req.params;

  const validationMessage = validateToken(token);

  if (validationMessage) {
    return res
      .status(401)
      .json({ message: validationMessage });
  }

  writeDeletedTalker(id);

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
}

module.exports = deleteTalker;