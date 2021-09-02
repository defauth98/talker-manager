const validate = require('./utils/validate');
const writeTalker = require('./utils/writeTalker');

function createTalker(req, res) {
  const { name, age, talk } = req.body;

  const token = req.headers.authorization;

  const validationMessage = validate(token, name, age, talk);

  if (validationMessage) {
    return res
      .status(validationMessage.status)
      .json({ message: validationMessage.message });
  }

  const newTalker = writeTalker({ name, age, talk });

  return res.status(201).json(newTalker);
}

module.exports = createTalker;