function validateTalkExists(talk) {
  if (!talk || !talk.watchedAt || (talk.rate !== 0 && !talk.rate)) {
    return false;
  }

  return true;
}

module.exports = validateTalkExists;