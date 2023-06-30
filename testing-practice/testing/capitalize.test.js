const capitalize = require("../src/capitalize.js");

test("capitalizing first letter of string", () => {
  expect(capitalize("spencer")).toBe("Spencer");
});

test("should return falsy when empty no argument passed", () => {
  expect(capitalize("")).toBeFalsy();
});

test("should return falsy when a string isn't passed", () => {
  expect(capitalize(2)).toBeFalsy();
});
