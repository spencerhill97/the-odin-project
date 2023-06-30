const reverseString = require("../src/reverse-string.js");

test("should reverse argument", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("should return falsy with empty argument", () => {
  expect(reverseString("")).toBeFalsy();
});
