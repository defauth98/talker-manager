const { validate } = require('../../utils/validations/validate');
const writeTalker = require('../../utils/writeTalker');

function createTalker(token, name, age, talk) {
  const validationMessage = validate(token, name, age, talk);

  if (validationMessage) {
    return validationMessage;
  }

  const newTalker = writeTalker({ name, age, talk });

  return newTalker;
}

module.exports = createTalker;
