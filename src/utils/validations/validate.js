const validateBody = require('./validateBody');
const validateToken = require('./validateToken');

function validate(token, name, age, talk) {
  const tokenValidationMessage = validateToken(token);

  if (tokenValidationMessage) {
    return { status: 401, message: tokenValidationMessage };
  }

  const validateBodyMessage = validateBody(name, age, talk);

  if (validateBodyMessage) {
    return { status: 400, message: validateBodyMessage };
  }
}

module.exports = { validate, validateToken };
