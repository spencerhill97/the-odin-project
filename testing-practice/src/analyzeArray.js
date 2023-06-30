function analyzeArray(array) {
  if (!array || !array.length) return;

  const min = array.sort((a, b) => a - b)[0];
  const length = array.length;
  const max = array.sort((a, b) => a - b)[length - 1];
  const average = array.reduce((a, b) => a + b, 0) / length;

  return { average, min, max, length };
}

module.exports = analyzeArray;
