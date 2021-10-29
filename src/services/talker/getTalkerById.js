const readFile = require('../../utils/readFile');

function getTalkerById(req, res) {
  const { id } = req.params;

  try {
    const allTalkers = readFile('talker.json');

    const talker = allTalkers.find((item) => String(item.id) === String(id));

    if (!talker) {
      throw new Error('not found');
    }

    return res.status(200).json(talker);
  } catch (error) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
}

module.exports = getTalkerById;