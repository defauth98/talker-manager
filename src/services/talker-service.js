const writeTalker = require('../utils/writeTalker');

const Validator = require('../validations/validator');

class TalkerService {
  create(token, name, age, talk) {
    try {
      Validator.validateTalker(token, name, age, talk);

      const newTalker = writeTalker({ name, age, talk });
  
      return newTalker;
    } catch (error) {
      return { status: 401, errorMessage: error.message };
    }
  }
}

module.exports = new TalkerService();