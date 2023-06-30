const calculator = {
  add(num1, num2) {
    if (!num1 === undefined || !num2 === undefined) return;
    return num1 + num2;
  },

  subtract(num1, num2) {
    if (!num1 === undefined || !num2 === undefined) return;
    return num1 - num2;
  },

  divide(num1, num2) {
    if (!num1 === undefined || !num2 === undefined) return;
    return num1 / num2;
  },

  multiply(num1, num2) {
    if (!num1 === undefined || !num2 === undefined) return;
    return num1 * num2;
  },
};

module.exports = calculator;
