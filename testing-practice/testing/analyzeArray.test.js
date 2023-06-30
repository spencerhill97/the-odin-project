const analyzeArray = require("../src/analyzeArray");

test("testing for min prop", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    min: 1,
    max: 5,
    average: 3,
    length: 5,
  });
});

test("testing for empty array", () => {
  expect(analyzeArray([])).toBeFalsy();
});

test("testing for empty array", () => {
  expect(analyzeArray()).toBeFalsy();
});
