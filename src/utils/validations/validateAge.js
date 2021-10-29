function validateAge(age) {
  if (!age || age.length <= 0) {
    return 'O campo "age" é obrigatório';
  }

  if (age < 18) {
    return 'A pessoa palestrante deve ser maior de idade';
  }
}

module.exports = validateAge;