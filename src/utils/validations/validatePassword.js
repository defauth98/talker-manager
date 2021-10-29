function checkPassword(password) {
  if (!password || password.length <= 0) {
    return 'O campo "password" é obrigatório';
  }

  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
}

module.exports = checkPassword;