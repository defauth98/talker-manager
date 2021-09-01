const crypto = require('crypto');

function validateEmail(email) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+.([a-z]+)?$/i;
  return regex.test(email);
}

function checkEmail(email) {
  if (!email || email.length <= 0) {
    return 'O campo "email" é obrigatório';
  }

  if (!validateEmail(email)) {
    return 'O "email" deve ter o formato "email@email.com"'; 
  }
}

function checkPassword(password) {
  if (!password || password.length <= 0) {
    return 'O campo "password" é obrigatório';
  }

  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
}

function login(req, res) {
  const { email, password } = req.body;

  const validateEmailMessage = checkEmail(email);
  const validatePasswordMessage = checkPassword(password);

  if (validateEmailMessage) {
    return res.status(400).json({ message: validateEmailMessage });
  }

  if (validatePasswordMessage) {
    return res.status(400).json({ message: validatePasswordMessage });
  }

  crypto.randomBytes(8, (err, buf) => {
    if (err) throw err;

    return res.status(200).json({ token: buf.toString('hex') });
  });
}

module.exports = login;