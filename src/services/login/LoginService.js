const { createHmac } = require('crypto');
const checkEmail = require('../../utils/validations/validateEmail');
const checkPassword = require('../../utils/validations/validatePassword');

function login(email, password) {
  const validateMessage = checkEmail(email)
  || checkPassword(password);

  if (validateMessage && validateMessage.length) {
    return {
      error: validateMessage,
    };
  }

  const secret = 'abcdefg';
  const token = createHmac('sha256', secret).digest('hex');

  return { token };
}

module.exports = { login };