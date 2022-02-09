const readFile = require('../../utils/readFile');

function getTalkerById(id) {
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

module.exports = getTalkerById;