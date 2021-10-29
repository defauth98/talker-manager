const crypto = require('crypto');
const checkEmail = require('../../utils/validations/validateEmail');
const checkPassword = require('../../utils/validations/validatePassword');

function login(req, res) {
  const { email, password } = req.body;

  const validateMessage = checkEmail(email)
  || checkPassword(password);

  if (validateMessage) {
    return res.status(400).json({ message: validateMessage });
  }

  crypto.randomBytes(8, (err, buf) => {
    if (err) throw err;

    return res.status(200).json({ token: buf.toString('hex') });
  });
}

module.exports = login;