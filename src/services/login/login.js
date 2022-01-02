const crypto = require('crypto');
const checkEmail = require('../../utils/validations/validateEmail');
const checkPassword = require('../../utils/validations/validatePassword');

function login(email, password) {
 

  const validateMessage = checkEmail(email)
  || checkPassword(password);

  if (validateMessage) {
    return {
      error: validateMessage
    }
  }

  crypto.randomBytes(8, (err, buf) => {
    if (err) throw err;

    return {
      token: buf.toString('hex')
    }
  });
}

module.exports = login;