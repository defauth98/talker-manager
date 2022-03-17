const { validate } = require('../../utils/validations/validate');
const writeUpdatedTalker = require('../../utils/writeUpdatedTalker');

function updateTalker(token, talker, id) {
  const { name, age, talk } = talker;

  const validationMessage = validate(token, name, age, talk);

  if (validationMessage) {
    return validationMessage;
  }

  const updatedTalker = writeUpdatedTalker(talker, id);

  return {
    status: 200,
    updatedTalker,
  };
}

module.exports = updateTalker; 