function validateToken(token) {
  if (!token) {
    return 'Token não encontrado';
  }

  if (token.length < 16) {
    return 'Token inválido';
  }
}

module.exports = validateToken;