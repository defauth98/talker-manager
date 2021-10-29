const validateRate = require('./validateRate');
const validateTalkExists = require('./validateTalkExists');
const validateWatchedAt = require('./validateWatchedAt');

function validateTalk(talk) {
  if (!validateTalkExists(talk)) {
    return 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
  }

  if (!validateWatchedAt(talk.watchedAt)) {
    return 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
  }

  if (!validateRate(talk.rate)) {
    return 'O campo "rate" deve ser um inteiro de 1 à 5';
  }
}

module.exports = validateTalk;