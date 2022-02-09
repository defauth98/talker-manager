const readFile = require('../../utils/readFile');
const validateToken = require('../../utils/validations/validateToken');

function searchTalker(token, q) {
  const tokenValidationMessage = validateToken(token);

  if (tokenValidationMessage) {
    return {
      status: 401,
      message: tokenValidationMessage,
    };
  }
  const talkers = readFile('talker.json');
  const result = talkers.filter((talker) => String(talker.name).includes(q));

  return {
    status: 200,
    result,
  };
}

module.exports = searchTalker;
