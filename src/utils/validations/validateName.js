function validateName(name) {
  if (!name || name.length <= 0) {
    return 'O campo "name" é obrigatório';
  }

  if (name.length <= 3) {
    return 'O "name" deve ter pelo menos 3 caracteres';
  }
}

module.exports = validateName;