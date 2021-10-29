const { validate } = require('../../utils/validations/validate');
const writeUpdatedTalker = require('../../utils/writeUpdatedTalker');

function updateTalker(req, res) {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const token = req.headers.authorization;

  const validationMessage = validate(token, name, age, talk);

  if (validationMessage) {
    return res
      .status(validationMessage.status)
      .json({ message: validationMessage.message });
  }

  const updatedTalker = writeUpdatedTalker({ name, age, talk }, id);

  return res.status(200).json(updatedTalker);
}

module.exports = updateTalker;