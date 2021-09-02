function validateToken(token) {
  if (!token) {
    return 'Token não encontrado';
  }

  if (token.length < 16) {
    return 'Token inválido'; 
  }
}

function validateName(name) {
  if (!name || name.length <= 0) {
    return 'O campo "name" é obrigatório';
  }

  if (name.length <= 3) {
    return 'O "name" deve ter pelo menos 3 caracteres';
  }
}

function validateAge(age) {
  if (!age || age.length <= 0) {
    return 'O campo "age" é obrigatório';
  }

  if (age < 18) {
    return 'A pessoa palestrante deve ser maior de idade';
  }
}

function validateWatchedAt(watchedAt) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  return regex.test(watchedAt);
}

function validateRate(rate) {
  if (Number(rate) >= 1 && Number(rate) <= 5) {
    return true;
  }

  return false;
}

function validateTalkExists(talk) {
  if (!talk || !talk.watchedAt || !talk.rate) {
    return false;
  }

  return true;
}

function validateTalk(talk) {
  if (!validateTalkExists(talk)) {
    return 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
  }

  if (!validateWatchedAt(talk.watchedAt)) {
    return 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
  }

  if (!validateRate(talk.rate)) {
    return 'O campo "rate" deve ser um inteiro de 1 à 5';
  }
}

function validateBody(name, age, talk) {
  const validateNameMessage = validateName(name);
  const validateAgeMessage = validateAge(age);
  const validateTalkMessage = validateTalk(talk);

  if (validateNameMessage) {
    return validateNameMessage;
  }

  if (validateAgeMessage) {
    return validateAgeMessage;
  }

  if (validateTalkMessage) {
    return validateTalkMessage;
  }
}

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

module.exports = validate;