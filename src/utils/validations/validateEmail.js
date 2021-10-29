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

module.exports = checkEmail;