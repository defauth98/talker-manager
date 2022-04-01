const ValidationError = require('../helpers/validation-error');
const AuthorizationError = require('../helpers/authorization-error');

class Validator {
  validateRange(rate, min, max, field) {
    if (rate > max || rate < min) {
      throw new ValidationError(`O campo "${field}" deve ser um inteiro de ${min} à ${max}`);
    } 
  }

  validateFieldExists(field, value) {
    if (!value || value.length <= 0) {
      throw new ValidationError(`O campo "${field}" é obrigatório`);
    }
  }

  validateFieldMinLength(field, value, minLength) {
    if (value.length <= minLength) {
      throw new ValidationError(`O "${field}" deve ter pelo menos ${minLength} caracteres`);
    }
  }

  validateMinAge(age, minAge) {
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
      throw new AuthorizationError('Token não encontrado');
    }
  
    if (token.length < 16) {
      throw new AuthorizationError('Token inválido');
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

  validateLogin(email, password) {
    this.validateFieldExists('email', email);
    this.validateFieldExists('password', password);
    this.validateEmail(email);
    this.validateFieldMinLength('password', password, 7);
  }

  validateTalker(name, age, talk) {
    this.validateFieldExists('name', name);
    this.validateFieldExists('age', age);
    // this.validateWatchedAt(talk.watchedAt);
    this.validateTalk(talk);
    this.validateFieldMinLength('name', name, 3);
    this.validateMinAge(age, 18);
  }
}

module.exports = new Validator();