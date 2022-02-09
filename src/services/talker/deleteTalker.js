const validateToken = require('../../utils/validations/validateToken');
const writeDeletedTalker = require('../../utils/writeDeletedTalker');

function deleteTalker(token, id) {
  const validationMessage = validateToken(token);

  if (validationMessage) {
    return {
      status: 401,
      message: validationMessage,
    }; 
}

  writeDeletedTalker(id);

  return {
    status: 200,
    message: 'Pessoa palestrante deletada com sucesso',
  };
}

module.exports = deleteTalker;
