const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');

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

module.exports = validateBody;