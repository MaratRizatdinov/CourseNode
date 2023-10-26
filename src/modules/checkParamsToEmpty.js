function checkParamsToEmpty(params) {
  for (let key of params) {
    return true;
  }
  return false;
}

module.exports = checkParamsToEmpty;
