const ErrorHandler = require('../helpers/error-handler');
const writeDeletedTalker = require('../utils/writeDeletedTalker');
const writeTalker = require('../utils/writeTalker');
const readFile = require('../utils/readFile');
const Validator = require('../validations/validator');
const writeUpdatedTalker = require('../utils/writeUpdatedTalker');

class TalkerService {
  create(token, name, age, talk) {
    try {
      Validator.validateToken(token);
      Validator.validateTalker(name, age, talk);

      const newTalker = writeTalker({ name, age, talk });
  
      return newTalker;
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  delete(token, id) {
    try {
      Validator.validateToken(token);

      writeDeletedTalker(id);

      return {
        status: 200,
        message: 'Pessoa palestrante excluída com sucesso',
      };
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  index() {
    const allTalkers = readFile('talker.json');

    return allTalkers;
  }

  show(id) {
    try {
      const allTalkers = readFile('talker.json');
      const talker = allTalkers.find((item) => String(item.id) === String(id));
  
      if (!talker) {
        throw new Error('not found');
      }
  
      return {
        status: 200,
        talker,
      };
    } catch (error) {
      return {
        status: 404,
        message: 'Pessoa palestrante não encontrada',
      };
    }
  }

  search(token, query) {
    try {
      Validator.validateToken(token);

      const talkers = readFile('talker.json');
      const result = talkers.filter((talker) => String(talker.name).includes(query));
  
      return {
        status: 200,
        result,
      };
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  update(token, talker, id) {
    try {
    const { name, age, talk } = talker;

      Validator.validateToken(token);
      Validator.validateTalker(name, age, talk);

      const updatedTalker = writeUpdatedTalker(talker, id);
  
      return {
        status: 200,
        updatedTalker,
     };
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }
}

module.exports = new TalkerService();