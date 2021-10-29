function validateRate(rate) {
  if (Number(rate) >= 1 && Number(rate) <= 5) {
    return true;
  }

  return false;
}

module.exports = validateRate;