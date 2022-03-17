const ValidationError = require('../helpers/validation-error');

class Validator {
  validateRange(rate, min, max, field) {
    if (Number(rate) >= min && Number(rate) <= max) {
      throw new ValidationError(`O campo "${field}" deve ser um inteiro de ${min} à ${max}`);
    }
  }

  validateField(field) {
    if (!field || field.length <= 0) {
      throw new ValidationError(`O campo "${field}" é obrigatório`);
    }
  }

  validateFieldMinLength(field, minLength) {
    if (field.length <= minLength) {
      throw new ValidationError(`O "${field}name" deve ter pelo menos ${minLength} caracteres`);
    }
  }

  validateMinAge(age, minAge = 18) {
    if (!age || age.length <= 0) {
      throw new ValidationError('O campo "age" é obrigatório');
    }
  
    if (age < minAge) {
      throw new ValidationError('A pessoa palestrante deve ser maior de idade');
    }
  }

  validateEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+.([a-z]+)?$/i;

    if (!regex.test(email)) {
      throw new ValidationError('O "email" deve ter o formato "email@email.com"');
    }
  }

  validateToken(token) {
    if (!token) {
      throw new ValidationError('Token não encontrado');
    }
  
    if (token.length < 16) {
      throw new ValidationError('Token inválido');
    }
  }

  validateWatchedAt(watchedAt) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  
    if (!regex.test(watchedAt)) {
      throw new ValidationError('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
    }
  }

  validateTalk(talk) {
    if (!talk || !talk.watchedAt || (talk.rate !== 0 && !talk.rate)) {
      const message = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';

      throw new ValidationError(message);
    }
  }
}

module.exports = new Validator();