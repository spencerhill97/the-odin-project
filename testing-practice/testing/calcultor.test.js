const calculator = require("../src/calculator.js");

test("adding two numbers", () => {
  expect(calculator.add(2, 2)).toBeCloseTo(4);
});

test("checking with decimals", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("invoking add with missing numbers", () => {
  expect(calculator.add()).toBeFalsy();
});

test("invoking add with one missing number", () => {
  expect(calculator.add(1)).toBeFalsy();
});

test("subtracting two numbers", () => {
  expect(calculator.subtract(2, 4)).toBeCloseTo(-2);
});

test("dividing two numbers", () => {
  expect(calculator.divide(14, 7)).toBeCloseTo(2);
});

test("multiplying two numbers", () => {
  expect(calculator.multiply(2, 7)).toBeCloseTo(14);
});
